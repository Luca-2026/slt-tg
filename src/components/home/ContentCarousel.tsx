import { motionDisabled } from "@/lib/prerender";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export interface HomeSlide { id: string; title: string; description: string; image?: string; alt: string; to: string; category: string; date?: string; portrait?: boolean }

export function ContentCarousel({ title, slides, allTo, allLabel }: { title: string; slides: HomeSlide[]; allTo: string; allLabel: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!api) return;
    const select = () => setCurrent(api.selectedScrollSnap());
    select(); api.on("select", select);
    return () => { api.off("select", select); };
  }, [api]);
  useEffect(() => {
    if (!api || paused || interacting || motionDisabled()) return;
    const timer = window.setInterval(() => {
      const bounds = section.current?.getBoundingClientRect();
      if (!document.hidden && bounds && bounds.top < window.innerHeight && bounds.bottom > 0) api.scrollNext();
    }, 5000);
    return () => window.clearInterval(timer);
  }, [api, paused, interacting]);
  return <section ref={section} aria-label={title} className="py-10 lg:py-16" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={e => { if (!e.currentTarget.contains(e.relatedTarget)) setInteracting(false); }}>
    <div className="section-container min-w-0">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{title}</h2>
        <Button asChild variant="link" className="px-0"><Link to={allTo}>{allLabel}<ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
      </div>
      <Carousel opts={{ loop: true, align: "start" }} setApi={setApi} className="min-w-0" aria-label={`${title} Karussell`}>
        <CarouselContent>
          {slides.map(s => <CarouselItem key={s.id} className="basis-full sm:basis-1/2 lg:basis-1/3">
            <Link to={s.to} className="group block h-full overflow-hidden rounded-lg border border-border bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <div className="aspect-video overflow-hidden bg-muted">
                {s.image && <img src={s.image} alt={s.alt} loading="lazy" className={`h-full w-full ${s.portrait ? "object-contain" : "object-cover"}`} />}
              </div>
              <div className="p-5">
                <div className="text-xs text-primary font-medium mb-2">{s.category}{s.date && <> · <time dateTime={s.date}>{new Date(`${s.date}T12:00:00Z`).toLocaleDateString("de-DE", { timeZone: "UTC" })}</time></>}</div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary mb-3 min-h-[3.5rem] line-clamp-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 min-h-[3.75rem]">{s.description}</p>
                <span className="inline-flex items-center text-sm text-primary mt-4">Ansehen <ArrowRight className="ml-2 h-4 w-4" /></span>
              </div>
            </Link>
          </CarouselItem>)}
        </CarouselContent>
      </Carousel>
      <div className="flex items-center justify-end gap-2 mt-5">
        <span className="mr-auto text-sm text-muted-foreground">{current + 1} / {slides.length}</span>
        <Button variant="outline" size="icon" aria-label={`${title}: zurück`} onClick={() => api?.scrollPrev()}><ArrowLeft className="h-4 w-4" /></Button>
        <Button variant="outline" size="icon" aria-label={`${title}: ${paused ? "fortsetzen" : "pausieren"}`} onClick={() => setPaused(p => !p)}>{paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}</Button>
        <Button variant="outline" size="icon" aria-label={`${title}: weiter`} onClick={() => api?.scrollNext()}><ArrowRight className="h-4 w-4" /></Button>
      </div>
    </div>
  </section>;
}