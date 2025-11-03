import { Outlet } from "react-router-dom";

function HomepageLayout() {
  return (
    <>
      <section className='h-screen flex flex-col justify-between'>
        <Outlet />
      </section>
      {/* <section>
        <footer className='footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-2 md:p-4'>
          <aside>
            <p>Copyright © {2025} - All right reserved by TALKSY</p>
          </aside>
        </footer>
      </section> */}
    </>
  );
}
export default HomepageLayout;
