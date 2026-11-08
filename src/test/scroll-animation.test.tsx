import { act, cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { outsideViewport, useScrollAnimation } from "@/hooks/useScrollAnimation";

afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals(); Reflect.deleteProperty(window, "__PRERENDER__"); });

function Reveal() {
  const { ref, isVisible } = useScrollAnimation();
  return <div ref={ref} data-testid="reveal" data-visible={isVisible} />;
}

describe("Post-mount reveal policy", () => {
  it("keeps in-viewport content visible without starting an observer", () => {
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({ top: 10, bottom: 100, left: 10, right: 100 } as DOMRect);
    const observer = vi.fn(); vi.stubGlobal("IntersectionObserver", observer);
    const result = render(<Reveal />);
    expect(result.getByTestId("reveal")).toHaveAttribute("data-visible", "true");
    expect(observer).not.toHaveBeenCalled();
  });
  it("only hides outside-viewport elements after mounting and reveals them on intersection", () => {
    vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({ top: 2000, bottom: 2100, left: 10, right: 100 } as DOMRect);
    let callback: IntersectionObserverCallback | undefined;
    const unobserve = vi.fn();
    vi.stubGlobal("IntersectionObserver", class { constructor(cb: IntersectionObserverCallback) { callback = cb; } observe() {} unobserve = unobserve; disconnect() {} });
    const result = render(<Reveal />);
    expect(result.getByTestId("reveal")).toHaveAttribute("data-visible", "false");
    act(() => callback?.([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver));
    expect(result.getByTestId("reveal")).toHaveAttribute("data-visible", "true");
    expect(unobserve).toHaveBeenCalled();
  });
  it("never hides content during prerender", () => {
    Reflect.set(window, "__PRERENDER__", true);
    const result = render(<Reveal />);
    expect(result.getByTestId("reveal")).toHaveAttribute("data-visible", "true");
  });
  it("treats a partially visible element as inside the viewport", () => {
    const element = document.createElement("div");
    vi.spyOn(element, "getBoundingClientRect").mockReturnValue({ top: -20, bottom: 10, left: 10, right: 100 } as DOMRect);
    expect(outsideViewport(element)).toBe(false);
  });
});