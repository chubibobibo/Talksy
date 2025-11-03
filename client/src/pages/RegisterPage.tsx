import { Form, useNavigate } from "react-router-dom";
import AuthInputComponent from "../components/AuthInputComponent";
import PwdInputComponent from "../components/PwdInputComponent";

function RegisterPage() {
  const navigate = useNavigate();
  const navOnClick = () => {
    navigate("/login");
  };
  return (
    <>
      {/* Header logo */}
      <section className='bg-[url(../src/assets/card-logo-1.png)] bg-center bg-cover h-60 flex flex-col items-center md:h-70 md:bg-cover md:bg-center md:bg-[url(../src/assets/chat-bubble-banner.png)]'>
        {/* Header logo */}
        <h1 className='text-md font-start pb-2 text-gray-800 translate-y-10 md:pt-50 md:-translate-y-20 md:text-3xl'>
          Welcome to Talksy
        </h1>
        <section className='w-screen h-screen flex flex-col justify-center items-center pt-[10rem] md:pt-[6rem]'>
          <div className='auth-card-mobile auth-card-desktop mb-3'>
            <div className='card-body md:flex md:flex-col items-center'>
              <h2 className='card-title'>Create an account</h2>
              {/* inputs */}
              <Form method='POST' className='md:flex md:flex-col'>
                <section>
                  <AuthInputComponent
                    type={"text"}
                    placeholder={"Username"}
                    minLength={4}
                    maxLength={30}
                    name={"username"}
                    iconString='user'
                    defaultText=''
                  />
                </section>

                <section>
                  <AuthInputComponent
                    type={"text"}
                    placeholder={"First name"}
                    minLength={4}
                    maxLength={30}
                    name={"firstName"}
                    iconString='user'
                    defaultText=''
                  />
                </section>

                <section>
                  <AuthInputComponent
                    type={"text"}
                    placeholder={"Last name"}
                    minLength={4}
                    maxLength={30}
                    name={"lastName"}
                    iconString='user'
                    defaultText=''
                  />
                </section>

                <section>
                  <AuthInputComponent
                    type={"email"}
                    placeholder={"email"}
                    minLength={4}
                    maxLength={30}
                    name={"email"}
                    iconString='email'
                    defaultText=''
                  />
                </section>

                <section>
                  <label>
                    <textarea
                      className='textarea mb-6 resize-none'
                      placeholder='About Me'
                    ></textarea>
                  </label>
                </section>

                <section>
                  <PwdInputComponent
                    name='password1'
                    placeholderText='Password'
                  />
                </section>

                <section>
                  <PwdInputComponent
                    name='password2'
                    placeholderText='Re-enter your password'
                  />
                </section>
                {/* inputs */}
                <div className='justify-end card-actions'>
                  <button className='btn btn-primary -mt-2' type='submit'>
                    Create Account
                  </button>
                </div>
              </Form>
              <section className='flex flex-col justify-center items-center'>
                <p>Do you have an account already?</p>
                <p onClick={navOnClick} className='cursor-pointer'>
                  Sign In
                </p>
              </section>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
export default RegisterPage;
