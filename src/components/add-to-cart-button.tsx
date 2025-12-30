"use client";

import { useCart } from "@/components/cart-context";
import { Button } from "@/components/ui/button";

export function AddToCartButton({ slug }: { slug: string }) {
  const { addItem } = useCart();

  return (
    <Button size="lg" onClick={() => addItem(slug)}>
      Add to cart
    </Button>
  );
}
