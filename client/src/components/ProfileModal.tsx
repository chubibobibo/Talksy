/** @NOTE document.getElementById("my_modal_5") is typed as HTMLDialogElement to prevent type error in showModal() = Property 'showModal' does not exist on type 'HTMLElement'  since my_modal_5 is a dialog*/
import { Form } from "react-router-dom";
import { useContext } from "react";
import { LoggedUserContext } from "../context/LoggedUserContext";
import AuthInputComponent from "./AuthInputComponent";
import PwdInputComponent from "./PwdInputComponent";
import { useNavigation } from "react-router-dom";

import { ToastContainer, Zoom } from "react-toastify";

function ProfileModal() {
  const userData = useContext(LoggedUserContext);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <dialog id='my_modal_1' className='modal modal-middle sm:modal-middle'>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg mb-2'>Update Profile</h3>
          {/* <p className='py-4'>
            Press ESC key or click the button below to close
          </p> */}
          <Form method='POST' encType='multipart/form-data'>
            <p className='font-semibold'>Choose your avatar</p>
            <input
              type='file'
              className='file-input mb-6 w-full'
              name='photoUrl'
            />

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

            <section>
              <label>
                <textarea
                  className='textarea mb-6 resize-none w-full'
                  placeholder='About Me'
                  name='aboutMe'
                  defaultValue={userData?.aboutMe}
                ></textarea>
              </label>
            </section>

            <PwdInputComponent name='password1' placeholderText='Password' />
            <PwdInputComponent
              name='password2'
              placeholderText='Re-enter your password'
            />
            <button
              className='btn btn-info'
              type='submit'
              value={userData?._id}
              name='profileId'
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span>Updating Profile</span>
                  <span className='loading loading-dots loading-xs'></span>
                </>
              ) : (
                "Update"
              )}
            </button>
          </Form>
        </div>
        <ToastContainer position='top-center' transition={Zoom} />
      </dialog>
    </>
  );
}
export default ProfileModal;
