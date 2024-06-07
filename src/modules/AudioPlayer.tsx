import React, { useEffect } from 'react';

function AudioPlayer() {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
        const key = event.key;
        if (key === "a") {
            const audio = new Audio(`${process.env.PUBLIC_URL}/audio/tan-audio.mp3`)
            audio.play()
        }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return <div>Press a key to play the corresponding audio.</div>;
};

export default AudioPlayer;
