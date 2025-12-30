# Lumière Atelier

Premium cosmetics brand site built with Next.js App Router, TypeScript, Tailwind CSS, and a local JSON/MDX content layer.

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Create a new project in [Vercel](https://vercel.com/new).
3. Select this repository and accept the defaults.
4. Deploy. Vercel will detect Next.js automatically.

## Editing guide for non-engineers

All of the copy and product data lives in `/src/content`:

- **Products:** `src/content/products.json`
- **Collections:** `src/content/collections.json`
- **Testimonials:** `src/content/testimonials.json`
- **Blog posts:** `src/content/blog/*.mdx`

### Updating products

1. Open `src/content/products.json`.
2. Update the name, description, price, or ingredients.
3. Make sure the `slug` stays unique and only uses lowercase letters and dashes.
4. Save the file. The site updates automatically.

### Adding a blog post

1. Duplicate an existing file in `src/content/blog/`.
2. Update the `metadata` object (title, excerpt, date, author).
3. Edit the markdown content below the metadata.
4. Add the new entry to `src/content/blog/index.ts` so it appears in the blog list.

### Updating imagery

All images live in `/public/images`. Keep the same filename or update the references in the JSON files.

---

**Brand name:** Lumière Atelier
