// src/components/Footer.jsx

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Top Content */}
        <div className="footer-top">
          <h2 className="footer-title">
            About
          </h2>

          <p className="footer-text">
            first name of group members are
          </p>

          <p className="footer-text">
            Riskiyat, Abiola, Zekeri, Harbor,
            Ibrahim, Nathan
          </p>
        </div>

        {/* Divider */}
        <div className="footer-line"></div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div>
            <p className="footer-copy">
              ©2026 Design by Amaka & Ifeoma A.
            </p>

            <p className="footer-copy">
              Built by NexioNovara. All rights reserved
            </p>
          </div>

          <h3 className="footer-brand">
            TSAcademy
          </h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;