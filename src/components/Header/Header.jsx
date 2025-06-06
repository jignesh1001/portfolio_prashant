// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import { FaInstagram } from "react-icons/fa";

// export default function Header() {
//   return (
//     <header className="shadow sticky z-50 top-0">
//       <nav className="bg-white opacity-100 border-gray-200 px-4 lg:px-6 py-2.5">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           <Link to="/" className="flex items-center">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCM2rHayO79hkx6dxEzpIsZrAk7wZfKP57Lg&s"
//               className="mr-3 h-12"
//               alt="Logo"
//             />
//           </Link>
//            {/* <div className="flex items-center lg:order-2">
//             <Link
//               to="#"
//               className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//             >
//               Log in
//             </Link>
//             <Link
//               to="#"
//               className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//             >
//               Get started
//             </Link>
//           </div>  */}
//           <div
//             className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//             id="mobile-menu-2"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               <li>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${
//                       isActive ? "text-orange-700" : "text-gray-700"
//                     } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/about"
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${
//                       isActive ? "text-orange-700" : "text-gray-700"
//                     } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   About
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/contact"
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${
//                       isActive ? "text-orange-700" : "text-gray-700"
//                     } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//               <li>
//                 {/* <NavLink
//                                     to = "/github"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700":"text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Github
//                                 </NavLink> */}
//                  <a
//                   href="https://www.instagram.com/prashantt.shinde/"
//                   className="hover:underline"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">Instagram</div>
//                 </a>

//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaInstagram } from "react-icons/fa";
// import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <nav className="bg-[#1e1e1e] text-white px-4 lg:px-6 py-3 transition duration-300">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCM2rHayO79hkx6dxEzpIsZrAk7wZfKP57Lg&s"
              className="mr-3 h-10 rounded-md shadow-sm"
              alt="Logo"
            />
            <span className="text-xl font-bold tracking-wide">YourBrand</span>
          </Link>

          {/* Hamburger button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white text-2xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-6 font-medium text-sm">
              {["Home", "About", "Contact"].map((text, idx) => (
                <li key={idx}>
                  <NavLink
                    to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 transition duration-200 ${
                        isActive ? "text-white-900" : "text-gray-400"
                      } hover:text-white-900`
                    }
                  >
                    {text}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href="https://www.instagram.com/prashantt.shinde/"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-2 py-2 pr-4 pl-3 hover:text-pink-400 transition">
                    <FaInstagram className="text-pink-600" />
                    <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent font-semibold">
                      Instagram
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
