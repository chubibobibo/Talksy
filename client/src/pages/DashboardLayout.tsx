import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import LoggedUserContextProvider from "../context/loggedUserContextProvider";
import ProtectRoutes from "../utils/ProtectRoutes";

function DashboardLayout() {
  return (
    <>
      <ProtectRoutes>
        <LoggedUserContextProvider>
          <NavbarComponent />
          <Outlet />
        </LoggedUserContextProvider>
      </ProtectRoutes>
    </>
  );
}
export default DashboardLayout;
