import { FaRegUser } from "react-icons/fa";
import { MdAlternateEmail, MdKey } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Form } from "react-router-dom";
import FormToast from "../components/FormToast";

import { useState } from "react";

function LandingPage() {
  const [toggleVisibility1, setToggleVisibility1] = useState(false);
  const [toggleVisibility2, setToggleVisibility2] = useState(false);

  /** @toggleVisibility changes pwd field to text and changes icon */
  const handleToggleVisibility1 = () => {
    setToggleVisibility1(!toggleVisibility1);
  };

  const handleToggleVisibility2 = () => {
    setToggleVisibility2(!toggleVisibility2);
  };

  return (
    <>
      {/* Header logo */}
      <section className='bg-[url(../src/assets/card-logo-1.png)] bg-center bg-cover h-40 flex flex-col items-center'>
        {/* Header logo */}
        <h1 className='text-md font-start pb-2 translate-y-7 '>
          Welcome to Talksy
        </h1>
        <section className='w-screen h-screen flex flex-col justify-center items-center pt-[6rem]'>
          <div className='auth-card-mobile'>
            <div className='card-body'>
              <h2 className='card-title'>Create an account</h2>
              {/* inputs */}
              <Form method='POST'>
                <section>
                  <label className='input validator'>
                    <FaRegUser size={15} color='gray' />
                    <input
                      type='text'
                      required
                      placeholder='Username'
                      pattern='[A-Za-z][A-Za-z0-9\-]*'
                      minLength={4}
                      maxLength={30}
                      title='Only letters, numbers or dash'
                      name='username'
                    />
                  </label>
                  <FormToast
                    messages={"Username should be at least 4 characters"}
                  />
                </section>

                <section>
                  <label className='input validator'>
                    <FaRegUser size={15} color='gray' />
                    <input
                      type='text'
                      required
                      placeholder='First name'
                      pattern='[A-Za-z][A-Za-z0-9\-]*'
                      minLength={4}
                      maxLength={30}
                      title='Only letters, numbers or dash'
                      name='firstName'
                    />
                  </label>
                  <FormToast
                    messages={"First name should be at least 4 characters"}
                  />
                </section>

                <section>
                  <label className='input validator'>
                    <FaRegUser size={15} color='gray' />
                    <input
                      type='text'
                      required
                      placeholder='Last name'
                      pattern='[A-Za-z][A-Za-z0-9\-]*'
                      minLength={4}
                      maxLength={30}
                      title='Only letters, numbers or dash'
                      name='lastName'
                    />
                  </label>
                  <FormToast
                    messages={"Last name should be at least 4 characters"}
                  />
                </section>

                <section>
                  <label className='input validator'>
                    <MdAlternateEmail size={17} color='gray' />
                    <input
                      type='email'
                      required
                      placeholder='Email'
                      minLength={4}
                      maxLength={30}
                      title='Only letters, numbers or dash'
                      name='email'
                    />
                  </label>
                  <FormToast messages={"Email should be valid."} />
                </section>

                <section>
                  <label className='input validator'>
                    <MdKey size={17} color='gray' />
                    <input
                      type={toggleVisibility1 ? "text" : "password"}
                      required
                      placeholder='Password'
                      pattern='[A-Za-z][A-Za-z0-9\-]*'
                      minLength={8}
                      maxLength={30}
                      title='Only letters, numbers or dash'
                      name='password1'
                    />
                    {toggleVisibility1 ? (
                      <FaRegEyeSlash
                        size={17}
                        color='gray'
                        onClick={handleToggleVisibility1}
                      />
                    ) : (
                      <FaRegEye
                        size={17}
                        color='gray'
                        onClick={handleToggleVisibility1}
                      />
                    )}
                  </label>
                  <FormToast
                    messages={"Password should be at least 8 characters"}
                  />
                </section>

                <section>
                  <label className='input validator'>
                    <MdKey size={17} color='gray' />
                    <input
                      type={toggleVisibility2 ? "text" : "password"}
                      required
                      placeholder='Password'
                      pattern='[A-Za-z][A-Za-z0-9\-]*'
                      minLength={8}
                      maxLength={30}
                      title='Only letters, numbers or dash'
                      name='password2'
                    />
                    {toggleVisibility2 ? (
                      <FaRegEyeSlash
                        size={17}
                        color='gray'
                        onClick={handleToggleVisibility2}
                      />
                    ) : (
                      <FaRegEye
                        size={17}
                        color='gray'
                        onClick={handleToggleVisibility2}
                      />
                    )}
                  </label>
                  <FormToast
                    messages={"Password should be at least 8 characters"}
                  />
                </section>
                {/* inputs */}
                <div className='justify-end card-actions'>
                  <button className='btn btn-primary -mt-2' type='submit'>
                    Create Account
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
export default LandingPage;
