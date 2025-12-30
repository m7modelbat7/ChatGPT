import { notFound } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/content/blog";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};
  return {
    title: post.metadata.title,
    description: post.metadata.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) {
    notFound();
  }

  const Content = post.component;

  return (
    <div className="container py-12">
      <Card>
        <CardContent className="prose prose-neutral max-w-none dark:prose-invert">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            {post.metadata.date} · {post.metadata.author}
          </p>
          <Content />
        </CardContent>
      </Card>
    </div>
  );
}
