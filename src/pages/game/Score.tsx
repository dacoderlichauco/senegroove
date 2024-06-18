import React from 'react';
import { Score as ScoreType } from '../../types';

type ScoreProps = {
  score: ScoreType;
};

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className="absolute top-0 left-0 p-4 bg-gray-700 text-white">
      <p>Hits: {score.hits}</p>
      <p>Misses: {score.misses}</p>
      <p>Early Hits: {score.earlyHits}</p>
    </div>
  );
};

export default Score;
