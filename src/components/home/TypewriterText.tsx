import { motionDisabled } from "@/lib/prerender";
import { useState, useEffect } from "react";

const FULL_TEXT = "your digital future.";
const TYPING_SPEED = 80;
const START_DELAY = 400;

export function TypewriterText() {
  const [displayedLength, setDisplayedLength] = useState(FULL_TEXT.length);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionDisabled()) {
      setDisplayedLength(FULL_TEXT.length);
      setShowCursor(false);
      return;
    }
    setDisplayedLength(0);
    setShowCursor(true);
    let interval: ReturnType<typeof setInterval> | undefined;
    let cursorTimeout: ReturnType<typeof setTimeout> | undefined;
    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayedLength((prev) => {
          if (prev >= FULL_TEXT.length) {
            clearInterval(interval);
            // Hide cursor after typing completes
            cursorTimeout = setTimeout(() => setShowCursor(false), 1500);
            return prev;
          }
          return prev + 1;
        });
      }, TYPING_SPEED);
    }, START_DELAY);

    const finish = () => {
      if (!motion.matches) return;
      clearTimeout(startTimeout);
      clearInterval(interval);
      clearTimeout(cursorTimeout);
      setDisplayedLength(FULL_TEXT.length);
      setShowCursor(false);
    };
    motion.addEventListener("change", finish);
    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
      clearTimeout(cursorTimeout);
      motion.removeEventListener("change", finish);
    };
  }, []);

  const displayed = FULL_TEXT.slice(0, displayedLength);

  return (
    <p
      className="relative text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 whitespace-nowrap sm:whitespace-normal"
      style={{ textShadow: "0 4px 40px hsl(33 100% 50% / 0.3)" }}
      role="presentation"
      aria-label="your digital future."
    >
      {/* Invisible sizing layer: reserves the final height so no layout shift occurs while typing */}
      <span className="invisible" aria-hidden="true">
        {FULL_TEXT}
      </span>
      <span className="absolute inset-0">
        <span className="text-primary sm:text-accent">{displayed}</span>
        {showCursor && (
          <span className="inline-block w-[3px] h-[0.85em] bg-primary sm:bg-accent ml-1 align-middle animate-[blink_0.8s_step-end_infinite]" />
        )}
      </span>
    </p>
  );
}

