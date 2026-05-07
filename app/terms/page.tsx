import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for BoatRealm Maintenance Log Book.",
};

export default function TermsPage() {
  return (
    <div className="page-shell">
      <section className="container narrow legal">
        <p className="eyebrow">Legal</p>
        <h1>Terms of Use</h1>
        <p>Last updated: May 5, 2026</p>
        <h2>Use of service</h2>
        <p>
          BoatRealm provides software tools to help maintain vessel maintenance
          records. You agree to use the service lawfully and keep your account
          information accurate.
        </p>
        <h2>Account responsibility</h2>
        <p>
          You are responsible for account security and any activity under your
          credentials.
        </p>
        <h2>Content ownership</h2>
        <p>
          You retain ownership of your submitted maintenance data and documents.
          By using the service, you grant BoatRealm permission to process that
          data to provide app functionality.
        </p>
        <h2>Limitations</h2>
        <p>
          BoatRealm is provided as-is during beta. Features may evolve and
          availability is not guaranteed without interruption.
        </p>
      </section>
    </div>
  );
}
