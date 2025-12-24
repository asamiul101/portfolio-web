import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex absolute top-0 w-full justify-between py-5 px-6">
      <div>Portfolio</div>
      <div className="flex gap-4">
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
    </div>
  );
};

export default NavBar;
