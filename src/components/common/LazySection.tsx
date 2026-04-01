import { useRef, useState, useEffect, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  minHeight?: string;
}

/**
 * Renders children only when the section is near the viewport.
 * Includes a smooth fade-in transition to prevent content popping.
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
      style={{
        minHeight: !isVisible ? minHeight : undefined,
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.4s ease-in-out",
      }}
    >
      {isVisible ? children : null}
    </div>
  );
};
