import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { serviceModels, serviceComparison } from "@/data/serviceModels";

export function ServiceModels() {
  return <section id="service-modelle" className="py-12 lg:py-20 scroll-mt-24">
    <div className="section-container">
      <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">Unsere Service-Modelle</h2>
      <p className="text-muted-foreground max-w-3xl mb-8">Drei Stufen, ein Prinzip: Sie nutzen Ihre Technik, wir sorgen dafür, dass sie läuft. Jedes Modell konfigurieren wir auf Ihre Raumlandschaft. Preise kalkulieren wir individuell nach Raumanzahl, Technikbestand und Service Level – Sie erhalten nach einer Bestandsaufnahme ein transparentes Angebot.</p>
      <Tabs defaultValue="basic">
        <TabsList className="grid grid-cols-3 w-full max-w-xl h-auto mb-6">
          {serviceModels.map(m => <TabsTrigger key={m.id} value={m.id} className="py-3">{m.name.replace("SLT CARE ", "")}</TabsTrigger>)}
        </TabsList>
        {serviceModels.map(m => <TabsContent key={m.id} value={m.id} className="border-t border-border pt-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="text-primary font-medium mb-2">{m.focus}</p>
              <h3 className="text-2xl font-bold text-foreground mb-3">{m.name}</h3>
              <p className="text-muted-foreground mb-6">{m.description}</p>
              <h4 className="font-semibold text-foreground mb-3">Enthalten</h4>
              <ul className="space-y-3">{m.includes.map(s => <li key={s} className="flex gap-2 text-muted-foreground"><CheckCircle className="h-4 w-4 shrink-0 text-primary mt-1" /><span>{s}</span></li>)}</ul>
            </div>
            <div className="space-y-6">
              {m.serviceLevel.length > 0 && <div><h4 className="font-semibold text-foreground mb-3">Service Level</h4><ul className="list-disc pl-5 space-y-2 text-muted-foreground">{m.serviceLevel.map(s => <li key={s}>{s}</li>)}</ul></div>}
              {m.optional.length > 0 && <div><h4 className="font-semibold text-foreground mb-3">Optional</h4><ul className="list-disc pl-5 space-y-2 text-muted-foreground">{m.optional.map(s => <li key={s}>{s}</li>)}</ul></div>}
              {m.prerequisites && <div><h4 className="font-semibold text-foreground mb-2">Voraussetzungen</h4><p className="text-muted-foreground">{m.prerequisites}</p></div>}
              <div><h4 className="font-semibold text-foreground mb-2">Konditionen</h4><p className="text-muted-foreground">{m.conditions}</p></div>
              <Button asChild className="h-auto whitespace-normal"><Link to="/projektanfrage">{m.name} anfragen <ArrowRight className="ml-2 h-4 w-4 shrink-0" /></Link></Button>
            </div>
          </div>
        </TabsContent>)}
      </Tabs>
      <details className="mt-10 border-y border-border py-5">
        <summary className="cursor-pointer text-lg font-semibold text-primary">Modelle im Vergleich</summary>
        <div className="overflow-x-auto mt-5" tabIndex={0} aria-label="Vergleich der Service-Modelle">
          <table className="w-full min-w-[660px] text-sm text-left"><thead><tr className="border-b border-border"><th scope="col" className="p-3">Leistung</th>{serviceModels.map(m => <th scope="col" key={m.id} className="p-3 text-foreground">{m.name}</th>)}</tr></thead><tbody>{serviceComparison.map(r => <tr key={r.label} className="border-b border-border"><th scope="row" className="p-3 font-medium text-foreground">{r.label}</th>{r.values.map((v, i) => <td key={i} className="p-3 text-muted-foreground">{v}</td>)}</tr>)}</tbody></table>
        </div>
      </details>
      <p className="text-muted-foreground mt-5">Jedes Modell lässt sich mit einzelnen Bausteinen aus der nächsthöheren Stufe kombinieren. Reaktionszeit bedeutet Beginn der Bearbeitung, nicht garantierte Wiederherstellung. Die speziellen Outdoor-LED-Konditionen sind separat beschrieben und gelten nicht automatisch für jedes CARE-Modell.</p>
    </div>
  </section>;
}