import React, { useState, useEffect } from "react";

type JewelProps = {
  time: string;
  score: number;
  setScore: any;
  setLast: any;
  setHits: any;
  setMisses: any;
  setEarly: any;
};

function Jewel({ time, score, setScore, setLast, setHits, setMisses, setEarly }: JewelProps) {
  const [circleTop, setCircleTop] = useState(0);
  const [hit, setHit] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCircleTop((prevTop) => {
        if (prevTop < 85) {
          return prevTop + 5;
        } else if (prevTop >= 85 && show) {
          setShow(false);
          setMisses((prev: number) => prev + 1);
          setLast("Miss");
        }
        return prevTop;
      });
    }, 75);

    return () => clearInterval(interval);
  }, [show]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (circleTop >= 70 && show) {
        if (event.code === "Space") {
          setHit(true);
          setShow(false);
          if (circleTop >= 75 && circleTop <= 80) {
            setLast("Hit");
            setHits((prev: number) => prev + 1);
            setScore((prevScore: number) => prevScore + 1);
          } else {
            setLast("Early");
            setEarly((prev: number) => prev + 1);
          }
        }
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [circleTop, show]);

  return (
    <div>
      {!hit && show ? (
        <div
          className="absolute w-20 h-20 bg-white rounded-full z-10"
          style={{
            top: `${circleTop}%`,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {time}
        </div>
      ) : null}
    </div>
  );
}

export default Jewel;
