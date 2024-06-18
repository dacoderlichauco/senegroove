import React, { useState, useEffect } from "react";

type JewelProps = {
  cue: string;
  // time?: number;
  //   strike: string;
  //   lane: boolean;
  score?: number;
  setScore: any;
  setLast: any;
  player: any;
};

function Jewel({ cue, setScore, setLast, player }: JewelProps) {
  const [circleTop, setCircleTop] = useState(0); // Track vertical position of the circle

  const fall = () => {
    const interval = setInterval(() => {
      if (player.current) {
        console.log("current: " + player.current.getCurrentTime());
        console.log("cue " + cue);
        console.log("top " + circleTop);
        setCircleTop(player.current.getCurrentTime() - parseInt(cue) + 80);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  };

  useEffect(() => {
    fall();
  });

  return (
    <div>
      <div
        className="absolute w-20 h-20 bg-white rounded-full z-20"
        style={{
          top: `${circleTop}%`,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {cue}
      </div>
    </div>
  );
}

export default Jewel;
