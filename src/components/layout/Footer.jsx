import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <p className="footer-brand">Quizmify</p>
        <p className="footer-copy">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
