import PageHero from "@/components/PageHero";
import contactHero from "../../../public/images/contactus.png";

export default function ContactHero() {
  return (
    <PageHero
      variant="contact-us"
      title="Contact Us"
      imageSrc={contactHero}
      imagePosition="var(--contact-hero-position, 50% 0%)"
      overlay="rgb(67 65 255 / 0.2)"
      className="[&_img]:brightness-[0.6] [&_h1]:lg:translate-y-[2px] max-sm:[--contact-hero-position:70%_0%]"
    />
  );
}
