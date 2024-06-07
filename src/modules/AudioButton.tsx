import React, { useState, useEffect } from "react";
import "./AudioButton.css";

function AudioButton() {
  const [isVibrating, setIsVibrating] = useState(false);

  const handleClick = () => {
    setIsVibrating(true);
  };

  return (
    <div className="circle-container">
      <a className={`circle-underlay ${isVibrating ? "vibrate" : ""}`}></a>
      <button className={`circle-overlay`} onClick={handleClick}>
        {" "}
        text{" "}
      </button>
    </div>
  );
}

export default AudioButton;
