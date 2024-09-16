import React, { useState } from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header class="d-flex flex-wrap justify-content-center py-3">
      <button className="md:hidden  absolute left-4" onClick={toggleSidebar}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg class="bi me-2 logo" width="40" height="32">
          <HighlightIcon />
        </svg>
        <span class="fs-4 logo">Keeper</span>
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

      {isOpen && (
        <div className="fixed w-80 inset-0 bg-gray-800 z-50 flex flex-col items-center pt-20 md:hidden">
          <button className="absolute top-4 right-4" onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
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
      )}
    </header>
  );
}

export default Header;
