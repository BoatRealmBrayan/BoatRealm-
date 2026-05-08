"use client";

import { useState } from "react";

type AccordionItemProps = {
  question: string;
  answer: string;
};

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="accordion-item">
      <button
        className="accordion-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="accordion-question">{question}</span>
        <span className="accordion-icon" aria-hidden="true">
          +
        </span>
      </button>
      {isOpen && <div className="accordion-content">{answer}</div>}
    </article>
  );
}
