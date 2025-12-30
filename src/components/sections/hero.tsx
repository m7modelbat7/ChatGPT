"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-10">
      <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Modern Parisian cosmetics
          </p>
          <h1 className="font-display text-4xl leading-tight md:text-6xl">
            Elevated rituals for luminous skin, satin color, and signature scent.
          </h1>
          <p className="max-w-xl text-base text-muted-foreground md:text-lg">
            Lumière Atelier blends couture textures with botanical actives to create
            thoughtful routines that feel indulgent, personal, and quietly powerful.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/shop">Shop the Atelier</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-[48px] bg-muted/40 p-6 shadow-soft"
        >
          <Image
            src="/images/hero-lifestyle.svg"
            alt="Lumière Atelier skincare arrangement"
            width={560}
            height={640}
            className="h-full w-full rounded-[40px] object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
