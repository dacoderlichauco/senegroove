import React, {useState, useRef } from 'react';
import './Button.css';
import wave from "./media/sound-wave.png";

type ButtonProps = {
    imagesrc: string;
    // audiosrc: string;
    // isPlaying: boolean;
    // audioRef: any;
    // setIsPlaying: any;
    video: number;
    setVideo: any;
    order: number;
}

function Button({imagesrc, video, setVideo, order}: ButtonProps) {
    
    const handleClick = () => {
        if (video == 0) {
            setVideo(order)
        }
        // audioRef.current = new Audio(audiosrc)
        // audioRef.current.play()

    }

    let videoname="none";

    switch(order) {
        case 1: 
            videoname = "tan";
            break;
        case 2: 
            videoname = "tet";
            break;
        case 3: 
            videoname = "chex";
            break;
        case 4: 
            videoname = "gin";
            break;
        case 5: 
            videoname = "pax";
            break;
        case 6: 
            videoname = "pin";
            break;
        case 7: 
            videoname = "rwan";
            break;
        case 8: 
            videoname = "tek";
            break;
    }

    return (
        <div className="button-item">
          {/* <img onClick={handleClick} src={imagesrc} alt={`Button ${order}`} /> */}
          <a onClick={handleClick}> {videoname} </a>
        </div>
      );
    }

export default Button;