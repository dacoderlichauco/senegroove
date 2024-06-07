import React from "react";
import AudioButton from "../modules/AudioButton";
import AudioPlayer from "../modules/AudioPlayer";
import Navbar from "../modules/Navbar";

function Home() {
  return (
    <body>
      <Navbar></Navbar>
      <AudioPlayer></AudioPlayer>
      <div>
        {/* <Button imagesrc={wave} video={video} setVideo={setVideo}></Button> */}
        {/* <Tutorial video={video} setVideo={setVideo}></Tutorial> */}
        <AudioButton></AudioButton>
      </div>
    </body>
  );
}

export default Home;
