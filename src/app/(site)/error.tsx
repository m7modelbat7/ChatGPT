"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container flex flex-col items-center gap-4 py-24 text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
        Something went wrong
      </p>
      <h1 className="font-display text-3xl">Our atelier needs a moment.</h1>
      <Button onClick={reset}>Try again</Button>
    </div>
  );
}
