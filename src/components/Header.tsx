import { useState } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import logo from "@/assets/puccake-logo.png.asset.json";
import { useCart } from "@/context/cart";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Menú", href: "#menu" },
  { label: "Categorías", href: "#categorias" },
  { label: "Sobre nosotros", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-warm-white/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:grid-cols-[auto_1fr_auto]">
        <a href="#inicio" className="flex min-w-0 items-center gap-2">
          <img
            src={logo.url}
            alt="Logo de Puccake"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full bg-cream-soft object-contain p-0.5"
          />
          <span className="truncate font-display text-xl font-bold text-brand-red">Puccake</span>
        </a>

        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-charcoal/80 transition-colors hover:text-brand-red"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            aria-label="Buscar"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-charcoal/70 transition-colors hover:bg-cream hover:text-brand-red sm:inline-flex"
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            aria-label="Abrir carrito"
            onClick={() => setCartOpen(true)}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-charcoal/70 transition-colors hover:bg-cream hover:text-brand-red"
          >
            <ShoppingBag className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-brand-red px-1 text-[11px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
          <a
            href="#menu"
            className="hidden rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-sweet transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Ordenar ahora
          </a>
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-cream lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-warm-white px-4 pb-4 pt-2 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-3 text-base font-semibold text-charcoal transition-colors hover:bg-cream-soft"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#menu"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-gradient-warm px-5 py-3 text-center text-base font-bold text-primary-foreground"
          >
            Ordenar ahora
          </a>
        </nav>
      )}
    </header>
  );
}
