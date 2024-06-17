import React from "react";

type ScoreProps = {
  score: number;
  hit: string;
};

function Score({ score, hit }: ScoreProps) {
  return (
    <div className="absolute text-white text-3xl z-20 p-10 flex justify-center items-center">
      Score: {score} Last: {hit}
    </div>
  );
}

export default Score;
