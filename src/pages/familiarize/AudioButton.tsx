import React, { useState, useEffect, useRef } from "react";
import "./AudioButton.css";
import * as Tone from "tone";
import { async } from "q";
import AudioPlayer from "./AudioPlayer";

type AudioButtonProps = {
  strike: string;
  setStrike: any;
  // tones: any;
  // setTone: any;
};

function AudioButton({ strike, setStrike }: AudioButtonProps) {
  const [ripples, setRipples] = useState<
    Array<{ top: number; left: number; id: number }>
  >([]);
  const [nextRippleId, setNextRippleId] = useState(0);

  const handleClick = async (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ripple = {
      top: (rect.top + rect.height) / 2, // Center ripple within circle
      left: (rect.left + rect.width) / 2, // Center ripple within circle
      id: nextRippleId,
    };

    // console.log("Ripple created at: ", ripple); // Debugging log
    setRipples((prev) => [...prev, ripple]);
    setNextRippleId((prev) => prev + 1);
    setStrike(strike);

    const url = `${process.env.PUBLIC_URL}/audio/${strike}-audio.mp3`;
    const player = new Tone.Player(url, () => {
      player.toDestination();
      player.start();
    });

    await Tone.start(); // Ensure Tone.js context is started

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

  // useEffect(() => {
  //   const handleKeyPress = (event: KeyboardEvent) => {
  //     const buttonRef = useRef<HTMLButtonElement>(null);
  //     const key = event.key;

  //     if (buttonRef.current) {
  //       const rect = buttonRef.current.getBoundingClientRect();
  //       const centerX = rect.left + rect.width / 2;
  //       const centerY = rect.top + rect.height / 2;

  //       var keyMappings: { [id: string] : string; } = {};
  //       keyMappings["a"] = "tan";
  //       keyMappings["s"] = "tet";
  //       keyMappings["d"] = "chex";
  //       keyMappings["f"] = "rwan";
  //       keyMappings["j"] = "tek";
  //       keyMappings["k"] = "gin";
  //       keyMappings["l"] = "pax";
  //       keyMappings[";"] = "pin";

  //       if (keyMappings[key] === strike) {
  //         const nativeEvent = new MouseEvent('click', {
  //           bubbles: true,
  //           cancelable: true,
  //           clientX: centerX,
  //           clientY: centerY,
  //         });

  //         const reactMouseEvent = {
  //           ...nativeEvent,
  //           nativeEvent,
  //           currentTarget: buttonRef.current,
  //           target: buttonRef.current,
  //           bubbles: nativeEvent.bubbles,
  //           cancelable: nativeEvent.cancelable,
  //           defaultPrevented: nativeEvent.defaultPrevented,
  //           eventPhase: nativeEvent.eventPhase,
  //           isTrusted: nativeEvent.isTrusted,
  //           preventDefault: nativeEvent.preventDefault.bind(nativeEvent),
  //           isPropagationStopped: nativeEvent.stopPropagation.bind(nativeEvent),
  //           persist: () => {},
  //           timeStamp: nativeEvent.timeStamp,
  //           type: nativeEvent.type,
  //           altKey: nativeEvent.altKey,
  //           button: nativeEvent.button,
  //           buttons: nativeEvent.buttons,
  //           clientX: nativeEvent.clientX,
  //           clientY: nativeEvent.clientY,
  //           ctrlKey: nativeEvent.ctrlKey,
  //           getModifierState: nativeEvent.getModifierState.bind(nativeEvent),
  //           metaKey: nativeEvent.metaKey,
  //           movementX: nativeEvent.movementX,
  //           movementY: nativeEvent.movementY,
  //           pageX: nativeEvent.pageX,
  //           pageY: nativeEvent.pageY,
  //           relatedTarget: nativeEvent.relatedTarget,
  //           screenX: nativeEvent.screenX,
  //           screenY: nativeEvent.screenY,
  //           shiftKey: nativeEvent.shiftKey,
  //           detail: nativeEvent.detail,
  //           view: nativeEvent.view,
  //           which: nativeEvent.which,
  //         } as React.MouseEvent<HTMLButtonElement, MouseEvent>;

  //         // Dispatch the event on the button element
  //         buttonRef.current.dispatchEvent(nativeEvent);

  //         // Optionally call the onClick handler manually if needed
  //         handleClick(reactMouseEvent);
  //       }

  //   };

  //   window.addEventListener("keydown", handleKeyPress);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyPress);
  //   };
  // });

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
