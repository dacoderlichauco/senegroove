import React from "react";
import AudioButton from "../modules/AudioButton";
import Navbar from "../modules/Navbar";

function Home() {
  return (
    <body>
      <Navbar></Navbar>
      <div>
        {/* <Button imagesrc={wave} video={video} setVideo={setVideo}></Button> */}
        {/* <Tutorial video={video} setVideo={setVideo}></Tutorial> */}
        <AudioButton></AudioButton>
      </div>
    </body>
  );
}

export default Home;
