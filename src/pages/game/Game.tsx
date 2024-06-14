import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Screen from "./Screen";
import Jewel from "./Jewel";

function Game() {
  const [circleTop, setCircleTop] = useState(0); // Track vertical position of the circle
  const [score, setScore] = useState(0);

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

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        console.log("Space key pressed");
        if (circleTop >= 70 && circleTop <= 90) {
          // Expanded range
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
      <Screen></Screen>
      <Jewel></Jewel>
    </div>
  );
}

export default Game;
