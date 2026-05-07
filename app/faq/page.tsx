import type { Metadata } from "next";
import Reveal from "../components/reveal";

const faqItems = [
  {
    question: "Who is BoatRealm for?",
    answer:
      "BoatRealm is built for individual owners, family boaters, and small fleets that want a reliable maintenance history.",
  },
  {
    question: "What can I track in the log book?",
    answer:
      "You can record service events, costs, vendors, dates, recurring tasks, and related documents for each vessel.",
  },
  {
    question: "Can I export records?",
    answer:
      "Yes. BoatRealm supports export-ready service records so owners can share a clean maintenance history when needed.",
  },
  {
    question: "Does BoatRealm help with expenses?",
    answer:
      "Yes. The app highlights spending trends, top maintenance categories, and vendor history to make planning easier.",
  },
  {
    question: "How do I join the beta?",
    answer:
      "Join through the newsletter form on the homepage or request access directly on the contact page.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about BoatRealm Maintenance Log Book.",
};

export default function FaqPage() {
  return (
    <div className="page-shell">
      <section className="container narrow hero-small">
        <p className="eyebrow">FAQ</p>
        <h1>Frequently asked questions</h1>
        <p>
          Everything you need to know before starting your BoatRealm maintenance
          log book.
        </p>
      </section>

      <section className="container faq-grid">
        {faqItems.map((item) => (
          <Reveal key={item.question}>
            <article className="card faq-item">
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
