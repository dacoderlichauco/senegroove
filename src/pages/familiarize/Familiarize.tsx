import React from "react";
import AudioButton from "./AudioButton";
import Navbar from "../Navbar";

function Familiarize() {
  const buttons = [
    { strike: "tan", key: "a" },
    { strike: "tet", key: "s" },
    { strike: "chex", key: "d" },
    { strike: "pin", key: "f" },
    { strike: "gin", key: "j" },
    { strike: "rwan", key: "k" },
    { strike: "tek", key: "l" },
    { strike: "pax", key: ";" },
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center h-screen bg-lightblue p-4">
        <div className="drum-buttons">
          {buttons.map((btn) => (
            <AudioButton
              key={btn.strike}
              strike={btn.strike}
              keyTrigger={btn.key}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Familiarize;
