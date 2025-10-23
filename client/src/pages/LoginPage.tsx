import { Form } from "react-router-dom";
import AuthInputComponent from "../components/AuthInputComponent";
import PwdInputComponent from "../components/PwdInputComponent";

function LoginPage() {
  return (
    <>
      <section className='bg-[url(../src/assets/card-logo-1.png)] bg-center bg-cover h-60 flex flex-col items-center md:h-70 md:bg-cover md:bg-center md:bg-[url(../src/assets/chat-bubble-banner.png)]'>
        {/* Header logo */}
        <h1 className='text-md font-start pb-2 text-gray-800 translate-y-10 md:pt-50 md:-translate-y-20 md:text-3xl'>
          Welcome to Talksy
        </h1>
        <section className='w-screen h-screen flex flex-col justify-center items-center pt-[11rem]'>
          <div className='auth-card-mobile auth-card-desktop'>
            <div className='card-body md:flex md:flex-col'>
              <h2 className='card-title'>Login to your account</h2>
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
                  <PwdInputComponent name='password' />
                </section>

                {/* inputs */}
                <div className='justify-end card-actions'>
                  <button className='btn btn-primary -mt-2' type='submit'>
                    Login account
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
export default LoginPage;
