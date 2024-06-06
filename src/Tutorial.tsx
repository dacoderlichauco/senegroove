import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import Video from "./Video";
import wave from "./media/sound-wave.png";
import './Tutorial.css';



type TutorialProps = {
    video: number;
    setVideo: any;

}

function Tutorial({video, setVideo} : TutorialProps) {

    const videoRef = useRef<HTMLVideoElement | null>(null);

    let videoname="none";

    switch(video) {
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
    <> 
        <div className="button-container">
            <Button imagesrc={wave} video={video} setVideo={setVideo} order={1}></Button>
            <Button imagesrc={wave} video={video} setVideo={setVideo} order={2}></Button>
            <Button imagesrc={wave} video={video} setVideo={setVideo} order={3}></Button>
            <Button imagesrc={wave} video={video} setVideo={setVideo} order={4}></Button>
            <Button imagesrc={wave} video={video} setVideo={setVideo} order={5}></Button>
            <Button imagesrc={wave} video={video} setVideo={setVideo} order={6}></Button>
            <Button imagesrc={wave} video={video} setVideo={setVideo} order={7}></Button>
            <Button imagesrc={wave} video={video} setVideo={setVideo} order={8}></Button>
        </div>
        
        <div className="video-container">
            {video != 0 && (<Video videosrc={`${process.env.PUBLIC_URL}/senegroove-media/${videoname}.mp4`} setVideo={setVideo}></Video>)}
        </div>
        
    </>
    );

}

export default Tutorial
    