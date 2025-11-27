import ProfileModal from "../components/ProfileModal";
import { LoggedUserContext } from "../context/LoggedUserContext";
import { useContext } from "react";
import { FiMenu } from "react-icons/fi";
import "../App.css";
// import { Link } from "react-router-dom";
function DashHome() {
  const userData = useContext(LoggedUserContext);
  console.log(userData);
  return (
    <section className='flex h-screen bg-[#171c31]'>
      <ProfileModal />
      {/* DashHome
      <Link to={`/dashboard/profile/${userData?._id}`}>User</Link> */}
      <div className='drawer'>
        <input id='my-drawer-1' type='checkbox' className='drawer-toggle' />
        <label
          htmlFor='my-drawer-1'
          className='btn drawer-button btn-info rounded-none'
        >
          <FiMenu size={20} />
        </label>
        <div className='drawer-content'>
          {/* Page content here */}
          {/* <p>HELLO</p> */}
        </div>
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer-1'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu min-h-full w-40 p-4 bg-[#1c2737]'>
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default DashHome;
