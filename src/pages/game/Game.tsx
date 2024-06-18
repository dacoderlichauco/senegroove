import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Screen from "./Screen";
import Jewel from "./Jewel";
import Score from "./Score";
import data from "../../audio_handling/smaller.json";

function Game() {
  const [score, setScore] = useState(0);
  const [jewels, setJewels] = useState<JSX.Element[]>([]);
  const [hit, setHit] = useState("");
  const [hits, setHits] = useState(0);
  const [misses, setMisses] = useState(0);
  const [early, setEarly] = useState(0);

  interface annotation {
    TIME: string;
    LABEL: string;
  }

  useEffect(() => {
    // Parse and sort the data points by time
    const sortedDataPoints = data.sort(
      (a: annotation, b: annotation) => parseFloat(a.TIME) - parseFloat(b.TIME)
    );

    sortedDataPoints.forEach((point: annotation) => {
      const timeInMs = parseFloat(point.TIME) * 1000;

      setTimeout(() => {
        setJewels((prevJewels) => [
          ...prevJewels,
          <Jewel
            key={point.TIME}
            time={point.TIME}
            score={score}
            setScore={setScore}
            setLast={setHit}
            setHits={setHits}
            setMisses={setMisses}
            setEarly={setEarly}
          />,
        ]);
      }, timeInMs);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Screen />
      <div className="flex w-screen justify-start items-center ml-5">
        <Score score={score} hit={hit} hits={hits} misses={misses} early={early} />
      </div>
      {jewels}
    </div>
  );
}

export default Game;
