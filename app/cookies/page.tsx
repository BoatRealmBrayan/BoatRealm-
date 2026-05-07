import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie policy for BoatRealm Maintenance Log Book.",
};

export default function CookiesPage() {
  return (
    <div className="page-shell">
      <section className="container narrow legal">
        <p className="eyebrow">Legal</p>
        <h1>Cookie Policy</h1>
        <p>Last updated: May 5, 2026</p>
        <h2>What are cookies?</h2>
        <p>
          Cookies are small files placed on your device to improve website
          functionality, remember preferences, and measure performance.
        </p>
        <h2>How BoatRealm uses cookies</h2>
        <p>
          We use essential cookies for session integrity and may use analytics
          cookies to understand how visitors interact with the site.
        </p>
        <h2>Managing cookies</h2>
        <p>
          You can control or disable cookies in your browser settings. Some
          parts of the website may not function as intended when cookies are
          disabled.
        </p>
      </section>
    </div>
  );
}
