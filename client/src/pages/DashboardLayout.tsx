import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";

function DashboardLayout() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
    </>
  );
}
export default DashboardLayout;
