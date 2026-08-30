"use client";
 
import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Script from "next/script";
 
/* ------------------------------------------------------------------
   EDIT ME — all the content you'll want to swap in lives right here.
------------------------------------------------------------------- */
 
const BRAND_NAME = "Sales Hawk";
 
const HERO_EYEBROW = "REMOTE SALES COMMUNITY";
const HERO_HEADLINE_1 = "Get Paid What";
const HERO_HEADLINE_2 = "You're Worth.";
const HERO_SUBHEAD =
  "Watch how our members are landing remote sales roles and building real commission income — then grab a spot on the calendar.";
 
// Paste a YouTube or Vimeo EMBED url here (not the normal watch/share link).
// YouTube example: https://www.youtube.com/embed/VIDEO_ID
// Vimeo example:   https://player.vimeo.com/video/VIDEO_ID
const VIDEO_EMBED_URL = "https://www.youtube.com/embed/QiEff076BQc";
 
// Buttons that sit under the video. Add, remove, or relabel freely.
const LINKS = [
 { label: "Watch reviews", href: "https://www.youtube.com/watch?v=guJJKfDBcIM&list=PLFFdLaiLbPo5aRO_nZLi_bMe6xjLbpMgp" },
  { label: "Check out my Instagram", href: "https://www.instagram.com/matthunterhawk/" },
  { label: "Join the newsletter", href: "#" },
];
 
// Short phrases for the scrolling ticker strip.
const TICKER_ITEMS = [
  "REAL REPS. REAL RESULTS.",
  "BUILT BY CLOSERS, FOR CLOSERS.",
  "NO FLUFF. JUST OFFERS.",
  "YOUR NEXT ROLE IS ONE CALL AWAY.",
  "COMMISSION-ONLY? WE'LL FIX THAT.",
];
 
// Your Typeform form ID — just the part after "https://form.typeform.com/to/"
const TYPEFORM_ID = "I8Fmq6Dh";
 
// Your GHL calendar booking link (the src from the embed code GHL gave you).
const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/EUTkSdWQsWfVsLGSxxDN";
 
const FOOTER_NOTE =
  "Results vary. Nothing on this page is a guarantee of income or employment.";
 
/* ------------------------------------------------------------------ */
 
function BookingSection() {
  const searchParams = useSearchParams();
  const applied = searchParams.get("applied") === "true";
 
  // Jump straight to this section once it's mounted, instead of relying on
  // the browser's #book anchor scroll (which can fire before this section
  // exists, since it loads inside a Suspense boundary).
  useEffect(() => {
    if (applied) {
      document
        .getElementById("book")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [applied]);
 
  return (
    <section id="book" className="book">
      <div className="book-inner">
        {applied ? (
          <>
            <p className="eyebrow">YOU'RE IN</p>
            <h2 className="book-headline">Book your call.</h2>
            <p className="subhead">
              Grab a time below that works for you — we'll see you there.
            </p>
 
            <div className="book-card">
              <div className="book-card-head">
                <span className="step-tag">Step 2</span>
                <h3>Pick a time</h3>
              </div>
              <Script
                src="https://link.msgsndr.com/js/form_embed.js"
                strategy="afterInteractive"
              />
              <div className="calendar-frame">
                <iframe
                  src={BOOKING_URL}
                  title="Schedule a call"
                  id="ghl-booking-iframe"
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="eyebrow">READY WHEN YOU ARE</p>
            <h2 className="book-headline">Let's see if it's a fit.</h2>
            <p className="subhead">
              Fill out the quick application below. If it's a fit, you'll
              be sent straight to our calendar to lock in a time to talk.
            </p>
 
            <div className="book-card">
              <div className="book-card-head">
                <span className="step-tag">Step 1</span>
                <h3>Tell us about you</h3>
              </div>
              <Script
                src="//embed.typeform.com/next/embed.js"
                strategy="afterInteractive"
              />
              <div className="embed-frame">
                <div
                  data-tf-widget={TYPEFORM_ID}
                  data-tf-inline-on-mobile
                  className="tf-widget"
                />
              </div>
            </div>
          </>
        )}
      </div>
 
      <style jsx>{`
        .book {
          padding: 96px 24px 64px;
        }
        .book-inner {
          max-width: 640px;
          margin: 0 auto;
          text-align: center;
        }
        .eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0 0 18px;
        }
        .book-headline {
          font-family: var(--font-display);
          font-size: clamp(38px, 6vw, 60px);
          text-transform: uppercase;
          letter-spacing: 0.01em;
          margin: 0 0 18px;
        }
        .subhead {
          font-size: 18px;
          line-height: 1.6;
          color: var(--text-muted);
          max-width: 560px;
          margin: 0 auto 40px;
        }
        .book-card {
          margin-top: 48px;
          text-align: left;
          background: var(--bg-panel);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 20px;
          display: flex;
          flex-direction: column;
        }
        .book-card-head {
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-bottom: 16px;
        }
        .book-card-head h3 {
          font-family: var(--font-display);
          font-size: 26px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          margin: 0;
        }
        .step-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent);
          background: var(--accent-soft);
          padding: 5px 10px;
          border-radius: 999px;
        }
        .embed-frame {
          position: relative;
          width: 100%;
          min-height: 520px;
          border-radius: 10px;
          overflow: hidden;
          background: var(--bg-panel-2);
          border: 1px solid var(--border);
        }
        .embed-frame :global(.tf-widget) {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
        .calendar-frame {
          width: 100%;
          min-height: 820px;
          border-radius: 10px;
          overflow: hidden;
          background: var(--bg-panel-2);
          border: 1px solid var(--border);
        }
        .calendar-frame iframe {
          display: block;
          width: 100%;
          height: 820px;
          border: 0;
        }
        @media (max-width: 760px) {
          .embed-frame {
            min-height: 460px;
          }
          .calendar-frame,
          .calendar-frame iframe {
            min-height: 900px;
            height: 900px;
          }
        }
      `}</style>
    </section>
  );
}
 
export default function Page() {
  const year = new Date().getFullYear();
  const tickerLoop = [...TICKER_ITEMS, ...TICKER_ITEMS];
 
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <span className="brand">{BRAND_NAME}</span>
          <a className="nav-cta" href="#book">
            Book a call
          </a>
        </div>
      </header>
 
      <main>
        {/* ---------------- HERO ---------------- */}
        <section className="hero">
          <div className="hero-inner">
            <p className="eyebrow">{HERO_EYEBROW}</p>
            <h1 className="headline">
              {HERO_HEADLINE_1}
              <br />
              <span className="accent-text">{HERO_HEADLINE_2}</span>
            </h1>
            <p className="subhead">{HERO_SUBHEAD}</p>
 
            <div className="video-frame">
              <iframe
                src={VIDEO_EMBED_URL}
                title="Community explainer video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
 
            <div className="link-row">
              {LINKS.map((link) => (
                <a key={link.label} className="link-pill" href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
 
        {/* ---------------- TICKER ---------------- */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {tickerLoop.map((item, i) => (
              <span className="ticker-item" key={i}>
                {item}
                <span className="ticker-dot">●</span>
              </span>
            ))}
          </div>
        </div>
 
        {/* ---------------- APPLY / BOOK (swaps based on ?applied=true) ---------------- */}
        <Suspense fallback={null}>
          <BookingSection />
        </Suspense>
      </main>
 
      <footer className="footer">
        <div className="footer-inner">
          <span className="brand small">{BRAND_NAME}</span>
          <p>
            © {year} {BRAND_NAME}. All rights reserved.
          </p>
          <p className="disclaimer">{FOOTER_NOTE}</p>
        </div>
      </footer>
 
      <style jsx>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 40;
          backdrop-filter: blur(10px);
          background: rgba(10, 13, 19, 0.75);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          max-width: 1120px;
          margin: 0 auto;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          font-family: var(--font-display);
          font-size: 24px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .brand.small {
          font-size: 20px;
        }
        .nav-cta {
          background: var(--accent);
          color: #171106;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 10px 18px;
          border-radius: 999px;
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .nav-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px -8px var(--accent);
        }
 
        .eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0 0 18px;
        }
 
        .hero {
          padding: 88px 24px 64px;
          background: radial-gradient(
              ellipse 900px 500px at 50% -10%,
              rgba(230, 176, 74, 0.12),
              transparent 60%
            ),
            var(--bg);
        }
        .hero-inner {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }
        .headline {
          font-family: var(--font-display);
          font-size: clamp(48px, 9vw, 92px);
          line-height: 0.98;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          margin: 0 0 22px;
        }
        .accent-text {
          color: var(--accent);
        }
        .subhead {
          font-size: 18px;
          line-height: 1.6;
          color: var(--text-muted);
          max-width: 560px;
          margin: 0 auto 40px;
        }
 
        .video-frame {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          border-radius: var(--radius);
          overflow: hidden;
          background: #000;
          border: 1px solid var(--border-strong);
          box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.7);
        }
        .video-frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }
 
        .link-row {
          margin-top: 28px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }
        .link-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 20px;
          border-radius: 999px;
          background: var(--bg-panel-2);
          border: 1px solid var(--border);
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          transition: border-color 0.15s ease, transform 0.15s ease,
            color 0.15s ease;
        }
        .link-pill span {
          color: var(--accent);
          font-size: 12px;
          transition: transform 0.15s ease;
        }
        .link-pill:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        .link-pill:hover span {
          transform: translate(2px, -2px);
        }
 
        .ticker {
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: var(--bg-panel);
          overflow: hidden;
          padding: 16px 0;
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: scroll-ticker 32s linear infinite;
        }
        .ticker-item {
          display: inline-flex;
          align-items: center;
          gap: 28px;
          font-family: var(--font-display);
          font-size: 20px;
          letter-spacing: 0.06em;
          color: var(--text-muted);
          padding: 0 28px;
          white-space: nowrap;
        }
        .ticker-dot {
          color: var(--accent);
          font-size: 8px;
        }
        @keyframes scroll-ticker {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
 
        .footer {
          border-top: 1px solid var(--border);
          padding: 40px 24px;
        }
        .footer-inner {
          max-width: 1120px;
          margin: 0 auto;
          text-align: center;
          color: var(--text-faint);
        }
        .footer-inner .brand {
          display: block;
          margin-bottom: 14px;
          color: var(--text-muted);
        }
        .footer-inner p {
          margin: 4px 0;
          font-size: 13px;
        }
        .disclaimer {
          max-width: 560px;
          margin: 10px auto 0;
          font-size: 12px;
          line-height: 1.6;
        }
 
        @media (max-width: 760px) {
          .hero {
            padding-top: 64px;
          }
        }
      `}</style>
    </>
  );
}
