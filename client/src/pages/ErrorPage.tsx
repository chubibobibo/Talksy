import {
  isRouteErrorResponse,
  useRouteError,
  useNavigate,
} from "react-router-dom";

function ErrorPage() {
  //assert useRouteError as Error and
  const error = useRouteError() as Error;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };

  //check if an error is an error response thrown from a loader or action
  if (!isRouteErrorResponse(error)) {
    return null;
  }

  return (
    <>
      {error.status === 404 ? (
        <section className='h-screen flex flex-col justify-center  items-center p-10 gap-2'>
          <h1 className='header-text'>PAGE</h1>
          <img src='../../src/assets/404.png' />
          <h1 className='header-text'>NOT FOUND</h1>
          <button className='btn btn-ghost md:btn-lg' onClick={handleNavigate}>
            Click here to go back
          </button>
        </section>
      ) : (
        <section className='flex flex-col justify-center items-center w-screen'>
          <img src='../../src/assets/somethingwnetwrong.png' alt='' />
          <p className='font-start header-text'>{error.status}</p>
          <p className='font-start header-text text-base md:text-3xl'>
            Something went wrong
          </p>
        </section>
      )}
    </>
  );
}
export default ErrorPage;
