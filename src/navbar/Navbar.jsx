import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navHome">
            <Link to={"/"}>Home</Link>
        </div>
        <div className="navStudent">
            <Link to={"/student"}>Student</Link>
        </div>
        <div className="navContact">
            <Link to={"/contact"}>Contact Us</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
