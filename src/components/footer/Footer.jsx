import React from 'react';
import './footer.css'; // Make sure you have appropriate styles in this CSS file

const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <div className="col col1">
          <h3>MovieHub</h3>
          <p>Made with <span style={{ color: '#BA6573' }}>❤</span> by INIOLUWA ATANDA</p>
          <div className="social">
            <a href="https://github.io/Eunini.git" target="_blank" rel="noopener noreferrer" className="link">
            <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="link">
            <i class="fa-regular fa-envelope"></i>
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="link">
            <i class="fa fa-phone"></i>
            </a>
          </div>
          <p style={{ color: '#818181', fontSize: 'smaller' }}>2024 © All Rights Reserved</p>
        </div>
        <div className="col col2">
          <p>About</p>
          <p>Our mission</p>
          <p>Privacy Policy</p>
          <p>Terms of service</p>
        </div>
        <div className="col col3">
          <p>Services</p>
          <p>Products</p>
          <p>Join our team</p>
          <p>Partner with us</p>
        </div>
        <div className="backdrop"></div>
      </footer>
    </div>
  );
};

export default Footer;
