import { useRef, useState, useEffect, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  minHeight?: string;
}

/**
 * Renders children only when the section is near the viewport.
 * Keeps placeholder space stable so lazy-loaded sections don't flicker or jump.
 */
export const LazySection = ({
  children,
  className,
  rootMargin = "400px",
  minHeight = "200px",
}: LazySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isEntered, setIsEntered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  useEffect(() => {
    if (!shouldRender) return;

    const frameId = window.requestAnimationFrame(() => {
      setIsEntered(true);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [shouldRender]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: `1px ${minHeight}`,
      }}
    >
      {shouldRender ? (
        <div
          style={{
            opacity: isEntered ? 1 : 0,
            transform: isEntered ? "translate3d(0, 0, 0)" : "translate3d(0, 12px, 0)",
            transition: "opacity 180ms ease-out, transform 180ms ease-out",
            willChange: "opacity, transform",
          }}
        >
          {children}
        </div>
      ) : (
        <div aria-hidden style={{ minHeight }} />
      )}
    </div>
  );
};
