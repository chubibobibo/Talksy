import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoggedUserContext } from "../context/LoggedUserContext";
import axios from "axios";
import { toast } from "react-toastify";

function NavbarComponent() {
  // const userData = useContext(LoggedUserContext);
  const navigate = useNavigate();

  const closeLink = () => {
    const closeDialog = document?.activeElement as HTMLElement; // casts active element as HTML element to prevent errors when using .blur()
    closeDialog?.blur();
  };

  const handleNavigateUserProfile = () => {
    closeLink();
    navigate("/dashboard/profile");
  };

  const handleUserLogout = async () => {
    try {
      await axios.post("/api/auth/logout");
      toast.success("User logged out");
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section>
      <div className='navbar bg-base-100 shadow-sm'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl font-start pl-0 text text-blue-400'>
            Talksy
          </a>
        </div>
        <div className='flex gap-2'>
          <input
            type='text'
            placeholder='Search for a user'
            className='input input-bordered w-32 md:w-auto text-sm'
          />
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full'>
                <img
                  alt='Tailwind CSS Navbar component'
                  src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                />
              </div>
            </div>
            <ul
              tabIndex={1}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
              <li>
                <a
                  className='justify-between'
                  onClick={handleNavigateUserProfile}
                >
                  Profile
                  {/* <span className='badge'>New</span> */}
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleUserLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NavbarComponent;
