import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Screen from "./Screen";
import Jewel from "./Jewel";
import Score from "./Score";
import data from "../../audio_handling/smaller.json";

function Game() {
  const [score, setScore] = useState(0);
  const [misses, setMisses] = useState(0);
  const [earlies, setEarlies] = useState(0);
  const [jewels, setJewels] = useState<JSX.Element[]>([]);
  const [last, setLast] = useState("");
  const [current, setCurrent] = useState(0);

  interface annotation {
    TIME: string;
    LABEL: string;
  }

  useEffect(() => {
    // Parse and sort the data points by time
    const sortedDataPoints = data.sort(
      (a: annotation, b: annotation) => parseFloat(a.TIME) - parseFloat(b.TIME)
    );

    let id = 0;

    sortedDataPoints.forEach((point: annotation) => {
      const timeInMs = parseFloat(point.TIME) * 1000;

      setTimeout(() => {
        setJewels((prevJewels) => [
          ...prevJewels,
          <Jewel
            key={id}
            time={point.TIME}
            setScore={setScore}
            setMisses={setMisses}
            setEarlies={setEarlies}
            setLast={setLast}
            current={current}
          />,
        ]);
      }, timeInMs);

      id += 1;
    });
  }, []);

  // const annotations: annotation[] = data;

  return (
    <div>
      <Navbar />
      <Screen></Screen>
      <div className="flex w-screen justify-center items-center">
        <Score
          score={score}
          misses={misses}
          earlies={earlies}
          last={last}
        ></Score>
      </div>

      {jewels}
      {/* <Jewel score={score} setScore={setScore}></Jewel> */}
    </div>
  );
}

export default Game;
