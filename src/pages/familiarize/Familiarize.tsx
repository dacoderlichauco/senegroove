import React, { useState, useEffect } from "react";
import AudioButton from "./AudioButton";
import AudioPlayer from "./AudioPlayer";
import Navbar from "../Navbar";
import * as Tone from "tone";


function Familiarize() {
  const [strike, setStrike] = useState("");


  return (
    <>
      <Navbar></Navbar>
      <AudioPlayer strike={strike} setStrike={setStrike}></AudioPlayer>
      <div className="button-container">       
      
        {/* <Tutorial video={video} setVideo={setVideo}></Tutorial> */}
        <AudioButton strike={"tan"} setStrike={setStrike}></AudioButton>
        <AudioButton strike={"tet"} setStrike={setStrike}></AudioButton>
        <AudioButton strike={"chex"} setStrike={setStrike}></AudioButton>
        <AudioButton strike={"rwan"} setStrike={setStrike}></AudioButton>
        <AudioButton strike={"tek"} setStrike={setStrike}></AudioButton>
        <AudioButton strike={"pin"} setStrike={setStrike}></AudioButton>
        <AudioButton strike={"gin"} setStrike={setStrike}></AudioButton>
        <AudioButton strike={"pax"} setStrike={setStrike}></AudioButton>
      </div>
    </>
  );
}

export default Familiarize;
