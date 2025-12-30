import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "About",
  description: "Discover the Lumière Atelier story and craftsmanship values.",
};

export default function AboutPage() {
  return (
    <div className="container space-y-12 py-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            About
          </p>
          <h1 className="font-display text-4xl md:text-5xl">
            The atelier behind every ritual
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Lumière Atelier is a modern cosmetics house devoted to soft light, gentle
            textures, and intentional routines. Our studio pairs French perfumers with
            skincare chemists to develop formulas that feel couture yet effortless.
          </p>
        </div>
        <Image
          src="/images/story-atelier.svg"
          alt="Atelier workspace"
          width={520}
          height={600}
          className="w-full rounded-[40px] object-cover shadow-soft"
        />
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Formulation",
            body: "Clean yet sensorial blends with clinically-backed actives.",
          },
          {
            title: "Design",
            body: "Minimalist packaging inspired by couture ateliers.",
          },
          {
            title: "Experience",
            body: "Personal rituals designed to elevate daily routines.",
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
