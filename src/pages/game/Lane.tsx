import React, {useEffect, useState} from "react";
import Gem from "./Gem";

type LaneProps={
  width: number;
  height: number;
}

const Lane: React.FC<LaneProps> = ({width, height}) => {
    const gemSize=20;
    const gem_x= width/2 -gemSize/2;
return (

  <div
    style={{
      position: "relative",
      width,
      height,
      border: "1px solid black",
      overflow: "hidden",
    }}
    >
      <Gem x={gem_x} size={gemSize} speed={5}/>
      <Gem x={gem_x} size={gemSize} speed={2}/>
      <Gem x={gem_x} size={gemSize} speed={3}/>
      </div>
  );
};

export default Lane;
