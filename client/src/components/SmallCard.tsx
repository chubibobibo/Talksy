interface SmallCardPropTypes {
  cardTitle: string;
  cardBody: string;
}

function SmallCard({ cardTitle, cardBody }: SmallCardPropTypes) {
  return (
    <>
      <div className='card w-auto h-25 bg-gray-900 text-gray-200 card-xs shadow-sm font-poppins overflow-y-scroll md:w-70'>
        <div className='card-body'>
          <h2 className='card-title md:text-base sticky'>{cardTitle}</h2>
          <p className='text-left md:text-xs '>{cardBody}</p>
          {/* <div className='justify-end card-actions'>
            <button className='btn btn-primary'>Buy Now</button>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default SmallCard;
