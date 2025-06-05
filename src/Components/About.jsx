/* eslint-disable no-unused-vars */
// import React from 'react'

// function Frontpage() {
//   return (
    
   
//      <>
//          text on the left 
      
//     <div class="min-h-screen bg-blue-500  text-white" >
//       <div  class="pt-40 ... ml-20 ...">
//            <h1 class="text-5xl ...">Welcome to my portfolio</h1>
//       <b class="text-2xl ... text-red-600">I am Aditya singh suryavanshi</b>
//         <p class="font-serif ... text-2xl  ">
//          I am a Webdeveloper and a passionate learner. <br></br>I make user friendly Website
//        </p>
          
//         </div>
//            <img src="src\Component\images.png" alt="" />
        
//         </div>
     

//        <div class="min-h-screen bg-blue-500  text-white" >
//         <div  class="pt-40 ... ml-20 ...">
//             <h1 class="text-5xl ...">Welcome to my portfolio</h1>
//        <b class="text-2xl ... text-red-600">I am Aditya singh suryavanshi</b>
//         <p class="font-serif ... text-2xl  ">
//          I am a Webdeveloper and a passionate learner. <br></br>I make user friendly Website
//         </p>
          
//          </div>
//             <img src="src\Components\images.png" alt="" />
        
//          </div>

       
    

        
        



//         </>
        
        
      
    
//   )
// }

// export default Frontpage




// import React from "react";

// const About = () => {
//   return (
//     <section className="w-full bg-white py-12 px-6 md:px-12 lg:px-24" id="about">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
//         {/* Profile Image */}
//         <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-10 shadow-lg">
//           <img
//             src="src\Components\im1.jpeg" // Change this to your image path
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
//           <p>I complete my Bachelor's of Technology in Computer Science and from 
//             SYSITS college , Ratlam (M.P.)
//           </p>
//           <div class="font-bold ...">
//           <p>Degree:Bachelor's 2024</p>
//           <p>Phone:+91 9302441629</p>
//           <p>Email:rajeshsingh21974@gmail.com</p>
//           <p>City:Ratlam (Madhya Pradesh) , India</p>
//           </div>


          
          
//         </div>
        
        
//       </div>

//       <div>
//         Hi ! I’m a passionate web developer with experience in building modern , responsive websites using React, Node.js, and more. I love creating clean UI/UX and solving real-world problems with code.
//         I specialize in building scalable and maintainable web applications using React, Node.js, and other modern technologies. 
//         I'm passionate about creating clean efficient , and impactful software.
//       </div>
//     </section>
//   );
// };

// export default About;



import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="w-full bg-white py-12 px-6 md:px-12 lg:px-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <motion.div
          className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-10 shadow-lg"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src="src/Components/im1.jpeg" // Make sure the path is correct
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="text-center md:text-left"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
          <p className="text-gray-600 text-lg mb-2">
            Hi! I’m a passionate web developer with experience in building
            modern, responsive websites using React, Node.js, and more. I love
            creating clean UI/UX and solving real-world problems with code.
          </p>
          <p className="mb-4">
            I completed my Bachelor's of Technology in Computer Science from 
            SYSITS College, Ratlam (M.P.)
          </p>
          <div className="font-bold space-y-1 text-gray-700">
            <p>Degree: Bachelor's 2024</p>
            <p>Phone: +91 9302441629</p>
            <p>Email: rajeshsingh21974@gmail.com</p>
            <p>City: Ratlam (Madhya Pradesh), India</p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Description */}
      <motion.div
        className="mt-10 text-gray-600 text-center md:text-left max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <p>
          Hi! I’m a passionate web developer with experience in building modern, responsive websites using React, Node.js, and more. I love creating clean UI/UX and solving real-world problems with code.
        </p>
        <p className="mt-2">
          I specialize in building scalable and maintainable web applications. I'm passionate about creating clean, efficient, and impactful software.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default About;


