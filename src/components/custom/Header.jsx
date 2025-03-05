// import React, { useEffect, useState } from 'react';
// import { Button } from '../ui/button';
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { googleLogout, useGoogleLogin } from '@react-oauth/google';
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
// } from "@/components/ui/dialog";
// import { FcGoogle } from "react-icons/fc";
// import { FaHome, FaInfoCircle, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";
// import axios from 'axios';

// function Header() {
//   const user = JSON.parse(localStorage.getItem('user'));
//   const [openDialog, setOpenDialog] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);

//   useEffect(() => {
//     console.log(user);
//   }, [user]);

//   const login = useGoogleLogin({
//     onSuccess: (codeResp) => GetUserProfile(codeResp),
//     onError: (error) => console.error(error),
//   });

//   const GetUserProfile = (tokenInfo) => {
//     axios
//       .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
//         headers: {
//           Authorization: `Bearer ${tokenInfo?.access_token}`,
//           Accept: 'Application/json',
//         },
//       })
//       .then((resp) => {
//         localStorage.setItem('user', JSON.stringify(resp.data));
//         setOpenDialog(false);
//         window.location.reload();
//       })
//       .catch((err) => console.error('Error fetching user profile:', err));
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classNameList.toggle('dark');
//   };

//   return (
//     <header className={`header ${darkMode ? 'dark-mode' : ''}`}>
//       <div className="header-left">
//         <img src="/logo.svg" alt="Logo" className="logo" />
//         {/* Navigation Links */}
//         <nav className="nav-links">
//           <a href="/" className="nav-item">
//             <FaHome />
//             Home
//           </a>
//           <a href="/about" className="nav-item">
//             <FaInfoCircle />
//             About
//           </a>
//           <a href="/contact" className="nav-item">
//             <FaEnvelope />
//             Contact
//           </a>
//         </nav>
//       </div>

//       <div className="header-right">
//         {/* User Info */}
//         {user ? (
//           <>
//             <span className="greeting">Hello, {user?.name.split(' ')[0]}</span>
//             <div className="nav-buttons">
//               <a href="/create-trip">
//                 <Button variant="outline" className="btn">Create Trip</Button>
//               </a>
//               <a href="/my-trips">
//                 <Button variant="outline" className="btn">My Trips</Button>
//               </a>
//             </div>
//             <Popover>
//               <PopoverTrigger>
//                 <img src={user?.picture} alt="User" className="user-avatar" />
//               </PopoverTrigger>
//               <PopoverContent>
//                 <button
//                   className="logout-btn"
//                   onClick={() => {
//                     googleLogout();
//                     localStorage.clear();
//                     window.location.reload();
//                   }}
//                 >
//                   Logout
//                 </button>
//               </PopoverContent>
//             </Popover>
//           </>
//         ) : (
//           <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
//         )}
//       </div>

//       {/* Theme Toggle */}
//       <button className="theme-toggle" onClick={toggleDarkMode}>
//         {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
//       </button>

//       {/* Sign-In Dialog */}
//       <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogDescription>
//               <img src="/logo.svg" alt="Logo" className="logo-large" />
//               <h2 className="dialog-title">Sign In with Google</h2>
//               <p>Sign in to the app with Google authentication securely.</p>
//               <Button onClick={login} className="google-btn">
//                 <FcGoogle className="google-icon" />
//                 Sign In With Google
//               </Button>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </header>
//   );
// }

// export default Header;
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import axios from "axios";

function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [openDialog, setOpenDialog] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to control the menu

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.error(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      })
      .catch((err) => console.error("Error fetching user profile:", err));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classNameList.toggle("dark");
  };

  const handleMenuClose = () => {
    setMenuOpen(false); // Close the pop-up menu
  };

  return (
    <header className="aVAoX t z LDrge Za IXIDm">
      <link
        rel="stylesheet"
        href="https://static.tacdn.com/assets/qhskjyhdgjq3-c.css"
      />
      <link
        rel="stylesheet"
        href="https://static.tacdn.com/assets/cjerkd.Pq2ARUF.css"
      />
      <link
        rel="stylesheet"
        href="https://static.tacdn.com/assets/p7jq7m.4Ujcuf7.css"
      />

      <div className="IDaDx Iwmxp mvTrV cyIij fluiI SMjpI">
        <nav className="MGToN u">
          <a className="pBcSw F0 wSSLS" href="/">
            <picture>
              <img
                className="BMuGb"
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg"
                alt="Tripadvisor"
              />
            </picture>
            {/* <picture>
              <img
                className="XpHHt"
                src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
                alt="Tripadvisor"
              />
            </picture> */}
          </a>
          <div className="inHiW">
            <div className="eByLG QA c">
              <div className="AuQZR f">
                <div className="f u" data-automation="topNav_discover">
                  <div className="JLKop w">
                    <a href="/">

                    <button
                      className="rmyCe _G B- z _S c Wc wSSLS jWkoZ InwKl"
                      type="button"
                    >
                      <span className="biGQs _P ttuOS">Discover</span>
                    </button>
                    </a>
                  </div>
                </div>
                <div className="f u" data-automation="topNav_trips">
                  <div className="JLKop w">
                    <a href="/my-trips">
                      <button
                        className="rmyCe _G B- z _S c Wc wSSLS jWkoZ InwKl"
                        type="button"
                      >
                        <span className="biGQs _P ttuOS">Trips</span>
                      </button>
                    </a>
                  </div>
                </div>
                <div className="f u" data-automation="topNav_review">
                  <div className="JLKop w">
                    <button
                      className="rmyCe _G B- z _S c Wc wSSLS jWkoZ InwKl"
                      type="button"
                    >
                      <span className="biGQs _P ttuOS">Review</span>
                    </button>
                  </div>
                </div>
                <div className="f u Pa PX Pn PJ" data-automation="topNav_more">
                  <a
                    href="/ForumHome"
                    className="BMQDV _F Gv wSSLS SwZTJ FGwzt ukgoS"
                  >
                    <div className="biGQs _P ttuOS">Forums</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="lGhNq QA c" data-automation="desktop-cart-and-profile"> */}
          {/* <button
              className="rmyCe _G B- z _S c Wc wSSLS jWkoZ InwKl"
              type="button"
            >
              <span className="biGQs _P ttuOS">
                <span className="q">
                  <svg
                    viewBox="0 0 24 24"
                    width="20px"
                    height="20px"
                    className="d Vb UmNoP"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.31 9.82h4.178c-.069-1.591-.356-2.993-.766-4.017-.237-.593-.501-1.023-.756-1.293-.211-.223-.38-.3-.5-.32h-.133c-.12.02-.289.097-.5.32-.255.27-.519.7-.756 1.293-.41 1.024-.697 2.426-.767 4.017m-.374-5.14q-.135.272-.252.566C8.194 6.472 7.88 8.07 7.81 9.82H5.055a6.39 6.39 0 0 1 3.88-5.14m2.301-1.989a7.883 7.883 0 0 0-7.726 7.88 7.88 7.88 0 0 0 7.884 7.885c.584 0 .871-.014 1.11-.074.124-.031.172-.049.213-.064.058-.02.099-.036.312-.073l-.26-1.477a4 4 0 0 0-.628.159c-.031.007-.132.029-.743.029-.121 0-.313-.06-.566-.327-.255-.27-.519-.699-.756-1.292-.41-1.025-.697-2.426-.767-4.017h4.203a4.7 4.7 0 0 1-.113.843 6 6 0 0 1-.112.413l-.012.04-.004.016c-.034.114-.089.298-.1.478l1.498.088v.006s.007-.035.044-.161l.012-.04c.038-.126.09-.298.136-.505.072-.313.134-.698.152-1.178h2.734a4.2 4.2 0 0 1-.195.949c-.055.16-.11.28-.166.403l-.004.01-.01.02c-.046.101-.132.288-.161.486l1.484.219-.005.026s.012-.032.057-.13l.008-.018c.056-.123.137-.3.216-.529.168-.49.31-1.168.31-2.186a7.88 7.88 0 0 0-7.72-7.879 2 2 0 0 0-.325 0m2.626 1.99q.134.271.252.565c.49 1.226.805 2.824.875 4.574h2.75a6.38 6.38 0 0 0-3.877-5.14M8.94 16.466a8 8 0 0 1-.256-.573c-.49-1.227-.805-2.824-.875-4.574H5.055a6.39 6.39 0 0 0 3.885 5.147"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.489 12.343h-8.75v6.648h5.255l3.495 2.325zm-1.5 1.5v4.674l-1.542-1.026H13.24v-3.648z"
                    ></path>
                  </svg>
                  <div className="TzXjz d Vb"></div>
                  INR
                </span>
              </span>
            </button> */}
          <div>
            <span className="biGQs _P ttuOS">
              <div className="header-right">
                {/* User Info */}
                {user ? (
                  <>
                    <span className="greeting">
                      Hello, {user?.name.split(" ")[0]}
                    </span>
                    <Popover>
                      <PopoverTrigger>
                        <img
                          src={user?.picture}
                          alt="User"
                          className="user-avatar"
                        />
                      </PopoverTrigger>
                      <PopoverContent>
                        <button
                          className="logout-btn"
                          onClick={() => {
                            googleLogout();
                            localStorage.clear();
                            window.location.reload();
                          }}
                        >
                          Logout
                        </button>
                      </PopoverContent>
                    </Popover>
                  </>
                ) : (
                  <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
                )}
              </div>

              {/* Theme Toggle */}
              {/* <button className="theme-toggle" onClick={toggleDarkMode}>
                  {darkMode ? (
                    <FaSun className="icon" />
                  ) : (
                    <FaMoon className="icon" />
                  )}
                </button> */}

              {/* Sign-In Dialog */}
              <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
                <DialogContent>
                  <DialogHeader>
                    <DialogDescription>
                      <img src="/logo.svg" alt="Logo" className="logo-large" />
                      <h2 className="dialog-title">Sign In with Google</h2>
                      <p>
                        Sign in to the app with Google authentication securely.
                      </p>
                      <Button onClick={login} className="google-btn">
                        <FcGoogle className="google-icon" />
                        Sign In With Google
                      </Button>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
