import HomeHero from "@/components/home/HomeHero";
import CustomerLogos from "@/components/home/CustomerLogos";
import BusinessExcellence from "@/components/home/BusinessExcellence";
import Testimonials from "@/components/home/Testimonials";
import PricingSection from "@/components/home/PricingSection";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function Home() {
  return (
    <>
      <HomeHero imageSrc="/images/homephoto1.png" imagePosition="50% 50%" />
      <CustomerLogos />
      <BusinessExcellence />
      <Testimonials />
      <PricingSection />
      <NewsletterSection imageSrc="/images/homepagephoto2.jpg" />
    </>
  );
}
