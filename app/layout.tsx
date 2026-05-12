import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import SiteNav from "./components/site-nav";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-FNCXXVFTPV";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://boatrealm.com"),
  title: {
    default: "BoatRealm Maintenance Log Book",
    template: "%s | BoatRealm",
  },
  description:
    "BoatRealm is a maintenance log book app for boat owners. Track service, documents, vendors, and costs in one trusted record.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "BoatRealm Maintenance Log Book",
    description:
      "Track service history, expenses, and records with the BoatRealm maintenance log book app.",
    url: "https://boatrealm.com",
    siteName: "BoatRealm",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoatRealm Maintenance Log Book",
    description:
      "A modern digital maintenance log book designed for real boat owners.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${montserrat.variable}`}>
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              <Image
                src="/Boatrealm-Logo.svg"
                alt="BoatRealm logo"
                width={160}
                height={48}
                priority
                className="brand-logo"
              />
              <span className="brand-slogan">smart maintenance logbook</span>
            </Link>
            <SiteNav />
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <Image
                src="/Boatrealm-Logbook-Logo.svg"
                alt="BoatRealm logo"
                width={140}
                height={42}
                className="footer-logo"
              />
              <p className="footer-slogan">smart maintenance logbook</p>
              <p className="footer-text">
              Building the most trusted platform in the boating industry.
              </p>
              <p className="footer-text">A clearer standard for boat records, one log at a time.</p>
              <div className="footer-social">
                <p className="footer-title">Follow</p>
                <div className="social-buttons" aria-label="BoatRealm social links">
                  <a
                    href="https://www.youtube.com/@BoatRealm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                    aria-label="BoatRealm on YouTube"
                  >
                    <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
                      <rect x="3" y="6" width="18" height="12" rx="4" />
                      <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" />
                    </svg>
                    <span className="sr-only">YouTube</span>
                  </a>
                  <a
                    href="https://www.instagram.com/boatrealm/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                    aria-label="BoatRealm on Instagram"
                  >
                    <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
                      <rect x="4" y="4" width="16" height="16" rx="5" />
                      <circle cx="12" cy="12" r="3.2" />
                      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/boatrealm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                    aria-label="BoatRealm on Facebook"
                  >
                    <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
                      <path d="M14 8h2V4h-2.2C10.7 4 9 5.8 9 8.8V11H7v4h2v5h4v-5h2.5l.5-4H13v-2c0-.7.3-1 1-1z" fill="currentColor" stroke="none" />
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@boatrealm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-button"
                    aria-label="BoatRealm on TikTok"
                  >
                    <svg viewBox="0 0 24 24" className="social-icon" aria-hidden="true">
                      <path d="M14 5c.8 1.7 2.1 2.8 4 3.1v3.2a7.1 7.1 0 0 1-4-1.3V14a5 5 0 1 1-5-5h.3v3.3H9a1.7 1.7 0 1 0 1.7 1.7V5z" fill="currentColor" stroke="none" />
                    </svg>
                    <span className="sr-only">TikTok</span>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className="footer-title">Navigate</p>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/features">Features</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer-title">Legal</p>
              <ul>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Use</Link>
                </li>
                <li>
                  <Link href="/cookies">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="copyright">© 2026 BoatRealm. All rights reserved.</p>
        </footer>

        <Script
          src="https://platform-api.sharethis.com/js/sharethis.js#property=69fbd42c64241bce3a6cb001&product=inline-share-buttons"
          strategy="afterInteractive"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
