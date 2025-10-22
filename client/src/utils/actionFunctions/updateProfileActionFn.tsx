import axios, { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { redirect } from "react-router-dom";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData(); // obtains form data
  const profileId = formData.get("profileId");
  console.log(profileId);
  const data = Object.fromEntries(formData); // converts form data to objects
  try {
    await axios.patch(`/api/auth/update/${profileId}`, data);
    console.log("check");
    toast.success("successfully updated user profile");
    return redirect("/dashboard/home");
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
};
