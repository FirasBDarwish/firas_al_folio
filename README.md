# Minimal Research Portfolio

A minimalist Astro portfolio for a machine-learning / robotics researcher.

## Features

- Minimal homepage with portrait, research description, social links and CV
- Publication collection with:
  - manual Markdown entries
  - automatic bolding of `Firas Darwish`
  - optional arXiv / Scholar / website / code / paper links
  - optional image or GIF
  - `featured: true` yellow selected-work treatment
- Writing archive powered by Markdown, with subtle content types for technical notes, research thoughts, presentations, informal papers, class notes and miscellaneous material
- LaTeX via `remark-math` + KaTeX
- Selected GitHub project list
- Interactive Books page:
  - physical bookshelf layout
  - click a book to pull it into a reading view
  - minimalist personal note and signature
  - real cover images when available, with an automatic typographic fallback cover
  - yellow bookmarks for favourites
  - filters for favourites/currently-reading
- Responsive mobile layout

## 1. Install

You need Node.js 20+.

```bash
npm install
npm run dev
```

Open the local URL Astro prints in your terminal.

For a production check:

```bash
npm run build
npm run preview
```

## 2. Personalise your bio / links

Edit:

```text
src/data/site.ts
```

Update your name, description, affiliation, email, Scholar, GitHub, LinkedIn and X links.

Replace:

```text
public/images/portrait.svg
```

with your own portrait, e.g. `portrait.jpg`, then update `portrait` in `src/data/site.ts`.

## 3. Add your CV

Put your real PDF here:

```text
public/cv.pdf
```

The header and homepage already link to `/cv.pdf`.

## 4. Add a publication

Copy one of the files in:

```text
src/content/publications/
```

Example:

```md
---
title: "My Paper Title"
authors:
  - "Collaborator One"
  - "Firas Darwish"
  - "Collaborator Two"
venue: "CoRL"
year: 2026
image: "/images/publications/my-paper.gif"
featured: true
links:
  arxiv: "https://arxiv.org/..."
  scholar: "https://scholar.google.com/..."
  website: "https://my-project-page.com"
  code: "https://github.com/..."
  paper: "https://..."
---
```

Any link can simply be omitted if it does not exist.

Place paper visuals in:

```text
public/images/publications/
```

GIFs work directly.

Your name is automatically bolded when the author string is exactly `Firas Darwish`.

Set:

```yaml
featured: true
```

for the yellow selected-work highlight and inclusion on the homepage.

## 5. Add a writing post

Create a Markdown file in:

```text
src/content/writing/
```

Example:

```md
---
title: "A note on robot learning"
description: "Short summary shown in the writing index."
date: 2026-08-18
tags: ["robotics", "machine learning"]
type: "technical-note"
draft: false
---

Your Markdown here.

Inline math: $x_t = (1-t)x_0 + tx_1$.

Display math:

$$
\frac{dx_t}{dt} = x_1 - x_0
$$
```

Set `draft: true` to keep a post off the website.

### Writing types and PDFs

The `type` field can be one of:

```text
technical-note
research-thought
presentation
paper
class-note
misc
```

These appear as small, lightly coloured labels on the Writing page. The colours are deliberately subtle so the archive still feels like the rest of the site.

For a presentation, reading-group paper, class assignment or other PDF, put the PDF in:

```text
public/files/
```

and create a tiny Markdown metadata file in `src/content/writing/`, for example:

```md
---
title: "Diffusion Models — Reading Group"
description: "Slides from a reading-group presentation on diffusion and flow models."
date: 2026-05-14
tags: ["diffusion", "reading group"]
type: "presentation"
file: "/files/diffusion-reading-group.pdf"
draft: false
---
```

When `file` is present, the item opens the PDF directly in a new tab. When `file` is omitted, it behaves as a normal Markdown/LaTeX article. This lets notes, thoughts and PDFs all live cleanly in one archive.

## 6. Add / remove books

Edit:

```text
src/data/books.ts
```

Each entry looks like:

```ts
{
  title: 'Book title',
  author: 'Author',
  cover: '/images/books/book-cover.jpg', // optional
  dateRead: 'August 2026',
  note: `Your short personal note.`,
  favourite: true,
  currentlyReading: false,
  height: 240,
  width: 150,
}
```

Delete an object to remove the book. Add another object to add one.

Put actual book cover images (`.jpg`, `.png`, `.webp`, etc.) in:

```text
public/images/books/
```

and point `cover` at the image. If you omit the `cover` field entirely, the bookshelf automatically renders a clean typographic fallback cover using the book title and author. The included SVG covers are examples of the placeholder style and can be replaced whenever you have a real cover image you want to use.

## 7. Highlight GitHub repositories

Edit:

```text
src/data/projects.ts
```

The list is intentionally manual so you control the story your site tells rather than mirroring every repository automatically.

## 8. Main files

```text
src/
├── components/
│   ├── Bookshelf.astro
│   ├── ProjectList.astro
│   └── PublicationRow.astro
├── content/
│   ├── publications/
│   └── writing/
├── data/
│   ├── books.ts
│   ├── projects.ts
│   └── site.ts
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── books.astro
│   ├── index.astro
│   ├── projects.astro
│   ├── publications.astro
│   ├── writing.astro
│   └── writing/[...id].astro
└── styles/
    └── global.css
```

## 9. Deployment

This is a static Astro site, so common easy options are GitHub Pages, Cloudflare Pages, Netlify or Vercel.

Typical build settings:

```text
Build command: npm run build
Output directory: dist
```

## Design notes

The visual system intentionally uses almost no decorative UI. Research imagery, book covers and typography provide the personality. The main accent is a restrained pale yellow, used for selected publications and favourite-book bookmarks.
