import PageHero from "@/components/PageHero";
import servicesHero from "../../../public/images/service.jpg";
import WayWeWork from "@/components/services/WayWeWork";
import ServicesSection from "@/components/services/ServicesSection";
import FAQSection from "@/components/services/FAQSection";

export const metadata = { title: "Services" };

export default function Services() {
  return (
    <div data-services-page className="overflow-x-clip" style={{
      "--services-divider": "#d9d9d9",
      "--services-faq-divider": "#898989",
      "--services-faq-surface": "#eaeaea",
      "--services-faq-ring": "#d0cee2",
      "--services-faq-inner": "linear-gradient(180deg, #5145b2, #908cc3)",
      "--services-award-gradient": "linear-gradient(90deg, #251b7f, #0980b2 70%)",
    }}>
      <PageHero
        variant="services"
        title="Services"
        imageSrc={servicesHero}
        imageAlt="Business consultation with three people"
        imagePosition="var(--services-hero-position, 50% 0%)"
        overlay="rgb(0 0 0 / 0.326)"
        className="max-md:[--services-hero-position:65%_0%]"
      />
      <WayWeWork />
      <ServicesSection />
      <FAQSection />
    </div>
  );
}
