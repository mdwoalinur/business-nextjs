"use client";

import { useState } from "react";

const items = [
  { question: "What challenges does business face today?", answer: "Business is currently facing challenges in scaling and market penetration" },
  { question: "How to measure success?", answer: "Measure success through customer satisfaction, revenue growth, and market share" },
];

export default function FAQAccordion() {
  const [expanded, setExpanded] = useState([true, true]);
  return (
    <div data-faq-accordion className="rounded-[50px] bg-[var(--services-faq-surface)] px-[4px] pt-7 pb-10 text-black shadow-[0_0_45px_rgb(0_0_0/0.22)] sm:pt-[31px] sm:pb-[55px] xl:ml-[7px] xl:w-[calc(100%-7px)] min-[1400px]:w-[533px]!">
      {items.map(({question,answer},index) => (
        <div key={question} className={`border-b border-[var(--services-faq-divider)] ${index ? "pt-[8px] pb-[51px]" : "pb-[12px]"}`}>
          <h3 className="px-6 sm:pl-[62px] sm:pr-[43px]">
            <button id={`faq-question-${index}`} type="button" aria-expanded={expanded[index]} aria-controls={`faq-answer-${index}`} onClick={() => setExpanded(current => current.map((value,i) => i === index ? !value : value))} className={`block w-full text-left text-[19px] leading-[40px] font-medium focus-visible:outline-2 focus-visible:outline-offset-4 sm:text-[20px] ${index ? "xl:translate-y-px" : "xl:translate-y-[2px]"}`}>{question}</button>
          </h3>
          <div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} hidden={!expanded[index]} className={`px-6 text-[19px] leading-[40px] font-light sm:pl-[62px] sm:pr-[43px] sm:text-[20px] xl:translate-y-1 ${index ? "xl:translate-x-[2px]" : ""}`}>{answer}</div>
        </div>
      ))}
    </div>
  );
}
