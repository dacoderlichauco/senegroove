import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Screen from "./Screen";

function Game() {
  const [circleTop, setCircleTop] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCircleTop((prevTop) => {
        if (prevTop < 90) {
          // Stop moving when hitting the bar
          return prevTop + 5; // Move down by 5%
        }
        return prevTop;
      });
    }, 100); // Update position every 100ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative h-screen bg-lightblue">
        <div
          className="absolute w-20 h-20 bg-black rounded-full"
          style={{ top: `${circleTop}%`, left: "50%" }}
        ></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-black text-white text-center">
          sound bar
        </div>
        <div>
          <Screen></Screen>
        </div>
      </div>
    </div>
  );
}

export default Game;
