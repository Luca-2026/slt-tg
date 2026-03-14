import { useRef, useCallback, useEffect } from "react";

export function useDragScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const el = containerRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollLeft.current = el.scrollLeft;
    el.style.animationPlayState = "paused";
    el.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const dx = e.clientX - startX.current;
    containerRef.current.scrollLeft = scrollLeft.current - dx;
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!containerRef.current) return;
    isDragging.current = false;
    containerRef.current.style.animationPlayState = "";
    containerRef.current.releasePointerCapture(e.pointerId);
  }, []);

  return {
    containerRef,
    dragProps: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerLeave: onPointerUp,
    },
  };
}
