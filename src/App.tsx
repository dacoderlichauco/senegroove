import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./pages/tutorial/Button";

import wave from "./media/sound-wave.png";
import Tutorial from "./pages/tutorial/Tutorial";
import AudioButton from "./pages/familiarize/AudioButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Familiarize from "./pages/familiarize/Familiarize";

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
