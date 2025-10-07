function NavbarComponent() {
  return (
    <section className=''>
      <div className='navbar bg-base-100 shadow-sm'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl'>Talksy</a>
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
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
            >
              <li>
                <a
                  //   className='justify-between'
                  onClick={() =>
                    (
                      document.getElementById("my_modal_5") as HTMLDialogElement
                    ).showModal()
                  }
                >
                  Profile
                  {/* <span className='badge'>New</span> */}
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default NavbarComponent;
