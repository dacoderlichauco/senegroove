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
      <div>
        {/* <Button imagesrc={wave} video={video} setVideo={setVideo}></Button> */}
        {/* <Tutorial video={video} setVideo={setVideo}></Tutorial> */}
        <AudioButton strike={strike}></AudioButton>
      </div>
    </>
  );
}

export default Familiarize;
