import Image from "next/image";
import DecorativeShapes from "@/components/DecorativeShapes";
import { aboutSemibold } from "./fonts";

const features = [
  { title: "Trusted Business", lines: ["We Deliver success to", "your business."], icon: "handshake", width: 66, height: 94, offset: 9, position: "xl:-translate-x-1", iconPosition: "xl:-translate-x-[18px]" },
  { title: "Expertise In Action", lines: ["We assist our clients to", "set right strategy."], icon: "rocket", width: 96, height: 99, offset: 0, position: "xl:-translate-x-[25px]", iconPosition: "xl:-translate-x-[6px]", bodyPosition: "xl:-translate-x-[6px]" },
  { title: "Recognized Excellence", lines: ["We see challenges as", "opportunities."], icon: "medal", width: 74, height: 98, offset: 0, position: "xl:-translate-x-[33px]", iconPosition: "xl:translate-x-[10px]" },
  { title: "Always Ready To Help", lines: ["We Deliver success to", "your business."], icon: "help", width: 91, height: 85, offset: 7, position: "xl:-translate-x-[39px]", iconPosition: "xl:translate-x-[3px]", bodyPosition: "xl:-translate-x-[13px]" },
];

function FeatureItem({ feature }) {
  return (
    <article className={`min-w-0 text-center ${feature.position}`}>
      <div className="mx-auto flex h-[126px] items-start justify-center xl:h-[139px]">
        <Image src={`/icons/feature-${feature.icon}-reference.png`} alt="" width={feature.width} height={feature.height} unoptimized className={feature.iconPosition} style={{ marginTop: feature.offset }} />
      </div>
      <h3 className={`${aboutSemibold.className} text-[25px] leading-8 font-semibold text-reference-navy xl:translate-y-[5px]`}>{feature.title}</h3>
      <p className={`mt-4 font-reference text-[22px] leading-[1.8] text-reference-body sm:text-[25px] xl:mt-[15px] xl:leading-[50px] ${feature.bodyPosition || ""}`}>{feature.lines[0]}<br />{feature.lines[1]}</p>
    </article>
  );
}

export default function AboutFeatures() {
  return (
    <section data-about-section="features" aria-label="Company features" className="relative isolate grid gap-x-6 gap-y-12 px-6 py-10 sm:grid-cols-2 xl:h-[380px] xl:grid-cols-4 xl:gap-x-0 xl:px-[5px] xl:pt-[27px] xl:pb-0">
      <DecorativeShapes className="top-[-9px] left-[233px] hidden xl:block" />
      {features.map(feature => <FeatureItem key={feature.title} feature={feature} />)}
    </section>
  );
}
