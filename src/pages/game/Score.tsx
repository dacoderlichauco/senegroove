import React from "react";

type ScoreProps = {
  score: number;
  misses: number;
  earlies: number;
  last: string;
};

function Score({ score, misses, earlies, last }: ScoreProps) {
  return (
    <div className="absolute text-white text-3xl z-20 p-10">
      Score: {score} Misses: {misses} Earlies: {earlies} Last: {last}
    </div>
  );
}

export default Score;
