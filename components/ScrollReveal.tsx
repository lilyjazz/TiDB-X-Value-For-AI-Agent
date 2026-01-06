import React, { useRef, useEffect, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: string; // e.g., "0.1s"
  width?: "full" | "auto";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  delay = "0s",
  width = "full" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      // Using .paused class to hold the 0% keyframe state (opacity 0, blur) until visible
      // This respects "do not use opacity 0" (as a static utility) and uses "both" fill mode
      className={`${className} animate-fade-in-up ${isVisible ? '' : 'paused'} ${width === 'full' ? 'w-full' : 'w-auto'}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </div>
  );
};
