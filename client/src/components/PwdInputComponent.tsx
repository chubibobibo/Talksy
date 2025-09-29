import { MdKey } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import FormToast from "../components/FormToast";

function PwdInputComponent() {
  /** @toggleVisibility changes pwd field to text and changes icon */
  const handleToggleVisibility = () => {
    setToggleVisibility(!toggleVisibility);
  };
  const [toggleVisibility, setToggleVisibility] = useState(false);

  return (
    <>
      <label className='input validator  md:w-105'>
        <MdKey size={17} color='gray' />
        <input
          type={toggleVisibility ? "text" : "password"}
          required
          placeholder='Password'
          pattern='[A-Za-z][A-Za-z0-9\-]*'
          minLength={8}
          maxLength={30}
          title='Must be a valid email address'
          name='password2'
        />
        {toggleVisibility ? (
          <FaRegEyeSlash
            size={17}
            color='gray'
            onClick={handleToggleVisibility}
            cursor={"pointer"}
          />
        ) : (
          <FaRegEye
            size={17}
            color='gray'
            onClick={handleToggleVisibility}
            cursor={"pointer"}
          />
        )}
      </label>
      <FormToast messages={"Password should be at least 8 characters"} />
    </>
  );
}
export default PwdInputComponent;
