/* eslint-disable no-unused-vars */
// import React from "react";

// const Projects = () => {
//   return (
//     <section id="projects" className="py-12 px-6 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold mb-2">Project 1</h3>
//           <a href="">
//           <p className="text-gray-600 mb-2"><b>E-Learning Website</b>
//             The E-learning Website is a modern web application designed to provide online education through digital courses, video lectures, quizzes, and interactive content. 
//             It serves as a platform for students to access educational material and for instructors to manage and deliver content efficiently.
//           </p>
//           </a>
//           {/* <a href="#" className="text-blue-600 font-medium">View Code</a> */}
//         </div>
//         {/* Add more project cards */}

//         <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
//           <h3 className="text-xl font-semibold mb-2">Project 2</h3>
//           <a href="">
//           <p className="text-gray-600 mb-2"><b>E-Commerce website</b>
//             The E-commerce Website is a full-featured online shopping platform built using React.js. It allows users to browse products, manage their shopping cart, and securely place orders. The application is designed with a responsive and user-friendly interface to ensure a smooth shopping experience across all devices.
//           </p>
//           </a>
//           {/* <a href="#" className="text-blue-600 font-medium">View Code</a> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;








import React from "react";
import { motion, scale, transform } from "framer-motion";
import { Rotate3D } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 50,rotate:90 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotate:0 ,
    transition: {
      duration: 0.5,
      delay: i * 0.2,
      
      scale:0.5,
    },
    
  }),
};

const Projects = () => {
  const projectList = [
    {
      title: "E-Learning Website",
      description:
        "The E-learning Website is a modern web application designed to provide online education through digital courses, video lectures, quizzes, and interactive content. It serves as a platform for students to access educational material and for instructors to manage and deliver content efficiently.",
    },
    {
      title: "E-Commerce Website",
      description:
        "The E-commerce Website is a full-featured online shopping platform built using React.js. It allows users to browse products, manage their shopping cart, and securely place orders. The application is designed with a responsive and user-friendly interface to ensure a smooth shopping experience across all devices.",
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-12 px-6 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectList.map((project, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            custom={i}
            variants={cardVariants}
          >
            <h3 className="text-xl font-semibold mb-2">{`Project ${i + 1}`}</h3>
            <a href="">
              <p className="text-gray-600 mb-2">
                <b>{project.title}</b> — {project.description}
              </p>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;

