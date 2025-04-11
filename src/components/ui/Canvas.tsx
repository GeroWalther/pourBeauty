'use client';
import React, { useEffect, useRef } from 'react';

export function Canvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const col = (x: number, y: number, r: number, g: number, b: number) => {
      if (ctx) ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx?.fillRect(x, y, 1, 1);
    };

    const R = (x: number, y: number, t: number) => {
      // Pure gold red values (212-232)
      return Math.floor(212 + 20 * Math.cos((x * x - y * y) / 300 + t));
    };

    const G = (x: number, y: number, t: number) => {
      // Higher green values for pure gold (175-195)
      return Math.floor(
        175 +
          20 *
            Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
      );
    };

    const B = (x: number, y: number, t: number) => {
      // Very low blue for gold (0-30)
      return Math.floor(
        0 +
          30 *
            Math.sin(
              5 * Math.sin(t / 9) +
                ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
            )
      );
    };

    let t = 0;

    const run = () => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.01;
      window.requestAnimationFrame(run);
    };

    run();
  }, []);

  return (
    <canvas
      id='canv'
      className={`w-full ${className}`}
      style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        height: '100vh',
        background:
          'linear-gradient(45deg, rgb(212, 175, 55), rgb(234, 198, 58), rgb(205, 175, 55))',
      }}
      width='32'
      height='32'
      ref={canvasRef}
    />
  );
}
