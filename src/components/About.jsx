import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        I am an enthusiastic engineering graduate and fresher with a strong foundation in MERN Stack development. Passionate about the IT industry, I enjoy building dynamic web applications and designing engaging user interfaces. I recently completed a Full Stack project, Hotel Booking App, using the MERN Stack, which features real-time payment integration for secure transactions. With skills in React, Node.js, Express.js, and MongoDB, I am committed to continuous learning and honing my technical abilities. Dedicated, curious, and detail-oriented, I aim to contribute effectively to innovative projects while growing as a proficient software developer in the ever-evolving tech landscape.
        </p>

        <br />

        <p className="text-xl">
        As a detail-oriented individual, I value teamwork, problem-solving, and creating impactful digital solutions. My goal is to grow as a proficient software developer while contributing effectively to innovative projects in a fast-paced tech environment. I am eager to turn ideas into reality and bring value to the teams I collaborate with.
        </p>
      </div>
    </div>
  );
};

export default About;