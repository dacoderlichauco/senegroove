import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Screen from "./Screen";
import Jewel from "./Jewel";
import Score from "./Score";
import Lamine from "./Lamine";
import ReactPlayer from "react-player";

import data from "../../audio_handling/smaller.json";

function Game() {
  const [score, setScore] = useState(0);
  const [jewels, setJewels] = useState<JSX.Element[]>([]);
  const [hit, setHit] = useState("");
  const [lamine, setLamine] = useState("easy_pattern");

  interface annotation {
    TIME: string;
    LABEL: string;
  }

  const handlePlay = () => {
    const sortedDataPoints = data.sort(
      (a: annotation, b: annotation) => parseFloat(a.TIME) - parseFloat(b.TIME)
    );

    sortedDataPoints.forEach((point: annotation) => {
      const timeInMs = parseFloat(point.TIME) * 1000;

      setTimeout(() => {
        setJewels((prevJewels) => [
          ...prevJewels,
          <Jewel
            time={point.TIME}
            score={score}
            setScore={setScore}
            setLast={setHit}
          />,
        ]);
      }, timeInMs);
    });
  };

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
  //           time={point.TIME}
  //           score={score}
  //           setScore={setScore}
  //           setLast={setHit}
  //         />,
  //       ]);
  //     }, timeInMs);
  //   });
  // }, []);

  // const annotations: annotation[] = data;

  return (
    <div>
      <Navbar />
      <Screen></Screen>
      <div className="flex w-screen justify-center items-center">
        <Score score={score} hit={hit}></Score>
      </div>
      <div className="flex w-screen h-4/5 justify-center items-center">
        <Lamine
          lamine={lamine}
          setLamine={setLamine}
          handlePlay={handlePlay}
        ></Lamine>
      </div>

      {jewels}
      {/* <Jewel score={score} setScore={setScore}></Jewel> */}
    </div>
  );
}

export default Game;
