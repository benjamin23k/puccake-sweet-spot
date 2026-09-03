import { Plus } from "lucide-react";
import { currency, type Product } from "@/data/products";
import { useCart } from "@/context/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sweet transition-all duration-300 hover:-translate-y-1 hover:shadow-sweet-lg">
      <div className="relative aspect-square overflow-hidden bg-cream">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-brand-red px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground">
            {product.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-bold text-charcoal">{product.name}</h3>
        <p className="mt-1 flex-1 text-sm text-cocoa">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className="font-display text-xl font-extrabold text-brand-red">{currency(product.price)}</span>
          <button
            onClick={() => add(product)}
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-brand-red/20 bg-cream-soft px-4 py-2 text-sm font-bold text-brand-red transition-all group-hover:border-transparent group-hover:bg-gradient-warm group-hover:text-primary-foreground"
          >
            <Plus className="h-4 w-4" />
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}
