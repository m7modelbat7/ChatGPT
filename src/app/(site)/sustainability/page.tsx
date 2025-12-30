import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Sustainability & Ingredients",
  description: "Ingredient transparency and sustainable sourcing at Lumière Atelier.",
};

export default function SustainabilityPage() {
  return (
    <div className="container space-y-12 py-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Sustainability
          </p>
          <h1 className="font-display text-4xl md:text-5xl">
            Conscious sourcing, transparent rituals
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            We partner with regenerative farms, track every ingredient lot, and build
            refillable packaging systems to reduce waste across our atelier.
          </p>
        </div>
        <Image
          src="/images/sustainability.svg"
          alt="Botanical ingredients"
          width={520}
          height={600}
          className="w-full rounded-[40px] object-cover shadow-soft"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Ingredient Integrity",
            body: "Full traceability for every botanical extract and fragrance accord.",
          },
          {
            title: "Responsible Packaging",
            body: "Glass-first components with refill programs in our flagship studio.",
          },
          {
            title: "Low Impact Logistics",
            body: "Carbon-neutral shipping partnerships across global regions.",
          },
        ].map((item) => (
          <Card key={item.title}>
            <CardContent className="space-y-3">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.body}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
