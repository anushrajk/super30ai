"use client";
import { useEffect, useRef, useState } from "react";
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
  const lastFrameTimeRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Target 30 FPS for better performance (especially on Safari/Mac)
  const TARGET_FPS = 30;
  const FRAME_INTERVAL = 1000 / TARGET_FPS;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Intersection Observer to pause animation when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        setIsVisible(entries[0]?.isIntersecting ?? false);
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let time = 0;

    const resize = () => {
      // Use device pixel ratio but cap it for performance
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const animate = (timestamp: number) => {
      // Frame rate limiting
      const elapsed = timestamp - lastFrameTimeRef.current;
      
      if (elapsed < FRAME_INTERVAL) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastFrameTimeRef.current = timestamp - (elapsed % FRAME_INTERVAL);
      time += 0.003; // Slower animation for smoother feel

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Create gradient - simplified for performance
      const gradient = ctx.createLinearGradient(0, 0, width, height);

      colors.forEach((color, index) => {
        const offset = (index / (colors.length - 1) + Math.sin(time + index * 0.5) * 0.08) % 1;
        gradient.addColorStop(Math.max(0, Math.min(1, offset)), color);
      });

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Simplified wave effect - fewer waves for better performance
      ctx.globalCompositeOperation = "overlay";
      for (let i = 0; i < 2; i++) {
        ctx.beginPath();
        ctx.moveTo(0, height);

        // Larger step for fewer points
        for (let x = 0; x <= width; x += 20) {
          const y =
            height * 0.5 +
            Math.sin(x * 0.004 + time * (i + 1) * 0.4) * 40 +
            Math.sin(x * 0.008 + time * (i + 1) * 0.25) * 25;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();

        ctx.fillStyle = `rgba(255, 255, 255, 0.08)`;
        ctx.fill();
      }

      ctx.globalCompositeOperation = "source-over";
      animationRef.current = requestAnimationFrame(animate);
    };

    resize();
    animationRef.current = requestAnimationFrame(animate);
    
    // Throttle resize events
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(resize, 100);
    };
    
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [colors, isVisible, FRAME_INTERVAL]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full will-change-transform", className)}
      style={{ transform: "translateZ(0)" }}
    />
  );
}
