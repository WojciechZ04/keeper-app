import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import data from "../assets/about.json";

function About() {
  return (
    <div className="bg-white rounded-lg w-[80%] mx-auto p-10 shadow my-4 md:my-auto">
      <h1 className="text-center font-bold text-3xl pb-3">{data.title}</h1>
      <p>{data.description}</p>
      <h2 className="pt-3 pb-2">{data.technologiesTitle}</h2>
      <ul className="list-disc pl-5">
        {data.technologies.map((technology, index) => (
          <li key={index}>
            <span className="font-bold">{technology.name}</span>
            {technology.description}
          </li>
        ))}
      </ul>

      <div className="text-center">
        <p className="py-3">
          Source code of this project is available on GitHub:
        </p>
        <a
          className="font-semibold shadow-lg bg-black text-white capitalize hover:bg-yellow-500 hover:text-black p-4 rounded-lg inline-flex items-center"
          href="https://github.com/WojciechZ04/keeper-app"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
          <span className="pl-3">Keeper App Repository</span>
        </a>
      </div>
    </div>
  );
}

export default About;
