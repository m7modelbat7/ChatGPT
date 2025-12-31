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

type BlogPost = {
  slug: string;
  component: (props: Record<string, unknown>) => JSX.Element;
  metadata: BlogPostMeta;
};

export const posts = [
  {
    slug: "rituals-of-radiance",
    component: Rituals,
    metadata: ritualsMeta,
  },
  {
    slug: "nocturne-recovery",
    component: Nocturne,
    metadata: nocturneMeta,
  },
  {
    slug: "atelier-artistry",
    component: Atelier,
    metadata: atelierMeta,
  },
] satisfies ReadonlyArray<BlogPost>;

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
