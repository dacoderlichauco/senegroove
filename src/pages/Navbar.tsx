import React from "react";
import { Link } from "react-router-dom";
import home from "../media/home-page.png";
import tutorial from "../media/tutorial-page.png";
import drum from "../media/drum-page.png";
import game from "../media/game-page.png";

function Navbar() {
  return (
    <div className="flex justify-around p-4 bg-red-500"> {/* Made the navbar red */}
      <Link to="/">
        <img src={home} className="w-12 h-12 filter invert"></img>
      </Link>
      <Link to="/tutorial">
        <img src={tutorial} className="w-12 h-12 filter invert"></img>
      </Link>
      <Link to="/familiarize">
        <img src={drum} className="w-12 h-12 filter invert"></img>
      </Link>
      <Link to="/game">
        <img src={game} className="w-12 h-12 filter invert"></img>
      </Link>
    </div>
  );
}

export default Navbar;
