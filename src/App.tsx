import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./modules/Button";
import Video from "./modules/Video";

import wave from "./media/sound-wave.png";
import Tutorial from "./pages/Tutorial";
import AudioButton from "./modules/AudioButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Familiarize from "./pages/Familiarize";

function App() {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const audioRef = useRef<HTMLAudioElement | null>(null);

  const [video, setVideo] = useState("none");
  // const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/tutorial"
          element={<Tutorial video={video} setVideo={setVideo} />}
        ></Route>
        <Route path="familiarize" element={<Familiarize></Familiarize>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
