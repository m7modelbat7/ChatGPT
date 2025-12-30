"use client";

import Image from "next/image";
import Link from "next/link";

import { useCart } from "@/components/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import products from "@/content/products.json";

export function CartView() {
  const { items, updateQuantity, removeItem, total, clear } = useCart();
  const detailed = items.map((item) => ({
    ...item,
    product: products.find((product) => product.slug === item.slug),
  }));

  return (
    <>
      {items.length === 0 ? (
        <Card>
          <CardContent className="space-y-4 text-center">
            <p className="text-muted-foreground">Your cart is currently empty.</p>
            <Button asChild>
              <Link href="/shop">Continue shopping</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {detailed.map((item) => (
              <Card key={item.slug}>
                <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.product?.images[0] ?? "/images/product-base.svg"}
                      alt={item.product?.name ?? "Product"}
                      width={120}
                      height={140}
                      className="h-24 w-20 rounded-2xl object-cover"
                    />
                    <div>
                      <p className="font-semibold">{item.product?.name}</p>
                      <p className="text-sm text-muted-foreground">
                        ${item.product?.price}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <label className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Qty
                    </label>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(event) =>
                        updateQuantity(item.slug, Number(event.target.value))
                      }
                      className="h-10 w-20 rounded-xl border border-border bg-transparent px-3"
                    />
                    <Button variant="ghost" size="sm" onClick={() => removeItem(item.slug)}>
                      Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Estimated total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <Button size="lg" className="w-full">
                Checkout
              </Button>
              <Button variant="outline" className="w-full" onClick={clear}>
                Clear cart
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
