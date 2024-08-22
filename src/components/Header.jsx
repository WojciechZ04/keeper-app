import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
  return (
    <div>
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
        <a
          href="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg class="bi me-2 logo" width="40" height="32">
            <HighlightIcon />
          </svg>
          <span class="fs-4 logo">Keeper</span>
        </a>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <a href="/" class="nav-link logo">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a href="/contact" class="nav-link logo">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a href="/about" class="nav-link logo">
              About
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
