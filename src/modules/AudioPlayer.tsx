import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function AudioPlayer() {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      let audio = "none";
      const key = event.key;
      if (key === "a") {
        audio = "tan";
      } else if (key === "s") {
        audio = "tet";
      } else if (key === "d") {
        audio = "chex";
      } else if (key === "f") {
        audio = "rwan";
      } else if (key === "j") {
        audio = "tek";
      } else if (key === "k") {
        audio = "gin";
      } else if (key === "l") {
        audio = "pax";
      } else if (key === ";") {
        audio = "pin";
      }

      const audioFile = new Audio(
        `${process.env.PUBLIC_URL}/audio/${audio}.mp3`
      );
      audioFile.play();
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return <div>Press a key to play the corresponding audio.</div>;
}

export default AudioPlayer;
