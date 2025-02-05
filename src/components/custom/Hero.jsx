// import React from 'react';
// import { Button } from '../ui/button';

// import { Link } from 'react-router-dom';

// function Hero() {
//   return (
//     <div className="relative flex flex-col items-center justify-center bg-gradient-to-r from-[#3b82f6] to-[#1d4ed8] text-white py-16 min-h-screen overflow-hidden">
//       {/* Animated Airplane */}
//       <div className="absolute animate-flyAirplane z-10">
//   <img src="/aeroplane.png" alt="Airplane" className="w-[400px] h-[400px] object-contain" />
// </div>


//       {/* Heading */}
//       <h1 className="font-extrabold text-[50px] text-center max-w-3xl">
//         <span className='text-[#f1ce50]'>Discover Your Next Adventure with AI:</span> <br />
//         Personalized Itineraries at Your Fingertips
//       </h1>

//       {/* Description */}
//       <div className="flex justify-center items-center text-xl text-white opacity-80 mt-6">
//   Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
// </div>


//       {/* Button */}
//       <Link to={'/create-trip'}>
//         <Button className="mt-8 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
//           Get Started, It's Free.
//         </Button>
//       </Link>

//       {/* Travel Images Grid with Bigger Size */}
//       <div className="grid grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
//         <img src='/travel6.jpg' alt="Travel 1" className='w-[200px] h-[200px] object-cover rounded-lg shadow-xl hover:scale-105 transform transition-all'/>
//         <img src='/travel4.jpg' alt="Travel 2" className='w-[200px] h-[200px] object-cover rounded-lg shadow-xl hover:scale-105 transform transition-all'/>
//         <img src='/travel5.jpeg' alt="Travel 3" className='w-[200px] h-[200px] object-cover rounded-lg shadow-xl hover:scale-105 transform transition-all'/>
//         <img src='/travel7.jpg' alt="Travel 4" className='w-[200px] h-[200px] object-cover rounded-lg shadow-xl hover:scale-105 transform transition-all'/>
//         <img src='/travel8.jpg' alt="Travel 5" className='w-[200px] h-[200px] object-cover rounded-lg shadow-xl hover:scale-105 transform transition-all'/>
//         <img src='/travel9.jpeg' alt="Travel 6" className='w-[200px] h-[200px] object-cover rounded-lg shadow-xl hover:scale-105 transform transition-all'/>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white py-16 min-h-screen overflow-hidden">
      {/* Parallax Animated Airplane */}
      <div className="absolute z-10 animate-flyAirplane motion-reduce:animate-none">
        <img
          src="/aeroplane.png"
          alt="Airplane"
          className="w-[400px] h-[400px] object-contain animate-bounce"
        />
      </div>

      {/* SVG Wave Divider */}
      <div className="absolute bottom-0 w-full">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-32 text-blue-300"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,224L48,192C96,160,192,96,288,90.7C384,85,480,139,576,181.3C672,224,768,256,864,261.3C960,267,1056,245,1152,218.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Heading with Typewriter Effect */}
      <h1 className="font-extrabold text-[50px] text-center max-w-3xl">
        <span className="text-yellow-400">Discover Your Next Adventure with AI:</span> <br />
        <span className="animate-typewriter text-purple-200">
          Personalized Itineraries at Your Fingertips
        </span>
      </h1>

      {/* Description */}
      <div className="flex justify-center items-center text-xl text-white opacity-80 mt-6">
        Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.
      </div>

      {/* Button with Ripple Effect */}
      <Link to={'/create-trip'}>
  <Button className="relative mt-8 px-8 py-3 text-lg font-bold text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-2xl overflow-hidden group transition-all duration-300 border border-black hover:border-2">
    <span className="absolute inset-0 bg-white opacity-10 rounded-full transform scale-0 group-hover:scale-125 transition-transform duration-500 ease-in-out"></span>
    <span className="relative">Plan Your Trip Now!</span>
  </Button>
</Link>


      {/* Travel Images Grid with Animations */}
      <div className="grid grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
        {['travel6.jpg', 'travel4.jpg', 'travel5.jpeg', 'travel7.jpg', 'travel8.jpg', 'travel9.jpeg'].map(
          (image, index) => (
            <img
              key={index}
              src={`/${image}`}
              alt={`Travel ${index + 1}`}
              className="w-[200px] h-[200px] object-cover rounded-lg shadow-xl hover:scale-105 transform transition-all hover:rotate-3 hover:shadow-2xl"
              title={`Destination ${index + 1}`}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Hero;
