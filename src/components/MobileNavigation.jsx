import { Children, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useAnimationControls, useReducedMotion } from "motion/react";
import navBackground from "../assets/image.png";

export default function MobileNavigation({ open, onClose, children }) {
  const dialogRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const panelAnimation = useAnimationControls();

  // Text animation: each top-level menu item slides up + fades in, one after another,
  // starting once the panel is mostly down.
  const itemVariants = {
    hidden: { opacity: 0, y: 28, transition: { duration: 0.2 } },
    show: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.6,
        delay: reducedMotion ? 0 : 0.45 + i * 0.09,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open) return;
    dialog.showModal();
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktop.matches) onClose();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.documentElement.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open, onClose]);

  useEffect(() => {
    let cancelled = false;
    let frame;
    const transition = {
      type: "tween",
      duration: reducedMotion ? 0 : 0.9,
      ease: [0.4, 0, 0.2, 1],
    };
    if (open) {
      panelAnimation.set({ y: "-100%" });
      frame = requestAnimationFrame(() =>
        panelAnimation.start({ y: "0%", transition }),
      );
    } else {
      panelAnimation.start({ y: "-100%", transition }).then(() => {
        if (!cancelled) dialogRef.current?.close();
      });
    }
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      panelAnimation.stop();
    };
  }, [open, reducedMotion, panelAnimation]);

  return createPortal(
    <dialog
      ref={dialogRef}
      autoFocus
      tabIndex={-1}
      id="mobile-navigation"
      aria-label="Navigation menu"
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const items = [
          ...event.currentTarget.querySelectorAll(
            'a[href], button:not(:disabled), summary, [tabindex="0"]',
          ),
        ].filter((element) => element.getClientRects().length > 0);
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-clip border-0 bg-transparent p-0 text-espresso backdrop:bg-transparent"
    >
      {/* Smooth open/close for any native <details> dropdown (Chrome 131+, Safari/Firefox just snap) */}
      <style>{`
        #mobile-navigation { interpolate-size: allow-keywords; }
        #mobile-navigation details::details-content {
          height: 0;
          opacity: 0;
          overflow: clip;
          transition: height .45s cubic-bezier(.4,0,.2,1), opacity .35s ease, content-visibility .45s allow-discrete;
        }
        #mobile-navigation details[open]::details-content { height: auto; opacity: 1; }
        #mobile-navigation details > summary svg { transition: transform .3s ease; }
        #mobile-navigation details[open] > summary svg { transform: rotate(180deg); }
        @media (prefers-reduced-motion: reduce) {
          #mobile-navigation details::details-content,
          #mobile-navigation details > summary svg { transition: none; }
        }
      `}</style>
      <motion.div
        aria-hidden="true"
        initial={false}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: reducedMotion ? 0 : 0.5 }}
        className="pointer-events-none absolute inset-0 bg-espresso/45"
      />
      <motion.div
        initial={{ y: "-100%" }}
        animate={panelAnimation}
        transition={{
          duration: reducedMotion ? 0 : 0.9,
          ease: [0.4, 0, 0.2, 1],
        }}
        // NOTE: no bg-white here. It was painting on top of the bg image.
        // `isolate` keeps the image layers inside this panel's stacking context.
        className="absolute inset-0 isolate flex w-full flex-col overflow-hidden bg-white"
      >
        {/* Background image — a normal layer (no negative z-index), content sits above it */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${navBackground})` }}
        />
        {/* Light wash for text legibility. Lower the number (e.g. /40) to show more image */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-white/55"
        />

        {/* Header: border-bottom removed */}
        <div className="relative z-10 flex shrink-0 items-center justify-between px-6 pb-5 pt-[max(1.25rem,env(safe-area-inset-top))]">
          <a
            href="/"
            aria-label="SERIÉ home"
            onClick={onClose}
            className="transition-opacity duration-300 hover:opacity-70"
          >
            <span className="block font-heading text-[32px] leading-none tracking-[-0.065em]">
              SERIÉ
            </span>
            <span className="mt-2 block text-[7px] font-semibold uppercase tracking-[0.18em]">
              Lash, Brow &amp; Training
            </span>
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid size-11 cursor-pointer place-items-center transition-colors duration-300 hover:bg-greige"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              className="size-6"
            >
              <path d="m6 6 12 12M6 18 18 6" />
            </svg>
          </button>
        </div>

        <nav
          aria-label="Mobile navigation"
          className={[
            "relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6",

            // Remove border-bottom, use underline on top-level links + Services label
            "[&>div>a]:border-b-0 [&_summary]:border-b-0 [&_details]:border-b-0",
            "[&>div>a]:underline [&>div>a]:underline-offset-4 [&>div>a]:decoration-1",
            "[&_summary]:underline [&_summary]:underline-offset-4 [&_summary]:decoration-1",
          ].join(" ")}
          onClick={(event) => {
            if (event.target.closest("a[href]")) onClose();
          }}
        >
          {Children.toArray(children).map((child, i) => (
            <motion.div
              key={child.key ?? i}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate={open ? "show" : "hidden"}
            >
              {child}
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </dialog>,
    document.body,
  );
}