import { useEffect, useState, type ReactNode } from "react";
import { LoggedUserContext } from "./LoggedUserContext";
import axios from "axios";
import { toast } from "react-toastify";

function LoggedUserContextProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const findLoggedUser = async () => {
      try {
        const foundLoggedUser = await axios.get("/api/auth/getLoggedUser");
        if (!foundLoggedUser) {
          toast.error("User is not logged in", {
            toastId: "foundLoggedUserError",
          });
        }
        // console.log(foundLoggedUser.data.loggedUser);
        setUserData(foundLoggedUser.data.loggedUser);
      } catch (err) {
        console.log(err);
      }
    };
    findLoggedUser();
  }, []);
  return <LoggedUserContext value={userData}>{children}</LoggedUserContext>;
}
export default LoggedUserContextProvider;
