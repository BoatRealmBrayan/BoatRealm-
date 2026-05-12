import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "../components/reveal";

const featureCards = [
  {
    title: "Boat General Information",
    description:
      "Store key vessel details in one place, including vessel profile, generator and engine information, plus service provider contacts.",
    image: "/features/boat-general-info.svg",
    imageAlt: "Illustration of a boat profile with engine and generator details",
  },
  {
    title: "Receipt Auto Analyzer",
    description:
      "Upload, scan and auto categorize spending receipts and invoices in a snap.",
    image: "/features/Receipt-auto-analyser.svg",
    imageAlt: "Illustration of auto-scanned and categorized receipts and invoices",
  },
  {
    title: "Maintenance and Repair Ledger",
    description:
      "Track every entry in a clear ledger and filter by category: Expenses, Maintenance, and Upgrades.",
    image: "/features/maintenance-ledger.svg",
    imageAlt: "Illustration of a maintenance ledger grouped by categories",
  },
  {
    title: "Monthly Spending Report",
    description:
      "Review monthly spending totals to quickly understand how much your vessel care is costing over time.",
    image: "/features/monthly-spending.svg",
    imageAlt: "Illustration of a monthly spending bar chart",
  },  
  {
    title: "PDF Export and Download",
    description:
      "Generate and download vessel information and service-record reports in PDF for surveys, insurance, and resale.",
    image: "/features/pdf-export.svg",
    imageAlt: "Illustration of vessel records exported as PDF files",
  },
  {
    title: "Secure Document Vault",
    description:
      "Upload and keep important vessel documents such as insurance policy, registration, and survey reports.",
    image: "/features/boat-document-vault.svg",
    imageAlt: "Illustration of securely stored vessel documents",
  },
];

const featuresSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "BoatRealm App Benefits and Features",
      description:
        "Explore the BoatRealm feature set: maintenance ledger, spending reports, reminders, PDF exports, and vessel document storage.",
      url: "https://boatrealm.com/features",
    },
    {
      "@type": "VideoObject",
      name: "BoatRealm Features Overview",
      description:
        "A quick walkthrough of the BoatRealm app benefits and key features for owners and fleet operators.",
      embedUrl: "https://boatrealm.com/content/boatrealm-logbook-features.mp4",
      uploadDate: "2026-05-06",
    },
  ],
};

export const metadata: Metadata = {
  title: "App Benefits and Features",
  description:
    "Discover BoatRealm app benefits: vessel information tracking, maintenance ledger, spending reports, reminders, PDF exports, and secure document storage.",
  alternates: {
    canonical: "/features",
  },
};

export default function FeaturesPage() {
  return (
    <div className="page-shell">
      <section className="container narrow hero-small">
        <p className="eyebrow">App Benefits and Features</p>
        <h1>A complete command center for your vessel records</h1>
        <p>
          BoatRealm keeps your operations clear with organized service history,
          spending intelligence, and secure records in one trusted app.
        </p>
      </section>

      <section className="container section-block">
        <Reveal>
          <article className="card feature-summary">
            <div className="feature-summary-grid">
              <div>
                <p className="eyebrow">Video Walkthrough: Smart Boat Maintenance Logbook Features</p>
                <h2>Feature summary</h2>
                <p>
                  Stay organized, audit-ready, and resale-ready with BoatRealm — the intelligent boat maintenance logbook and vessel management web app. Track engine hours, service records, expenses, and documents in one secure profile for your boat, generator, engines, and service providers. Perfect for boat owners who want professional-level maintenance tracking without the hassle.
                </p>
                <ul className="feature-list">
                  <li><strong>All-in-One Vessel Profile:</strong> Centralized digital logbook for your boat, generator, engines, tenders, and key service providers</li>
                  <li><strong>AI-native expense management:</strong> Upload, scan and auto categorize spending receipts and invoices in a snap</li>
                  <li><strong>Comprehensive Maintenance & Repair Ledger:</strong> Full service history tracker with powerful category filtering and searchable records</li>
                  <li><strong>Spending Insights & Analysis:</strong> Detailed reports by month, vendor, part replacement, and total cost of ownership</li>
                  <li><strong>PDF Export and Download:</strong> Generate and download vessel information and service-record reports in PDF for surveys, insurance, and resale.</li>
                  <li><strong>Secure Document Storage:</strong> Upload and store insurance and registration documents safely</li>
                </ul>
              </div>
              <div className="feature-summary-video">
                <video controls playsInline preload="metadata" className="video-features">
                  <source
                    src="/content/boatrealm-logbook-features.mp4"
                    type="video/mp4"
                  />
                </video>
                <p className="video-card-caption">
                  In this overview, you can see how BoatRealm organizes service
                  records, tracks spend trends, and keeps your vessel documents easy
                  to access.
                </p>
              </div>
            </div>
          </article>
        </Reveal>
      </section>

      <section className="container section-block">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Detailed Features</p>
            <h2>Manage your fleet's expenses with tools designed for real boat owners, built for daily use</h2>
          </div>
        </Reveal>
        <div className="feature-cards-grid">
          {featureCards.map((feature, index) => (
            <Reveal key={feature.title}>
              <article className="card feature-card">
                <div className="feature-image-wrap">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={640}
                    height={360}
                    loading={index === 0 ? "eager" : "lazy"}
                    className="feature-image"
                  />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresSchema) }}
      />
    </div>
  );
}