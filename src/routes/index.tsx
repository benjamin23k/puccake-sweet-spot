import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram } from "lucide-react";
import { toast } from "sonner";
import { CartProvider, useCart } from "@/context/cart";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategorySection } from "@/components/CategorySection";
import { ProductGrid } from "@/components/ProductGrid";
import { PromotionSection } from "@/components/PromotionSection";
import { CustomSection } from "@/components/CustomSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { Checkout } from "@/components/Checkout";
import { Toaster } from "@/components/ui/sonner";
import { openInstagramOrder } from "@/lib/instagram";

const title = "Puccake — Repostería boutique, postres y dulces";
const description =
  "Pasteles, cupcakes, donas, postres y dulces artesanales de Puccake. Pequeños antojos, grandes momentos. Ordena en línea o por Instagram.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function InstagramFab() {
  const { items, subtotal } = useCart();
  return (
    <button
      type="button"
      onClick={() => {
        openInstagramOrder(items, subtotal);
        toast("Copiamos tu pedido. Pégalo en el chat de Instagram para enviarlo.");
      }}
      aria-label="Ordenar por Instagram"
      className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-sweet-lg transition-transform hover:-translate-y-0.5"
    >
      <Instagram className="h-5 w-5" />
      <span className="hidden sm:inline">Ordenar por Instagram</span>
    </button>
  );
}

function Index() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <CartProvider>
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <ProductGrid />
        <PromotionSection />
        <CustomSection />
        <AboutSection />
      </main>
      <Footer />
      <CartDrawer onCheckout={() => setCheckoutOpen(true)} />
      <Checkout open={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
      <InstagramFab />
      <Toaster />
    </CartProvider>
  );
}
