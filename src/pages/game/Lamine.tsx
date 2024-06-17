import React, { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";

function Lamine() {
  const reactPlayer = useRef<ReactPlayer>(null);

  return (
    <div>
      <ReactPlayer ref={reactPlayer}></ReactPlayer>
    </div>
  );
}

export default Lamine;
