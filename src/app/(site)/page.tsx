import Image from "next/image";
import Link from "next/link";

import { Hero } from "@/components/sections/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import collections from "@/content/collections.json";
import products from "@/content/products.json";
import testimonials from "@/content/testimonials.json";

export const metadata = {
  title: "Home",
};

const bestSellers = products.slice(0, 4);

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="collections">
        <div className="container space-y-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                Collections
              </p>
              <h2 className="font-display text-3xl md:text-4xl">
                Curated rituals for every mood
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link href="/shop">Explore the shop</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {collections.map((collection) => (
              <Card key={collection.slug} className="overflow-hidden">
                <Image
                  src={`/images/collection-${collection.slug}.svg`}
                  alt={collection.name}
                  width={720}
                  height={420}
                  className="h-56 w-full object-cover"
                />
                <CardContent className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    {collection.highlight}
                  </p>
                  <CardTitle className="font-display text-2xl">
                    {collection.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {collection.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="container space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Best sellers
            </p>
            <h2 className="font-display text-3xl md:text-4xl">
              Icons of the atelier
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {bestSellers.map((product) => (
              <Card key={product.slug} className="overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  width={360}
                  height={420}
                  className="h-56 w-full object-cover"
                />
                <CardContent className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                    {product.category}
                  </p>
                  <CardTitle className="font-display text-lg">
                    {product.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    ${product.price}
                  </p>
                  <Button asChild size="sm" className="mt-2 w-full">
                    <Link href={`/product/${product.slug}`}>View product</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Image
            src="/images/story-atelier.svg"
            alt="Atelier craftsmanship"
            width={520}
            height={600}
            className="w-full rounded-[40px] object-cover shadow-soft"
          />
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Our story
            </p>
            <h2 className="font-display text-3xl md:text-4xl">
              Crafted like couture, formulated like skincare
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Founded in Paris, Lumière Atelier collaborates with chemists and
              fragrance houses to create sensorial formulas that treat skin and
              spirit with equal care. Every product is thoughtfully balanced between
              artistry and efficacy.
            </p>
            <Button variant="outline" asChild>
              <Link href="/about">Meet the atelier</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="container space-y-10">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
              Testimonials
            </p>
            <h2 className="font-display text-3xl md:text-4xl">
              Loved by editors and insiders
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">“{testimonial.quote}”</p>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Card className="overflow-hidden border-none bg-primary text-primary-foreground shadow-soft">
            <CardContent className="grid gap-6 p-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-primary-foreground/70">
                  Newsletter
                </p>
                <h2 className="font-display text-3xl md:text-4xl">
                  Receive private atelier updates
                </h2>
                <p className="text-sm text-primary-foreground/80">
                  Join for new launches, rituals, and editorial insights.
                </p>
              </div>
              <form
                className="flex flex-col gap-3 sm:flex-row"
                action="/api/newsletter"
                method="post"
              >
                <input
                  className="h-12 flex-1 rounded-full bg-white/10 px-5 text-sm text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  required
                />
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Join
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
