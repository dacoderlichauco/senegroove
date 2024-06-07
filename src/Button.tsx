import React, { useState, useRef } from "react";
import "./Button.css";
import wave from "./media/sound-wave.png";

type ButtonProps = {
  imagesrc: string;
  // audiosrc: string;
  // isPlaying: boolean;
  // audioRef: any;
  // setIsPlaying: any;
  video: string;
  setVideo: any;
  name: string;
};

function Button({ imagesrc, video, setVideo, name }: ButtonProps) {
  return (
    <div className="button-item">
      {/* <img onClick={handleClick} src={imagesrc} alt={`Button ${order}`} /> */}
      <a
        onClick={() => {
          setVideo(name);
        }}
      >
        {" " + name + " "}
      </a>
    </div>
  );
}

export default Button;
