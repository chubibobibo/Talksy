interface NameType {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

function HorizontalSpanCard({ username }: { username: NameType }) {
  return (
    <>
      <div className='card w-auto bg-base-100 card-xs shadow-lg'>
        <div className='card-body'>
          <h2 className='card-title text-poppins md:text-base'>About Me</h2>
          <p className='text-poppins md:text-xs capitalize'>
            Hello, my name is {username?.username}. Nice to meet you
          </p>
        </div>
      </div>
    </>
  );
}
export default HorizontalSpanCard;
