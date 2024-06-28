import React, { useEffect, useState } from "react";
import Lane from "./Lane";
import { GemData } from "../../types";

const Game: React.FC = () => {
  const [gemData, setGemData] = useState<GemData[]>([]);

  useEffect(() => {
    fetch('/path/to/your/json/file.json')
      .then(response => response.json())
      .then(data => {
        console.log("Fetched gem data:", data);
        setGemData(data);
      })
      .catch(error => console.error('Error fetching gem data:', error));
  }, []);

  const nowBarHeight = 100; // Example value, adjust as needed

  return (
    <div className="game-container" style={{ display: "flex", flexDirection: "row" }}>
      <Lane l_width={window.innerWidth / 2} l_height={window.innerHeight} keyAssigned="f" gemData={gemData} nowBarHeight={nowBarHeight} />
      <Lane l_width={window.innerWidth / 2} l_height={window.innerHeight} keyAssigned="j" gemData={gemData} nowBarHeight={nowBarHeight} />
    </div>
  );
};

export default Game;