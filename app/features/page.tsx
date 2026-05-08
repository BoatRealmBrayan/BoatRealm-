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
    title: "Top Vendor by Spending",
    description:
      "Identify the vendor receiving the highest spend so you can negotiate better and optimize maintenance budgets.",
    image: "/features/top-vendor.svg",
    imageAlt: "Illustration of vendor ranking with top spending highlighted",
  },
  {
    title: "Most Replaced Parts",
    description:
      "Spot frequently replaced parts to anticipate recurring costs and plan inventory before peak season.",
    image: "/features/replaced-parts.svg",
    imageAlt: "Illustration of common replacement parts and frequency",
  },
  {
    title: "Maintenance Schedule and Reminders",
    description:
      "Schedule upcoming maintenance tasks and get reminders so critical service windows are never missed.",
    image: "/features/schedule-reminders.svg",
    imageAlt: "Illustration of a maintenance calendar with reminder alerts",
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
      embedUrl: "https://www.w3schools.com/html/movie.mp4",
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
            <h2>Feature summary</h2>
            <p>
              From engine details and service providers to monthly spending and
              document exports, BoatRealm helps you stay audit-ready,
              maintenance-ready, and resale-ready.
            </p>
            <ul className="feature-list">
              <li>Single profile for vessel, generator, engines, and providers</li>
              <li>Maintenance and repair ledger with category filtering</li>
              <li>Spending analysis by month, vendor, and part replacement</li>
              <li>Scheduled maintenance reminders and PDF-ready reporting</li>
              <li>Secure upload for insurance and registration documents</li>
            </ul>
          </article>
        </Reveal>
      </section>

      <section className="container section-block">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Video Walkthrough</p>
            <h2>See the full feature experience</h2>
          </div>
          <div className="video-card">
            <video controls playsInline preload="metadata" className="video">
              <source
                src="https://www.w3schools.com/html/movie.mp4"
                type="video/mp4"
              />
            </video>
            <p>
              In this overview, you can see how BoatRealm organizes service
              records, tracks spend trends, and keeps your vessel documents easy
              to access.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container section-block">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Detailed Features</p>
            <h2>One card per feature, built for daily use</h2>
          </div>
        </Reveal>
        <div className="feature-cards-grid">
          {featureCards.map((feature) => (
            <Reveal key={feature.title}>
              <article className="card feature-card">
                <div className="feature-image-wrap">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    width={640}
                    height={360}
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