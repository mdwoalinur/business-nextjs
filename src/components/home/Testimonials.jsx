import Image from "next/image";
import DecorativeShapes from "@/components/DecorativeShapes";

const testimonials = [
  { name: "John Doe", attribution: "John Doe, CEO Of XYZ Corporation", quote: 'Outstanding Team With Transformative Solutions. Highly Endorsed!"', lines: ['Outstanding Team With Transformative', 'Solutions. Highly Endorsed!"'], portrait: "/images/testimonial-john-reference.png", width: 112 },
  { name: "Jane Smith", attribution: "Jane Smith, Director Of ABC Company", quote: "Exceptional Team Delivering Innovative Results. Strongly Recommended!", lines: ["Exceptional Team Delivering Innovative", "Results. Strongly Recommended!"], portrait: "/images/testimonial-jane-reference.png", width: 109 },
  { name: "Alex Johnson", attribution: "Alex Johnson, Manager At DEF Ltd", quote: 'Impressive Team With Innovative Solutions. Highly Recommended!"', lines: ["Impressive Team With Innovative Solutions.", 'Highly Recommended!"'], portrait: "/images/testimonial-alex-reference.png", width: 112 },
];

export default function Testimonials() {
  return (
    <section data-home-section="testimonials" aria-labelledby="testimonial-title" className="relative isolate overflow-hidden px-6 pt-12 pb-20 xl:h-[600px] xl:px-0 xl:pt-[36px] xl:pb-0">
      <div aria-hidden="true" className="pointer-events-none absolute top-[-55px] left-1/2 -z-10 hidden -translate-x-1/2 font-interface text-[500px] leading-none font-bold text-home-muted-type xl:block">RATE</div>
      <DecorativeShapes rotation={-10} pair={{ first: { width: 112, height: 107 }, second: { width: 112, height: 107 }, x: 69, y: 38 }} className="top-[62px] left-[43px] hidden -scale-x-100 xl:block" />
      <h2 id="testimonial-title" className="text-center font-reference text-[34px] leading-[60px] font-bold text-reference-blue sm:text-[48px] xl:translate-x-[6px] xl:translate-y-[10px]">testomonials</h2>
      <div className="mx-auto mt-24 grid max-w-[1060px] gap-x-5 gap-y-28 lg:grid-cols-3 xl:mt-[98px] xl:translate-x-[23px]">
        {testimonials.map(({ name, attribution, quote, lines, portrait, width }, index) => (
          <article key={name} aria-label={`${name} testimonial`} className="relative mx-auto min-h-[324px] w-full max-w-[340px] rounded-[24px] bg-white shadow-home-card xl:h-[324px]">
            <Image src={portrait} alt={name} width={width} height={106} unoptimized className="absolute top-[-53px] left-1/2 h-[106px] -translate-x-1/2 rounded-[50%] object-cover" />
            <div aria-label="5 out of 5 stars" className="flex justify-center gap-2 pt-[99px] xl:gap-[8px]">
              {Array.from({ length: 5 }, (_, i) => <Image key={i} src="/icons/rating-star-reference.png" alt="" width={42} height={44} unoptimized className="h-[44px] w-[42px]" />)}
            </div>
            <blockquote style={{ "--quote-offset": `${[-65, -58, -49][index]}px`, "--quote-width": `${[340, 346, 338][index]}px` }} className="relative mt-9 min-h-[168px] rounded-tl-[24px] rounded-br-[24px] bg-home-quote-surface px-5 pt-[42px] pb-7 font-reference text-center text-[14px] leading-[21px] font-light text-black italic shadow-home-quote xl:absolute xl:top-[178px] xl:left-[var(--quote-offset)] xl:mt-0 xl:h-[168px] xl:w-[var(--quote-width)] xl:px-4 xl:pb-0">
              <p aria-label={quote}>{lines.map((line, i) => <span key={line} className="xl:block">{i > 0 ? " " : ""}{line}</span>)}</p>
              <footer className="mt-[23px] leading-[21px]">{attribution}</footer>
            </blockquote>
          </article>
        ))}
      </div>
    </section>
  );
}
