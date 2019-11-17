import React, { useState } from 'react';

class Footer extends React.Component {
  render() {
    return (
    <footer className="footer text-center">
      <div className="container">
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center" style={{color: 'grey'}}>
            &copy;{new Date().getFullYear()} Sheph - All Rights Reserved |
            Contact us: <a href="mailto:sheph@gmail.com" target="_top" style={{color: '#55ACEE'}}>Sheph@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
    );
  }
}

export default Footer