import { useEffect, useRef, useState } from "react";
import { motionDisabled } from "@/lib/prerender";

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

type RevealVariant = "" | "left" | "right" | "scale" | "blur";

export function scrollReveal(visible: boolean, variant: RevealVariant = "") {
  const suffix = variant ? `-${variant}` : "";
  return `scroll-reveal${suffix}${visible ? "" : ` scroll-hidden${suffix}`}`;
}

export function outsideViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.bottom <= 0 || rect.top >= window.innerHeight ||
    rect.right <= 0 || rect.left >= window.innerWidth;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {}
) {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  // The first paint and exported document are always fully visible.
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = ref.current;
    if (!element || motionDisabled() || !outsideViewport(element)) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsVisible(false);
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (triggerOnce) observer.unobserve(element);
      } else if (!triggerOnce && outsideViewport(element)) {
        setIsVisible(false);
      }
    }, { threshold, rootMargin });
    const finish = () => {
      if (!motion.matches) return;
      setIsVisible(true);
      observer.disconnect();
    };
    observer.observe(element);
    motion.addEventListener("change", finish);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", finish);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

export function useScrollAnimationGroup(count: number, staggerDelay = 0.1) {
  const { ref: containerRef, isVisible } = useScrollAnimation();
  const [visibleItems, setVisibleItems] = useState<boolean[]>(() => Array(count).fill(true));
  useEffect(() => {
    if (motionDisabled()) return;
    if (!isVisible) {
      setVisibleItems(Array(count).fill(false));
      return;
    }
    const timers = Array.from({ length: count }, (_, index) => window.setTimeout(() => {
      setVisibleItems(previous => previous.map((visible, i) => i === index ? true : visible));
    }, index * staggerDelay * 1000));
    return () => timers.forEach(window.clearTimeout);
  }, [count, staggerDelay, isVisible]);
  return { containerRef, visibleItems };
}