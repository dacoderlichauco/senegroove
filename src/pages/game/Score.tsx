import React from "react";

type ScoreProps = {
  score: number;
};

function Score({ score }: ScoreProps) {
  return (
    <div className="absolute text-white text-3xl z-20 p-10">Score: {score}</div>
  );
}

export default Score;
