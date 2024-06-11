import React, { useState, useEffect } from "react";
import * as Tone from "tone";

type AudioButtonProps = {
  strike: string;
  setStrike: any;
};

function AudioButton({ strike, setStrike }: AudioButtonProps) {
  const [ripples, setRipples] = useState<Array<{ top: number; left: number; id: number }>>([]);
  const [nextRippleId, setNextRippleId] = useState(0);

  const handleClick = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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

    const url = `${process.env.PUBLIC_URL}/audio/${strike}-audio.mp3`;
    const player = new Tone.Player(url, () => {
      player.toDestination();
      player.start();
    });

    await Tone.start(); // Ensure Tone.js context is started
  };

  useEffect(() => {
    console.log("Ripples: ", ripples); // Debugging log
  }, [ripples]);

  return (
    <div className="flex items-center justify-center h-screen relative">
      <div
        className="relative h-24 w-24 rounded-full bg-gray-300 text-center leading-[6rem] text-lg text-gray-700 border border-white cursor-pointer overflow-hidden"
        onClick={handleClick}
      >
        {strike}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute w-24 h-24 rounded-full bg-black bg-opacity-30 animate-ripple"
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
