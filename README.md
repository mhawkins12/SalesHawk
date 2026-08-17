# The Close Room — one-page site

A single-page Next.js site: hero with your video + link buttons, a scrolling
ticker strip, and a booking section with your Typeform + calendar embedded
side by side.

## 1. Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## 2. Edit your content

Everything you need to change lives at the top of **`app/page.js`**:

- `BRAND_NAME` — your community name (also shows in the nav and footer)
- `HERO_EYEBROW`, `HERO_HEADLINE_1/2`, `HERO_SUBHEAD` — hero copy
- `VIDEO_EMBED_URL` — your explainer video / VSL. Use the **embed** URL, not
  the normal share link:
  - YouTube: `https://www.youtube.com/embed/VIDEO_ID`
  - Vimeo: `https://player.vimeo.com/video/VIDEO_ID`
- `LINKS` — the row of buttons under the video (socials, reviews, etc.)
- `TICKER_ITEMS` — short phrases in the scrolling strip
- `TYPEFORM_URL` — your Typeform share link
- `CALENDLY_URL` — your Calendly (or Cal.com, etc.) scheduling link
- `FOOTER_NOTE` — small print at the bottom

Colors and fonts are set as CSS variables at the top of `app/globals.css`
(`--bg`, `--accent`, etc.) if you want to adjust the palette.

## 3. Deploy to Vercel

**Easiest path (no terminal):**
1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo, and
   click Deploy. No configuration needed — Vercel auto-detects Next.js.

**Or from the command line:**
```bash
npm install -g vercel
vercel
```
Follow the prompts, and it'll give you a live URL.

## Notes

- Typeform and Calendly both allow being embedded in an `<iframe>` by
  default for most plans — if the embed shows blank, double check the link
  is a public share link (not a dashboard/admin URL).
- The ticker pauses to respect `prefers-reduced-motion` for accessibility.
