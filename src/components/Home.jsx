import React from 'react'
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    return (
        <div  name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white"> I'm a Mern Stack Developer

                    </h2>
                    <p className="text-gray-500 py-4 max-w-md">
                    I am a recent Engineering graduate with a strong foundation in the Mern stack (MongoDB, Express.js, React, and Node.js). I specialize in developing full-stack web applications, combining seamless front-end interfaces with robust back-end functionality to deliver user-focused and efficient solutions
                    </p>
                    <div>
                    <div className="flex gap-4">
    <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
        Portfolio
        <span className="group-hover:rotate-90 duration-300">
            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
        </span>
    </button>
    
    <button
        className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
        onClick={() => window.open("https://drive.google.com/file/d/16eDIk1IcHUAcOQVerfN7689-U0ctALs-/view", "_blank")}
    >
        Resume
        <span className="group-hover:rotate-90 duration-300">
            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
        </span>
    </button>
</div>


                    </div>
                </div>
                <div> 
                    <img  
                     src={HeroImage}
                     alt="my profile"
                     className="rounded-2xl mx-auto w-2/3 md:w-full"/>
                </div>
            </div>
        </div>
    )
}

export default Home