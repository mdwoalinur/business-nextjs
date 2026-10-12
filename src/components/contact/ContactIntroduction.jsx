import DecorativeShapes from "@/components/DecorativeShapes";
import { contactSemibold } from "./fonts";

export default function ContactIntroduction() {
  return (
    <section data-contact-section="introduction" aria-labelledby="contact-introduction" className="relative isolate overflow-hidden px-6 py-20 lg:h-[363px] lg:px-8 lg:pt-[119px] lg:pb-0">
      <DecorativeShapes rotation={-14} pair={{ first: { width: 112, height: 107 }, second: { width: 106, height: 102 }, x: 44, y: 70 }} className="top-[-56px] right-[37px]" />
      <div className="mx-auto grid max-w-[1376px] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-[30px]">
        <h2 id="contact-introduction" className={`${contactSemibold.className} text-[34px] leading-[1.13] lg:-translate-x-px lg:translate-y-[3px] lg:text-[48px] lg:leading-[54px] min-[1024px]:max-[1399px]:text-[41px]`}>
          Want to make your<br className="hidden min-[1400px]:block" /> business better? Contact<br className="hidden min-[1400px]:block" /> us today!
        </h2>
        <p className="text-[22px] leading-[40px] text-reference-body lg:-translate-x-px lg:pt-[3px] lg:text-[25.25px] lg:leading-[50px] min-[1024px]:max-[1399px]:text-[22px]">
          Our team is ready to assist you and address any<br className="hidden min-[1400px]:block" /> queries you may have. we eagerly await your<br className="hidden min-[1400px]:block" /> communication.
        </p>
      </div>
    </section>
  );
}
