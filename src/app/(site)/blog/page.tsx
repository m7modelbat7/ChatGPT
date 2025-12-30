import Link from "next/link";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/content/blog";

export const metadata = {
  title: "Blog",
  description: "Editorial rituals, skin wisdom, and atelier artistry.",
};

export default function BlogPage() {
  return (
    <div className="container space-y-10 py-12">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
          Journal
        </p>
        <h1 className="font-display text-4xl md:text-5xl">
          The Lumière Journal
        </h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <Card key={post.slug}>
            <CardContent className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                {post.metadata.date}
              </p>
              <CardTitle className="font-display text-2xl">
                {post.metadata.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {post.metadata.excerpt}
              </p>
              <Link href={`/blog/${post.slug}`} className="link-underline text-sm">
                Read more
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
