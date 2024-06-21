import React, { useState, useEffect } from "react"; // Import React and hooks
import * as Tone from "tone"; // Import Tone.js for sound

// Define the type for the component's props
type AudioButtonProps = {
  strike: string;
  keyTrigger: string;
  // tones: { [key: string]: Tone.Player };
  tone: Tone.Player;
};

function AudioButton({ strike, keyTrigger, tone }: AudioButtonProps) {
  // State to store ripple effects
  const [ripples, setRipples] = useState<Array<{ id: number }>>([]);
  // State to track the next ripple ID
  const [nextRippleId, setNextRippleId] = useState(0);
  // const [pressed, setPressed] = useState(false);

  // let pressed = false;

  // Function to handle playing sound and creating a ripple effect
  const handlePlaySound = async () => {
    const ripple = { id: nextRippleId };
    setRipples((prev) => [...prev, ripple]);
    setNextRippleId((prev) => prev + 1);

    tone.start(Tone.context.currentTime);

    await Tone.start();

    // Remove the ripple after a short delay to reset the animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 500); // Adjust delay as needed
  };

  // Function to handle key press events
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.repeat) return;
    // let pressed = false;
    const key = event.key.toLowerCase();

    // if (key === pressed) return;

    if (key === keyTrigger) {
      handlePlaySound();
    }
  };

  // useEffect hook to add/remove key press event listener
  useEffect(() => {
    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [nextRippleId]); // Re-run when nextRippleId changes

  // Render the button with ripple effects
  return (
    <div className="flex items-center justify-center h-screen relative">
      <div
        className="relative h-24 w-24 rounded-full bg-gray-300 text-center leading-[6rem] text-lg text-gray-700 border border-white cursor-pointer overflow-hidden"
        onClick={handlePlaySound}
      >
        {strike}
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-black bg-opacity-30 animate-ripple"
          />
        ))}
      </div>
    </div>
  );
}

export default AudioButton;
