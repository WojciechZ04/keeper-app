import React from "react";

function Contact() {
  return (
    <div className="bg-white p-5 m-auto rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-5">Contact</h1>
      <p className="text-center">
        If you have any questions or suggestions, feel free to contact me.
      </p>
      <p className="text-center">
        You can reach me at: {""}
        <a href="mailto:zielinski.wojciech04@gmail.com">
          zielinski.wojciech04@gmail.com
        </a>
      </p>
      <div className="flex justify-center space-x-4 my-2">
        <a href="https://www.linkedin.com/in/wojciech-zieli%C5%84ski-45205b268/">
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/WojciechZ04">
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="GitHub"
          />
        </a>
      </div>

	  <p>Also checkout my page if you want to know more about me:
				<a href="https://wojciechz04.github.io/WojciechZ04/"> Wojciech Zielinski</a>
	  </p>
    </div>
  );
}

export default Contact;
