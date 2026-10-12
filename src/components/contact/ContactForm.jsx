"use client";

import { useState } from "react";
import DecorativeShapes from "@/components/DecorativeShapes";

const fields = [
  { name: "name", label: "Enter Your Name", placeholder: "Please enter your full name", type: "text", autoComplete: "name", required: true },
  { name: "email", label: "Email Address", placeholder: "Enter your  email address", type: "email", autoComplete: "email", required: true },
  { name: "phone", label: "Phone Number", placeholder: "Enter your phone number", type: "tel", autoComplete: "tel" },
  { name: "subject", label: "Subject", placeholder: "Add subject here", type: "text" },
];

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    for (const name of ["name", "message"]) {
      const field = form.elements.namedItem(name);
      if (!field.value.trim()) {
        field.setCustomValidity(name === "name" ? "Please enter your name." : "Please enter your message.");
        field.reportValidity();
        return;
      }
    }
    setStatus("Message delivery is not configured. Your message has not been sent.");
  }

  return (
    <section id="how-we-can-assist-you" data-contact-section="form" aria-labelledby="contact-form-heading" className="relative isolate overflow-hidden px-6 pt-[86px] pb-12 lg:h-[1160px] lg:px-0 lg:pb-0">
      <DecorativeShapes className="top-[190px] left-[5%] hidden lg:block" />
      <DecorativeShapes className="top-[92px] right-[113px] hidden lg:block" />
      <DecorativeShapes variant="circle" diameter={884} className="top-[776px] right-[-423px]" />
      <div className="inline-block max-w-full rounded-reference-pill bg-[image:var(--reference-cta-gradient)] px-5 py-1 text-[21px] leading-[1.3] font-bold text-white sm:text-[30px] lg:ml-[46px] lg:h-[52px] lg:text-[35px] lg:leading-[44px]">GET IN TOUCH WITH US</div>
      <h2 id="contact-form-heading" className="mt-16 text-center text-[34px] leading-[1.2] font-normal sm:text-[42px] lg:mt-[78px] lg:translate-x-[28px] lg:-translate-y-px lg:text-[48.65px] lg:leading-[58px]">How We Can Assist You?</h2>
      <form aria-labelledby="contact-form-heading" onSubmit={submit} onInput={(event) => { event.target.setCustomValidity(""); setStatus(""); }} className="relative mt-16 lg:mt-[114px] lg:mr-[8.75%] lg:ml-[5%]">
        <div className="grid min-w-0 grid-cols-1 gap-x-[13.84863%] gap-y-[36px] md:grid-cols-2">
          {fields.map(({ name, label, placeholder, ...props }) => (
            <div key={name} className="min-w-0">
              <label htmlFor={`contact-${name}`} className={`block text-[24px] leading-[42px] lg:text-[28px] ${name === "email" ? "lg:-translate-y-[7px]" : name === "name" ? "lg:translate-y-[3px]" : "lg:translate-y-[7px]"}`}>{label}</label>
              <div className="relative">
                <input id={`contact-${name}`} name={name} placeholder={placeholder} {...props} pattern={name === "email" ? "[^\\s@]+@[^\\s@]+\\.[^\\s@]+" : undefined} className={`block h-[73px] w-full min-w-0 rounded-none border-0 border-b border-reference-body bg-transparent p-0 pt-2 text-[22px] leading-[42px] text-reference-text placeholder:text-[var(--contact-placeholder)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-reference-blue max-[374px]:text-[20px] lg:text-[28px] ${name === "phone" ? "lg:border-transparent lg:pt-[26px]" : name === "subject" ? "lg:pt-3 lg:[text-indent:-3px]" : name === "email" ? "lg:[text-indent:-3px]" : ""}`} />
                {name === "phone" ? <span aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[6px] hidden h-px w-full bg-reference-body lg:block" /> : null}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[37px]">
          <label htmlFor="contact-message" className="block text-[24px] leading-[42px] lg:translate-y-[5px] lg:text-[28px]">Your Message</label>
          <textarea id="contact-message" name="message" required placeholder="Describe your message here" className="block h-[217px] w-full min-w-0 resize-none rounded-none border-0 border-b border-reference-body bg-transparent pt-[10px] text-[22px] leading-[42px] text-reference-text placeholder:text-[var(--contact-placeholder)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-reference-blue lg:h-[207px] lg:pt-[18px] lg:text-[28px]" />
        </div>
        <button type="submit" className="mt-[71px] flex h-[102px] w-[364px] max-w-full items-center justify-center rounded-[6px] bg-reference-blue px-5 text-[28px] leading-[1.3] text-white shadow-[var(--contact-send-shadow)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-reference-blue lg:ml-1 lg:text-[35.25px]"><span className="lg:-translate-x-px lg:translate-y-px">Send Message</span></button>
        <p role="status" className="mt-3 max-w-[700px] text-[16px] leading-6 text-reference-text">{status}</p>
      </form>
    </section>
  );
}
