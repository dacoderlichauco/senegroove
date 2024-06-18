import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

type LamineProps = {
  //   lamine: string;
  //   setLamine: any;
  //   handlePlay: any;
  reactPlayer: any;
  setTime: any;
  handlePause?: any;
  handlePlay?: any;
};

function Lamine({
  reactPlayer,
  setTime,
  handlePause,
  handlePlay,
}: LamineProps) {
  const [video, setVideo] = useState<JSX.Element>(<ReactPlayer></ReactPlayer>);
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    if (reactPlayer.current) {
      reactPlayer.current.seekTo(0);
    }
  };

  //   useEffect(() => {
  //     const handleRefresh = () => {
  //       setKey((prevKey) => prevKey + 1); // Increment key to force re-render
  //     };

  //     window.addEventListener("beforeunload", handleRefresh);

  //     return () => {
  //       window.removeEventListener("beforeunload", handleRefresh);
  //     };
  //   }, []);

  useEffect(() => {
    setVideo(
      <ReactPlayer
        key={key}
        ref={reactPlayer}
        url={`${process.env.PUBLIC_URL}/lamine/easy_pattern.mp4`}
        // onEnded={() => {
        //   setLamine("none");
        // }}
        controls
        // onReady={() => reactPlayer.current?.seekTo(0)}
        // onPlay={handlePlay}
        // onProgress={(progress) => {
        //   setTime(progress.played);
        // }}
        onPause={handlePause}
        onPlay={handlePlay}
      ></ReactPlayer>
    );
    handleReplay();
  }, []);

  return <div className="z-10">{video}</div>;
}

export default Lamine;
