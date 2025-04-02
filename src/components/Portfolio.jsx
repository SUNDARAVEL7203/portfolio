import React from "react";
import HotelApp from "../assets/portfolio/HotelApp.png";
import ChatApp from "../assets/portfolio/ChatApp.png";
import MernAuthApp from "../assets/portfolio/MernAuthApp.webp";
import JobPortal from "../assets/portfolio/JobPortal.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: HotelApp,
      demo: "https://hotelbooking-frontend-guvicapstone.netlify.app/",
      code: "https://github.com/SUNDARAVEL7203/Hotel-booking-App-frontend",
      techs: ["React", "Node.js", "MongoDB", "Redux"]
    },
    {
      id: 2,
      src: ChatApp,
      demo: "https://mern-chat-app-a713.onrender.com/login",
      code: "https://github.com/SUNDARAVEL7203/MERN-Chat-App",
      techs: ["React", "Node.js", "Express", "WebSocket"]
    },
    {
      id: 3,
      src: MernAuthApp,
      demo: "https://mernauthapp1234.netlify.app",
      code: "https://github.com/SUNDARAVEL7203/MERN-Auth-App",
      techs: ["React", "Node.js", "Express", "WebSocket"]
    },
    {
      id: 4,
      src: JobPortal,
      demo: "https://jobportal-frontend-psi.vercel.app/",
      code: "https://github.com/SUNDARAVEL7203/jobportal_frontend",
      techs: ["React", "Node.js", "Express", "Redux"]
    }

  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code, techs }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(demo, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => window.open(code, "_blank")}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
              {techs && (
                <div className="flex flex-wrap justify-center gap-2 px-4 pb-4">
                  {techs.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-300 px-3 py-1 rounded-md text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
