import React from 'react';
import HotelCardItem from './HotelCardItem';

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl my-7">Hotel Recommendation</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {trip?.tripData?.hotelOptions?.map((item, index) => (
          <HotelCardItem
            key={item.id || index}
            item={item}
            showImage={index < 2} // Show image only for the first 2 items
          />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
