import React from "react";
import { Link } from "react-router-dom";
import home from ".././media/house-icon.png";
import tutorial from ".././media/tutorial.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="icon-container">
      <Link to="/">
        <img src={home} className="icon"></img>
      </Link>

      <Link to="/tutorial">
        <img src={tutorial} className="icon"></img>
      </Link>
    </div>
  );
}

export default Navbar;