// import React from "react";
// import videoFile from '../../assets/Video-456.mp4';

// export default function About() {
//   return (
//     <div className="py-16 bg-white">
//       <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//         <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//           {/* <div className="md:5/12 lg:w-5/12">
//             <img
//               src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt="image"
//             />
//           </div> */}
//           <div className="md:w-5/12 lg:w-5/12">
//             <video
//               src={videoFile}
//               alt="video"
//               controls
//               autoPlay
//               loop
//               muted
//               className="w-full h-auto"
//             />
//           </div>

//           <div className="md:7/12 lg:w-6/12">
//             <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
//               Crafting Stories Through the Lens of Creativity
//             </h2>
//             {/* <p className="mt-6 text-gray-600">
//               Creative and detail-oriented Senior Video Editor with 3+ years of
//               experience delivering visually compelling content. Skilled in
//               Adobe Premiere Pro, After Effects, and Photoshop. Known for
//               storytelling, color grading, and crafting engaging videos for
//               digital platforms.
//             </p>
//             <p className="mt-4 text-gray-600">
//               Worked with renowned companies like RedBus,Piramal Finance,Z47,SSB
//             </p> */}
//             <p className="mt-6 text-gray-600">
//               I’m a Senior Video Editor with over 3 years of experience
//               transforming raw footage into compelling narratives. From social
//               media reels to high-impact commercials, I bring stories to life
//               with creativity and precision.
//             </p>
//             <p className="mt-4 text-gray-600">
//               Proficient in Adobe Premiere Pro, After Effects, and Photoshop, I
//               specialize in color grading, motion graphics, and cinematic
//               storytelling that connects with audiences.
//             </p>
//             <p className="mt-4 text-gray-600">
//               I've worked with brands like RedBus, Piramal Finance, Z47, and
//               SSB, delivering polished video content tailored for digital
//               platforms.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React from "react";
import videoFile from '../../assets/Video-456.mp4';


export default function About() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Content on top of video */}
      <div className="relative z-20 flex items-center justify-center h-full px-6">
        <div className="text-white max-w-4xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Crafting Stories Through the Lens of Creativity
          </h2>
          <p className="mt-4 text-base md:text-lg">
            I’m a Senior Video Editor with over 3 years of experience transforming raw footage into compelling narratives. From social media reels to high-impact commercials, I bring stories to life with creativity and precision.
          </p>
          <p className="mt-4 text-base md:text-lg">
            Proficient in Adobe Premiere Pro, After Effects, and Photoshop, I specialize in color grading, motion graphics, and cinematic storytelling that connects with audiences.
          </p>
          <p className="mt-4 text-base md:text-lg">
            I've worked with brands like RedBus, Piramal Finance, Z47, and SSB, delivering polished video content tailored for digital platforms.
          </p>
        </div>
      </div>
    </div>
  );
}
