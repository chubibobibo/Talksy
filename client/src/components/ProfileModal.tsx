/** @NOTE document.getElementById("my_modal_5") is typed as HTMLDialogElement to prevent type error in showModal() = Property 'showModal' does not exist on type 'HTMLElement'  since my_modal_5 is a dialog*/
import { Form } from "react-router-dom";
import { useContext } from "react";
import { LoggedUserContext } from "../context/LoggedUserContext";
import AuthInputComponent from "./AuthInputComponent";
import PwdInputComponent from "./PwdInputComponent";

function ProfileModal() {
  const userData = useContext(LoggedUserContext);
  console.log(userData);
  return (
    <>
      <dialog id='my_modal_1' className='modal modal-middle sm:modal-middle '>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg'>Hello!</h3>
          {/* <p className='py-4'>
            Press ESC key or click the button below to close
          </p> */}
          <Form method='POST'>
            <AuthInputComponent
              type='text'
              placeholder='Username'
              minLength={4}
              maxLength={30}
              name='username'
              iconString='user'
              defaultText={userData?.username || ""} //tells ts that defaultText should be always string
            />

            <AuthInputComponent
              type='text'
              placeholder='First name'
              minLength={4}
              maxLength={30}
              name='firstName'
              iconString='user'
              defaultText={userData?.firstName || ""} //tells ts that defaultText should be always string
            />

            <AuthInputComponent
              type='text'
              placeholder='Last name'
              minLength={4}
              maxLength={30}
              name='lastName'
              iconString='user'
              defaultText={userData?.lastName || ""} //tells ts that defaultText should be always string
            />

            <AuthInputComponent
              type='text'
              placeholder='Email'
              minLength={4}
              maxLength={30}
              name='email'
              iconString='email'
              defaultText={userData?.email || ""} //tells ts that defaultText should be always string
            />

            <PwdInputComponent name='password1' />
            <PwdInputComponent name='password2' />

            {/* <fieldset className='fieldset'>
              <legend className='fieldset-legend'>
                What is your username?
              </legend>
              <input
                type='text'
                className='input'
                placeholder='Type here'
                name='username'
                defaultValue={userData?.username}
              />
              <p className='label'>Optional</p>
            </fieldset>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>
                What is your firstname?
              </legend>
              <input
                type='text'
                className='input'
                placeholder='Type here'
                name='firstName'
              />
              <p className='label'>Optional</p>
            </fieldset>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>
                What is your lasttname?
              </legend>
              <input
                type='text'
                className='input'
                placeholder='Type here'
                name='lastName'
              />
              <p className='label'>Optional</p>
            </fieldset>
            <fieldset className='fieldset'>
              <legend className='fieldset-legend'>What is your email?</legend>
              <input
                type='email'
                className='input'
                placeholder='Type here'
                name='email'
              />
              <p className='label'>Optional</p>
            </fieldset> */}

            <button
              className='btn btn-info'
              type='submit'
              value={userData?._id}
              name='profileId'
            >
              Submit
            </button>
          </Form>
        </div>
      </dialog>
    </>
  );
}
export default ProfileModal;
