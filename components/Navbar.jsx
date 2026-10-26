'use client'
import MediaImage from '@/components/MediaImage'


import SiteLink from '@/components/SiteLink'
import { useCallback, useEffect, useRef, useState } from "react";
import { bookingUrl, navigation } from "@/data/site";
import dynamic from 'next/dynamic';
const MobileNavigation = dynamic(() => import('./MobileNavigation'), { ssr: false });
import useOutsideClick from "@/hooks/useOutsideClick";
const browLamination = "/assets/ClientsPhotos/BrowLamination/brow-lamination-client-result.png"
const LashExtension = "/assets/ClientsPhotos/LashExtension/lash-extensions-client-portrait-01.jpg"
const KoreanLashLift = "/assets/ClientsPhotos/KoreanLashLiftTint/korean-lash-lift-eye-closeup.png"
const NanoComboBrows = "/assets/ClientsPhotos/Nano-NanoComboBrows/nano-combo-brows-before-after.jpg"

export const services = [
  { label: "Brow Lamination & Sculpt", href: "/services/brow-lamination", image: browLamination },
  { label: "Lash Extensions", href: "/services/lash-extensions", image: LashExtension },
  { label: "Korean Lash Lift & Tint", href: "/services/korean-lash-lift", image: KoreanLashLift },
  { label: "Nano & Combo Brows", href: "/services/nano-combo-brows", image: NanoComboBrows },
];

function PageLink({ item, className, underline = false }) {
  const label = underline ? (
    <span className="relative inline-flex items-center gap-2">
      {item.label}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
      />
    </span>
  ) : (
    item.label
  );
  function MobileLink({ item }) {
    if (!item.href) {
      return (
        <span className="font-heading text-3xl text-espresso/40">
          {item.label}
        </span>
      );
    }
    return (
      <SiteLink href={item.href} className="group font-heading text-3xl tracking-wide">
        <span className="relative inline-block pb-2">
          {item.label}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-px origin-center scale-x-[0.35] bg-gold transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
          />
        </span>
      </SiteLink>
    );
  }
  return item.href ? (
    <SiteLink className={`${className}${underline ? " group" : ""}`} href={item.href}>
      {label}
    </SiteLink>
  ) : (
    <button type="button" disabled className={className}>
      {label}
    </button>
  );
}

function ServiceMenuItem({ item }) {
  return (
    <SiteLink
      href={item.href}
      className="flex cursor-pointer items-center gap-4 px-2 py-2.5 text-left text-xs leading-relaxed transition-colors hover:bg-greige"
    >
      {item.image ? (
        <MediaImage sizes="56px"
          src={item.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="size-14 shrink-0 rounded-sm object-cover"
        />
      ) : (
        <span
          className="size-14 shrink-0 rounded-sm bg-stone"
          aria-hidden="true"
        />
      )}
      <span className="uppercase tracking-[0.12em]">{item.label}</span>
    </SiteLink>
  );
}

function ServicesMenu({ mobile = false }) {
  const detailsRef = useRef(null);

  useOutsideClick(detailsRef, () => {
    if (detailsRef.current?.open) detailsRef.current.open = false;
  });

  return (
    <details
      ref={detailsRef}
      className="group/services relative"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.currentTarget.open = false;
          event.currentTarget.querySelector("summary").focus();
        }
      }}
    >
      <summary
        className={`group flex cursor-pointer list-none items-center justify-between gap-2 py-3 focus-visible:outline-2 focus-visible:outline-offset-4 [&::-webkit-details-marker]:hidden ${mobile ? "font-heading text-2xl leading-relaxed" : "text-[10px] font-medium uppercase tracking-[0.16em]"}`}
      >
        <span className="relative inline-flex items-center">
          Services
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:transition-none"
          />
        </span>
        <svg
          className="size-3 transition-transform group-open/services:rotate-180 motion-reduce:transition-none"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="m3 4.5 3 3 3-3" />
        </svg>
      </summary>
      <div
        className={
          mobile
            ? "grid gap-1 pb-4 pl-4"
            : "absolute top-full -left-5 z-30 grid w-[34rem] grid-cols-2 gap-x-4 gap-y-1 border border-stone bg-white p-4 text-espresso shadow-lg shadow-espresso/5"
        }
      >
        {services.map((item) => (
          <ServiceMenuItem key={item.label} item={item} />
        ))}
      </div>
    </details>
  );
}

export default function Navbar({ forceSolid = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuLoaded, setMenuLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const solid = forceSolid || scrolled || menuOpen;
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    const initialFrame = requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => { cancelAnimationFrame(initialFrame); window.removeEventListener("scroll", handleScroll); };
  }, []);
  const navClass =
    "py-3 text-[10px] font-medium uppercase tracking-[0.16em] cursor-pointer disabled:cursor-not-allowed";

  return (
    <header
      className={`sticky top-0 z-50 -mb-16 transition-colors duration-300 motion-reduce:transition-none md:-mb-20 [&_a:focus-visible]:outline-current [&_button:focus-visible]:outline-current ${solid ? "bg-white text-espresso shadow-[0_3px_5px_-2px_rgba(0,0,0,0.35)]" : "bg-transparent text-off-white"}`}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-6 md:h-20 md:px-10 lg:px-16">
        {/* Text wordmark until the original logo file is supplied. */}
        <SiteLink href="/" aria-label="SERIÉ home" className="shrink-0 text-inherit">
          <span className="block font-heading text-[32px] leading-none tracking-[-0.065em] md:text-[38px]">
            SERIÉ
          </span>
          <span className="mt-1.5 block text-[7px] font-semibold uppercase leading-none tracking-[0.18em]">
            Lash, Brow & Training
          </span>
        </SiteLink>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex xl:gap-10"
        >
          <PageLink item={navigation[0]} className={navClass} underline />
          <ServicesMenu />
          {navigation.slice(1).map((item) => (
            <PageLink
              key={item.label}
              item={item}
              className={navClass}
              underline
            />
          ))}
          <SiteLink
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`cursor-pointer border px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.12em] transition-colors motion-reduce:transition-none ${solid ? "border-espresso bg-espresso text-off-white hover:bg-espresso/85" : "border-off-white/70 bg-transparent text-off-white hover:bg-off-white hover:text-espresso"}`}
          >
            Take me to booking
          </SiteLink>
        </nav>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => { setMenuLoaded(true); setMenuOpen(!menuOpen); }}
          className="grid size-11 cursor-pointer place-items-center lg:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            aria-hidden="true"
          >
            <path d={menuOpen ? "m6 6 12 12M6 18 18 6" : "M3 8h18M3 16h18"} />
          </svg>
        </button>
      </div>

      {menuLoaded && <MobileNavigation open={menuOpen} onClose={closeMenu}>
        <div className="divide-y divide-stone">
          <SiteLink
            href="/"
            className="block py-3 font-heading text-2xl leading-relaxed"
          >
            Home
          </SiteLink>
          <PageLink
            item={navigation[0]}
            className="block py-3 text-left font-heading text-2xl leading-relaxed"
          />
          <ServicesMenu mobile />
          {navigation.slice(1).map((item) => (
            <PageLink
              key={item.label}
              item={item}
              className="block w-full py-3 text-left font-heading text-2xl leading-relaxed disabled:cursor-not-allowed disabled:text-espresso/50"
            />
          ))}
        </div>
        <div className="mt-auto pt-10">
          <SiteLink
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 items-center justify-center bg-espresso px-4 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-off-white hover:bg-black focus-visible:outline-offset-4"
          >
            Take me to booking
          </SiteLink>
          <p className="mt-5 text-center text-[10px] uppercase tracking-[0.14em]">
            Lash &amp; brow artistry in Winnipeg
          </p>
        </div>
      </MobileNavigation>}
    </header>
  );
}
