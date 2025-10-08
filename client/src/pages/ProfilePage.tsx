import { useContext } from "react";
import { LoggedUserContext } from "../context/loggedUserContext";
function ProfilePage() {
  const userData = useContext(LoggedUserContext);
  return (
    <>
      {/* ProfilePage */}
      <p>{userData?.username}</p>
      {userData?.email}
    </>
  );
}
export default ProfilePage;
