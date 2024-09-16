import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center h-14 flex items-center justify-center">
      <p className="text-gray-400">Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
