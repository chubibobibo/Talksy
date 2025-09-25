import { FaRegUser } from "react-icons/fa";
import FormToast from "./FormToast";
import { MdAlternateEmail, MdKey } from "react-icons/md";

interface AuthInputTypes {
  type: string;
  placeholder: string;
  minLength: number;
  maxLength: number;
  name: string;
  iconString: "user" | "email" | "password"; // type should be related to the object keys that it will be used into (inputIcons). react elements cannot be used as keys
}

function AuthInputComponent({
  type,
  placeholder,
  minLength,
  maxLength,
  name,
  iconString,
}: AuthInputTypes) {
  // Object used to select icons for each input
  const inputIcons = {
    user: <FaRegUser size={17} color='gray' />,
    email: <MdAlternateEmail size={17} color='gray' />,
    password: <MdKey size={17} color='gray' />,
  };
  return (
    <>
      <label className='input validator md:w-105'>
        {/* <FaRegUser size={15} color='gray' /> */}
        {inputIcons[iconString]}
        <input
          type={type}
          required
          placeholder={placeholder}
          pattern='[A-Za-z][A-Za-z0-9\-]*'
          minLength={minLength}
          maxLength={maxLength}
          title='Only letters, numbers or dash'
          name={name}
        />
      </label>
      <FormToast
        messages={`${placeholder} should have at least 4 characters`}
      />
    </>
  );
}
export default AuthInputComponent;
