import React, { useState, useEffect } from "react";
import "./AudioButton.css";

type AudioButtonProps = {
  strike: string;
  setStrike: any;
};

function AudioButton({ strike, setStrike }: AudioButtonProps) {
  const [isVibrating, setIsVibrating] = useState(false);

  const handleClick = () => {
    setIsVibrating(true);
    setStrike(strike);
  };

  return (
    <div className="circle-container">
      <a></a>
      <button className="circle" onClick={handleClick}>
        {strike}
      </button>
    </div>
  );
}

export default AudioButton;
