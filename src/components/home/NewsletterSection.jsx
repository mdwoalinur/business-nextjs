"use client";

import Image from "next/image";
import NewsletterArc from "./NewsletterArc";

const subscribeUrl = "https://accounts.google.com/v3/signin/identifier?continue=https://mail.google.com/mail/?service%3Dmail%26flowName%3DGlifWebSignIn%26flowEntry%3DAccountChooser%26ec%3Dasw-gmail-globalnav-signin&uj=gafb-gmail_asw-globalnav-en&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-551675797:1791781938113898";

export default function NewsletterSection({ imageSrc }) {
  function submit(event) {
    event.preventDefault();
  }
  return (
    <section data-home-section="newsletter" aria-labelledby="newsletter-title" className="relative isolate overflow-hidden pb-[133px] xl:h-[369px]">
      <NewsletterArc top={-116} />
      <div className="grid xl:h-[236px] xl:grid-cols-[minmax(0,707fr)_minmax(0,730fr)] xl:pr-[3px]">
        <Image src="/images/newsletter-help-reference.png" alt="A note reading NEED HELP?" width={707} height={236} unoptimized className="h-auto w-full object-cover xl:h-[236px]" />
        <div data-image-status={imageSrc ? "provided" : "missing"} className="relative isolate min-w-0 bg-reference-secondary-navy px-6 py-8 text-home-light-ink xl:px-[30px] xl:pt-[26px] xl:pb-0">
          {imageSrc ? <Image src={imageSrc} alt="" fill sizes="(min-width:1280px) 51vw, 100vw" className="-z-10 object-cover" style={{ objectPosition: "50% 50%", opacity: 0.5 }} /> : null}
          <h2 id="newsletter-title" className="font-reference text-[30px] leading-[1.2] font-bold sm:text-[40px] xl:whitespace-nowrap xl:text-[41px] xl:leading-[54px]">We Will Help You To Grow</h2>
          <form onSubmit={submit} className="mt-8 flex flex-wrap items-center gap-4 xl:mt-7 xl:flex-nowrap xl:gap-0">
            <label htmlFor="newsletter-email" className="w-full shrink-0 font-reference text-[28px] leading-[33px] xl:w-[212px]">Sign Up<br />For Newsletter</label>
            <input id="newsletter-email" name="email" type="email" required autoComplete="email" className="h-[51px] min-w-0 flex-1 rounded-full bg-white/55 px-5 font-reference text-[22px] text-reference-secondary-navy outline-offset-4 xl:w-[263px] xl:flex-[0_1_263px]" />
            <a href={subscribeUrl} target="_blank" rel="noopener noreferrer" className="flex h-[49px] w-[156px] shrink-0 items-center justify-center rounded-[36px] bg-reference-secondary-navy font-reference text-[26px] leading-8 focus-visible:outline-2 focus-visible:outline-offset-4 xl:ml-[35px] xl:translate-y-1">subscribe</a>
          </form>
          <p id="newsletter-status" role="status" className="mt-3 font-interface text-[14px] leading-5" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute right-1/2 bottom-[66px] h-px w-[431px] max-w-[80%] translate-x-1/2 bg-reference-navy/50 xl:translate-x-[224px]" />
    </section>
  );
}
