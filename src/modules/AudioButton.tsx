import React, { useState, useEffect } from "react";
import "./AudioButton.css";
import * as Tone from "tone";

type AudioButtonProps = {
  strike: string;
  setStrike: any;
  // tones: any;
  // setTone: any;
};

function AudioButton({ strike, setStrike }: AudioButtonProps) {
  const [ripples, setRipples] = useState<Array<{ top: number; left: number; id: number }>>([]);
  const [nextRippleId, setNextRippleId] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ripple = {
      top: event.clientY - rect.top - 50, // Center ripple within circle
      left: event.clientX - rect.left - 50, // Center ripple within circle
      id: nextRippleId,
    };
    console.log("Ripple created at: ", ripple); // Debugging log
    setRipples((prev) => [...prev, ripple]);
    setNextRippleId((prev) => prev + 1);
    setStrike(strike);
    // switch(strike) {
    //   case "tan":
    //     setTone(tones[0]);
    //     break;
    //   case "tet":
    //     setTone(tones[1]);
    //     break;
    //   case "chex":
    //     setTone(tones[2]);
    //     break;
    //   case "rwan":
    //     setTone(tones[3]);
    //     break;
    //   case "tek":
    //     setTone(tones[4]);
    //     break;
    //   case "gin":
    //     setTone(tones[5]);
    //     break;
    //   case "pax":
    //     setTone(tones[6]);
    //     break;
    //   case "pin":
    //     setTone(tones[7]);
    //     break; 
    // }
  };

  useEffect(() => {
    console.log("Ripples: ", ripples); // Debugging log
  }, [ripples]);

  // useEffect(()=> {
  //   if (strike) {
  //     const tone = new Tone.Player(`${process.env.PUBLIC_URL}/audio/${strike}-audio.mp3`).toDestination();
  //     tone.start();
  //   }
  // }, []);

  return (
    <div className="circle-container">
      <div className="circle" onClick={handleClick}>
        {strike}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="ripple"
            style={{
              top: ripple.top,
              left: ripple.left,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default AudioButton;
