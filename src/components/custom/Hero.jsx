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

import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-white text-white py-16 min-h-screen overflow-hidden">
      {/* Parallax Animated Airplane */}
      {/* <div></div> */}
      <div class="IDaDx Iwmxp mvTrV cyIij fluiI SMjpI">
        <h1 class="c">
          <div class="biGQs _P fiohW hEDHV izyXJ">Where to?</div>
        </h1>
      </div>
      <div class="IgMIB j c">
        <div class="eGVWv f M q" role="tablist" data-automation="tab-list">
          <button
            class="PFswe d Gv B- _S Mi Nj MH NL wSSLS BmgDU"
            role="tab"
            type="button"
            aria-selected="true"
          >
            <span class="biGQs _P ngXxk">
              <span class="CdXAG Vm C-" data-automation="centralNav_searchAll">
                <svg
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  class="d Vb egaXP UmNoP"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.889 3.542a.25.25 0 0 0-.278 0l-8 5.333a.25.25 0 0 0-.111.208v10.465c0 .138.112.25.25.25h16a.25.25 0 0 0 .25-.25V9.083a.25.25 0 0 0-.111-.208zm-1.11-1.248a1.75 1.75 0 0 1 1.942 0l8 5.333c.487.325.779.871.779 1.456v10.465a1.75 1.75 0 0 1-1.75 1.75h-16A1.75 1.75 0 0 1 2 19.548V9.083c0-.585.292-1.131.78-1.456z"
                  ></path>
                </svg>
                Search All
              </span>
            </span>
          </button>
          <button
            class="PFswe d Gv B- _S Mi Nj MH NL wSSLS"
            role="tab"
            type="button"
            aria-selected="false"
            tabindex="-1"
          >
            <span class="biGQs _P ngXxk">
              <a
                class="CdXAG Vm C-"
                href="/Hotels"
                data-automation="centralNav_hotels"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  class="d Vb egaXP UmNoP"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22 12.5V20h-4.5v-3h-11v3H2V6.25a2.25 2.25 0 0 1 4.5 0v6.25zM5 6.25a.75.75 0 0 0-1.5 0V18.5H5v-3h14v3h1.5V14H5z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 10.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11 7h5.6a5.4 5.4 0 0 1 5.4 5.4V14H11zm9.241 4A3.9 3.9 0 0 0 16.6 8.5h-4.1v4h8v-.1a3.9 3.9 0 0 0-.259-1.4"
                  ></path>
                </svg>
                Hotels
              </a>
            </span>
          </button>
          <button
            class="PFswe d Gv B- _S Mi Nj MH NL wSSLS"
            role="tab"
            type="button"
            aria-selected="false"
            tabindex="-1"
          >
            <span class="biGQs _P ngXxk">
              <a
                class="CdXAG Vm C-"
                href="/Attractions"
                data-automation="centralNav_thingsToDo"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  class="d Vb egaXP UmNoP"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.56 7.5H3.75a.25.25 0 0 0-.25.25v10c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-10a.25.25 0 0 0-.25-.25h-3.81l-2-2H9.56zM8.94 4h6.12l2 2h3.19c.966 0 1.75.784 1.75 1.75v10a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 17.75v-10C2 6.784 2.784 6 3.75 6h3.19z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M7.75 12a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
                  ></path>
                </svg>
                Things to Do
              </a>
            </span>
          </button>
          <button
            class="PFswe d Gv B- _S Mi Nj MH NL wSSLS"
            role="tab"
            type="button"
            aria-selected="false"
            tabindex="-1"
          >
            <span class="biGQs _P ngXxk">
              <a
                class="CdXAG Vm C-"
                href="/Restaurants"
                data-automation="centralNav_restaurants"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  class="d Vb egaXP UmNoP"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.051 6.549v.003l1.134 1.14 3.241-3.25.003-.002 1.134 1.136-3.243 3.252 1.134 1.14a1 1 0 0 0 .09-.008c.293-.05.573-.324.72-.474l.005-.006 2.596-2.603L22 8.016l-2.597 2.604a3.73 3.73 0 0 1-1.982 1.015 4.3 4.3 0 0 1-3.162-.657l-.023-.016-.026-.018-1.366 1.407 8.509 8.512L20.219 22l-.002-.002-6.654-6.663-2.597 2.76-7.3-7.315C1.967 8.948 1.531 6.274 2.524 4.198c.241-.504.566-.973.978-1.386l8.154 8.416 1.418-1.423-.039-.045c-.858-1.002-1.048-2.368-.62-3.595a4.15 4.15 0 0 1 .983-1.561L16 2l1.135 1.138-2.598 2.602-.047.045c-.16.151-.394.374-.433.678zM3.809 5.523c-.362 1.319-.037 2.905 1.06 4.103L10.93 15.7l1.408-1.496zM2.205 20.697 3.34 21.84l4.543-4.552-1.135-1.143z"
                  ></path>
                </svg>
                Restaurants
              </a>
            </span>
          </button>
          <button
            class="PFswe d Gv B- _S Mi Nj MH NL wSSLS"
            role="tab"
            type="button"
            aria-selected="false"
            tabindex="-1"
          >
            <span class="biGQs _P ngXxk">
              <a
                class="CdXAG Vm C-"
                href="/CheapFlightsHome"
                data-automation="centralNav_flights"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  class="d Vb egaXP UmNoP"
                  aria-hidden="true"
                >
                  <path d="m9.412 22.286-7.63-7.89 1.87-1.87 3.39.6c.08 0 .5 0 .73-.21l2.15-2.08c.02-.05.04-.13.04-.16 0-.02-.07-.1-.26-.19l-7.2-3.32 2.74-2.68 8.83 1.59c.2.02.49.02.62 0l3.21-3.24c.86-.78 2.58-1.75 3.76-.58 1.17 1.17.24 2.88-.49 3.71l-3.16 3.23c-.02.06-.05.24.01.61l1.52 8.83-2.7 2.43-3.29-6.84a.5.5 0 0 0-.18-.14l-2.49 2.33s-.01.15.01.3l.55 3.62-2.04 1.95zm-5.53-7.87 5.57 5.75.4-.38-.43-2.85c-.16-1.04.25-1.5.51-1.68l2.42-2.24c.45-.42.91-.46 1.2-.43.73.08 1.18.69 1.27.81l.06.1 2.45 5.1.59-.54-1.38-8.01c-.21-1.22.19-1.75.44-1.96l3.09-3.15c.25-.29.89-1.26.53-1.63-.36-.36-1.36.32-1.66.6l-3.27 3.29c-.47.45-1.35.42-1.83.35l-8.1-1.45-.63.62 5.21 2.4c.73.33.99.82 1.08 1.17.2.75-.23 1.38-.28 1.45l-.09.11-2.24 2.17c-.78.71-1.85.62-1.96.6l-2.67-.47-.27.27z"></path>
                </svg>
                Flights
              </a>
            </span>
          </button>
          <button
            class="PFswe d Gv B- _S Mi Nj MH NL wSSLS"
            role="tab"
            type="button"
            aria-selected="false"
            tabindex="-1"
          >
            <span class="biGQs _P ngXxk">
              <a
                class="CdXAG Vm C-"
                href="/Rentals"
                data-automation="centralNav_vacationRentals"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  class="d Vb egaXP UmNoP"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="m11.995 2.174 9.76 6.5v13.152H2.245V8.674zm0 1.803-8.25 5.5v10.849h16.51V9.477zm-2.99 8.359a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-2.75 1.25a2.75 2.75 0 0 1 5.396-.75h6.344v1.5h-2.25v2.25h-1.5v-2.25h-2.594a2.751 2.751 0 0 1-5.396-.75"
                  ></path>
                </svg>
                Holiday Homes
              </a>
            </span>
          </button>
        </div>
        <div class="DjEuP t _U s _O S"></div>
      </div>
      <div class="IDaDx Iwmxp mvTrV cyIij fluiI SMjpI">
        <div class="yOZMu u j">
          <div class="upkHE F1">
            <div class="HREWK t l s _U S ijEOu"></div>
            <div class="ctKgY">
              <div class="ZjkxF f e Wh z _f oPzxw YvFwa">
                <form role="search" action="/Search">
                  <input
                    type="hidden"
                    name="searchSessionId"
                    value="0007cf4aefc1bfb2.ssid"
                  />
                  <input type="hidden" name="searchNearby" value="false" />
                  <div class="bOfFT f">
                    <div class="F1 f u Q2">
                      <button
                        type="submit"
                        formaction="/Search"
                        class="LhcRH _G _H B- G_ _S t u j H0"
                        title="Search"
                        aria-label="Search"
                        tabindex="-1"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          width="24px"
                          height="24px"
                          class="d Vb UmNoP"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.12 4.14a5.99 5.99 0 1 0 0 11.98 5.99 5.99 0 0 0 0-11.98m-7.49 5.99a7.49 7.49 0 1 1 13.299 4.728L21.37 20.3l-1.06 1.061-5.44-5.44A7.49 7.49 0 0 1 2.63 10.13"
                          ></path>
                        </svg>
                      </button>
                      <input
                        type="search"
                        autocomplete="off"
                        autoCorrect="off"
                        autocapitalize="none"
                        spellcheck="false"
                        required=""
                        name="q"
                        disabled=""
                        class="hUpcN _G G_ B- z F1 _J w Cj R0 NBfGt H3"
                        placeholder="Places to go, things to do, hotels..."
                        title="Search"
                        role="searchbox"
                        aria-label="Search"
                        aria-autocomplete="list"
                        value=""
                      />
                    </div>
                    <span class="WIdth">
                      <button
                        class="rmyCe _G B- z _S c Wc wSSLS AeLHi huqcv"
                        type="button"
                      >
                        <span class="biGQs _P ttuOS">Search</span>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="absolute z-10 animate-flyAirplane motion-reduce:animate-none">
        <img
          src="/aeroplane.png"
          alt="Airplane"
          className="w-[400px] h-[400px] object-contain animate-bounce"
        />
      </div> */}

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
        <span className="text-yellow-400">
          Discover Your Next Adventure with AI:
        </span>{" "}
        <br />
        <span className="animate-typewriter text-purple-200">
          Personalized Itineraries at Your Fingertips
        </span>
      </h1>

      {/* Description */}
      <div className="flex justify-center items-center text-xl text-white opacity-80 mt-6">
        Your personal trip planner and travel curator, creating custom
        itineraries tailored to your interests and budget.
      </div>

      {/* Button with Ripple Effect */}
      <Link to={"/create-trip"}>
        <Button className="relative mt-8 px-8 py-3 text-lg font-bold text-white bg-black rounded-full shadow-lg hover:shadow-2xl overflow-hidden group transition-all duration-300 border border-black hover:border-2">
          <span className="absolute inset-0 bg-white opacity-10 rounded-full transform scale-0 group-hover:scale-125 transition-transform duration-500 ease-in-out"></span>
          <span className="relative">Plan Your Trip Now!</span>
        </Button>
      </Link>

      {/* Travel Images Grid with Animations */}
      <div className="grid grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
        {[
          "travel6.jpg",
          "travel4.jpg",
          "travel5.jpeg",
          "travel7.jpg",
          "travel8.jpg",
          "travel9.jpeg",
        ].map((image, index) => (
          <img
            key={index}
            src={`/${image}`}
            alt={`Travel ${index + 1}`}
            className="w-[200px] h-[200px] object-cover rounded-lg shadow-xl hover:scale-105 transform transition-all hover:rotate-3 hover:shadow-2xl"
            title={`Destination ${index + 1}`}
          />
        ))}
      </div>

    </div>
  );
}

export default Hero;
