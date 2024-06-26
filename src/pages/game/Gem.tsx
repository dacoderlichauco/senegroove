import React, {useEffect, useState} from "react";
import {Gem as GemType }  from "../../types";

type GemProps = Omit<GemType,"y">;


const Gem: React.FC<GemProps> = ({x,size,speed}) => {
    
    const [y, setY]=useState(0);
    useEffect(() => {
        const interval= setInterval(() => {
            setY(prevY => prevY + speed);
    },100);
    return () => clearInterval(interval);
    }, [speed]);

    if (y>window.innerHeight) {
        return null;
    }

    return (

        <div style={{
            position: "absolute",
            top: y, 
            left: x,
            width: size,
            height: size,
            backgroundColor: "blue",
        }}></div>
    );
};

export default Gem;