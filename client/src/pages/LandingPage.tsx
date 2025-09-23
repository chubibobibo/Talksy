import { FaRegUser } from "react-icons/fa";
import { Form } from "react-router-dom";
import FormToast from "../components/FormToast";

function LandingPage() {
  return (
    <>
      <section className='bg-[url(../src/assets/card-logo-1.png)] bg-center bg-cover h-40'></section>
      <section className='w-screen h-screen flex flex-col justify-center items-center pb-[15rem]'>
        <h1 className='text-md font-start pb-5'>Welcome to Talksy</h1>
        <div className='auth-card-mobile'>
          <div className='card-body'>
            <h2 className='card-title'>Create an account</h2>
            {/* inputs */}
            <Form method='POST' className='flex flex-col gap-2'>
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
                  <FaRegUser size={15} color='gray' />
                  <input
                    type='email'
                    required
                    placeholder='email'
                    //   pattern='[A-Za-z][A-Za-z0-9\-]*'
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
                  <FaRegUser size={15} color='gray' />
                  <input
                    type='password'
                    required
                    placeholder='password'
                    pattern='[A-Za-z][A-Za-z0-9\-]*'
                    minLength={4}
                    maxLength={30}
                    title='Only letters, numbers or dash'
                    name='password'
                  />
                </label>
                <FormToast
                  messages={"Password should be at least 8 characters"}
                />
              </section>
              {/* inputs */}
              <div className='justify-end card-actions'>
                <button className='btn btn-primary' type='submit'>
                  Buy Now
                </button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
export default LandingPage;
