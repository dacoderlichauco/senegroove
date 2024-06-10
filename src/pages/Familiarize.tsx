import React, { useState, useEffect } from "react";
import AudioButton from "../modules/AudioButton";
import AudioPlayer from "../modules/AudioPlayer";
import Navbar from "../modules/Navbar";
import * as Tone from "tone";


function Familiarize() {
  const [strike, setStrike] = useState("");
  // const [tone, setTone] = useState(new Tone.Player(""));
  // let tones: Tone.Player[] = Array();

  // const tan = new Tone.Player(`${process.env.PUBLIC_URL}/audio/tan-audio.mp3`).toDestination();
  // const tet = new Tone.Player(`${process.env.PUBLIC_URL}/audio/tet-audio.mp3`).toDestination();
  // const chex = new Tone.Player(`${process.env.PUBLIC_URL}/audio/chex-audio.mp3`).toDestination();
  // const rwan = new Tone.Player(`${process.env.PUBLIC_URL}/audio/rwan-audio.mp3`).toDestination();
  // const tek = new Tone.Player(`${process.env.PUBLIC_URL}/audio/tek-audio.mp3`).toDestination();
  // const gin = new Tone.Player(`${process.env.PUBLIC_URL}/audio/gin-audio.mp3`).toDestination();
  // const pax = new Tone.Player(`${process.env.PUBLIC_URL}/audio/pax-audio.mp3`).toDestination();
  // const pin = new Tone.Player(`${process.env.PUBLIC_URL}/audio/pin-audio.mp3`).toDestination();

  // tones.push(tan);
  // tones.push(tet);
  // tones.push(chex);
  // tones.push(rwan);
  // tones.push(tek);
  // tones.push(gin);
  // tones.push(pax);
  // tones.push(pin);
  

  return (
    <>
      <Navbar></Navbar>
      <AudioPlayer strike={strike} setStrike={setStrike}></AudioPlayer>
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
