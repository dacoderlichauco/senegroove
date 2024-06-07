import React, { useState, useEffect, useRef } from "react";
import Button from "../modules/Button";
import Video from "../modules/Video";
import Navbar from "../modules/Navbar";

import wave from ".././media/sound-wave.png";
import "./Tutorial.css";

type TutorialProps = {
  video: string;
  setVideo: any;
};

function Tutorial({ video, setVideo }: TutorialProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [level, setLevel] = useState(1);

  return (
    <>
      <Navbar></Navbar>
      <div className="button-container">
        <Button
          imagesrc={wave}
          video={video}
          setVideo={setVideo}
          name={"tan"}
        ></Button>
        <Button
          imagesrc={wave}
          video={video}
          setVideo={setVideo}
          name={"tet"}
        ></Button>
        <Button
          imagesrc={wave}
          video={video}
          setVideo={setVideo}
          name={"chex"}
        ></Button>
        <Button
          imagesrc={wave}
          video={video}
          setVideo={setVideo}
          name={"gin"}
        ></Button>
        <Button
          imagesrc={wave}
          video={video}
          setVideo={setVideo}
          name={"pax"}
        ></Button>
        <Button
          imagesrc={wave}
          video={video}
          setVideo={setVideo}
          name={"pin"}
        ></Button>
        <Button
          imagesrc={wave}
          video={video}
          setVideo={setVideo}
          name={"rwan"}
        ></Button>
        <Button
          imagesrc={wave}
          video={video}
          setVideo={setVideo}
          name={"tek"}
        ></Button>
      </div>

      <div className="video-container">
        {video !== "none" && (
          <Video
            videosrc={`${process.env.PUBLIC_URL}/senegroove-media/${video}.mp4`}
            setVideo={setVideo}
          ></Video>
        )}
      </div>
    </>
  );
}

export default Tutorial;
