"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import styles from "./OfficeMap.module.css";

const office = [51.5033, -0.1276];
const officeIcon = new L.Icon({
  iconUrl: "/icons/office-map-marker.png",
  iconRetinaUrl: "/icons/office-map-marker-2x.png",
  shadowUrl: "/icons/office-map-marker-shadow.png",
  iconSize: [37, 61],
  iconAnchor: [18.5, 61],
  popupAnchor: [144, 179],
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

function MapViewport({ marker }) {
  const map = useMap();
  useEffect(() => {
    const window = globalThis.window;
    let frame = 0;
    let initialFrame = 0;
    function notifyOverlay() {
      window.dispatchEvent(new window.Event("scroll"));
    }
    function keepOfficeVisible() {
      const size = map.getSize();
      const point = map.latLngToContainerPoint(office);
      if (point.x < 34 || point.x > size.x - 34 || point.y < 70 || point.y > size.y - 16) map.panTo(office, { animate: false });
      const popup = marker.current?.getPopup();
      if (popup && map.hasLayer(popup)) popup.update();
      notifyOverlay();
    }
    function resize() {
      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        map.invalidateSize({ pan: false, animate: false });
        keepOfficeVisible();
      });
    }
    map.whenReady(() => {
      // Place the office near the reference pin, leaving room for its right-hand card.
      const size = map.getSize();
      const x = size.x < 640 ? Math.max(37, Math.min(size.x * 0.2, size.x - 279)) : size.x * 0.402;
      const target = L.point(x, size.y * 0.616);
      map.setView(map.unproject(map.project(office, 13).subtract(target.subtract(size.divideBy(2))), 13), 13, { animate: false });
      initialFrame = window.requestAnimationFrame(() => {
        initialFrame = 0;
        marker.current?.openPopup();
        keepOfficeVisible();
      });
    });
    map.on("zoomend", keepOfficeVisible);
    map.on("popupopen popupclose moveend", notifyOverlay);
    const observer = new window.ResizeObserver(resize);
    observer.observe(map.getContainer());
    return () => {
      observer.disconnect();
      map.off("zoomend", keepOfficeVisible);
      map.off("popupopen popupclose moveend", notifyOverlay);
      if (frame) window.cancelAnimationFrame(frame);
      if (initialFrame) window.cancelAnimationFrame(initialFrame);
    };
  }, [map, marker]);
  return null;
}

export default function OfficeMap() {
  const marker = useRef(null);
  const failedTiles = useRef(new Set());
  const [tileError, setTileError] = useState(false);
  const tileEvents = useMemo(() => ({
    loading() { failedTiles.current.clear(); setTileError(false); },
    tileerror(event) { failedTiles.current.add(event.tile.src); setTileError(true); },
    tileload(event) { failedTiles.current.delete(event.tile.src); setTileError(failedTiles.current.size > 0); },
  }), []);

  return (
    <div className={`${styles.map} relative isolate h-full w-full`}>
      <MapContainer center={office} zoom={13} scrollWheelZoom={false} className="h-full w-full" aria-label="Interactive map of the Business office in London">
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" attribution={'<a href="https://www.openstreetmap.org/copyright">&copy; OpenStreetMap contributors</a>'} eventHandlers={tileEvents} updateWhenIdle updateWhenZooming={false} keepBuffer={0} maxZoom={19} />
        <Marker ref={marker} position={office} icon={officeIcon} title="Business office" alt="Business office at 10 Downing Street">
          <Popup minWidth={245} maxWidth={245} autoPanPadding={[16, 16]}>
            <div data-map-popup className={styles.info}>
              <h2 className="font-reference text-[28px] leading-[34px] font-bold">Business</h2>
              <address className="mt-1 font-interface text-[22px] leading-[26px] font-light not-italic">10 Downing Street<br />London<br />SW1A 2AA<br />United Kingdom</address>
            </div>
          </Popup>
        </Marker>
        <MapViewport marker={marker} />
      </MapContainer>
      {tileError ? <p role="status" className="pointer-events-none absolute top-3 right-3 z-10 max-w-[calc(100%-80px)] rounded bg-white px-3 py-2 font-interface text-[14px] leading-5 text-reference-text shadow">Map tiles are temporarily unavailable.</p> : null}
    </div>
  );
}
