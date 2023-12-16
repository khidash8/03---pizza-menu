import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're Open Currently
    </footer>
  );
};

export default Footer;
