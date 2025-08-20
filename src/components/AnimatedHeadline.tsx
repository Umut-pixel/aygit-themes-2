"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedHeadline = ({ text, className = "", delay = 0 }: AnimatedHeadlineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !containerRef.current) return;

    // Dynamic import of GSAP to avoid SSR issues
    const initAnimation = async () => {
      const { gsap } = await import("gsap");
      
      const chars = containerRef.current?.querySelectorAll(".char");
      if (!chars) return;
      
      // Set initial state
      gsap.set(chars, { y: 100, opacity: 0 });

      // Create stagger animation
      const tl = gsap.timeline();
      
      tl.to(chars, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.05,
        delay: 0.5 + delay
      });

      return () => {
        tl.kill();
      };
    };

    initAnimation();
  }, [text, delay, isClient]);

  // Split text into words and then characters
  const words = text.split(" ");
  
  return (
    <div className={`overflow-hidden ${className}`} ref={containerRef}>
      {words.map((word, wordIndex) => (
        <div key={wordIndex} className="inline-block overflow-hidden">
          {word.split("").map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className="char inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          {wordIndex < words.length - 1 && (
            <span className="char inline-block">{"\u00A0"}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default AnimatedHeadline;
