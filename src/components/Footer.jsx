// // src/components/Footer.jsx

// import "./Footer.css";

// function Footer() {
//   return (
//     <footer className="footer-section">
//       <div className="footer-container">
//         {/* Top Content */}
//         <div className="footer-top">
//           <h2 className="footer-title">
//             About
//           </h2>

//           <p className="footer-text">
//             first name of group members are
//           </p>

//           <p className="footer-text">
//             Riskiyat, Abiola, Zekeri, Harbor,
//             Ibrahim, Nathan, Igbunuoghene
//           </p>
//         </div>

//         {/* Divider */}
//         <div className="footer-line"></div>

//         {/* Bottom */}
//         <div className="footer-bottom">
//           <div>
//             <p className="footer-copy">
//               ©2026 Design by Amaka & Ifeoma A.
//             </p>

//             <p className="footer-copy">
//               Built by NexioNovara. All rights reserved
//             </p>
//           </div>

//           <h3 className="footer-brand">
//             TSAcademy
//           </h3>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;




function Footer() {
  return (
    <footer className="bg-[#02144d] text-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">

        {/* About */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About</h2>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            First Name of Group Members are:
          </p>
          <p className="text-white/80 text-base md:text-lg leading-relaxed mt-1">
            Riskiyat, Abiola, Zekeri, Harbor, Ibrahim, Nathan, Igbunuoghene
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-white text-sm md:text-base font-medium leading-relaxed">
              ©2026 Designed by/Collaborators: Amaka & Ifeoma A, Riskiyat, Abiola, Zekeri, Harbor, Ibrahim, Nathan and Igbunuoghene.
            </p>
            <p className="text-white text-sm md:text-base font-medium leading-relaxed">
              Built by Nexionovara, Group 5 Capstone Project with Vite,  React, Fetch API, CSS and Collaborative Git Workflow. All rights reserved 
            </p>
          </div>

          <a
            href="https://tsacademyonline.com/"
            target="_blank"
            rel="noreferrer"
            className="text-white font-bold text-xl md:text-2xl hover:text-white/80 transition-colors no-underline"
          >
            TSAcademy
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
