import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, useAnimationControls, useReducedMotion } from "motion/react";

export default function MobileNavigation({ open, onClose, children }) {
  const dialogRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const panelAnimation = useAnimationControls();

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
        className="absolute inset-0 flex w-full flex-col bg-white"
      >
        <div className="flex shrink-0 items-center justify-between border-b border-stone px-6 pb-5 pt-[max(1.25rem,env(safe-area-inset-top))]">
          <a href="/" aria-label="SERIÉ home" onClick={onClose}>
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
            className="grid size-11 cursor-pointer place-items-center hover:bg-greige"
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
          className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-6"
          onClick={(event) => {
            if (event.target.closest("a[href]")) onClose();
          }}
        >
          {children}
        </nav>
      </motion.div>
    </dialog>,
    document.body,
  );
}