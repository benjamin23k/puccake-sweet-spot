import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/context/cart";
import { currency } from "@/data/products";
import { buildWhatsappUrl } from "@/lib/whatsapp";

export function CartDrawer({ onCheckout }: { onCheckout: () => void }) {
  const { items, isOpen, setOpen, remove, setQuantity, clear, subtotal } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-charcoal/50 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
      />
      <aside
        role="dialog"
        aria-label="Carrito de compras"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-warm-white shadow-sweet-lg transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <header className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-display text-xl font-bold text-charcoal">Tu carrito</h2>
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar carrito"
            className="grid h-9 w-9 place-items-center rounded-full text-charcoal/70 hover:bg-cream"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-cocoa">
              <ShoppingBag className="h-10 w-10 text-brand-orange" />
              <p className="mt-3 font-semibold">Tu carrito está vacío</p>
              <p className="mt-1 text-sm">Agrega algo dulce para empezar.</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((i) => (
                <li key={i.product.id} className="flex gap-3 rounded-2xl border border-border bg-card p-3">
                  <img
                    src={i.product.image}
                    alt={i.product.name}
                    loading="lazy"
                    width={800}
                    height={800}
                    className="h-20 w-20 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-display font-bold text-charcoal">{i.product.name}</p>
                    <p className="text-sm text-brand-red">{currency(i.product.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        aria-label="Quitar uno"
                        onClick={() => setQuantity(i.product.id, i.quantity - 1)}
                        className="grid h-8 w-8 place-items-center rounded-full border border-border hover:bg-cream"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-6 text-center font-bold">{i.quantity}</span>
                      <button
                        aria-label="Agregar uno"
                        onClick={() => setQuantity(i.product.id, i.quantity + 1)}
                        className="grid h-8 w-8 place-items-center rounded-full border border-border hover:bg-cream"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                      <button
                        aria-label={`Eliminar ${i.product.name}`}
                        onClick={() => remove(i.product.id)}
                        className="ml-auto grid h-8 w-8 place-items-center rounded-full text-cocoa hover:bg-cream hover:text-brand-red"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="space-y-3 border-t border-border bg-cream-soft px-5 py-4">
            <div className="flex justify-between text-sm text-cocoa">
              <span>Subtotal</span>
              <span>{currency(subtotal)}</span>
            </div>
            <div className="flex justify-between font-display text-lg font-extrabold text-charcoal">
              <span>Total</span>
              <span className="text-brand-red">{currency(subtotal)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full rounded-full bg-gradient-warm px-6 py-3.5 text-base font-bold text-primary-foreground shadow-sweet"
            >
              Continuar al pedido
            </button>
            <a
              href={buildWhatsappUrl(items, subtotal)}
              target="_blank"
              rel="noreferrer"
              className="block w-full rounded-full border-2 border-brand-red/25 bg-warm-white px-6 py-3 text-center text-sm font-bold text-brand-red hover:border-brand-red"
            >
              Ordenar por WhatsApp
            </a>
            <div className="flex justify-between text-xs font-semibold">
              <button onClick={() => setOpen(false)} className="text-cocoa hover:text-brand-red">
                Seguir comprando
              </button>
              <button onClick={clear} className="text-cocoa hover:text-brand-red">
                Vaciar carrito
              </button>
            </div>
          </footer>
        )}
      </aside>
    </div>
  );
}
