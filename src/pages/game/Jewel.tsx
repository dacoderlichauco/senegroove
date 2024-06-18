import React, { useState, useEffect } from "react";

type JewelProps = {
  cue: string;
  time: number;
  //   strike: string;
  //   lane: boolean;
  score?: number;
  setScore: any;
  setLast: any;
};

function Jewel({ cue, time, setScore, setLast }: JewelProps) {
  const [circleTop, setCircleTop] = useState(0); // Track vertical position of the circle
  let top = time - parseFloat(cue) + 80;
  // const [hit, setHit] = useState(false);
  // const [show, setShow] = useState(true);
  //   const [score, setScore] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCircleTop((prevTop) => {
  //       if (prevTop < 90) {
  //         // Stop moving when hitting the bar
  //         if (prevTop == 85 && !hit) {
  //           setLast("Miss");
  //         }
  //         return prevTop + 5; // Move down by 5%
  //       } else if (prevTop >= 90) {
  //         setShow(false);
  //       }
  //       return prevTop;
  //     });
  //   }, 75); // Updates every n ms

  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   const handleKeyPress = (event: KeyboardEvent) => {
  //     if (circleTop >= 70) {
  //       if (event.key === "a") {
  //         console.log("Space key pressed");
  //         setLast("Early");
  //         setHit(true);
  //         setShow(false);
  //         if (circleTop >= 75 && circleTop <= 80) {
  //           // Expanded range
  //           console.log("Circle is within the now bar range");
  //           if (show) {
  //             setLast("HITTTTTT");
  //             setScore((prevScore: number) => {
  //               return prevScore + 1;
  //             });
  //           }

  //           // setCircleTop(0); // Reset circle to top
  //         }
  //       }
  //     }
  //   };

  //   window.addEventListener("keypress", handleKeyPress);

  //   return () => {
  //     window.removeEventListener("keypress", handleKeyPress);
  //   };
  // }, [circleTop]);

  return (
    <div>
      <div
        className="absolute w-20 h-20 bg-white rounded-full z-20"
        style={{
          top: `${top}%`,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {cue}
      </div>
      {/* {!hit && show ? (
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
      ) : (
        <></>
      )}
      {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-black text-white text-center">
        </div> */}
    </div>
  );
}

export default Jewel;
