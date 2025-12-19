import { useState, useEffect } from "react";

interface PerformanceMode {
  isLowPerformance: boolean;
  isSafari: boolean;
  isMac: boolean;
  prefersReducedMotion: boolean;
  shouldReduceAnimations: boolean;
  shouldDisableBlur: boolean;
}

export const usePerformanceMode = (): PerformanceMode => {
  const [mode, setMode] = useState<PerformanceMode>({
    isLowPerformance: false,
    isSafari: false,
    isMac: false,
    prefersReducedMotion: false,
    shouldReduceAnimations: false,
    shouldDisableBlur: false,
  });

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isMac = userAgent.includes("mac");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    // Check for low-end device indicators
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;
    const isLowEndDevice = hardwareConcurrency <= 4;
    
    // Safari on Mac has issues with backdrop-blur and heavy animations
    const shouldReduceAnimations = prefersReducedMotion || (isSafari && isMac) || isLowEndDevice;
    const shouldDisableBlur = isSafari || prefersReducedMotion;

    setMode({
      isLowPerformance: isLowEndDevice,
      isSafari,
      isMac,
      prefersReducedMotion,
      shouldReduceAnimations,
      shouldDisableBlur,
    });

    // Listen for reduced motion preference changes
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e: MediaQueryListEvent) => {
      setMode(prev => ({
        ...prev,
        prefersReducedMotion: e.matches,
        shouldReduceAnimations: e.matches || (prev.isSafari && prev.isMac) || prev.isLowPerformance,
      }));
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return mode;
};
