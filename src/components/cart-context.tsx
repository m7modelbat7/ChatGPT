"use client";

import React, { createContext, useContext, useMemo, useState } from "react";

import products from "@/content/products.json";

export type CartItem = {
  slug: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (slug: string) => void;
  removeItem: (slug: string) => void;
  updateQuantity: (slug: string, quantity: number) => void;
  clear: () => void;
  total: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (slug: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.slug === slug);
      if (existing) {
        return prev.map((item) =>
          item.slug === slug
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { slug, quantity: 1 }];
    });
  };

  const removeItem = (slug: string) => {
    setItems((prev) => prev.filter((item) => item.slug !== slug));
  };

  const updateQuantity = (slug: string, quantity: number) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.slug === slug ? { ...item, quantity } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clear = () => setItems([]);

  const total = useMemo(() => {
    return items.reduce((sum, item) => {
      const product = products.find((product) => product.slug === item.slug);
      return sum + (product?.price ?? 0) * item.quantity;
    }, 0);
  }, [items]);

  const value = { items, addItem, removeItem, updateQuantity, clear, total };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
