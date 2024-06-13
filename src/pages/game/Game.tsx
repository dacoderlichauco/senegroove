import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";

function Game() {
  const [circleTop, setCircleTop] = useState(0); // Track vertical position of the circle
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCircleTop((prevTop) => (prevTop < 90 ? prevTop + 1 : prevTop));
    }, 20); // Update position every 20ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        console.log("Space key pressed");
        if (circleTop >= 70 && circleTop <= 90) { // Expanded range
          console.log("Circle is within the now bar range");
          setScore((prevScore) => prevScore + 1);
          setCircleTop(0); // Reset circle to top
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [circleTop]);

  return (
    <div>
      <Navbar />
      <div className="relative h-screen bg-lightblue">
        <div
          className="absolute w-20 h-20 bg-black rounded-full"
          style={{ top: `${circleTop}%`, left: "50%", transform: "translateX(-50%)" }}
        ></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-black text-white text-center">
          Now bar :)
        </div>
        <div className="absolute top-0 left-0 right-0 text-center text-black">
          Score: {score}
        </div>
      </div>
    </div>
  );
}

export default Game;
