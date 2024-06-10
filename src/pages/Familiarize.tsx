import React, { useState } from "react";
import AudioButton from "../modules/AudioButton";
import AudioPlayer from "../modules/AudioPlayer";
import Navbar from "../modules/Navbar";

function Familiarize() {
  const [strike, setStrike] = useState("");

  return (
    <>
      <Navbar></Navbar>
      <AudioPlayer setStrike={setStrike}></AudioPlayer>
      <div className="button-container">
        {/* <Button imagesrc={wave} video={video} setVideo={setVideo}></Button> */}
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
