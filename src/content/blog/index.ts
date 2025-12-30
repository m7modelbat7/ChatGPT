import Rituals, { metadata as ritualsMeta } from "./rituals-of-radiance.mdx";
import Nocturne, { metadata as nocturneMeta } from "./nocturne-recovery.mdx";
import Atelier, { metadata as atelierMeta } from "./atelier-artistry.mdx";

export const blogPosts = [
  {
    slug: "rituals-of-radiance",
    component: Rituals,
    metadata: Rituals.metadata,
  },
  {
    slug: "nocturne-recovery",
    component: Nocturne,
    metadata: Nocturne.metadata,
  },
  {
    slug: "atelier-artistry",
    component: Artistry,
    metadata: Artistry.metadata,
  },
];
