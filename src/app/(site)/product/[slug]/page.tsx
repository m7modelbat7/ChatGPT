import Image from "next/image";
import { notFound } from "next/navigation";

import { AddToCartButton } from "@/components/add-to-cart-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import products from "@/content/products.json";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container space-y-12 py-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="space-y-4">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={600}
            height={720}
            className="w-full rounded-[40px] object-cover shadow-soft"
          />
          <div className="grid grid-cols-2 gap-4">
            {product.images.map((image) => (
              <Image
                key={image}
                src={image}
                alt={`${product.name} detail`}
                width={300}
                height={360}
                className="h-40 w-full rounded-[28px] object-cover"
              />
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            {product.category}
          </p>
          <h1 className="font-display text-4xl md:text-5xl">{product.name}</h1>
          <p className="text-sm text-muted-foreground md:text-base">
            {product.description}
          </p>
          <p className="text-2xl font-semibold">${product.price}</p>
          <AddToCartButton slug={product.slug} />
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {product.ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How to use</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{product.usage}</p>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Reviews</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{product.rating} average rating</span>
              <span>{product.reviews} reviews</span>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
