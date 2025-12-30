import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center gap-4 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
        404
      </p>
      <h1 className="font-display text-3xl">We couldn&apos;t find that page.</h1>
      <Button asChild>
        <Link href="/">Return home</Link>
      </Button>
    </div>
  );
}
