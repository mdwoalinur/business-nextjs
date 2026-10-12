import "leaflet/dist/leaflet.css";
import OfficeMapClient from "./OfficeMapClient";

export default function ContactMap() {
  return (
    <section data-contact-section="map" aria-label="Map showing the Business location" className="relative isolate z-10 mr-1 h-[460px] overflow-hidden bg-[var(--contact-map-land)] shadow-[0_9px_40px_rgb(0_0_0/0.28)] lg:aspect-[1436/545] lg:h-auto">
      <OfficeMapClient />
    </section>
  );
}
