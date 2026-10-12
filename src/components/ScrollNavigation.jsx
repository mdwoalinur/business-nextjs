"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowDown, ArrowUp } from "lucide-react";

const edgeGap = 12;
const obstacleSelector = "a,button,input,textarea,select,label,[data-map-popup],#main-navigation,footer > div:last-child";

export default function ScrollNavigation() {
  const pathname = usePathname();
  const [showUp, setShowUp] = useState(false);
  const [bottom, setBottom] = useState(16);

  useEffect(() => {
    const window = globalThis.window;
    const document = window.document;
    let frame = 0;
    function refresh() {
      frame = 0;
      setShowUp(window.scrollY > 80);
      const viewport = window.visualViewport;
      const viewportTop = viewport?.offsetTop ?? 0;
      const viewportBottom = viewportTop + (viewport?.height ?? window.innerHeight);
      const controlSize = document.querySelector("[data-scroll-navigation]").getBoundingClientRect().width;
      const clearance = window.innerWidth < 640 ? 2 : 6;
      const x = window.innerWidth - edgeGap - controlSize;
      const obstacles = Array.from(document.querySelectorAll(obstacleSelector))
        .filter(element => !element.closest("[data-scroll-navigation]") && element.getClientRects().length)
        .map(element => element.getBoundingClientRect())
        .filter(rect => rect.right > x - clearance && rect.left < x + controlSize + clearance && rect.bottom > viewportTop && rect.top < viewportBottom);

      // Keep the right-edge control clear of inputs, links, the map and open menus.
      let y = viewportBottom - controlSize - 16;
      while (y >= viewportTop + 16) {
        const blocking = obstacles.filter(rect => y < rect.bottom + clearance && y + controlSize > rect.top - clearance);
        if (!blocking.length) break;
        y = Math.min(...blocking.map(rect => rect.top)) - controlSize - clearance;
      }
      setBottom(window.innerHeight - Math.max(viewportTop + 16, y) - controlSize);
    }
    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(refresh);
    }
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.visualViewport?.addEventListener("resize", schedule);
    window.visualViewport?.addEventListener("scroll", schedule);
    const resizeObserver = new window.ResizeObserver(schedule);
    resizeObserver.observe(document.body);
    const menuObserver = new window.MutationObserver(schedule);
    menuObserver.observe(document.body, { subtree: true, attributes: true, attributeFilter: ["aria-expanded", "hidden"] });
    schedule();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.visualViewport?.removeEventListener("resize", schedule);
      window.visualViewport?.removeEventListener("scroll", schedule);
      resizeObserver.disconnect();
      menuObserver.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  function scroll() {
    const window = globalThis.window;
    window.scrollTo({
      top: showUp ? 0 : Math.max(0, window.document.documentElement.scrollHeight - window.innerHeight),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  const label = showUp ? "Scroll to top" : "Scroll to bottom";
  const Icon = showUp ? ArrowUp : ArrowDown;
  return (
    <button data-scroll-navigation type="button" onClick={scroll} aria-label={label} title={label} style={{ bottom }} className="fixed right-3 z-50 flex size-8 items-center justify-center rounded-full bg-reference-blue text-white shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-reference-blue sm:size-11">
      <Icon size={22} aria-hidden="true" />
    </button>
  );
}
