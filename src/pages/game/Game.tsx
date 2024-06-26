import React from "react";

import Navbar from "../Navbar";
import Lane from "./Lane";

const Game: React.FC = () => {
  return (
    <div className="Game">
      <Navbar />
      <Lane width={window.innerWidth/2} height={window.innerHeight} />
      <Lane width={window.innerWidth/2} height={window.innerHeight} />
    </div>
  );
};

export default Game;
