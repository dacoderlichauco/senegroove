import React, { useState, useEffect } from 'react';

const jsonData=[{"TIME": "1.912125000", "LABEL": "4"}, {"TIME": "2.464500000", "LABEL": "3"}, {"TIME": "3.033250000", "LABEL": "2"}, {"TIME": "3.598250000", "LABEL": "1"}, {"TIME": "4.176750000", "LABEL": "f"}, {"TIME": "5.038500000", "LABEL": "f"}, {"TIME": "5.343187500", "LABEL": "f"}, {"TIME": "5.900437500", "LABEL": "j"}, {"TIME": "6.444937500", "LABEL": "j"}, {"TIME": "7.253625000", "LABEL": "f"}, {"TIME": "7.532250000", "LABEL": "j"}, {"TIME": "8.052750000", "LABEL": "j"}, {"TIME": "8.609812500", "LABEL": "f"}, {"TIME": "9.413812500", "LABEL": "f"}, {"TIME": "9.719812500", "LABEL": "j"}, {"TIME": "10.244812500", "LABEL": "j"}, {"TIME": "10.779187500", "LABEL": "f"}, {"TIME": "11.569500000", "LABEL": "f"}]




const Animation: React.FC = () => {
    const [positions, setPositions] =  useState<number[]>(new Array(jsonData.length).fill(0));
    const x_goal = 500; // Define the target x-coordinate (adjust as needed)

    useEffect(() => {
        const animationFrameIds: number[] = [];
        const startTimes: number[] = new Array(jsonData.length).fill(null);
    
        jsonData.forEach((entry, index) => {
          const duration = parseFloat(entry.TIME) * 1000; // Convert time to milliseconds
    
          const animate = (time: number) => {
            if (!startTimes[index]) startTimes[index] = time;
            const elapsed = time - startTimes[index];
            const progress = Math.min(elapsed / duration, 1);
    
            setPositions((prev) => {
              const newPositions = [...prev];
              newPositions[index] = progress * x_goal;
              return newPositions;
            });
    
            if (progress < 1) {
              animationFrameIds[index] = requestAnimationFrame(animate);
            }
          };
    
          animationFrameIds[index] = requestAnimationFrame(animate);
        });
    
        return () => {
          animationFrameIds.forEach((id) => cancelAnimationFrame(id));
        };
      }, [x_goal]);

  return (

    <div className="h-screen flex items-start overflow-hidden">
      {positions.map((position, index) => (
        <div
          key={index}
          className="w-16 h-16 bg-blue-500"
          style={{ transform: `translateX(${position}px)`, position: 'absolute', top: `${index * 70}px` }}
        />
      ))}
      
      <div
        className="bg-red-500"
        style={{
          width: '10px',
          height: '100%',
          position: 'absolute',
          left: '500px',
          top: '0',
        }}
      />
    </div>

  );
};

export default Animation;
