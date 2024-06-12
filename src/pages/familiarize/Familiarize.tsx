import React from "react";
import AudioButton from "./AudioButton";
import Navbar from "../Navbar";

function Familiarize() {
  const buttons = [
    { strike: "tan", key: "a" },
    { strike: "tet", key: "s" },
    { strike: "chex", key: "d" },
    { strike: "pin", key: "f" },
    { strike: "gin", key: "g" },
    { strike: "rwan", key: "h" },
    { strike: "tek", key: "j" },
    { strike: "pax", key: "k" },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center h-screen bg-lightblue p-4">
        <div className="drum-buttons">
          {buttons.map((btn) => (
            <AudioButton key={btn.strike} strike={btn.strike} keyTrigger={btn.key} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Familiarize;
