import React, { useEffect } from "react";
import * as Tone from "tone";
import { useSearchParams } from "react-router-dom";

type AudioPlayerProps = {
  setStrike: any;
};

function AudioPlayer({ setStrike }: AudioPlayerProps) {
  const tan = new Tone.Player(`${process.env.PUBLIC_URL}/audio/tan-audio.mp3`).toDestination();
  const tet = new Tone.Player(`${process.env.PUBLIC_URL}/audio/tet-audio.mp3`).toDestination();
  const chex = new Tone.Player(`${process.env.PUBLIC_URL}/audio/chex-audio.mp3`).toDestination();
  const rwan = new Tone.Player(`${process.env.PUBLIC_URL}/audio/rwan-audio.mp3`).toDestination();
  const tek = new Tone.Player(`${process.env.PUBLIC_URL}/audio/tek-audio.mp3`).toDestination();
  const gin = new Tone.Player(`${process.env.PUBLIC_URL}/audio/gin-audio.mp3`).toDestination();
  const pax = new Tone.Player(`${process.env.PUBLIC_URL}/audio/pax-audio.mp3`).toDestination();
  const pin = new Tone.Player(`${process.env.PUBLIC_URL}/audio/pin-audio.mp3`).toDestination();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      let player = null;
      // let audio = new Audio("none");
      let play = true;
      const key = event.key;
      if (key === "a") {
        player = tan;
        setStrike("tan");
      } else if (key === "s") {
        player = tet;
        setStrike("tet");
      } else if (key === "d") {
        player = chex;
        setStrike("chex");
      } else if (key === "f") {
        player = rwan;
        setStrike("rwan");
      } else if (key === "j") {
        player = tek;
        setStrike("tek");
      } else if (key === "k") {
        player = gin;
        setStrike("gin");
      } else if (key === "l") {
        player = pax;
        setStrike("pax");
      } else if (key === ";") {
        player = pin;
        setStrike("pin");
      } else {
        play = false;
        setStrike("");
      }

      if (player) {
        player.start();
        // audio.pause();
        // audio.play();
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
