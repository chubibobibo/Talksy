/** @NOTE document.getElementById("my_modal_5") is typed as HTMLDialogElement to prevent type error in showModal() = Property 'showModal' does not exist on type 'HTMLElement'  since my_modal_5 is a dialog*/

function ProfileModal() {
  return (
    <>
      <dialog id='my_modal_5' className='modal modal-middle sm:modal-middle '>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h3 className='font-bold text-lg'>Hello!</h3>
          <p className='py-4'>
            Press ESC key or click the button below to close
          </p>
        </div>
      </dialog>
    </>
  );
}
export default ProfileModal;
