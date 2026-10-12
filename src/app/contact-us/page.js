import ContactHero from "@/components/contact/ContactHero";
import ContactIntroduction from "@/components/contact/ContactIntroduction";
import ContactMap from "@/components/contact/ContactMap";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = { title: "Contact Us" };

export default function ContactUs() {
  return (
    <div style={{ "--contact-placeholder": "#d3d1d1", "--contact-popup": "#fffefe", "--contact-map-land": "#d3f8e2", "--contact-send-shadow": "0 0 48px rgb(0 0 0 / 0.25)" }}>
      <ContactHero />
      <ContactIntroduction />
      <ContactMap />
      <ContactForm />
    </div>
  );
}
