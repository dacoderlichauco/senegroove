import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

type LamineProps = {
  lamine: string;
  setLamine: any;
  handlePlay: any;
};

function Lamine({ lamine, setLamine, handlePlay }: LamineProps) {
  const reactPlayer = useRef<ReactPlayer>(null);
  const [video, setVideo] = useState<JSX.Element>(<ReactPlayer></ReactPlayer>);
  const [key, setKey] = useState(0);

  const handleReplay = () => {
    if (reactPlayer.current) {
      reactPlayer.current.seekTo(0);
    }
  };

  useEffect(() => {
    const handleRefresh = () => {
      setKey((prevKey) => prevKey + 1); // Increment key to force re-render
    };

    window.addEventListener("beforeunload", handleRefresh);

    return () => {
      window.removeEventListener("beforeunload", handleRefresh);
    };
  }, []);

  useEffect(() => {
    setVideo(
      <ReactPlayer
        key={key}
        ref={reactPlayer}
        url={`${process.env.PUBLIC_URL}/lamine/${lamine}.mp4`}
        onEnded={() => {
          setLamine("none");
        }}
        controls
        // onReady={() => reactPlayer.current?.seekTo(0)}
        onPlay={handlePlay}
      ></ReactPlayer>
    );
    handleReplay();
  }, []);

  return <div className="z-10">{video}</div>;
}

export default Lamine;
