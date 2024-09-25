import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center text-gray-400 h-20 flex-column items-center justify-center">
      <div>
        <a
          href="https://wojciechz04.github.io/WojciechZ04/"
          className="hover:text-yellow-500"
          title="Personal Website"
        >
          <LanguageRoundedIcon />
        </a>
        <a
          href="https://github.com/WojciechZ04"
          className="hover:text-black mx-3"
          title="GitHub Profile"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/wojciech-zieli%C5%84ski-45205b268/"
          className="hover:text-blue-600"
          title="LinkedIn Profile"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p className="mt-3">Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
