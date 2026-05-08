import type { Metadata } from "next";
import AccordionItem from "../components/accordion-item";
import Reveal from "../components/reveal";

const faqItems = [
  {
    question: "What is BoatRealm?",
    answer:
      "BoatRealm is a digital platform built for boat owners, captains, and management companies to log, track, and document everything that happens on a vessel — maintenance, repairs, expenses, and service history. Every record you build creates a verified HullFacts report you can share with any buyer, broker, or insurer in one link. Think of it as the permanent record your boat deserves, finally in one place.",
  },
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
  {
    question: "Is BoatRealm only for big yachts?",
    answer:
      "Not at all. BoatRealm is built for every boat regardless of size — from a 20-foot center console to a 200-foot yacht. Most platforms in the marine industry focus on expensive vessels. We built BoatRealm for the other 17 million boat owners who've been left behind. If it floats and needs maintenance, it belongs on BoatRealm.",
  },  
];
const faqBoatOwners = [
  {
    question: "I'm not tech-savvy. Is this hard to use?",
    answer:
      "BoatRealm was designed to be as simple as writing in a notebook. Sign up takes 30 seconds — just your boat's name and make. From there, our BoatRealm Analyzer AI feature lets you take a photo of any receipt or invoice and we extract and log everything automatically. Most users log their first entry in under 60 seconds. No training. No manuals. If you can take a photo on your phone, you can use BoatRealm.",
  },
  {
    question: "What does a HullFacts report include?",
    answer:
      "A HullFacts report is a verified, shareable summary of your vessel's complete service history — every maintenance entry, repair, expense, engine hours update, and document you've logged on BoatRealm. It downloads as a professional PDF and can be shared with any buyer, broker, bank, or insurance company via a single link. Documented boats sell faster and at higher prices. A HullFacts report is how you prove your boat has been taken care of.",
  },
  {
    question: "Do I have to log everything myself?",
    answer:
      "No. If you have a captain, they can log directly to your vessel's record — you just see the updates. If you hired a service provider, every job they complete can be added to your vessel history. Your record builds itself as your boat gets maintained. You can also use BoatRealm Analyzer to scan any receipt in seconds instead of entering information manually.",
  },
  {
    question: "How much does it cost for a boat owner?",
    answer:
      "BoatRealm is currently free during our beta period. We're focused on making the simplest boat documentation platform ever built — and we want you to experience it before we talk about price. Sign up free, log your vessel, and try every feature with no commitment and no credit card required. Early users who join during beta will receive exclusive founding member pricing when we launch officially."
  }];
const faqCaptains=[
  {
    question: "I manage multiple vessels. Can I handle them all in one place?",
    answer:
      "Yes. BoatRealm lets captains and management companies manage multiple vessels under one account. Each vessel has its own complete record — maintenance logs, expenses, service history, and documents. You can switch between vessels instantly, invite boat owners to view their own vessel, and give service providers access to log completed work directly. Everything your fleet needs, none of the complexity you don't.",
  },
  {
    question: "We already use management software. Why would we switch?",
    answer:
      "You don't have to switch. BoatRealm isn't a full management platform — it's the vessel history and service coordination layer your current software doesn't have. Most management platforms track your operations. BoatRealm tracks the boat's permanent record — one that follows the hull forever regardless of who manages it, owns it, or maintains it. When a vessel changes hands, the record stays with the boat, not with your software.",
  },
  {
    question: "Will boat owners be able to see what I log?",
    answer:
      "Yes — and that's the point. When you log a service entry on a vessel, the boat owner sees it in their portal automatically. No more owners calling to ask what was done on their boat. They see it in real time. This transparency builds trust, reduces back-and-forth communication, and makes your management service visibly more professional. Owners who can see their vessel's record don't question your work — they recommend you to other owners.",
  }
];
const faqPrivacy =[
  {
    question: "Is my vessel information private?",
    answer:
      "Your vessel information is completely private by default. Only you and the people you specifically invite — your captain, your management company, or a service provider you've approved — can see your vessel's record. A HullFacts report is only shared when you choose to share it. We never sell your data or share it with third parties without your permission.",
  },
  {
    question: "Can I try BoatRealm before committing?",
    answer:
      "Yes. Sign up is free and takes 30 seconds. No credit card required. You can add your vessel, log entries, use BoatReam analyzer to scan a receipt, and download your service history as a PDF — all before you ever pay anything. See the value before you spend a dollar. Most users log their first entry within 60 seconds of signing up.",
  }
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
        <p>
          Don&apos;t see your question? Email us at{" "}
          <a href="mailto:support@boatrealm.com">support@boatrealm.com</a>
        </p>
      </section>

      <section className="container accordion-container">
        <Reveal>
          {faqItems.map((item) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Reveal>
      </section>
      <section className="container narrow hero-small">
<h2>Boat Owners</h2>
</section>
<section className="container accordion-container">
        <Reveal>
          {faqBoatOwners.map((item) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Reveal>
      </section>
      <section className="container narrow hero-small">
<h2>Captains & Management Companies</h2>
</section>
<section className="container accordion-container">
        <Reveal>
          {faqCaptains.map((item) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Reveal>
      </section>
<section className="container narrow hero-small">
<h2>Privacy & Trust</h2>

</section>
<section className="container accordion-container">
        <Reveal>
          {faqPrivacy.map((item) => (
            <AccordionItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Reveal>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
