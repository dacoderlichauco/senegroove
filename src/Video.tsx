import React, { forwardRef } from "react";
type VideoProps = {
  videosrc: string;
  setVideo: any;
};

function Video({ videosrc, setVideo }: VideoProps) {
  return (
    <div>
      <video
        onEnded={() => {
          setVideo("none");
        }}
        width="1000"
        controls
      >
        <source src={videosrc}></source>
      </video>
    </div>
  );
}

export default Video;
