import React, { useEffect, useState, useRef } from "react";
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
  const player1Ref = useRef<ReactPlayer | null>(null);
  const player2Ref = useRef<ReactPlayer | null>(null);
  const player3Ref = useRef<ReactPlayer | null>(null);

  const handlePlayAll = () => {
    if (player1Ref.current) {
      player1Ref.current.seekTo(0); // Reset to start
      player1Ref.current.getInternalPlayer().play();
    }
    if (player2Ref.current) {
      player2Ref.current.seekTo(0); // Reset to start
      player2Ref.current.getInternalPlayer().play();
    }
    if (player3Ref.current) {
      player3Ref.current.seekTo(0); // Reset to start
      player3Ref.current.getInternalPlayer().play();
    }
  };

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

<div>
      <button onClick={handlePlayAll}>Start All Videos</button>
      <div>
        <ReactPlayer
          ref={player1Ref}
          url="/video_01.mp4"
          controls={true}
        />
        <ReactPlayer
          ref={player2Ref}
          url="/easy_pattern.mp4"
          controls={true}
        />
        <ReactPlayer
          ref={player3Ref}
          url="/video_04.mp4"
          controls={true}
        />
      </div>
    </div>
    
    </div>

  );
};

export default Game;
