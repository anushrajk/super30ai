"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface GradientWaveProps {
  colors?: string[];
  className?: string;
}

export function GradientWave({
  colors = ["#fed7aa", "#ffffff", "#fdba74", "#ffffff", "#fed7aa"],
  className = "",
}: GradientWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 255, g: 255, b: 255 };
    };

    const animate = () => {
      time += 0.005;

      const { width, height } = canvas;

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);

      colors.forEach((color, index) => {
        const offset = (index / (colors.length - 1) + Math.sin(time + index * 0.5) * 0.1) % 1;
        gradient.addColorStop(Math.max(0, Math.min(1, offset)), color);
      });

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add wave effect
      ctx.globalCompositeOperation = "overlay";
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x <= width; x += 10) {
          const y =
            height * 0.5 +
            Math.sin(x * 0.005 + time * (i + 1) * 0.5) * 50 +
            Math.sin(x * 0.01 + time * (i + 1) * 0.3) * 30;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        const rgb = hexToRgb(colors[i % colors.length]);
        ctx.fillStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`;
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colors]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full", className)}
    />
  );
}
