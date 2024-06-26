import React,{useEffect, useState} from "react";


type BarProps={
    b_width: number;
    b_height: number;
    isKeyPressed: boolean;
  }

const Bar: React.FC<BarProps> = ({b_width, b_height, isKeyPressed}) => {


    return (
        <div
        style={{
        position: "absolute",
        bottom: 0,
        width: b_width,
        height:b_height,
        backgroundColor: isKeyPressed ? 'red' : 'initial',
        border: "1px solid red",
        overflow: "hidden",
      }}
      >
        
      </div>

    );

};
export default Bar;