import miniCake from "@/assets/mini-cake.jpg";
import strawberryCup from "@/assets/strawberry-cup.jpg";
import logo from "@/assets/puccake-logo.png.asset.json";
import { Reveal } from "@/components/Reveal";

export function AboutSection() {
  return (
    <section id="sobre" className="bg-warm-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-cream shadow-sweet-lg">
              <img
                src={strawberryCup}
                alt="Copa de fresas con crema de Puccake"
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 right-2 hidden w-40 overflow-hidden rounded-3xl border-4 border-warm-white shadow-sweet sm:block">
              <img
                src={miniCake}
                alt="Mini pastel con crema y fresa"
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            <img
              src={logo.url}
              alt=""
              aria-hidden="true"
              width={96}
              height={96}
              className="floaty absolute -left-4 -top-6 h-20 w-20 rounded-full border-4 border-warm-white object-cover shadow-sweet"
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="font-display text-3xl font-extrabold text-charcoal sm:text-4xl">Más que un postre.</h2>
          <p className="mt-4 text-lg leading-relaxed text-cocoa">
            En Puccake creemos que los pequeños detalles pueden convertirse en grandes recuerdos. Creamos postres,
            dulces y experiencias pensadas para compartir, regalar y disfrutar.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Ingredientes frescos y recetas propias",
              "Presentación cuidada, lista para regalar",
              "Pedidos personalizados para cada ocasión",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-charcoal">
                <span aria-hidden="true" className="mt-0.5 text-brand-orange">
                  ✦
                </span>
                <span className="font-semibold">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
