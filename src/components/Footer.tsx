import { Clock, Instagram, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/puccake-logo.png.asset.json";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer id="contacto" className="bg-charcoal text-cream-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Logo de Puccake"
              width={48}
              height={48}
              loading="lazy"
              className="h-12 w-12 rounded-full object-cover"
            />
            <span className="font-display text-xl font-bold text-brand-gold">Puccake</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-cream-soft/70">
            Repostería boutique hecha con cariño. Pequeños antojos, grandes momentos.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-brand-gold">Menú</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream-soft/75">
            <li><a href="#menu" className="hover:text-brand-orange">Favoritos</a></li>
            <li><a href="#categorias" className="hover:text-brand-orange">Categorías</a></li>
            <li><a href="#menu" className="hover:text-brand-orange">Promociones</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-brand-gold">Ayuda</h3>
          <ul className="mt-4 space-y-2 text-sm text-cream-soft/75">
            <li><a href="#sobre" className="hover:text-brand-orange">Sobre nosotros</a></li>
            <li><a href="#menu" className="hover:text-brand-orange">Cómo pedir</a></li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-orange">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-brand-gold">Contacto</h3>
          <ul className="mt-4 space-y-3 text-sm text-cream-soft/75">
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-brand-orange" /> {siteConfig.schedule}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-brand-orange" /> {siteConfig.location}
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a
              href={siteConfig.instagram}
              aria-label="Instagram de Puccake"
              className="grid h-10 w-10 place-items-center rounded-full bg-cream-soft/10 transition-colors hover:bg-brand-red"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              aria-label="WhatsApp de Puccake"
              className="grid h-10 w-10 place-items-center rounded-full bg-cream-soft/10 transition-colors hover:bg-brand-red"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream-soft/10 py-5 text-center text-xs text-cream-soft/60">
        © 2026 Puccake. Todos los derechos reservados.
      </div>
    </footer>
  );
}
