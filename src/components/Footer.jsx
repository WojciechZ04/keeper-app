import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center">
      <p className="text-gray-400 pt-5">Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
