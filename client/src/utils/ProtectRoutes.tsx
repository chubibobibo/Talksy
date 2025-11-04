import { useEffect, useState, type ReactNode } from "react";
import axios, { isAxiosError } from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

function ProtectRoutes({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLoggedUserData = async () => {
      try {
        const loggedUserData = await axios.get("/api/auth/getLoggedUser");
        if (!loggedUserData) {
          // console.log("user not logged in");
          toast.error("User is not logged in", {
            toastId: "UnauthorizedError",
          });
        }
        setUserData(loggedUserData.data.loggedUser);
      } catch (err) {
        console.log(err);
        if (isAxiosError(err)) {
          toast.error(`Something went wrong: ${err?.response?.data?.message}`, {
            toastId: "axiosError",
          });
        }
      } finally {
        setIsLoading(false);
      }
    };
    getLoggedUserData();
    console.log(userData);
  }, []);

  if (isLoading) {
    return null; //prevents rendering of child components while userData state is not done setting.
  }
  return <>{userData ? children : <Navigate to='/login' />}</>;
}
export default ProtectRoutes;
