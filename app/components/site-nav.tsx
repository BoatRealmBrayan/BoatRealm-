"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Trap scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Desktop nav */}
      <nav aria-label="Main navigation" className="main-nav desktop-nav">
        {links.map(({ href, label }) =>
          href.startsWith("#") ? (
            <a key={label} href={href}>{label}</a>
          ) : (
            <Link key={label} href={href}>{label}</Link>
          )
        )}
      </nav>

      {/* Hamburger button – visible on mobile only */}
      <button
        ref={buttonRef}
        className={`nav-toggle${open ? " is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile navigation" className="mobile-nav">
          {links.map(({ href, label }) =>
            href.startsWith("#") ? (
              <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
            ) : (
              <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>
            )
          )}
          <a
            href="http://boatrealmlogbook.com/"
            className="button primary mobile-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Beta
          </a>
        </nav>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="mobile-backdrop"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
