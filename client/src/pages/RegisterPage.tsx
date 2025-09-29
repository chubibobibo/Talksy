import { Form } from "react-router-dom";
import AuthInputComponent from "../components/AuthInputComponent";
import PwdInputComponent from "../components/PwdInputComponent";

function RegisterPage() {
  return (
    <>
      {/* Header logo */}
      <section className='bg-[url(../src/assets/card-logo-1.png)] bg-center bg-cover h-26 flex flex-col items-center md:h-90 md:bg-contain'>
        {/* Header logo */}
        <h1 className='text-md font-start pb-2 translate-y-4 md:pt-50'>
          Welcome to Talksy
        </h1>
        <section className='w-screen h-screen flex flex-col justify-center items-center pt-[4rem]'>
          <div className='auth-card-mobile auth-card-desktop'>
            <div className='card-body md:w-fit md:flex md:flex-col'>
              <h2 className='card-title'>Create an account</h2>
              {/* inputs */}
              <Form method='POST' className='md:flex md:flex-col items-center'>
                <section>
                  <AuthInputComponent
                    type={"text"}
                    placeholder={"Username"}
                    minLength={4}
                    maxLength={30}
                    name={"username"}
                    iconString='user'
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
                  />
                </section>

                <section>
                  <PwdInputComponent />
                </section>

                <section>
                  <PwdInputComponent />
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
export default RegisterPage;
