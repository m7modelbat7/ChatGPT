import { CartView } from "@/components/cart-view";

export const metadata = {
  title: "Cart",
};

export default function CartPage() {
  return (
    <div className="container space-y-10 py-12">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Cart
        </p>
        <h1 className="font-display text-4xl md:text-5xl">Your ritual edit</h1>
      </div>
      <CartView />
    </div>
  );
}
