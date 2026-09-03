import { useState } from "react";
import { Check, X } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/context/cart";
import { currency } from "@/data/products";
import { openInstagramOrder } from "@/lib/instagram";

const field =
  "w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-brand-orange";

export function Checkout({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { items, subtotal, clear } = useCart();
  const [confirmed, setConfirmed] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    method: "Entrega",
    notes: "",
  });

  if (!open) return null;

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    clear();
  };

  return (
    <div className="fixed inset-0 z-60 flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-charcoal/50" onClick={onClose} />
      <div
        role="dialog"
        aria-label="Finalizar pedido"
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-[2rem] bg-warm-white p-6 shadow-sweet-lg sm:rounded-[2rem]"
      >
        <button
          onClick={onClose}
          aria-label="Cerrar checkout"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-charcoal/70 hover:bg-cream"
        >
          <X className="h-5 w-5" />
        </button>

        {confirmed ? (
          <div className="py-10 text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-gradient-warm text-primary-foreground">
              <Check className="h-7 w-7" />
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold text-charcoal">¡Pedido confirmado!</h2>
            <p className="mt-2 text-cocoa">Te contactaremos muy pronto para coordinar tu entrega.</p>
            <button
              onClick={() => {
                setConfirmed(false);
                onClose();
              }}
              className="mt-6 rounded-full bg-gradient-warm px-7 py-3 font-bold text-primary-foreground"
            >
              Seguir comprando
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-charcoal">Finaliza tu pedido</h2>
              <div className="mt-4 grid gap-3">
                <input required placeholder="Nombre" value={form.name} onChange={set("name")} className={field} />
                <input
                  required
                  type="tel"
                  placeholder="Teléfono"
                  value={form.phone}
                  onChange={set("phone")}
                  className={field}
                />
                <input
                  type="email"
                  placeholder="Correo"
                  value={form.email}
                  onChange={set("email")}
                  className={field}
                />
                <div className="grid grid-cols-2 gap-2">
                  {["Entrega", "Recoger en tienda"].map((m) => (
                    <button
                      type="button"
                      key={m}
                      onClick={() => setForm((f) => ({ ...f, method: m }))}
                      className={`rounded-2xl border-2 px-3 py-3 text-sm font-bold transition-colors ${
                        form.method === m
                          ? "border-brand-red bg-cream text-brand-red"
                          : "border-border bg-card text-cocoa hover:border-brand-orange"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
                {form.method === "Entrega" && (
                  <input
                    required
                    placeholder="Dirección"
                    value={form.address}
                    onChange={set("address")}
                    className={field}
                  />
                )}
                <textarea
                  placeholder="Notas del pedido"
                  value={form.notes}
                  onChange={set("notes")}
                  rows={3}
                  className={field}
                />
              </div>
            </div>

            <aside className="rounded-3xl border border-border bg-cream-soft p-5">
              <h3 className="font-display text-lg font-bold text-charcoal">Resumen</h3>
              <ul className="mt-3 space-y-2 text-sm text-cocoa">
                {items.map((i) => (
                  <li key={i.product.id} className="flex justify-between gap-3">
                    <span className="min-w-0 truncate">
                      {i.quantity} × {i.product.name}
                    </span>
                    <span className="shrink-0">{currency(i.product.price * i.quantity)}</span>
                  </li>
                ))}
                {items.length === 0 && <li>Tu carrito está vacío.</li>}
              </ul>
              <div className="mt-4 flex justify-between border-t border-border pt-3 font-display text-lg font-extrabold text-charcoal">
                <span>Total</span>
                <span className="text-brand-red">{currency(subtotal)}</span>
              </div>
              <button
                type="submit"
                disabled={items.length === 0}
                className="mt-4 w-full rounded-full bg-gradient-warm px-6 py-3.5 font-bold text-primary-foreground shadow-sweet disabled:opacity-50"
              >
                Confirmar pedido
              </button>
              <button
                type="button"
                disabled={items.length === 0}
                onClick={() => {
                  openInstagramOrder(items, subtotal, form);
                  toast("Copiamos tu pedido. Pégalo en el chat de Instagram para enviarlo.");
                }}
                className="mt-2 block w-full rounded-full border-2 border-brand-red/25 bg-warm-white px-6 py-3 text-center text-sm font-bold text-brand-red hover:border-brand-red disabled:opacity-50"
              >
                Ordenar por Instagram
              </button>
            </aside>
          </form>
        )}
      </div>
    </div>
  );
}
