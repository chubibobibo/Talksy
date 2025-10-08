import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import LoggedUserContextProvider from "../context/loggedUserContextProvider";

function DashboardLayout() {
  return (
    <>
      <LoggedUserContextProvider>
        <NavbarComponent />
        <Outlet />
      </LoggedUserContextProvider>
    </>
  );
}
export default DashboardLayout;
