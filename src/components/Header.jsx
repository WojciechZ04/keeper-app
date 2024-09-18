import React, { useState, useEffect } from "react";
import HighlightIcon from "@mui/icons-material/Highlight";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="bg-yellow-500 w-full p-4 md:p-8 shadow-md flex flex-wrap justify-center items-center text-sm sm:text-base md:text-lg lg:text-xl">
      {" "}
      <button className="md:hidden  absolute left-4" onClick={toggleSidebar}>
        <svg className="w-10 h-10 logo">
          <MenuIcon />
        </svg>
      </button>
      <a href="/" class="d-flex align-items-center me-md-auto logo">
        <svg class="bi me-2 " width="40" height="32">
          <HighlightIcon />
        </svg>
        <span class="text-3xl">Keeper</span>
      </a>
      <nav className="hidden md:flex space-x-4">
        <a href="/" className="nav-link logo">
          Home
        </a>
        <a href="/about" className="nav-link logo">
          About
        </a>
        <a href="/contact" className="nav-link logo">
          Contact
        </a>
      </nav>
      <div
        className={`fixed w-80 inset-0 background bg-opacity-75 z-50 flex flex-col items-center pt-20 md:hidden transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <button className="absolute top-4 right-4" onClick={toggleSidebar}>
          <svg className="w-10 h-10 logo">
            <CloseIcon />
          </svg>
        </button>
        <nav className="flex flex-col space-y-4">
          <a href="/" className="nav-link logo text-2xl">
            Home
          </a>
          <a href="/about" className="nav-link logo text-2xl">
            About
          </a>
          <a href="/contact" className="nav-link logo text-2xl">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
