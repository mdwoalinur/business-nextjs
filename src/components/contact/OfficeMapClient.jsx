"use client";

import dynamic from "next/dynamic";
import { LoaderCircle } from "lucide-react";

const OfficeMap = dynamic(() => import("./OfficeMap"), {
  ssr: false,
  loading: () => (
    <div role="status" aria-label="Loading office map" className="absolute inset-0 flex items-center justify-center bg-[var(--contact-map-land)]">
      <LoaderCircle size={24} aria-hidden="true" className="animate-spin text-reference-blue motion-reduce:animate-none" />
    </div>
  ),
});

export default function OfficeMapClient() {
  return <div className="absolute inset-0"><OfficeMap /></div>;
}
