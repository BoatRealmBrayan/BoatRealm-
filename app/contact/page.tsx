import type { Metadata } from "next";
import ContactForm from "../components/contact-form";
import Reveal from "../components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the BoatRealm team.",
};

export default function ContactPage() {
  return (
    <div className="page-shell">
      <section className="container narrow hero-small">
        <p className="eyebrow">Contact</p>
        <h1>Talk to BoatRealm</h1>
        <p>
          Questions about onboarding, fleets, or beta access? Send us a message
          and the team will respond shortly.
        </p>
      </section>

      <section className="container contact-layout">
        <Reveal>
          <article className="card">
            <h2>Send us a message</h2>
            <ContactForm />
          </article>
        </Reveal>

        <Reveal>
          <article className="card info-card">
            <h2>Support details</h2>
            <p>
              We typically reply within one business day. For press and
              partnership inquiries, please include your publication or company
              details.
            </p>
            <ul>
              <li>Email: support@boatrealm.com</li>
              <li>Beta access: boatrealmlogbook.com</li>
              <li>Office hours: Mon-Fri, 9:00 AM-6:00 PM ET</li>
            </ul>
          </article>
        </Reveal>
      </section>
    </div>
  );
}
