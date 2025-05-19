import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CardDefault } from "../Card/Card";
import Video from "/src/assets/Video-456.mp4";
import image from "/src/assets/HappyDiwali23.jpg" 
export default function Home() {
  return (
    <div className="w-full">
      <aside className="relative overflow-hidden text-black bg-black text-white py-10 sm:py-16 h-[600px]">
        {/* Text content section */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-6 text-center sm:text-right sm:ml-auto mt-20 sm:mt-0">
            <h1 className="text-20xl sm:text-5xl font-bold leading-tight">
              <div className="text-20xl">Your Name</div>
              <span className="block text-base sm:text-xl font-medium">
                Video Editor
              </span>
            </h1>

            {/* Download button (optional) */}
            {/* <Link
          className="inline-flex items-center px-6 py-3 font-medium bg-orange-700 text-white rounded-lg hover:opacity-75"
          to="/"
        >
          <svg
            fill="white"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
          </svg>
          &nbsp; Download now
        </Link> */}
          </div>
        </div>
        {/* Background image */}
        {/* <div className="absolute inset-0 w-full h-full max-h-max flex justify-center items-center pointer-events-none">
          <img
            className="w-full max-w-md sm:max-w-xl opacity-20 object-cover"
            src="https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg"
            alt="image1"
          />
        </div> */}
        <div className="absolute inset-0 w-full h-full max-h-max flex justify-center items-center pointer-events-none">
           <img
            className="h-[500px] sm:h-[600px] w-full opacity-120 object-cover"
            src={image}
            alt="image1"
          /> 
        </div>
        
        {/* <div className="absolute inset-0 w-full h-full max-h-max flex justify-center items-center pointer-events-none">
          <video
            className="h-[500px] sm:h-[600px] w-full  opacity-80 object-cover"
            src={Video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div> */}
      </aside>

      {/* Bottom centered image */}
      {/* <div className="grid place-items-center mt-10 sm:mt-20 px-4 bg-red-400">
        
      </div>  */}
      <div className="grid place-items-center  px-4 bg-gray-300 h-[1000px]">
        {/* Content goes here if needed */}
      </div>

      {/* Footer heading */}
      {/* <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1> */}
    </div>
  );
}
