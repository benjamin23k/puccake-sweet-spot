import heroImg from "@/assets/hero-desserts.jpg";
import logo from "@/assets/puccake-logo.png.asset.json";

const floats = [
  { emoji: "🍓", className: "left-2 top-10 text-3xl", delay: "0s" },
  { emoji: "🧁", className: "right-4 top-4 text-2xl", delay: "1.2s" },
  { emoji: "🍫", className: "bottom-16 left-6 text-2xl", delay: "2.1s" },
  { emoji: "✨", className: "right-10 bottom-8 text-2xl", delay: "0.6s" },
  { emoji: "🍩", className: "right-0 top-1/2 text-3xl", delay: "1.8s" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cream">
      <div className="dot-pattern pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-warm-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cocoa">
            Repostería boutique
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-charcoal sm:text-5xl lg:text-6xl">
            Pequeños antojos, <span className="text-gradient-warm">grandes momentos.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-cocoa sm:text-lg lg:mx-0">
            Postres, dulces y creaciones hechas para convertir cualquier momento en algo especial.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#menu"
              className="rounded-full bg-gradient-warm px-7 py-3.5 text-center text-base font-bold text-primary-foreground shadow-sweet transition-transform hover:-translate-y-0.5"
            >
              Ver menú
            </a>
            <a
              href="#menu"
              className="rounded-full border-2 border-brand-red/25 bg-warm-white px-7 py-3.5 text-center text-base font-bold text-brand-red transition-colors hover:border-brand-red hover:bg-cream-soft"
            >
              Ordenar ahora
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 text-center lg:text-left">
            {[
              ["+120", "Recetas dulces"],
              ["4.9★", "Clientes felices"],
              ["30 min", "Entrega local"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-display text-2xl font-bold text-brand-red">{v}</dt>
                <dd className="text-xs font-semibold text-cocoa">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[2.5rem] border-4 border-warm-white shadow-sweet-lg">
            <img
              src={heroImg}
              alt="Selección de postres Puccake: copa de fresas, cupcakes, donas y chocolates"
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
          <img
            src={logo.url}
            alt=""
            aria-hidden="true"
            width={120}
            height={120}
            className="floaty absolute -bottom-6 -left-2 h-24 w-24 rounded-full border-4 border-warm-white object-cover shadow-sweet sm:h-32 sm:w-32"
          />
          {floats.map((f) => (
            <span
              key={f.emoji}
              aria-hidden="true"
              style={{ animationDelay: f.delay }}
              className={`floaty pointer-events-none absolute opacity-80 ${f.className}`}
            >
              {f.emoji}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
