import React, { useEffect, useState } from "react";
import AudioButton from "./AudioButton";
import Navbar from "../Navbar";
import * as Tone from "tone"; // Import Tone.js for sound

function Familiarize() {
  useEffect(() => {
    Tone.context.lookAhead = 0;
  }, []);

  const tan = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/tan_fix.wav`,
    () => {
      tan.toDestination();
      // tan.start();
    }
  );

  const tet = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/tet_fix.wav`,
    () => {
      tet.toDestination();
      // tet.start();
    }
  );

  const chex = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/chex_fix.wav`,
    () => {
      chex.toDestination();
      // chex.start();
    }
  );

  const pin = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/pin_fix.wav`,
    () => {
      pin.toDestination();
      // pin.start();
    }
  );

  const gin = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/gin_fix.wav`,
    () => {
      gin.toDestination();
      // gin.start();
    }
  );

  const rwan = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/rwan_fix.wav`,
    () => {
      rwan.toDestination();
      // rwan.start();
    }
  );

  const tek = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/tek_fix.wav`,
    () => {
      tek.toDestination();
      // tek.start();
    }
  );

  const pax = new Tone.Player(
    `${process.env.PUBLIC_URL}/audio/pax_fix.wav`,
    () => {
      pax.toDestination();
      // pax.start();
    }
  );

  const buttons = [
    { strike: "tan", key: "a", tone: tan },
    { strike: "tet", key: "s", tone: tet },
    { strike: "chex", key: "d", tone: chex },
    { strike: "pin", key: "f", tone: pin },
    { strike: "gin", key: "j", tone: gin },
    { strike: "rwan", key: "k", tone: rwan },
    { strike: "tek", key: "l", tone: tek },
    { strike: "pax", key: ";", tone: pax },
  ];

  // const tones: { [key: string]: Tone.Player } = {
  //   tan: new Tone.Player(`${process.env.PUBLIC_URL}/audio/tan_fix.wav`),
  //   tet: new Tone.Player(`${process.env.PUBLIC_URL}/audio/tet_fix.wav`),
  //   chex: new Tone.Player(`${process.env.PUBLIC_URL}/audio/chex_fix.wav`),
  //   pin: new Tone.Player(`${process.env.PUBLIC_URL}/audio/pin_fix.wav`),
  //   gin: new Tone.Player(`${process.env.PUBLIC_URL}/audio/gin_fix.wav`),
  //   rwan: new Tone.Player(`${process.env.PUBLIC_URL}/audio/rwan_fix.wav`),
  //   tek: new Tone.Player(`${process.env.PUBLIC_URL}/audio/tek_fix.wav`),
  //   pax: new Tone.Player(`${process.env.PUBLIC_URL}/audio/pax_fix.wav`),
  // };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center h-screen bg-black p-4">
        <div className="drum-buttons">
          {buttons.map((btn) => (
            <AudioButton
              tone={btn.tone}
              // key={btn.strike}
              strike={btn.strike}
              keyTrigger={btn.key}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Familiarize;
