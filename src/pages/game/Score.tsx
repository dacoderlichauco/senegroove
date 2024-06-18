import React from "react";

type ScoreProps = {
  score: number;
  hit: string;
  hits: number;
  misses: number;
  early: number;
};

function Score({ score, hit, hits, misses, early }: ScoreProps) {
  return (
    <div className="score-table-container z-20" style={{ padding: "20px" }}>
      <table
        className="score-table z-20"
        style={{
          borderCollapse: "collapse",
          width: "50%",
          textAlign: "center",
          fontSize: "1.5rem",
          backgroundColor: "#f9f9f9",
          margin: "0 auto",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Metric
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Score</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{score.toFixed(2)}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Last Hit</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{hit}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Hits</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{hits}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Misses</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{misses}</td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>Early</td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{early}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Score;
