import { useState, useEffect } from "react";

const FULL_TEXT = "your digital future.";
const TYPING_SPEED = 80;
const START_DELAY = 400;

export function TypewriterText() {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayedLength((prev) => {
          if (prev >= FULL_TEXT.length) {
            clearInterval(interval);
            // Hide cursor after typing completes
            setTimeout(() => setShowCursor(false), 1500);
            return prev;
          }
          return prev + 1;
        });
      }, TYPING_SPEED);
      return () => clearInterval(interval);
    }, START_DELAY);

    return () => clearTimeout(startTimeout);
  }, []);

  const displayed = FULL_TEXT.slice(0, displayedLength);

  return (
    <p
      className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 whitespace-nowrap sm:whitespace-normal"
      style={{ textShadow: "0 4px 40px hsl(33 100% 50% / 0.3)" }}
      role="presentation"
      aria-label="your digital future."
    >
      <span className="text-primary sm:text-accent">
        {displayed}
      </span>
      {showCursor && (
        <span className="inline-block w-[3px] h-[0.85em] bg-primary sm:bg-accent ml-1 align-middle animate-[blink_0.8s_step-end_infinite]" />
      )}
    </p>
  );
}
