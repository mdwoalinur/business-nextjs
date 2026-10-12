import DecorativeShapes from "@/components/DecorativeShapes";
import ServiceCard from "./ServiceCard";
import { servicesSemibold } from "./fonts";

const services = [
  { title: "Strategy planning", description: ["Strategy defines how to", "reach business goals"], src: "/images/service-strategy-reference.png", imageWidth: 444 },
  { title: "Industry Analysis", description: ["Navigating the business", "landscape with insight"], src: "/images/service-industry-reference.png", imageWidth: 444 },
  { title: "Social Assessment", description: ["Understand Market, One", "Consumer at a Time"], src: "/images/service-social-reference.png", imageWidth: 422 },
];

export default function ServicesSection() {
  return (
    <section data-services-section="cards" aria-labelledby="services-heading" className="relative isolate py-14 xl:h-[948px] xl:pt-[70px] xl:pb-0">
      <DecorativeShapes rotation={40} pair={{ first: { width: 108, height: 104 }, second: { width: 102, height: 100 }, x: 71, y: -40 }} className="top-[37px] left-[225px] hidden xl:block" />
      <DecorativeShapes rotation={-18} pair={{ first: { width: 112, height: 107 }, second: { width: 106, height: 102 }, x: 45, y: 69 }} className="top-[-36px] left-[1115px] hidden xl:block" />
      <h2 id="services-heading" className={`${servicesSemibold.className} px-5 text-center text-[36px] leading-[58px] sm:text-[47.5px] xl:translate-x-[32px] xl:translate-y-[9px]`}>Our Services</h2>
      <div className="mt-12 grid gap-6 bg-reference-blue px-5 py-6 shadow-[0_14px_26px_rgb(0_0_0/0.18)] md:grid-cols-3 xl:mt-[103px] xl:h-[717px] xl:grid-cols-[444fr_444fr_422fr] xl:gap-[27px] xl:py-0 xl:pr-[33px] xl:pl-[43px]">
        {services.map(service => <ServiceCard key={service.title} {...service} />)}
      </div>
    </section>
  );
}
