import axios, { isAxiosError } from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData(); //obtains data from forms
  const pwd1 = formData.get("password1");
  const pwd2 = formData.get("password2");

  try {
    // Avoid overload matches by type checking pwd1
    if (pwd1 !== pwd2) {
      toast.error("Passwords do not match");
    } else {
      if (typeof pwd1 === "string") {
        formData.append("password", pwd1);
        const data = Object.fromEntries(formData); //converts data into objects
        await axios.post("/api/auth/register/", data);
        toast.success("registered");
        return redirect("/");
      }
    }
  } catch (err) {
    if (isAxiosError(err)) {
      toast.error(
        Array.isArray(err?.response?.data?.message)
          ? err?.response?.data?.message[0]
          : err?.response?.data?.message
      );
    }
  }
};
