import React, { useState } from "react";
import AudioButton from "../modules/AudioButton";
import AudioPlayer from "../modules/AudioPlayer";
import Navbar from "../modules/Navbar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <AudioPlayer></AudioPlayer>
      <div>
        {/* <Button imagesrc={wave} video={video} setVideo={setVideo}></Button> */}
        {/* <Tutorial video={video} setVideo={setVideo}></Tutorial> */}
        <AudioButton></AudioButton>
      </div>
    </>
  );
}

export default Home;
