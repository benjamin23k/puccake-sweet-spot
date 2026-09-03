import { Cake, Gift, HeartHandshake, PartyPopper, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const options = [
  { icon: Cake, label: "Cumpleaños" },
  { icon: HeartHandshake, label: "Aniversarios" },
  { icon: Gift, label: "Regalos" },
  { icon: PartyPopper, label: "Eventos" },
  { icon: Sparkles, label: "Detalles personalizados" },
];

export function CustomSection() {
  return (
    <section className="bg-cream-soft py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold text-charcoal sm:text-4xl">
            Hecho especialmente para ti.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-cocoa">
            Diseñamos cada pedido contigo: sabores, tamaños, colores y mensajes.
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {options.map((o, i) => (
            <Reveal key={o.label} delay={i * 50}>
              <div className="flex h-full flex-col items-center gap-3 rounded-3xl border border-border bg-card p-5 shadow-sweet transition-transform hover:-translate-y-1">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-cream text-brand-red">
                  <o.icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-bold text-charcoal">{o.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <a
          href="#contacto"
          className="mt-10 inline-flex rounded-full bg-gradient-warm px-7 py-3.5 text-base font-bold text-primary-foreground shadow-sweet transition-transform hover:-translate-y-0.5"
        >
          Crear mi pedido
        </a>
      </div>
    </section>
  );
}
