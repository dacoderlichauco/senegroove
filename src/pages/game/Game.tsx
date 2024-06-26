import React, {useEffect, useState, useRef} from "react";

import Navbar from "../Navbar";
import Lane from "./Lane";


type GemData = {
  TIME: string;
  LABEL: string;
};

const Game: React.FC = () => {
  const [gemData, setGemData] = useState<GemData[]>([]);
  const [countdownData, setCountdownData] = useState<GemData[]>([]);

  useEffect(() => {
    fetch('/fandj.json') // Adjust the path to your JSON file
      .then(response => response.json())
      .then(data => setGemData(data))
      .catch(error => console.error('Error loading JSON:', error));
  }, []);

  return (
    <div className="Game">
      <Navbar />
      <div
      
      style={{
        display: 'flex', // Use flexbox
        justifyContent: 'center', // Center the lanes horizontally
        alignItems: 'flex-start', // Align lanes to the top of the container
        height: '100vh',
        backgroundColor: '#f0f0f0',

      }}
      >

      
      <Lane l_width={window.innerWidth/2} l_height={window.innerHeight} keyAssigned="f" />
      <Lane l_width={window.innerWidth/2} l_height={window.innerHeight}  keyAssigned="j"/>
      </div>
    </div>
  );
};

export default Game;
