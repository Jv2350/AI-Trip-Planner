import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HotelCardItem({ item }) {
    const [photoUrl, setPhotoUrl] = useState(null);

    useEffect(() => {
        if (item) {
            GetPlaceImg();
        }
    }, [item]);

    const GetPlaceImg = async () => {
        if (!item?.hotelName) return; // Prevent API call if hotel name is missing

        try {
            const data = { textQuery: item.hotelName };
            const result = await GetPlaceDetails(data);

            const photos = result?.data?.places?.[0]?.photos;
            if (photos && photos.length > 3) { // Ensure at least 4 photos exist
                const photoName = photos[3].name;
                const newPhotoUrl = PHOTO_REF_URL.replace('{NAME}', photoName);
                setPhotoUrl(newPhotoUrl);
            } else {
                console.warn("Not enough photos available for", item.hotelName);
            }
        } catch (error) {
            console.error("Error fetching place image:", error);
        }
    };

    return (
        <div>
            <Link
                to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item?.hotelName)},${encodeURIComponent(item?.hotelAddress)}`}
                target='_blank'
            >
                <div className='hover:scale-105 transition-all cursor-pointer'>
                    <img
                        src={photoUrl || '/road-trip-vacation.jpg'} // Remove `/public/`
                        alt={item?.hotelName || "Hotel"}
                        className='rounded-xl h-[180px] w-full object-cover'
                    />
                    <div className='my-3 py-2'>
                        <h2 className='font-medium'>{item?.hotelName}</h2>
                        <h2 className='text-xs text-gray-500'>📍 {item?.hotelAddress}</h2>
                        <h2 className='text-sm'>💰 {item?.price}</h2>
                        <h2 className='text-sm'>⭐ {item?.rating}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default HotelCardItem;
