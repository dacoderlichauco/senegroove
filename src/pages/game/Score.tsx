import React from 'react';
import { Score as ScoreType } from '../../types';

type ScoreProps = {
  score: ScoreType;
};

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className="absolute top-0 right-0 p-4 text-white">
      <div>Hits: {score.hits}</div>
      <div>Misses: {score.misses}</div>
      <div>Early Hits: {score.earlyHits}</div>
    </div>
  );
};

export default Score;
