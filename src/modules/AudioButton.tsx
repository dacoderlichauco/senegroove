import React, { useState, useEffect } from "react";
import "./AudioButton.css";

type AudioButtonProps = {
  strike: string;
};

function AudioButton({ strike }: AudioButtonProps) {
  const [isVibrating, setIsVibrating] = useState(false);

  const handleClick = () => {
    setIsVibrating(true);
  };

  return (
    <div className="circle-container">
      <a className={`circle-underlay ${isVibrating ? "vibrate" : ""}`}></a>
      <button className={`circle-overlay`} onClick={handleClick}>
        {strike}
      </button>
    </div>
  );
}

export default AudioButton;
