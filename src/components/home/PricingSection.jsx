import Image from "next/image";
import Link from "next/link";
import DecorativeShapes from "@/components/DecorativeShapes";
import NewsletterArc from "./NewsletterArc";

const features = ["Marketing Strategy", "Competitors Analysis", "ISO Audit & Certification", "Business Management"];
const plans = [
  { name: "Bronze", tier: "STARTER", price: "19", available: [true, true, false, false] },
  { name: "Gold", tier: "PROFESSIONAL", price: "29", available: [true, true, true, false], featured: true },
  { name: "Platinum", tier: "ENTERPRISE", price: "69", available: [true, true, true, true] },
];
const benefits = [
  { text: "30 Day Free Trial", src: "/icons/trial-reference.png", position: "min-[1400px]:ml-[191px]" },
  { text: "No Hidden Fees", src: "/icons/no-fees-reference.png", position: "min-[1400px]:ml-[79px]" },
  { text: "Free to cancel anytime", src: "/icons/cancel-reference.png", position: "min-[1400px]:-ml-2" },
];

function PricingPlan({ plan }) {
  const { name, tier, price, available, featured } = plan;
  return (
    <article aria-labelledby={`plan-${name}`} data-plan={name} className={`relative mx-auto w-full max-w-[460px] ${featured ? "rounded-[10px] bg-reference-blue shadow-home-plan" : name === "Platinum" ? "xl:ml-[5px] xl:w-[calc(100%-5px)]" : ""}`}>
      {featured ? <div className="flex h-[70px] items-center justify-center rounded-t-[10px] bg-[image:var(--home-popular-gradient)] font-interface text-[24px] font-bold text-white shadow-[inset_0_-10px_25px_rgb(0_0_0_/_0.08)]">POPULAR</div> : null}
      <div className={featured ? "rounded-[10px] bg-white" : ""}>
        <div className={`text-center ${featured ? "h-[222px] pt-[46px]" : "h-[222px] pt-[46px] xl:h-[292px] xl:pt-[116px]"}`}>
          <div className={`mx-auto inline-flex h-[44px] items-center justify-center rounded-full bg-home-plan-badge font-interface text-[26px] leading-[30px] font-medium text-white ${featured ? "w-[259px]" : name === "Bronze" ? "w-[156px] xl:translate-x-2" : "w-[187px] xl:translate-x-[6px]"}`}>{tier}</div>
          <h3 id={`plan-${name}`} className={`font-reference text-[56px] leading-[70px] text-reference-copyright ${featured ? "mt-[30px] xl:-translate-x-[6px]" : "mt-[25px]"}`}>{name}</h3>
        </div>
        <ul className="font-reference text-[25px] leading-8 text-reference-text">
          {features.map((feature, i) => {
            const icon = available[i] ? "available" : "unavailable";
            return <li key={feature} className={`flex min-h-[82px] items-center gap-5 border-t border-reference-body px-5 xl:pl-[70px] xl:pr-1 ${i === 3 ? "min-h-[94px]" : i === 0 ? "min-h-[84px]" : ""}`}><Image src={`/icons/${icon}${featured ? "-white" : ""}-reference.png`} alt={available[i] ? "Included:" : "Not included:"} width={featured ? 25 : 24} height={25} unoptimized className="shrink-0" /><span>{feature}</span></li>;
          })}
        </ul>
      </div>
      <div className={`px-6 pt-[37px] ${featured ? "rounded-b-[10px] bg-[image:var(--home-featured-gradient)] pb-[22px] text-white" : "pb-[35px] text-reference-text"}`}>
        <div className={`flex min-h-[84px] items-center justify-center gap-4 xl:justify-end ${featured ? "xl:pr-[10px]" : name === "Bronze" ? "xl:-translate-x-[7px]" : ""}`}>
          <span className="font-hero text-[58px] leading-[84px] font-bold xl:translate-y-1 xl:text-[72px]">${price}</span>
          <p className={`font-reference text-[20px] leading-[24px] font-light xl:text-[25px] xl:leading-[28px] ${featured ? "text-home-featured-caption" : "text-black"}`}>Per User/Month<br />Billed Annually*</p>
        </div>
        <Link href="/contact-us#how-we-can-assist-you" className={`relative z-10 mt-[33px] flex h-[80px] w-full max-w-full items-center justify-center rounded-[5px] px-4 font-reference text-[26px] leading-9 xl:-translate-y-[2px] ${featured ? "bg-white text-reference-text xl:w-[412px] xl:-translate-x-px" : `bg-reference-blue text-white xl:w-[400px] ${name === "Bronze" ? "xl:translate-x-px" : "xl:-translate-x-px"}`}`}>Join To Plan</Link>
        <p className={`text-center font-reference text-[25px] leading-[30px] ${featured ? "mt-9 text-home-featured-caption xl:translate-x-[6px] xl:-translate-y-[7px]" : "mt-[18px] text-reference-body"}`}>Cancel anytime</p>
      </div>
    </article>
  );
}

export default function PricingSection() {
  return (
    <section data-home-section="pricing" aria-labelledby="pricing-title" className="relative isolate overflow-hidden px-6 pt-12 pb-[140px] xl:h-[1395px] xl:px-[14px] xl:pt-[43px] xl:pb-0">
      <div aria-hidden="true" className="pointer-events-none absolute top-[-117px] left-[475px] -z-10 hidden font-interface text-[500px] leading-none font-bold text-home-muted-type xl:block">IT</div>
      <DecorativeShapes rotation={-18} pair={{ first: { width: 112, height: 107 }, second: { width: 112, height: 107 }, x: 36, y: 67 }} className="top-[52px] left-[148px] hidden xl:block" />
      <DecorativeShapes rotation={-12} pair={{ first: { width: 112, height: 107 }, second: { width: 112, height: 107 }, x: 52, y: 65 }} className="top-px right-[90px] hidden xl:block" />
      <NewsletterArc top={1279} />
      <h2 id="pricing-title" className="text-center font-reference text-[34px] leading-[60px] font-bold text-reference-blue sm:text-[48px] xl:-translate-x-[23px] xl:translate-y-[13px]">Flexible Pricing</h2>
      <div className="mx-auto mt-16 grid max-w-[1412px] gap-12 xl:mt-[91px] xl:grid-cols-[minmax(0,450fr)_minmax(0,460fr)_minmax(0,452fr)] xl:gap-[25px]">
        {plans.map(plan => <PricingPlan key={plan.name} plan={plan} />)}
      </div>
      <ul className="mx-auto mt-16 flex max-w-[1100px] flex-wrap justify-center gap-8 font-reference text-[25px] leading-[30px] text-reference-body min-[1400px]:mt-[78px] min-[1400px]:grid min-[1400px]:max-w-[1412px] min-[1400px]:grid-cols-[minmax(0,450fr)_minmax(0,460fr)_minmax(0,452fr)] min-[1400px]:gap-[25px]">
        {benefits.map(({ text, src, position }) => <li key={text} className={`flex min-w-0 max-w-full items-center gap-[7px] ${position}`}><Image src={src} alt="" width={27} height={29} unoptimized className="shrink-0" /><span className="min-w-0">{text}</span></li>)}
      </ul>
      <div aria-hidden="true" className="absolute right-1/2 bottom-[72px] h-px w-[431px] max-w-[80%] translate-x-1/2 bg-reference-navy/50 xl:bottom-[72px] xl:translate-x-[220px]" />
    </section>
  );
}
