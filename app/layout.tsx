import type { Metadata } from "next";
import { Manrope, Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
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
            </Link>
            <nav aria-label="Main navigation" className="main-nav">
              <Link href="/">Home</Link>
              <Link href="/features">Features</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
              <a href="#newsletter">Newsletter</a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <p className="footer-title">BoatRealm</p>
              <p className="footer-text">
                Building a clearer standard for boat records, one log at a time.
              </p>
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
          src="https://platform-api.sharethis.com/js/sharethis.js#property=69fbd42c64241bce3a6cb001&product=sop"
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
