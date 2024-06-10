import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

type AudioPlayerProps = {
  setStrike: any;
};

function AudioPlayer({ setStrike }: AudioPlayerProps) {
  const tan = new Audio(`${process.env.PUBLIC_URL}/audio/tan-audio.mp3`);
  const tet = new Audio(`${process.env.PUBLIC_URL}/audio/tet-audio.mp3`);
  const chex = new Audio(`${process.env.PUBLIC_URL}/audio/chex-audio.mp3`);
  const rwan = new Audio(`${process.env.PUBLIC_URL}/audio/rwan-audio.mp3`);
  const tek = new Audio(`${process.env.PUBLIC_URL}/audio/tek-audio.mp3`);
  const gin = new Audio(`${process.env.PUBLIC_URL}/audio/gin-audio.mp3`);
  const pax = new Audio(`${process.env.PUBLIC_URL}/audio/pax-audio.mp3`);
  const pin = new Audio(`${process.env.PUBLIC_URL}/audio/pin-audio.mp3`);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      let audio = new Audio("none");
      let play = true;
      const key = event.key;
      if (key === "a") {
        audio = tan;
        setStrike("tan");
      } else if (key === "s") {
        audio = tet;
        setStrike("tet");
      } else if (key === "d") {
        audio = chex;
        setStrike("chex");
      } else if (key === "f") {
        audio = rwan;
        setStrike("rwan");
      } else if (key === "j") {
        audio = tek;
        setStrike("tek");
      } else if (key === "k") {
        audio = gin;
        setStrike("gin");
      } else if (key === "l") {
        audio = pax;
        setStrike("pax");
      } else if (key === ";") {
        audio = pin;
        setStrike("pin");
      } else {
        play = false;
        setStrike("");
      }

      if (play) {
        audio.pause();
        audio.play();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return <div>Press a key to play the corresponding audio.</div>;
}

export default AudioPlayer;
