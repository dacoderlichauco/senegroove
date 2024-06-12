import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import * as Tone from "tone";

type AudioPlayerProps = {
  strike: string;
  setStrike: any;
};

function AudioPlayer({ strike, setStrike }: AudioPlayerProps) {
  let keyPressed = "";

  const tan = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/tan_fix.wav`
  ).toDestination();
  const tet = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/tet_fix.wav`
  ).toDestination();
  const chex = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/chex_fix.wav`
  ).toDestination();
  const rwan = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/rwan_fix.wav`
  ).toDestination();
  const tek = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/tek_fix.wav`
  ).toDestination();
  const gin = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/gin_fix.wav`
  ).toDestination();
  const pax = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/pax_fix.wav`
  ).toDestination();
  const pin = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/pin_fix.wav`
  ).toDestination();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;

      if (key !== keyPressed) {
        let player = null;
        let play = true;

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

        keyPressed = key;
        console.log(keyPressed);

        if (player) {
          player.start();
        }
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      keyPressed = "";
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return <div></div>;
}

export default AudioPlayer;
