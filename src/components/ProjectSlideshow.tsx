import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectSlideshow({ images, alts, label }: { images: string[]; alts?: Record<string, string>; label: string }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || images.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setCurrent(i => (i + 1) % images.length), 5000);
    return () => window.clearInterval(timer);
  }, [images.length, paused]);
  const move = (direction: number) => { setPaused(true); setCurrent(i => (i + direction + images.length) % images.length); };
  return <div aria-label={label} aria-roledescription="Karussell" className="min-w-0">
    <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
      {images.map((src, i) => <img key={src} src={src} alt={alts?.[src] ?? label} aria-hidden={i !== current} loading="eager" className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 motion-reduce:transition-none ${i === current ? "opacity-100" : "opacity-0"}`} />)}
    </div>
    {images.length > 1 && <div className="flex items-center justify-end gap-2 mt-3">
      <span className="mr-auto text-sm text-muted-foreground" aria-live={paused ? "polite" : "off"}>{current + 1} / {images.length}</span>
      <Button variant="outline" size="icon" onClick={() => move(-1)} aria-label="Vorheriges Projektbild"><ChevronLeft className="h-4 w-4" /></Button>
      <Button variant="outline" size="icon" onClick={() => setPaused(p => !p)} aria-label={paused ? "Bildwechsel fortsetzen" : "Bildwechsel pausieren"}>{paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}</Button>
      <Button variant="outline" size="icon" onClick={() => move(1)} aria-label="Nächstes Projektbild"><ChevronRight className="h-4 w-4" /></Button>
    </div>}
  </div>;
}