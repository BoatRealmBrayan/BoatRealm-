import NewsletterForm from "./components/newsletter-form";
import Reveal from "./components/reveal";
import FeatureSlider from "./components/feature-slider";
import Image from "next/image";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://boatrealm.com/#organization",
        name: "BoatRealm",
        url: "https://boatrealm.com",
        logo: "https://boatrealm.com/_assets/images/e53c4bd8da5e491d9ab09e7cf0daf874.png",
        sameAs: ["https://boatrealm.com"],
      },
      {
        "@type": "WebSite",
        "@id": "https://boatrealm.com/#website",
        url: "https://boatrealm.com",
        name: "BoatRealm",
        publisher: {
          "@id": "https://boatrealm.com/#organization",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://boatrealm.com/#app",
        name: "BoatRealm Maintenance Log Book",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/PreOrder",
          url: "http://boatrealmlogbook.com/",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "37",
        },
      },
      {
        "@type": "Review",
        itemReviewed: { "@id": "https://boatrealm.com/#app" },
        author: { "@type": "Person", name: "Captain Luis R." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "I used to keep records in three places. BoatRealm gave me one timeline for every service task and invoice.",
      },
      {
        "@type": "VideoObject",
        name: "BoatRealm Product Demo",
        description:
          "A short walkthrough showing how to create a vessel profile and log maintenance in BoatRealm.",
        embedUrl: "https://boatrealm.com/content/boatrealm-logbook-overview.mp4",
        uploadDate: "2026-05-05",
        publisher: { "@id": "https://boatrealm.com/#organization" },
      },
      {
        "@type": "VideoObject",
        name: "Benefits and Features Overview",
        description:
          "See how BoatRealm helps owners protect boat value with organized records and expense insights.",
        embedUrl: "https://boatrealm.com/content/boatrealm-logbook-features.mp4",
        uploadDate: "2026-05-05",
        publisher: { "@id": "https://boatrealm.com/#organization" },
      },
    ],
  };

  return (
    <div className="page-shell">
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">BoatRealm Maintenance Log Book</p>
          <h1>Keep every boat record clear, searchable, and ready.</h1>
          <p>
            Built from a simple truth seen across the industry: too many boats
            have no complete records. BoatRealm gives owners one trusted place
            for maintenance history, documents, and expenses.
          </p>
          <div className="hero-actions">
            <a href="http://boatrealmlogbook.com/" className="button primary">
              Join the Beta
            </a>
            <a href="#demo-video" className="button ghost">
              Watch Demo
            </a>
          </div>
          <ul className="inline-facts">
            <li>Service history in one timeline</li>
            <li>Expense insights by month and vendor</li>
            <li>Documents protected and export-ready</li>
          </ul>
        </div>
        <div className="hero-panel">
          <p className="mini">Quick overview</p>
          <h2>A clear overview of your boat</h2>
          
          <Image src="/boatrealm-overview.png" alt="BoatRealm Maintenance Log book overview" width={600} height={400} style={{ width: "100%", height: "auto" }} loading="eager" />
          <p>
            See your latest service activity, total maintenance spend, and key
            vessel details at a glance.
          </p>
        </div>
      </section>

      <section id="demo-video" className="container section-block">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Product Demo</p>
            <h2>See the log book workflow in action</h2>
          </div>
          <div className="video-card">
            <iframe
              width="347"
              height="616"
              src="https://www.youtube.com/embed/0qZMfeify5o?rel=0"
              title="From scattered receipts to organized records in under a minute."              
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="video"              
            />
            <p className="video-card-caption">
              From scattered receipts to organized records in under a minute.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="container section-block">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Why It Matters</p>
            <h2>Because memory is not good accounting</h2>
          </div>
          <div className="story-grid">
            <article className="card">
              <h3>Too many boats have no records</h3>
              <p>
                Over time, it becomes difficult to remember what was done, when
                it was done, and where those records were saved.
              </p>
            </article>
            <article className="card">
              <h3>Stop worrying about lost files</h3>
              <p>
                Keep every document protected and accessible. BoatRealm helps
                owners preserve history and confidence.
              </p>
            </article>
            <article className="card">
              <h3>Set a new standard for records</h3>
              <p>
                BoatRealm was created to help every boat carry a documented
                story of care, value, and service.
              </p>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="container section-block">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Benefits and Features</p>
            <h2>Purpose-built for real boat owners</h2>
          </div>
          <div className="video-card alt">
            <video controls playsInline preload="metadata" className="video-features">
              <source
                src="/content/boatrealm-logbook-features.mp4"
                type="video/mp4"
              />
            </video>
            <ul className="feature-list">
              <li>Add vessel information in minutes</li>
              <li>Upload, scan and auto categorize spending receipts and invoices in a snap</li>
              <li>Track maintenance by category and date</li>
              <li>Organize vendor invoices and uploaded documents</li>
              <li>Review monthly expenses and spending trends</li>
              <li>Export PDF service records when needed</li>
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="feature-slider-section">
        <div className="feature-slider-head">
          <Reveal>           
            <h2>Every feature built for real boat owners</h2>
            <p>
              From maintenance ledgers to PDF exports — everything you need to
              protect your vessel&apos;s history and value.
            </p>
          </Reveal>
        </div>
        <FeatureSlider />
      </section>

      <section className="container section-block">
        <Reveal>
          <div className="section-head">
            <p className="eyebrow">Social Proof</p>
            <h2>Trusted by growing captains and owners</h2>
          </div>
          <div className="testimonial-grid">
            <article className="card quote">
              <p>
                BoatRealm gave me one place for receipts, engine service, and
                recurring reminders. It removed the guesswork.
              </p>
              <span>Captain Luis R., 42ft Cruiser</span>
            </article>
            <article className="card quote">
              <p>
                I can now show buyers a clean maintenance story instead of a
                folder of random PDFs.
              </p>
              <span>Sophia M., Marina Owner</span>
            </article>
            <article className="card quote">
              <p>
                The expense insights helped us see exactly where we were
                overspending across our two boats.
              </p>
              <span>Jordan P., Fleet Operator</span>
            </article>
          </div>
          <div className="rating-wrap">
             <p className="rating">Average early-user rating: 4.9/5</p>
             <Image
              src="/user-rating-stars.svg"
              alt="User rating stars showing 4.9 out of 5"
              width={280}
              height={48}
              className="rating-stars"
            />
           
          </div>
        </Reveal>
      </section>

      <section id="newsletter" className="container section-block">
        <Reveal>
          <div className="newsletter-wrap">
            <div>
              <p className="eyebrow">Newsletter</p>
              <h2>Get launch updates and maintenance tips</h2>
              <p>
                Join the BoatRealm newsletter for feature announcements, product
                updates, and best practices for documenting your boat history.
              </p>
            </div>
            <NewsletterForm />
          </div>
        </Reveal>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
