"use client";
 
/* ------------------------------------------------------------------
   EDIT ME
------------------------------------------------------------------- */
 
const BRAND_NAME = "Sales Hawk";
 
// Paste your GHL calendar booking link here.
const BOOKING_URL = "https://api.leadconnectorhq.com/widget/booking/EUTkSdWQsWfVsLGSxxDN";
 
const FOOTER_NOTE =
  "Results vary. Nothing on this page is a guarantee of income or employment.";
 
/* ------------------------------------------------------------------ */
 
export default function BookPage() {
  const year = new Date().getFullYear();
 
  return (
    <>
      <header className="nav">
        <div className="nav-inner">
          <a className="brand" href="/">
            {BRAND_NAME}
          </a>
        </div>
      </header>
 
      <main>
        <section className="book">
          <div className="book-inner">
            <p className="eyebrow">YOU'RE IN</p>
            <h1 className="book-headline">Book your call.</h1>
            <p className="subhead">
              Grab a time below that works for you — we'll see you there.
            </p>
 
            <div className="embed-frame">
              <iframe
                src={BOOKING_URL}
                title="Schedule a call"
                loading="lazy"
              />
            </div>
          </div>
        </section>
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
 
        .eyebrow {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent);
          margin: 0 0 18px;
        }
 
        .book {
          padding: 88px 24px 64px;
        }
        .book-inner {
          max-width: 760px;
          margin: 0 auto;
          text-align: center;
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
 
        .embed-frame {
          position: relative;
          width: 100%;
          min-height: 640px;
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--bg-panel-2);
          border: 1px solid var(--border);
        }
        .embed-frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: 0;
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
          .embed-frame {
            min-height: 560px;
          }
        }
      `}</style>
    </>
  );
}
