import React, { useState, useEffect } from 'react';
import Gem from './Gem'; // Ensure this path is correct based on your file structure

type JsonEntry = {
  TIME: string;
  LABEL: string;
};

type LaneProps = {
  l_width: number;
  l_height: number;
  keyAssigned: string;
  gemData: JsonEntry[];
  nowBarHeight: number;
  start: boolean;
};

const Lane: React.FC<LaneProps> = ({ l_width, l_height, keyAssigned, gemData, nowBarHeight, start }) => {
  
   
  return (
    <div style={{ width: l_width, height: l_height, position: 'relative', border: '1px solid black' }}>
      
    </div>
  );
};

export default Lane;
