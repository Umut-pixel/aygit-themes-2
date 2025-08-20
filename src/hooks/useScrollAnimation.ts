"use client";

import { useEffect, useRef } from "react";

interface UseScrollAnimationProps {
  stagger?: number;
  delay?: number;
  y?: number;
  duration?: number;
  ease?: string;
  trigger?: string;
}

export const useScrollAnimation = ({
  stagger = 0.1,
  delay = 0,
  y = 100,
  duration = 0.8,
  ease = "power2.out",
  trigger = "top 80%"
}: UseScrollAnimationProps = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initAnimation = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);

      const element = elementRef.current;
      if (!element) return;

      // Get all child elements to animate
      const children = element.querySelectorAll("[data-animate]");
      
      if (children.length === 0) return;

      // Set initial state
      gsap.set(children, { y, opacity: 0 });

      // Create scroll-triggered animation
      gsap.to(children, {
        y: 0,
        opacity: 1,
        duration,
        ease,
        stagger,
        delay,
        scrollTrigger: {
          trigger: element,
          start: trigger,
          toggleActions: "play none none reverse"
        }
      });
    };

    initAnimation();

    // Cleanup function
    return () => {
      // Cleanup ScrollTrigger instances
      const cleanup = async () => {
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
      cleanup();
    };
  }, [stagger, delay, y, duration, ease, trigger]);

  return elementRef;
};
