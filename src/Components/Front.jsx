/* eslint-disable no-unused-vars */
// import React from "react";

// const About = () => {
//   return (
//     <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-24" id="about">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
//         {/* Profile Image */}
//         <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-10 shadow-lg">
//           <img
//             src="/profile.jpg" // Change this to your image path
//             alt="Profile"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="text-center md:text-left">
//           <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
//           <p className="text-gray-600 text-lg">
//             Hi! I’m a passionate web developer with experience in building
//             modern, responsive websites using React, Node.js, and more. I love
//             creating clean UI/UX and solving real-world problems with code.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
// import React from "react";
// const Hero = () => {
//   return (
//     <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-100 px-4">
//       <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Aditya singh suryavanshi</h1>
//       <p className="text-lg md:text-xl text-gray-600 max-w-xl">I build modern and responsive web applications using React, Node.js and Tailwind CSS.</p>
      
//     </section>
//   );
// };

// export default Hero;




import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-100 px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Hi, I'm Aditya Singh Suryavanshi
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        I build modern and responsive web applications using React, Node.js and Tailwind CSS.
      </motion.p>
    </motion.section>
  );
};

export default Hero;


