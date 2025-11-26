import { useContext } from "react";
import { LoggedUserContext } from "../context/LoggedUserContext";
import SmallCard from "../components/SmallCard";
import HorizontalSpanCard from "../components/HorizontalSpanCard";
import ProfileModal from "../components/ProfileModal";
import { ToastContainer, Zoom } from "react-toastify";
import { useLoaderData } from "react-router-dom";

function ProfilePage() {
  // const userData = useContext(LoggedUserContext);
  // const handleOpenModal = () => {
  //   document.getElementById("my_modal_1").showModal();
  // };

  const data = useLoaderData();
  const userData = data.data.foundUserProfile;
  console.log(userData);

  return (
    <section className='mb-4 md:flex md:justify-center md:pt-10 md:w-screen mb-6'>
      <aside className=''>
        <ProfileModal />
      </aside>
      <div className='card bg-base-100 w-auto shadow-xl mt-2 md:place-items-center md:gap-4 md:w-5/12 md:p-5'>
        <figure className='md:w-90 md:pt-4 px-1'>
          <img src={userData?.photoUrl} alt='user-avatar' />
        </figure>
        {/* card-body */}
        <div className='card-body grid grid-cols-2 p-1 md:w-auto md:flex-row md:flex md:justify-center'>
          {/* Interest-card */}
          <SmallCard
            cardTitle={"Interests"}
            cardBody={
              "My interests includes biking, hiking, basketball and photography and many more lioke scuba diving"
            }
          />
          {/* Private-message card */}
          <SmallCard
            cardTitle={"Private Message"}
            cardBody={"Hello there, send me a private message and let's chat"}
          />
        </div>
        {/* card-body */}
        <section className='card-body p-1 py-2 md:w-6/9 mb-2'>
          {/* about me card */}
          {userData && <HorizontalSpanCard username={userData} />}
        </section>
        {/* <button className='btn btn-soft btn-info md:w-7/11'>
          Edit Profile
        </button> */}
        <button
          className='btn btn-soft btn-info md:w-7/11 mb-2'
          onClick={() =>
            (
              document?.getElementById("my_modal_1") as HTMLDialogElement | null
            )?.showModal()
          }
        >
          Edit Profile
        </button>
      </div>
      <ToastContainer position='top-center' transition={Zoom} />
    </section>
  );
}
export default ProfilePage;
