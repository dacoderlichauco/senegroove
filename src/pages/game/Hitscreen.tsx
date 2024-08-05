import React from "react";

interface HitData {
  TIME: number;
  LABEL: string;
}

interface GemData {
  TIME: string;
  LABEL: string;
}
interface HitscreenProps {
  timestamps: HitData[];
  original: GemData[];
}

function Hitscreen({ timestamps, original }: HitscreenProps) {
  return (
    <div
      className="absolute"
      style={{
        top: "80%",
        left: "80%",
        transform: "translate(-50%, -50%)",
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        color: "white",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      {timestamps.map((hit: HitData, index: number) => (
        <div
          className={`absolute text-black font-bold bg-white bg-opacity-50 text-center flex items-center justify-center rounded-full`}
          style={{
            width: "25px",
            height: "25px",
            left: `${hit.LABEL == "f" ? 25 : 75}%`,
            top: `${hit.TIME}px`,
          }}
        ></div>
      ))}
      {original.map((hit: GemData, index: number) => (
        <div
          className={`absolute text-black font-bold bg-white text-center flex items-center justify-center rounded-full`}
          style={{
            width: "25px",
            height: "25px",
            left: `${hit.LABEL == "f" ? 25 : 75}%`,
            top: `${hit.TIME}px`,
          }}
        ></div>
      ))}
    </div>
  );
}

export default Hitscreen;
