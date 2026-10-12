"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigationItems } from "@/lib/navigation";

export default function Navbar({ className = "", children }) {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState(null);
  const trigger = useRef(null);
  const open = openPath === pathname;
  const home = pathname === "/";

  function closeMenu() {
    setOpenPath(null);
    trigger.current?.focus();
  }

  return (
    <header data-component="navbar" onKeyDown={(event) => { if (open && event.key === "Escape") closeMenu(); }} className={`absolute inset-x-0 top-0 z-40 px-6 pt-7 font-interface text-white ${className}`}>
      <div className={`relative mx-auto flex h-8 items-center justify-between ${home ? "max-w-[1120px]" : "max-w-reference-navbar lg:pr-5"}`}>
        {children ?? <Link href="/" className="text-2xl leading-8 font-bold focus-visible:outline-2 focus-visible:outline-offset-4">BUSINESS</Link>}
        <button
          ref={trigger}
          type="button"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          title={open ? "Close menu" : "Open menu"}
          onClick={() => setOpenPath(open ? null : pathname)}
          className="flex size-11 items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-4 lg:hidden"
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`${open ? "block" : "hidden"} absolute top-12 right-0 left-0 bg-reference-navy p-5 lg:static lg:block lg:bg-transparent lg:p-0`}
        >
          <ul className="flex flex-col gap-2 text-[22px] leading-[30px] font-medium lg:flex-row lg:gap-[27px]">
            {navigationItems.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={pathname === href ? "page" : undefined}
                  onClick={() => setOpenPath(null)}
                  className={`block py-2 decoration-2 underline-offset-[9px] focus-visible:outline-2 focus-visible:outline-offset-4 aria-[current=page]:underline lg:py-0 ${href === "/contact-us" ? "lg:ml-3" : ""}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
