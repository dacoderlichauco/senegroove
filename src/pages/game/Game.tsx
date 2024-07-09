import React, { useEffect, useState } from "react";
import Animation from "./Animation";
import ReactPlayer from 'react-player';

// type JsonEntry = {
//   TIME: string;
//   LABEL: string;
// };


const Game: React.FC = () => {
  // const [countdownArray, setCountdownArray] = useState<JsonEntry[]>([]);
  // const [jArray, setJArray] = useState<JsonEntry[]>([]);
  // const [fArray, setFArray] = useState<JsonEntry[]>([]);
  // const [start, setStart] = useState(false);

  // useEffect(() => {
  //   fetch('/fandj.json')
  //     .then((response) => response.json())
  //     .then((data: JsonEntry[]) => {
  //       const countdown = data.filter(entry => /\d/.test(entry.LABEL));
  //       const j_arr = data.filter(entry => entry.LABEL === 'j');
  //       const f_arr = data.filter(entry => entry.LABEL === 'f');

  //       setCountdownArray(countdown);
  //       setJArray(j_arr);
  //       setFArray(f_arr);
  //     })
  //     .catch((error) => console.error('Error loading JSON:', error));
  // }, []);

  // const handleStart = () => {
  //   setStart(true);
  // };

  return (
    // <div>
    //   <button onClick={handleStart}>Start Gems</button>
    //   {start && (
    //     <div className="game-container" style={{ display: "flex", flexDirection: "row" }}>
    //       <Lane l_width={window.innerWidth / 2} l_height={window.innerHeight} keyAssigned="f" gemData={fArray} nowBarHeight={barHeight} start={start} />
    //       <Lane l_width={window.innerWidth / 2} l_height={window.innerHeight} keyAssigned="j" gemData={jArray} nowBarHeight={barHeight}start={start} />
    //     </div>
    //   )}
    // </div>
    <div>
    {/* <ReactPlayer
    url="/video_01.mp4"
    className="z-50"
    
    /> */}
      
    <Animation videoUrl="/video_01.mp4" leftKey="f" rightKey="j" />
    
    </div>

  );
};

export default Game;
