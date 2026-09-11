import type { CartItem } from "@/context/cart";
import { siteConfig } from "@/lib/site-config";
import { buildOrderMessage, type OrderDetails } from "@/lib/instagram";

/** Abre WhatsApp con el pedido ya escrito en el mensaje. */
export function openWhatsappOrder(items: CartItem[], total: number, details: OrderDetails = {}) {
  const message = buildOrderMessage(items, total, details);
  const phone = siteConfig.whatsapp.replace(/\D/g, "");
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
}
