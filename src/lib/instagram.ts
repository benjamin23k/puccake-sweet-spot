import type { CartItem } from "@/context/cart";
import { currency } from "@/data/products";
import { siteConfig } from "@/lib/site-config";

export type OrderDetails = {
  name?: string;
  phone?: string;
  email?: string;
  address?: string;
  method?: string;
  notes?: string;
};

export const instagramDmUrl = `https://ig.me/m/${siteConfig.instagramUsername}`;

function buildOrderMessage(items: CartItem[], total: number, details: OrderDetails = {}) {
  const lines = [
    "¡Hola Puccake! Quiero hacer un pedido 🍰",
    "",
    ...items.map((i) => `• ${i.quantity} x ${i.product.name} — ${currency(i.product.price * i.quantity)}`),
    "",
    `Total: ${currency(total)}`,
  ];

  if (details.name) lines.push(`Nombre: ${details.name}`);
  if (details.phone) lines.push(`Teléfono: ${details.phone}`);
  if (details.email) lines.push(`Correo: ${details.email}`);
  if (details.method) lines.push(`Entrega: ${details.method}`);
  if (details.address) lines.push(`Dirección: ${details.address}`);
  if (details.notes) lines.push(`Notas: ${details.notes}`);

  return lines.join("\n");
}

/**
 * Instagram DM links can't prefill message text, so we copy the order to the
 * clipboard and open the chat — the caller is expected to toast a hint to paste it.
 */
export async function openInstagramOrder(items: CartItem[], total: number, details: OrderDetails = {}) {
  const message = buildOrderMessage(items, total, details);

  try {
    await navigator.clipboard.writeText(message);
  } catch {
    // Clipboard permission denied or unavailable — the DM chat still opens below.
  }

  window.open(instagramDmUrl, "_blank", "noopener,noreferrer");
}
