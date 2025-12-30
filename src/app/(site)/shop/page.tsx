import { ShopGrid } from "@/components/shop-grid";

export const metadata = {
  title: "Shop",
  description: "Browse the Lumière Atelier collections across skincare, makeup, and fragrance.",
};

export default function ShopPage() {
  return (
    <div className="container space-y-10 py-12">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Shop
        </p>
        <h1 className="font-display text-4xl md:text-5xl">
          Boutique selection of atelier essentials
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground md:text-base">
          Explore curated categories, discover your ideal ritual, and build a
          personalized routine.
        </p>
      </div>
      <ShopGrid />
    </div>
  );
}
