import React from "react";
import { Link } from "react-router-dom";
import home from ".././media/house-icon.png";
import tutorial from ".././media/tutorial.png";
import drum from ".././media/drum.png";

function Navbar() {
  return (
    <div className="flex">
      <Link to="/">
        <img src={home} className="pt-2.5 pl-2.5 filter invert w-8"></img>
      </Link>

      <Link to="/tutorial">
        <img src={tutorial} className="pt-2.5 pl-2.5 filter invert w-8"></img>
      </Link>

      <Link to="/familiarize">
        <img src={drum} className="pt-2.5 pl-2.5 filter invert w-8"></img>
      </Link>
    </div>
  );
}

export default Navbar;
