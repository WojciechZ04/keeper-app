import React from "react";
import { Button, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function About() {
  return (
    <div className="containter about">
      <h1>About this project</h1>
      <p>
        "Keeper" is project inspired by Google Keep App. It allows to make fast
        notes to write down your ideas. This project was completly focused on
        React framework. It was one of the biggest projects covered in The
        Complete 2023 Web Development Bootcamp on Udemy. My version has some
        additional features not covered in lessons.
      </p>
      <p>Topics covered in this project:</p>
      <ul>
        <li>
          <p>
            creating and using React controlled and uncontrolled components,
          </p>
        </li>
        <li>
          <p>styling components,</p>
        </li>
        <li>
          <p>routing for different pages,</p>
        </li>
        <li>
          <p>using React UI tools (MUI).</p>
        </li>
      </ul>
      <p>
        Project could be further developed by adding some functionalities like
        adding database, which would keep the notes and using accounts so each
        person could create his own notes.
      </p>

      <Box textAlign="center">
        <p style={{ textAlign: "center" }}>
          If you want to see source code, click button below.
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
