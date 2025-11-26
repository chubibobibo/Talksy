import axios from "axios";
import type { LoaderFunctionArgs } from "react-router-dom";
import { toast } from "react-toastify";

// interface ParamsType {
//   params: {
//     id: string;
//   };
// }

export const loader = async ({ params }: LoaderFunctionArgs) => {
  try {
    const foundUser = await axios.get(
      `/api/auth/getLoaderUserData/${params.id}`
    );
    return foundUser;
  } catch (err) {
    console.log(err);
    if (axios.isAxiosError(err)) {
      toast.error(err?.response?.data?.message);
    }
    return err;
  }
};
