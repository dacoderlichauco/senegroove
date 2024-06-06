import React, {useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import Video from "./Video";

import wave from "./media/sound-wave.png";
import Tutorial from './Tutorial';


function App() {

  // const [isPlaying, setIsPlaying] = useState(false);
  // const audioRef = useRef<HTMLAudioElement | null>(null);

  const [video, setVideo] = useState(0);
  // const videoRef = useRef<HTMLVideoElement | null>(null);



  return (
    <body>
      <div>
      {/* <Button imagesrc={wave} video={video} setVideo={setVideo}></Button> */}
      <Tutorial video={video} setVideo={setVideo}></Tutorial>
    </div>
    </body>
    
  );
}

export default App;
