"use client";

import { FormEvent, useState } from "react";

type ContactState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<ContactState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setState("error");
        setMessage(data.message ?? "Unable to send your message.");
        return;
      }

      setState("success");
      setMessage(data.message ?? "Message sent.");
      event.currentTarget.reset();
    } catch {
      setState("error");
      setMessage("Network issue. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="grid-two">
        <label>
          Full name
          <input type="text" name="name" required minLength={2} maxLength={80} />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
      </div>

      <label>
        Fleet name (optional)
        <input type="text" name="company" maxLength={100} />
      </label>

      <label>
        How can we help?
        <textarea name="message" rows={6} required minLength={10} maxLength={2000} />
      </label>

      <button type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending..." : "Send message"}
      </button>

      {message ? (
        <p className={state === "error" ? "form-msg error" : "form-msg success"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
