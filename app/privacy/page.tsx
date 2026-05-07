import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for BoatRealm Maintenance Log Book.",
};

export default function PrivacyPage() {
  return (
    <div className="page-shell">
      <section className="container narrow legal">
        <p className="eyebrow">Legal</p>
        <h1>Privacy Policy</h1>
        <p>Last updated: May 5, 2026</p>
        <h2>Information we collect</h2>
        <p>
          BoatRealm may collect account details, contact information, vessel
          records, and usage data necessary to operate the maintenance log book
          service.
        </p>
        <h2>How we use information</h2>
        <p>
          Data is used to deliver core app functionality, improve reliability,
          provide support, and communicate important product updates.
        </p>
        <h2>Data sharing</h2>
        <p>
          BoatRealm does not sell personal data. Information may be shared with
          trusted service providers solely to support app operations.
        </p>
        <h2>Your choices</h2>
        <p>
          You can request data export or deletion by contacting
          support@boatrealm.com.
        </p>
      </section>
    </div>
  );
}
