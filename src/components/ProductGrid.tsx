import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";

export function ProductGrid() {
  return (
    <section id="menu" className="bg-warm-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-charcoal sm:text-4xl">
            Los favoritos de Puccake
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-cocoa">
            Recetas que nuestros clientes piden una y otra vez.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 50} className="h-full">
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
