// rendered in AuthInputComponent for toast errors of inputs
function FormToast({ messages }: { messages: string }) {
  return (
    <>
      <div className='validator-hint'>
        <p className='text-red-800'>{messages}</p>
      </div>
    </>
  );
}
export default FormToast;
