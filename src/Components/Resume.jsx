// import React, { useState } from "react";
// import { FaDownload, FaUpload } from "react-icons/fa";

// const Resume = () => {
//   const [uploadedFileName, setUploadedFileName] = useState("");

//   const handleUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setUploadedFileName(file.name);
//       // Handle file upload logic here (e.g., send to server)
//       console.log("Uploaded:", file.name);
//     }
//   };

//   return (
//     <section id="resume" className="py-16 bg-gray-50 px-6">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6">Resume</h2>
//         <p className="text-gray-600 mb-6">
//           Download or upload your resume to update your profile.
//         </p>

//         <div className="flex flex-col md:flex-row items-center justify-center gap-4">
//           {/* Download Button */}
//           <a
//             href="/resume.pdf"
//             download
//             className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             <FaDownload />
//             Download Resume
//           </a>

//           {/* Upload Button */}
//           <label className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-green-700 transition">
//             <FaUpload />
//             Upload Resume
//             <input
//               type="file"
//               accept=".pdf,.doc,.docx"
//               onChange={handleUpload}
//               className="hidden"
//             />
//           </label>
//         </div>

//         {uploadedFileName && (
//           <p className="mt-4 text-sm text-green-700">
//             Uploaded: {uploadedFileName}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Resume;

// import React from "react";
// import { FaDownload } from "react-icons/fa";

// const Resume = () => {
//   return (
//     <section id="resume" className="py-16 px-6 bg-gray-50">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6">Resume</h2>
//         <p className="text-gray-600 mb-6">
//           You can download my resume below or preview it directly.
//         </p>

//         <div className="flex flex-col items-center gap-4">
//           {/* 📥 Download Button */}
//           <a
//             href="/resume.pdf"
//             download="JohnDoe_Resume.pdf"
//             className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//           >
//             <FaDownload />
//             Download Resume
//           </a>

//           {/* 🖨 Preview (optional) */}
//           <iframe
//             src="/resume.pdf"
//             className="w-full h-96 border rounded shadow-md"
//             title="Resume Preview"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resume;


import React, { useState } from "react";
import { FaDownload, FaUpload } from "react-icons/fa";

const Resume = () => {
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
      // Upload logic can go here (e.g., send to server)
      console.log("Uploaded file:", file.name);
    }
  };

  return (
    <section id="resume" className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>
        <p className="text-gray-600 mb-6">
          You can download my resume below or preview it directly.
        </p>

        <div className="flex flex-col items-center gap-4">
          {/* 📥 Download Button */}
          <a
            href="/src/Components/Adityasingh1_removed (2).pdf"
            download="Adityasingh.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FaDownload />
            Download Resume
          </a>

          {/* 🖨 Preview */}
          <iframe
            src="/resume.pdf"
            className="w-full h-96 border rounded shadow-md"
            title="Resume Preview"
          />

          ⬆️ Upload Button 
          <label className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700 transition">
            <FaUpload />
            Upload Resume
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleUpload}
              className="hidden"
            />
          </label>

          {/* 📎 File name shown after upload */}
          {uploadedFileName && (
            <p className="text-green-700 text-sm">Uploaded: {uploadedFileName}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Resume;

