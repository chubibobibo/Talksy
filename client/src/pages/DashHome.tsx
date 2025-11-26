import ProfileModal from "../components/ProfileModal";
import { LoggedUserContext } from "../context/LoggedUserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function DashHome() {
  const userData = useContext(LoggedUserContext);
  console.log(userData);
  return (
    <>
      <ProfileModal />
      DashHome
      <Link to={`/dashboard/profile/${userData?._id}`}>User</Link>
    </>
  );
}
export default DashHome;
