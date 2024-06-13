import React, { useState, useEffect } from "react"; // Import React and hooks
import * as Tone from "tone"; // Import Tone.js for sound

// Define the type for the component's props
type AudioButtonProps = {
  strike: string;
  keyTrigger: string;
};

function AudioButton({ strike, keyTrigger }: AudioButtonProps) {
  // State to store ripple effects
  const [ripples, setRipples] = useState<Array<{ id: number }>>([]);
  // State to track the next ripple ID
  const [nextRippleId, setNextRippleId] = useState(0);
  const [playing, setPlaying] = useState(false);
  // let playing = false;

  // Function to handle playing sound and creating a ripple effect
  const handlePlaySound = async () => {
    const ripple = { id: nextRippleId };
    setRipples((prev) => [...prev, ripple]);
    setNextRippleId((prev) => prev + 1);

    // Create and play the sound using Tone.js
    const url = `${process.env.PUBLIC_URL}/audio/${strike}_fix.wav`;
    const player = new Tone.Player(url, () => {
      player.toDestination();
      player.start();
    });

    await Tone.start();

    // Remove the ripple after a short delay to reset the animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 500); // Adjust delay as needed
  };

  // Function to handle key press events
  const handleKeyPress = (event: KeyboardEvent) => {
    if (!playing) {
      console.log("key down " + playing);
      setPlaying(true);
      if (event.key.toLowerCase() === keyTrigger.toLowerCase()) {
        handlePlaySound();
        // playing = true;
      }
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    setPlaying(false);
    console.log("key up");
    console.log(playing);
  };

  // useEffect hook to add/remove key press event listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []); // Re-run when nextRippleId changes

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

// import React, { useState, useEffect, useCallback } from "react";
// import * as Tone from "tone";

// // Define the type for the component's props
// type AudioButtonProps = {
//   strike: string;
//   keyTrigger: string;
// };

// const AudioButton: React.FC<AudioButtonProps> = ({ strike, keyTrigger }) => {
//   // State to store ripple effects
//   const [ripples, setRipples] = useState<Array<{ id: number }>>([]);
//   // State to track the next ripple ID
//   const [nextRippleId, setNextRippleId] = useState(0);
//   // State to track if a sound is currently playing
//   const [playing, setPlaying] = useState(false);

//   // Function to handle playing sound and creating a ripple effect
//   const handlePlaySound = useCallback(async () => {
//     if (playing) return;

//     setPlaying(true);

//     const ripple = { id: nextRippleId };
//     setRipples((prev) => [...prev, ripple]);
//     setNextRippleId((prev) => prev + 1);

//     // Create and play the sound using Tone.js
//     const url = `${process.env.PUBLIC_URL}/audio/${strike}_fix.wav`;
//     const player = new Tone.Player(url, () => {
//       player.toDestination();
//       player.start();
//     });

//     await Tone.start();

//     // Remove the ripple after a short delay to reset the animation
//     setTimeout(() => {
//       setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
//       setPlaying(false); // Reset playing state after sound finishes
//     }, 500); // Adjust delay as needed
//   }, [playing, nextRippleId, strike]);

//   // Function to handle key press events
//   const handleKeyPress = useCallback(
//     (event: KeyboardEvent) => {
//       if (event.key.toLowerCase() === keyTrigger.toLowerCase()) {
//         handlePlaySound();
//       }
//     },
//     [handlePlaySound, keyTrigger]
//   );

//   // useEffect hook to add/remove key press event listener
//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyPress);
//     return () => {
//       window.removeEventListener("keydown", handleKeyPress);
//     };
//   }, [handleKeyPress]);

//   // Render the button with ripple effects
//   return (
//     <div className="flex items-center justify-center h-screen relative">
//       <div
//         className="relative h-24 w-24 rounded-full bg-gray-300 text-center leading-[6rem] text-lg text-gray-700 border border-white cursor-pointer overflow-hidden"
//         onClick={handlePlaySound}
//       >
//         {strike}
//         {ripples.map((ripple) => (
//           <span
//             key={ripple.id}
//             className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-black bg-opacity-30 animate-ripple"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AudioButton;
