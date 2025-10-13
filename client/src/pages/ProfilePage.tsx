import { useContext } from "react";
import { LoggedUserContext } from "../context/LoggedUserContext";
import SmallCard from "../components/SmallCard";
import HorizontalSpanCard from "../components/HorizontalSpanCard";

function ProfilePage() {
  const userData = useContext(LoggedUserContext);

  return (
    <>
      <div className='card bg-base-100 w-auto shadow-sm mt-2'>
        <figure>
          <img
            src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
            alt='Shoes'
          />
        </figure>
        {/* card-body */}
        <div className='card-body grid grid-cols-2 p-1'>
          {/* Interest-card */}
          <SmallCard
            cardTitle={"Interests"}
            cardBody={
              "My interests include hiking, basketball, swimming, and photography"
            }
          />
          {/* Private-message card */}
          <SmallCard
            cardTitle={"Private Message"}
            cardBody={"Hello there, send me a private message and let's chat"}
          />
        </div>
        {/* card-body */}
        <section className='card-body p-1 py-2'>
          {/* about me card */}
          {userData && <HorizontalSpanCard username={userData} />}
        </section>
      </div>
    </>
  );
}
export default ProfilePage;
