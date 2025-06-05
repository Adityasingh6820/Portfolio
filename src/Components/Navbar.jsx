/* eslint-disable no-unused-vars */
// import React, { useState } from 'react';
// import { Link, Menu, X } from 'lucide-react';
// // import { Link } from 'react-router-dom';
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav className="bg-white shadow-md px-4 py-3">
//       <div className="flex justify-between items-center max-w-6xl mx-auto">
//         <div className="text-xl font-bold">MyLogo</div>

//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
//           <li><a href="src\Components\Frontpage">Home</a></li>
//           <li><a href="#About">About</a></li>
    
//           <li><a href="#">SKills</a></li>
//           <li><a href="#" >Service</a></li>
//           <li><a href="#" >Project</a></li>
//           <li><a href="#" >Resume</a></li>
//           <li><a href="#" >Contact-us</a></li>

          
          
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden mt-2 space-y-2 px-2">
//           <li><a href="#" className="block py-2">Home</a></li>
//           <li><a href="#" className="block py-2">About</a></li>
//           <li><a href="#" className="block py-2">Services</a></li>
//           <li><a href="#" className="block py-2">Contact</a></li>
//         </ul>
//       )}
//     </nav>

//   );

  
// };


// export default Navbar;




// import React from 'react';
// import React, { useState } from 'react';
// import { X, Menu } from 'react-feather';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold text-blue-600">MyPortfolio</h1>
//         <div className="space-x-6 hidden md:block">
//           <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
//           <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
//           <a href="#skills" className="text-gray-700 hover:text-blue-500">Skills</a>
//            <a href="#resume" className="text-gray-700 hover:text-blue-500">Resume</a>
          
//           <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useState } from "react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-xl font-bold text-blue-600">MyPortfolio</h1>

//         {/* Desktop Links */}
      
        
//         <div className="space-x-6 hidden md:flex">
//           <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
//           <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
//           <a href="#skills" className="text-gray-700 hover:text-blue-500">Skills</a>
//           <a href="#resume" className="text-gray-700 hover:text-blue-500">Resume</a>
//           <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
//         </div>
        

//         {/* Mobile Hamburger Icon */}
//         <button
//           className="md:hidden text-gray-700 focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {menuOpen ? (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu Links */}
//       {menuOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-2">
//           <a href="#about" className="block text-gray-700 hover:text-blue-500">About</a>
//           <a href="#projects" className="block text-gray-700 hover:text-blue-500">Projects</a>
//           <a href="#contact" className="block text-gray-700 hover:text-blue-500">Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import React from "react";
import { useState } from "react";
import { motion, AnimatePresence  } from "framer-motion";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-red-600 shadow-md sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">MyPortfolio</h1>

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex text-lg ...">
          <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a>
          <a href="#skills" className="text-gray-700 hover:text-blue-500">Skills</a>
          <a href="#resume" className="text-gray-700 hover:text-blue-500">Resume</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Links with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 space-y-2"
          >
            <a href="#about" className="block text-gray-700 hover:text-blue-500">About</a>
            <a href="#projects" className="block text-gray-700 hover:text-blue-500">Projects</a>
            <a href="#skills" className="block text-gray-700 hover:text-blue-500">Skills</a>
            <a href="#resume" className="block text-gray-700 hover:text-blue-500">Resume</a>
            <a href="#contact" className="block text-gray-700 hover:text-blue-500">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

