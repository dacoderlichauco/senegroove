import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import Navbar from "../Navbar";
import wave from "../.././media/sound-wave.png";
import ReactPlayer from "react-player";
// Remove the import for the old CSS file
// import "./Tutorial.css";

type TutorialProps = {
  video: string;
  setVideo: any;
};

function Tutorial({ video, setVideo }: TutorialProps) {
  const reactPlayer = useRef<ReactPlayer>(null);
  // const [level, setLevel] = useState(1);

  const handleReplay = () => {
    if (reactPlayer.current) {
      reactPlayer.current.seekTo(0);
    }
  };

  useEffect(() => {
    setVideo("none");
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-wrap justify-center items-center w-full space-x-4">
        <div className="transform -translate-x-1/2 translate-y-full">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"tan"}
            handleReplay={handleReplay}
          ></Button>
        </div>
        <div className="transform -translate-x-1/3 translate-y-6">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"tet"}
            handleReplay={handleReplay}
          ></Button>
        </div>
        <div className="transform -translate-x-2.5">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"chex"}
            handleReplay={handleReplay}
          ></Button>
        </div>
        <div className="transform translate-x-2.5">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"pin"}
            handleReplay={handleReplay}
          ></Button>
        </div>
        <div className="transform translate-x-1/3 translate-y-6">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"gin"}
            handleReplay={handleReplay}
          ></Button>
        </div>
        <div className="transform translate-x-1/2 translate-y-full">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"pax"}
            handleReplay={handleReplay}
          ></Button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center w-full space-x-4">
        <div className="transform -translate-x-1/2">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"rwan"}
            handleReplay={handleReplay}
          ></Button>
        </div>
        <div className="transform translate-x-1/2">
          <Button
            imagesrc={wave}
            video={video}
            setVideo={setVideo}
            name={"tek"}
            handleReplay={handleReplay}
          ></Button>
        </div>
      </div>

      <div className="flex justify-center items-center mt-5">
        {video !== "none" && (
          <ReactPlayer
            ref={reactPlayer}
            url={`${process.env.PUBLIC_URL}/videos/${video}.mp4`}
            playing={true}
            onEnded={() => {
              setVideo("none");
            }}
            controls
          ></ReactPlayer>
        )}
      </div>
    </>
  );
}

export default Tutorial;
