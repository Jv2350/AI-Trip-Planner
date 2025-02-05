// import { db } from '@/service/firebaseConfig';
// import React, { useEffect, useState } from 'react'
// import { useNavigation } from 'react-router-dom';
// import { collection, query, where, getDocs } from "firebase/firestore";
// import UserTripCard from './components/UserTripCard';
// import About from "../pages/About.jsx";


// function MyTrips() {
//     const navigation=useNavigation();
//     const [userTrips,setUserTrips] = useState([]);
//     useEffect(() =>{
//         GetUserTrips();
//     },[])
//     const GetUserTrips=async()=>{
//         const user=JSON.parse(localStorage.getItem('user'));
//         if(!user){
//             navigation('/');
//             return ;
//         }
//         setUserTrips([]); // Fetch işlemi başlamadan önce boş bir dizi olarak ayarla
//         const q=query(collection(db,'AiTrips'),where('userEmail','==',user?.email))
//         const querySnapshot = await getDocs(q);
//         querySnapshot.forEach((doc) => {
//         console.log(doc.id, " => ", doc.data());
//         setUserTrips(prev=>[...prev,doc.data()])
//     });
//     }
   
//   return (
//     <div className='px-5 mt-12 sm:px-10 md:px-32 lg:px-56 xl:px-72"'>
//       <h2 className='font-bold text-3xl mb-10'>My Trips</h2>
//       <div className='grid grid-cols-2 md:grid-cols-3 gap-5 my-3'>
//         {userTrips?.length>0 ? userTrips.map((trip,index)=>(
//             <UserTripCard trip={trip} key={index} />
//         ))
//         : [1,2,3,4,5,6].map((item,index)=>(
//             <div key={index} className='h-[200px] w-full bg-slate-200 animate-pulse rounded-xl'>
//             </div>
//         ))
//         }
//       </div>
//     </div>
//   )
// }

// export default MyTrips
import { db } from '@/service/firebaseConfig';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { collection, query, where, getDocs } from "firebase/firestore";
import UserTripCard from './components/UserTripCard';
import About from "../pages/About.jsx";

function MyTrips() {
    const navigation = useNavigation();
    const [userTrips, setUserTrips] = useState([]);

    useEffect(() => {
        GetUserTrips();
    }, []);

    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigation('/');
            return;
        }
        setUserTrips([]);
        const q = query(collection(db, 'AiTrips'), where('userEmail', '==', user?.email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setUserTrips(prev => [...prev, doc.data()]);
        });
    };

    // Inline CSS Styles
    const containerStyle = {
        padding: '20px',
        marginTop: '60px',
        maxWidth: '1200px',
        margin: 'auto',
    };

    const titleStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '30px',
        color: '#1f2937',
        borderBottom: '2px solid #ddd',
        display: 'inline-block',
        paddingBottom: '10px',
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
    };

    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '15px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
    };

    const loadingSkeletonStyle = {
        height: '200px',
        backgroundColor: '#e5e7eb',
        borderRadius: '12px',
        animation: 'pulse 1.5s infinite ease-in-out',
        border: '1px solid #ccc',
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.borderColor = '#1f2937';
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
        e.currentTarget.style.borderColor = '#ccc';
    };

    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>My Trips</h2>
            <div style={gridStyle}>
                {userTrips?.length > 0 ? userTrips.map((trip, index) => (
                    <div
                        style={cardStyle}
                        key={index}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <UserTripCard trip={trip} />
                    </div>
                )) : [1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div key={index} style={loadingSkeletonStyle}></div>
                ))}
            </div>
        </div>
    );
}

export default MyTrips;
