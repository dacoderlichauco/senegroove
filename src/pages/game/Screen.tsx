import React, { useEffect, useRef } from "react";

function Screen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navbarHeight = 80; // Adjust this value to match your navbar height

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight - navbarHeight;
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (ctx) {
          const sections = 16;
          const sectionWidth = canvas.width / sections;

          // Set background color to black
          ctx.fillStyle = "lightblue";
          ctx.fillRect(0, 0, canvas.width, canvas.height);

          // Set line style
          ctx.strokeStyle = "white";
          ctx.lineWidth = 2;

          // Draw vertical lines
          for (let i = 1; i < sections; i++) {
            if (i == 3 || i == 4 || i == 12 || i == 13) {
              const x = i * sectionWidth;
              ctx.beginPath();
              ctx.moveTo(x, 0);
              ctx.lineTo(x, canvas.height);
              ctx.stroke();
            }
          }

          ctx.beginPath();
          ctx.moveTo(0, (4 * canvas.height) / 5);
          ctx.lineTo(canvas.width, (4 * canvas.height) / 5);
          ctx.stroke();
        }
      };

      // Initial draw
      handleResize();

      // Resize event listener
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="relative h-full z-0">
      <canvas ref={canvasRef} className="absolute top-0 left-0" />
    </div>
  );
}

export default Screen;
