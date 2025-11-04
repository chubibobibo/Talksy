import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/NavbarComponent";
import LoggedUserContextProvider from "../context/LoggedUserContextProvider";
import ProtectRoutes from "../utils/ProtectRoutes";

function DashboardLayout() {
  return (
    <>
      <ProtectRoutes>
        <LoggedUserContextProvider>
          <NavbarComponent />
          <Outlet />
          <section className='mb-4'>
            <footer className='footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-2 md:p-4'>
              <aside>
                <p>Copyright © {2025} - All right reserved by TALKSY</p>
              </aside>
            </footer>
          </section>
        </LoggedUserContextProvider>
      </ProtectRoutes>
    </>
  );
}
export default DashboardLayout;
