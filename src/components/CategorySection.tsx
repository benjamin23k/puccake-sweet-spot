import { categories } from "@/data/products";
import { Reveal } from "@/components/Reveal";

export function CategorySection() {
  return (
    <section id="categorias" className="bg-cream-soft py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-charcoal sm:text-4xl">¿Qué se te antoja?</h2>
          <p className="mx-auto mt-3 max-w-xl text-cocoa">
            Explora nuestras categorías y encuentra tu próximo momento dulce.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={i * 45}>
              <a
                href="#menu"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sweet transition-all hover:-translate-y-1 hover:shadow-sweet-lg"
              >
                <div className="aspect-4/3 overflow-hidden bg-cream">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-2 px-4 py-3">
                  <span aria-hidden="true">{c.emoji}</span>
                  <span className="truncate font-display text-base font-bold text-charcoal">{c.name}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
