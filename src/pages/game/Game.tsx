import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Screen from "./Screen";
import Jewel from "./Jewel";
import Score from "./Score";

function Game() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <Navbar />
      <Screen></Screen>
      <Score score={score}></Score>
      <Jewel score={score} setScore={setScore}></Jewel>
    </div>
  );
}

export default Game;
