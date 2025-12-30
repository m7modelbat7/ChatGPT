import Link from "next/link";

const links = [
  { name: "Privacy", href: "/legal/privacy" },
  { name: "Terms", href: "/legal/terms" },
  { name: "Accessibility", href: "/legal/accessibility" },
  { name: "Shipping", href: "/legal/shipping" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-muted/40">
      <div className="container grid gap-8 py-12 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold uppercase tracking-[0.2em]">
            Lumière Atelier
          </p>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            A modern cosmetics house crafting sensorial rituals, luminous skin, and
            atelier-inspired fragrance.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold">Studio</p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>48 Rue de l&apos;Éclat</li>
            <li>Paris, 75003</li>
            <li>hello@lumiereatelier.com</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Legal</p>
          <ul className="mt-3 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="link-underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © 2024 Lumière Atelier. All rights reserved.
      </div>
    </footer>
  );
}
