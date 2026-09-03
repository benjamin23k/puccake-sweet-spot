import sweetBox from "@/assets/sweet-box.jpg";
import { Reveal } from "@/components/Reveal";

export function PromotionSection() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative grid overflow-hidden rounded-[2.5rem] border border-brand-orange/25 bg-warm-white shadow-sweet-lg lg:grid-cols-2">
            <div className="relative z-10 p-8 sm:p-12">
              <span className="inline-flex rounded-full bg-brand-red/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-red">
                Promoción del día
              </span>
              <h2 className="mt-5 font-display text-3xl font-extrabold text-charcoal sm:text-4xl">
                Hoy toca consentirse.
              </h2>
              <p className="mt-3 max-w-md text-cocoa">
                Obtén una selección especial de dulces y postres, armada por nosotros y pensada para compartir.
              </p>
              <a
                href="#menu"
                className="mt-7 inline-flex rounded-full bg-gradient-warm px-7 py-3.5 text-base font-bold text-primary-foreground shadow-sweet transition-transform hover:-translate-y-0.5"
              >
                Ver promociones
              </a>
            </div>
            <div className="relative min-h-64 lg:min-h-0">
              <img
                src={sweetBox}
                alt="Caja de dulces surtidos con listón rojo"
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
