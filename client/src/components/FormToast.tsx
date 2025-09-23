function FormToast({ messages }: { messages: string }) {
  return (
    <>
      <div className='validator-hint'>
        <div className='toast toast-top toast-center pt-2'>
          <div className='alert alert-error'>
            <span>{messages}</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default FormToast;
