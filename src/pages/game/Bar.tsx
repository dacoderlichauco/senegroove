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
          width: `${b_width}px`,
          height: `${b_height}px`,
          backgroundColor: isKeyPressed ? 'red' : 'initial',
          border: '1px solid black', // Added a white border as requested earlier
          position: 'absolute',
          bottom: 0, // Position it at the bottom of the lane
      }}
      >
        
      </div>

    );

};
export default Bar;