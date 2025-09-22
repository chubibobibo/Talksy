import axios from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData(); //obtains data from forms
  const data = Object.fromEntries(formData); //converts data into objects
  try {
    await axios.post("/api/auth/register/", data);
    toast.success("registered");
    return redirect("/");
  } catch (err) {
    console.log(err);
  }
};
