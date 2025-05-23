import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CardDefault } from "../Card/Card";
import Video from "/src/assets/Video-456.mp4";
import image from "/src/assets/HappyDiwali23.jpg";
export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <aside className="relative overflow-hidden bg-[#1e1e1e] text-white py-16 h-[600px]">
        {/* Text Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-6 text-center sm:text-right sm:ml-auto mt-20 sm:mt-0">
            {/* <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              <div className="text-5xl px-4 sm:px-10">Prashant Shinde</div>
              <span className="block text-lg sm:text-2xl font-medium text-orange-400">
                Video Editor
              </span>
            </h1> */}
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-poppins">
              <div className="text-5xl px-4 sm:px-10 font-poppins">
                Prashant Shinde
              </div>
              <span className="block text-lg sm:text-2xl font-medium text-orange-400 font-poppins">
                Video Editor
              </span>
            </h1>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full flex justify-center items-center pointer-events-none">
          <img
            className="h-full w-full object-cover opacity-40"
            src={image}
            alt="background"
          />
        </div>

        {/* Fade Bottom Gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#121212] z-20" />
      </aside>

      {/* Recent Work Section */}
      <div className="px-4 py-16 bg-[#121212]">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
          Recent Work
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {[
            "https://www.youtube.com/embed/y28pNO8V6Hc?si=3JvpvRe4vOSz3as1",
            "https://www.youtube.com/embed/y28pNO8V6Hc?si=3JvpvRe4vOSz3as1",
            "https://www.youtube.com/embed/HVeQXC7v9aY?si=yWpqyqyYkthN2EBT",
            "https://www.youtube.com/embed/HVeQXC7v9aY?si=yWpqyqyYkthN2EBT",
            "https://www.youtube.com/embed/HVeQXC7v9aY?si=yWpqyqyYkthN2EBT",
            "https://www.youtube.com/embed/HVeQXC7v9aY?si=yWpqyqyYkthN2EBT",
            "https://www.youtube.com/embed/HVeQXC7v9aY?si=yWpqyqyYkthN2EBT",
            "https://www.youtube.com/embed/HVeQXC7v9aY?si=yWpqyqyYkthN2EBT",
            "https://www.youtube.com/embed/HVeQXC7v9aY?si=yWpqyqyYkthN2EBT",
            "https://www.youtube.com/embed/HVeQXC7v9aY?si=yWpqyqyYkthN2EBT",
            "https://www.youtube.com/embed/HVeQXC7v9aY?si=yWpqyqyYkthN2EBT",
            "https://www.youtube.com/embed/HVeQXC7v9aY?si=yWpqyqyYkthN2EBT",
            "https://www.youtube.com/embed/HVeQXC7v9aY?si=yWpqyqyYkthN2EBT",
            "https://www.youtube.com/embed/HVeQXC7v9aY?si=yWpqyqyYkthN2EBT",
            // Repeat as needed...
          ].map((url, i) => (
            <div
              key={i}
              className="w-[290px] h-[450px] bg-[#2b2b2b] text-white rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
            >
              <iframe
                width="100%"
                height="100%"
                src={url}
                title={`YouTube video ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
