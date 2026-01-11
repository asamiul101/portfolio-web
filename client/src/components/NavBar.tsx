import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between py-5 px-10">
      <div className="italic pl-10 text-3xl text-blue-500">Portfolio</div>
      <div className="flex gap-6">
        <Link to="/">About</Link>
        <Link to="/career">Career</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  );
};

export default NavBar;
