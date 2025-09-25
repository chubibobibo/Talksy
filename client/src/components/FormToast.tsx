function FormToast({ messages }: { messages: string }) {
  return (
    // <>
    //   <div className='validator-hint hidden'>
    //     <div className='toast toast-top toast-center pt-2'>
    //       <div className='alert alert-error'>
    //         <span className='text-red-200'>{messages}</span>
    //       </div>
    //     </div>
    //   </div>
    // </>
    <>
      <div className='validator-hint'>
        <p className='text-red-800'>{messages}</p>
      </div>
    </>
  );
}
export default FormToast;
