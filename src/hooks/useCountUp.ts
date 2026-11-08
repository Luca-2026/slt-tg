import { motionDisabled } from "@/lib/prerender";
import { useEffect, useState, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  startOnView?: boolean;
}

export function useCountUp({ end, duration = 2000, startOnView = true }: UseCountUpOptions) {
  // The first render is meaningful even without JavaScript or viewport observers.
  const [count, setCount] = useState(end);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionDisabled()) {
      setCount(end);
      return;
    }
    if (!startOnView) {
      setHasStarted(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [startOnView, hasStarted, end]);

  useEffect(() => {
    if (!hasStarted) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionDisabled()) {
      setCount(end);
      return;
    }

    const startTime = Date.now();
    const startValue = 0;
    let frame = 0;
    let stopped = false;

    const animate = () => {
      if (stopped) return;
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
      setCount(currentValue);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    const finish = () => {
      if (!motion.matches) return;
      stopped = true;
      cancelAnimationFrame(frame);
      setCount(end);
    };
    motion.addEventListener("change", finish);
    frame = requestAnimationFrame(animate);
    return () => {
      stopped = true;
      cancelAnimationFrame(frame);
      motion.removeEventListener("change", finish);
    };
  }, [hasStarted, end, duration]);

  return { count, ref };
}
