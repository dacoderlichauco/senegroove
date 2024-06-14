import React, { useState, useEffect } from "react";

// type JewelProps = {
//   time: number;
//   strike: string;
//   lane: boolean;
// };

function Jewel() {
  const [circleTop, setCircleTop] = useState(0); // Track vertical position of the circle
  const [hit, setHit] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCircleTop((prevTop) => {
        if (prevTop < 70) {
          // Stop moving when hitting the bar
          return prevTop + 5; // Move down by 5%
        }
        return prevTop;
      });
    }, 75); // Update position every 100ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        console.log("Space key pressed");
        setHit(true);
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
      {!hit ? (
        <div
          className="absolute w-20 h-20 bg-white rounded-full z-10"
          style={{
            top: `${circleTop}%`,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        ></div>
      ) : (
        <></>
      )}
      {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-black text-white text-center">
        </div> */}
    </div>
  );
}

export default Jewel;
