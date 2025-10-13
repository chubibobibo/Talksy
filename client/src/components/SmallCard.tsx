interface SmallCardPropTypes {
  cardTitle: string;
  cardBody: string;
}

function SmallCard({ cardTitle, cardBody }: SmallCardPropTypes) {
  return (
    <>
      <div className='card w-auto h-30 bg-gray-900 text-gray-200 card-xs shadow-sm font-poppins'>
        <div className='card-body'>
          <h2 className='card-title'>{cardTitle}</h2>
          <p className='text-justify'>{cardBody}</p>
          {/* <div className='justify-end card-actions'>
            <button className='btn btn-primary'>Buy Now</button>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default SmallCard;
