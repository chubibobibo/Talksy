import { Outlet } from "react-router-dom";

function HomepageLayout() {
  return (
    <>
      <section className='h-screen flex flex-col justify-between'>
        <Outlet />
      </section>
    </>
  );
}
export default HomepageLayout;
