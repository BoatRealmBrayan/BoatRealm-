"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setState("error");
        setMessage(data.message ?? "Unable to subscribe right now.");
        return;
      }

      setState("success");
      setMessage(data.message ?? "You are in. Welcome aboard.");
      setEmail("");
    } catch {
      setState("error");
      setMessage("Network issue. Please try again.");
    }
  }

  return (
    <form className="newsletter-form" onSubmit={onSubmit}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        required
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@marina.com"
      />
      <button type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Subscribing..." : "Subscribe"}
      </button>
      {message ? (
        <p className={state === "error" ? "form-msg error" : "form-msg success"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
