import axios, { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const action = async ({ request }: { request: Request }) => {
  try {
    const formData = await request.formData(); // obtain data from forms
    const data = Object.fromEntries(formData); //converts formData to usable objects
    await axios.post("/api/auth/login", data);
    toast.success("User successfully logged in");
    return redirect("/");
  } catch (err) {
    console.log(err);
    if (isAxiosError(err)) {
      toast.error(
        Array.isArray(err?.response?.data?.message)
          ? err?.response?.data?.message[0]
          : err?.response?.data?.message
      );
    }
    return null;
  }
};
