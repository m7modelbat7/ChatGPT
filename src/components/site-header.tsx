import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Collections", href: "/#collections" },
  { name: "About", href: "/about" },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-lg font-semibold tracking-[0.2em] uppercase">
          Lumière Atelier
        </Link>
        <nav className="hidden gap-6 text-sm md:flex">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="link-underline">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/cart">Cart</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
