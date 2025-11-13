import axios, { isAxiosError } from "axios";
import { toast } from "react-toastify";

// import { redirect } from "react-router-dom";

export const action = async ({ request }: { request: Request }) => {
  /** @profileId name given to the submit button that allows to send profileId as payload*/
  /** @refreshPage function to refresh current page after profile update is successful*/

  const formData = await request.formData(); // obtains form data
  const profileId = formData.get("profileId");
  const pwd1 = formData.get("password1");
  const pwd2 = formData.get("password2");

  const refreshPage = () => {
    window.location.reload();
  };
  if (pwd1 !== pwd2) {
    toast.error("passwords do not match");
  } else {
    formData.append("password", pwd1 ? pwd1 : "");
    // const data = Object.fromEntries(formData); // converts form data to objects
    try {
      await axios.patch(`/api/auth/update/${profileId}`, formData);
      toast.success("successfully updated user profile");
      refreshPage();
      // return redirect("/dashboard/home");
    } catch (err) {
      console.log(err);
      if (isAxiosError(err)) {
        toast.error(
          Array.isArray(err?.response?.data?.message)
            ? err?.response?.data?.message[0]
            : err?.response?.data?.message
        );
      }
    }
    return null;
  }
};
