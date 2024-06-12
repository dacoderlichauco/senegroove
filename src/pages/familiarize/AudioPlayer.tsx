import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import * as Tone from "tone";

type AudioPlayerProps = {
  strike: string;
  setStrike: any;
  // tone: any;
  // setTone: any;
  // tones: any;
  // handleClick: any;
};

function AudioPlayer({ strike, setStrike }: AudioPlayerProps) {
  const tan = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/tan-audio.mp3`
  ).toDestination();
  const tet = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/tet-audio.mp3`
  ).toDestination();
  const chex = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/chex-audio.mp3`
  ).toDestination();
  const rwan = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/rwan-audio.mp3`
  ).toDestination();
  const tek = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/tek-audio.mp3`
  ).toDestination();
  const gin = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/gin-audio.mp3`
  ).toDestination();
  const pax = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/pax-audio.mp3`
  ).toDestination();
  const pin = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/pin-audio.mp3`
  ).toDestination();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      let player = null;
      let play = true;
      const key = event.key;
      if (key === "a") {
        player = tan;
        // setTone(tones[0]);
        setStrike("tan");
      } else if (key === "s") {
        player = tet;
        // setTone(tones[1]);
        setStrike("tet");
      } else if (key === "d") {
        player = chex;
        // setTone(tones[2]);
        setStrike("chex");
      } else if (key === "f") {
        player = rwan;
        // setTone(tones[3]);
        setStrike("rwan");
      } else if (key === "j") {
        player = tek;
        // setTone(tones[4]);
        setStrike("tek");
      } else if (key === "k") {
        player = gin;
        // setTone(tones[5]);
        setStrike("gin");
      } else if (key === "l") {
        player = pax;
        // setTone(tones[6]);
        setStrike("pax");
      } else if (key === ";") {
        player = pin;
        // setTone(tones[7]);
        setStrike("pin");
      } else {
        play = false;
        setStrike("");
      }

      console.log(event.key);
      if (player) {
        // tone.start();
        player.start();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return <div></div>;
}

export default AudioPlayer;
