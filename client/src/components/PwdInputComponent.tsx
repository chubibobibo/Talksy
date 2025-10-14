import { MdKey } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import FormToast from "../components/FormToast";

interface PwdInputType {
  name: string;
}

// @name props used to differentiate 2 different password fields (matching password field when registering)
function PwdInputComponent({ name }: PwdInputType) {
  /** @toggleVisibility changes pwd field to text and changes icon */
  const handleToggleVisibility = () => {
    setToggleVisibility(!toggleVisibility);
  };
  const [toggleVisibility, setToggleVisibility] = useState(false);

  return (
    <>
      <label className='input validator md:w-full'>
        <MdKey size={17} color='gray' />
        <input
          type={toggleVisibility ? "text" : "password"}
          required
          placeholder='Password'
          pattern='[A-Za-z][A-Za-z0-9\-]*'
          minLength={8}
          maxLength={30}
          title='Must be a valid email address'
          name={name}
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
