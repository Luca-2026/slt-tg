import { act, cleanup, renderHook } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useCountUp } from "@/hooks/useCountUp";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  Reflect.deleteProperty(window, "__PRERENDER__");
});

function StaticCount({ end }: { end: number }) {
  return useCountUp({ end }).count;
}

describe("Meaningful counter values before browser animation", () => {
  it("starts with the confirmed 305 projects without running effects", () => {
    expect(renderToString(<StaticCount end={305} />)).toBe("305");
  });
  it("starts with the confirmed 228 customers without running effects", () => {
    expect(renderToString(<StaticCount end={228} />)).toBe("228");
  });
  it("retains ten years of experience before running effects", () => {
    expect(renderToString(<StaticCount end={10} />)).toBe("10");
  });
  it("does not start animation when reduced motion is requested", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({ ...window.matchMedia(""), matches: true });
    const frame = vi.spyOn(window, "requestAnimationFrame");
    const { result } = renderHook(() => useCountUp({ end: 305, startOnView: false }));
    expect(result.current.count).toBe(305);
    expect(frame).not.toHaveBeenCalled();
  });
  it("does not start animation while exporting a static page", () => {
    Reflect.set(window, "__PRERENDER__", true);
    const frame = vi.spyOn(window, "requestAnimationFrame");
    const { result } = renderHook(() => useCountUp({ end: 228, startOnView: false }));
    expect(result.current.count).toBe(228);
    expect(frame).not.toHaveBeenCalled();
  });
  it("animates only in the browser and settles on its final value", () => {
    let callback: FrameRequestCallback | undefined;
    vi.spyOn(window, "requestAnimationFrame").mockImplementation(fn => { callback = fn; return 1; });
    vi.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});
    let now = 0;
    vi.spyOn(Date, "now").mockImplementation(() => now);
    const { result } = renderHook(() => useCountUp({ end: 305, duration: 2000, startOnView: false }));
    expect(result.current.count).toBe(305);
    act(() => { callback?.(0); });
    expect(result.current.count).toBe(0);
    now = 2000;
    act(() => { callback?.(2000); });
    expect(result.current.count).toBe(305);
  });
});