"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import products from "@/content/products.json";

const categories = ["All", "Skincare", "Makeup", "Fragrance"];
const sorts = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

export function ShopGrid() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured");

  const filtered = useMemo(() => {
    const lower = query.toLowerCase();
    let items = products.filter((product) =>
      category === "All" ? true : product.category === category
    );
    items = items.filter((product) =>
      [product.name, product.description].some((value) =>
        value.toLowerCase().includes(lower)
      )
    );
    if (sort === "price-asc") {
      items = [...items].sort((a, b) => a.price - b.price);
    }
    if (sort === "price-desc") {
      items = [...items].sort((a, b) => b.price - a.price);
    }
    return items;
  }, [category, query, sort]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-3xl border border-border bg-card p-6 md:grid-cols-[1.3fr_1fr_1fr] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Filters
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {filtered.length} items
          </p>
        </div>
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search products"
          aria-label="Search products"
        />
        <select
          className="h-12 rounded-2xl border border-border bg-transparent px-4 text-sm"
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          aria-label="Sort products"
        >
          {sorts.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap gap-3">
        {categories.map((label) => (
          <Button
            key={label}
            variant={label === category ? "default" : "outline"}
            size="sm"
            onClick={() => setCategory(label)}
          >
            {label}
          </Button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <Card key={product.slug} className="overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={420}
              height={480}
              className="h-60 w-full object-cover"
            />
            <CardContent className="space-y-2">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                {product.category}
              </p>
              <CardTitle className="font-display text-xl">
                {product.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground">${product.price}</p>
              <Button asChild size="sm" className="mt-2 w-full">
                <Link href={`/product/${product.slug}`}>View product</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
