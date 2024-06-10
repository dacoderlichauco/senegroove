import React, { useState, useEffect, useRef } from "react";
import Button from "../modules/Button";
import Video from "../modules/Video";
import Navbar from "../modules/Navbar";
import wave from ".././media/sound-wave.png";
import ReactPlayer from "react-player";
import "./Tutorial.css";

type TutorialProps = {
  video: string;
  setVideo: any;
};

function Tutorial({ video, setVideo }: TutorialProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // const [level, setLevel] = useState(1);

  return (
    <>
      <Navbar></Navbar>
      <div className="button-container">
        <div className="circle1">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"tan"}
          ></Button>
        </div>

        <div className="circle2">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"tet"}
          ></Button>
        </div>

        <div className="circle3">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"chex"}
          ></Button>
        </div>

        <div className="circle6">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"pin"}
          ></Button>
        </div>

        <div className="circle7">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"gin"}
          ></Button>
        </div>

        <div className="circle8">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"pax"}
          ></Button>
        </div>
      </div>

      <div className="button-container">
        <div className="circle4">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"rwan"}
          ></Button>
        </div>

        <div className="circle5">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"tek"}
          ></Button>
        </div>
      </div>

      <div className="video-container">
        {video !== "none" && (
          <ReactPlayer
            url={`${process.env.PUBLIC_URL}/senegroove-media/${video}.mp4`}
            playing={true}
            controls
          ></ReactPlayer>
        )}
      </div>
    </>
  );
}

export default Tutorial;
