import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import Screen from "./Screen";
import Jewel from "./Jewel";
import Score from "./Score";
import Lamine from "./Lamine";
import ReactPlayer from "react-player";

import data from "../../audio_handling/smaller.json";

function Game() {
  const [time, setTime] = useState(0);
  const reactPlayer = useRef<ReactPlayer>(null);
  const [score, setScore] = useState(0);
  const [jewels, setJewels] = useState<JSX.Element[]>([]);
  const [hit, setHit] = useState("");
  // const [lamine, setLamine] = useState("easy_pattern");

  interface annotation {
    TIME: string;
    LABEL: string;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // return () => clearInterval(interval);
      if (reactPlayer.current) {
        console.log("current time" + reactPlayer.current.getCurrentTime());
        setTime(reactPlayer.current.getCurrentTime());
      }
    }, 100);
  }, []);

  const handlePlay = () => {
    if (reactPlayer.current) setTime(reactPlayer.current.getCurrentTime());
  };

  const handlePause = () => {};

  // useEffect(() => {
  //   // Parse and sort the data points by time
  //   const sortedDataPoints = data.sort(
  //     (a: annotation, b: annotation) => parseFloat(a.TIME) - parseFloat(b.TIME)
  //   );

  //   sortedDataPoints.forEach((point: annotation) => {
  //     const timeInMs = parseFloat(point.TIME) * 1000;

  //     setTimeout(() => {
  //       setJewels((prevJewels) => [
  //         ...prevJewels,
  //         <Jewel
  //           // time={time}
  //           player={reactPlayer}
  //           cue={point.TIME}
  //           score={score}
  //           setScore={setScore}
  //           setLast={setHit}
  //         />,
  //       ]);
  //     }, timeInMs);
  //   });
  // }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Screen />
      <div className="flex justify-center items-center">
        <Lamine reactPlayer={reactPlayer} setTime={setTime}></Lamine>
      </div>
      {jewels}
    </div>
  );
}

export default Game;
