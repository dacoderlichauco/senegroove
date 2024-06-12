import React, { useState } from "react";
import AudioButton from "../familiarize/AudioButton";
import AudioPlayer from "../familiarize/AudioPlayer";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen lightblue">
        <h1 className="text-white text-8xl animate-fade-in">
          Welcome to Senegroove!
        </h1>
      </div>
    </>
  );
}

export default Home;
