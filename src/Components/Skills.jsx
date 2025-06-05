/* eslint-disable no-unused-vars */
// import React from "react";
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJs,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub,

//   FaServer,
// } from "react-icons/fa";

// const skills = [
//   { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
//   { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
//   { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
//   { name: "React", icon: <FaReact className="text-cyan-400" /> },
//   { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
//   { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
//   { name: "GitHub", icon: <FaGithub className="text-gray-700" /> },
//   {name: "Express",icon:<FaServer className="text-red-700"/>}
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="py-16 bg-white px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-8">Skills</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center space-y-2 p-4 bg-gray-100 rounded-xl shadow hover:shadow-md transition"
//             >
//               <div className="text-4xl">{skill.icon}</div>
//               <p className="text-gray-700 font-medium">{skill.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaServer,
} from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-700" /> },
  { name: "Express", icon: <FaServer className="text-red-700" /> },
];

// Animation variant for rotation on scroll-in
const boxVariants = {
  hidden: { opacity: 0, rotate: -10, scale: 1 },
  visible: (i) => ({
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      type: "spring",
    },
  }),
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2 p-4 bg-gray-100 rounded-xl shadow hover:shadow-lg transition-transform hover:rotate-3"
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-gray-700 font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

