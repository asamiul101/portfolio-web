import React from "react";
import img from "../assets/Myself.jpeg";

const About = () => {
  return (
    <div className="w-full h-full px-10 flex gap-10 items-center mt-[-80px]">
      <div>
        <img src={img} alt="Profile" className="w-96 h-96 rounded-full px-4" />
      </div>
      <div>
        <h3>Hi, it's me</h3>
        <h1>Samiul Ahmed</h1>
      </div>
    </div>
  );
};

export default About;
