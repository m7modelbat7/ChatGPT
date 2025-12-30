import Rituals, { metadata as ritualsMeta } from "./rituals-of-radiance.mdx";
import Nocturne, { metadata as nocturneMeta } from "./nocturne-recovery.mdx";
import Atelier, { metadata as atelierMeta } from "./atelier-artistry.mdx";

export type BlogPostMeta = {
  title: string;
  description: string;
  date: string;
  author?: string;
  tags?: string[];
};

export const posts = [
  {
    slug: "rituals-of-radiance",
    component: Rituals,
    metadata: ritualsMeta as BlogPostMeta,
  },
  {
    slug: "nocturne-recovery",
    component: Nocturne,
    metadata: nocturneMeta as BlogPostMeta,
  },
  {
    slug: "atelier-artistry",
    component: Atelier,
    metadata: atelierMeta as BlogPostMeta,
  },
] as const;

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
