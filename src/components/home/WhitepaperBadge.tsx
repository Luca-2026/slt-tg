import { Download, FileText } from "lucide-react";

interface Props {
  variant?: "light" | "dark";
}

export function WhitepaperBadge({ variant = "dark" }: Props) {
  const base =
    "group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors";
  const styles =
    variant === "light"
      ? "bg-accent/10 border-accent/30 text-accent hover:bg-accent/20"
      : "bg-primary-foreground/10 border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm";

  return (
    <a
      href="/downloads/slt-wartungskonzept-outdoor-led.pdf"
      target="_blank"
      rel="noopener"
      className={`${base} ${styles}`}
      aria-label="Whitepaper: Service- und Wartungskonzept für Outdoor-LED-Werbeanlagen (PDF) ↗"
    >
      <FileText className="h-3.5 w-3.5 shrink-0" />
      <span>
        <span className="font-semibold">Neu:</span> Whitepaper Wartung Outdoor-LED-Werbeanlagen
      </span>
      <Download className="h-3.5 w-3.5 shrink-0 opacity-70 group-hover:opacity-100" />
    </a>
  );
}
