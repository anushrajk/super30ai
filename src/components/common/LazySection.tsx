import { useRef, useState, useEffect, ReactNode, Suspense } from "react";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  minHeight?: string;
}

/**
 * Renders children only when the section is near the viewport.
 * Uses content-visibility for additional performance gains.
 */
export const LazySection = ({
  children,
  className,
  rootMargin = "400px",
  minHeight = "200px",
}: LazySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={
        !isVisible
          ? { minHeight, contentVisibility: "auto" as any, containIntrinsicSize: `auto ${minHeight}` as any }
          : undefined
      }
    >
      {isVisible ? children : null}
    </div>
  );
};
