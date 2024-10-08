import React from "react";
import { Button, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import data from "../assets/about.json";
import "../styles.css";

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

      <Box className="text-center">
        <p className="py-3">
          Source code of this project is available on GitHub:
        </p>
        <Button
          variant="contained"
          color="secondary"
          sx={{ backgroundColor: "black", textTransform: "capitalize" }}
          href="https://github.com/WojciechZ04/keeper-app"
          target="_blank"
          startIcon={<GitHubIcon />}
        >
          Keeper App Repository
        </Button>
      </Box>
    </div>
  );
}

export default About;
