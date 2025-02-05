import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function UserTripCard({trip}) {
  const [photoUrl,setPhotoUrl] = useState();

  useEffect(()=>{
    trip&&GetPlaceImg();
  },[trip])

  const GetPlaceImg=async()=>{
    const data={
      textQuery:trip?.userSelection?.location
    }
    const result= await GetPlaceDetails(data).then(resp=>{
      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name)
      setPhotoUrl(PhotoUrl);
    })
  }
  return (
   <Link to={'/view-trip/'+trip?.id}>
    <div className='hover:scale-105 transition-all hover:shadow-sm'>
     <img src={photoUrl}  className='rounded-xl h-[200px] w-full object-cover'/>
      <div>
      <h2 className='font-medium text-lg'>{trip?.userSelection?.location}</h2>
      <h2 className="text-sm text-gray-600" >{trip?.userSelection?.totalDays} Days trip with {trip?.userSelection?.budget} </h2>
      </div>
    </div>
   </Link>
  )
}

export default UserTripCard

// import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// function UserTripCard({ trip }) {
//   const [photoUrl, setPhotoUrl] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (trip) {
//       GetPlaceImg();
//     }
//   }, [trip]);

//   const GetPlaceImg = async () => {
//     try {
//       const data = {
//         textQuery: trip?.userSelection?.location,
//       };

//       const result = await GetPlaceDetails(data);

//       if (result.data && result.data.places[0]?.photos?.length > 3) {
//         const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', result.data.places[0].photos[3].name);
//         setPhotoUrl(PhotoUrl);
//       } else {
//         setPhotoUrl('/trip2.jpg'); // Default image
//       }
//     } catch (error) {
//       console.error('Error fetching place image:', error);
//       setError('Failed to load image.');
//       setPhotoUrl('/trip2.jpg'); // Fallback image
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="h-[200px] w-full bg-slate-200 animate-pulse rounded-xl">
//         {/* Loading Skeleton */}
//       </div>
//     );
//   }

//   return (
//     <Link to={'/view-trip/' + trip?.id}>
//       <div className="hover:scale-105 transition-all hover:shadow-sm">
//         <img
//           src={photoUrl || '/trip2.jpg'}
//           alt={trip?.userSelection?.location}
//           className="rounded-xl h-[200px] w-full object-cover"
//         />
//         <div>
//           <h2 className="font-medium text-lg">{trip?.userSelection?.location}</h2>
//           <h2 className="text-sm text-gray-600">
//             {trip?.userSelection?.totalDays} Days trip with {trip?.userSelection?.budget}
//           </h2>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default UserTripCard;
