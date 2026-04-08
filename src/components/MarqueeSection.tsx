import { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const services = [
  { label: "WEBSITE DESIGN", href: "/services/website-design" },
  { label: "SOCIAL MEDIA", href: "/services/social-media" },
  { label: "CONTENT", href: "/services/social-media" },
  { label: "EMAIL MARKETING", href: "/services/email-marketing" },
  { label: "VIDEOGRAPHY", href: "/services/videography" },
  { label: "PPC", href: "/services/ppc" },
  { label: "SEO", href: "/services/seo" },
  { label: "PAID SOCIAL", href: "/services/paid-social" },
];

const SPEED = 1.2; // pixels per frame — increase to go faster

const MarqueeSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);
  const hasDragged = useRef(false);

  const getHalfWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    return track.scrollWidth / 2;
  }, []);

  // Auto-scroll animation loop
  useEffect(() => {
    const animate = () => {
      if (!isDragging.current) {
        offsetRef.current += SPEED;
        const half = getHalfWidth();
        if (half > 0 && offsetRef.current >= half) {
          offsetRef.current -= half;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [getHalfWidth]);

  // Drag handlers
  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    hasDragged.current = false;
    dragStartX.current = e.clientX;
    dragStartOffset.current = offsetRef.current;
    // Don't setPointerCapture yet — wait until we confirm horizontal drag
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const deltaX = dragStartX.current - e.clientX;
    if (Math.abs(deltaX) > 8) {
      hasDragged.current = true;
      // Only capture pointer once confirmed horizontal — this blocks vertical scroll
      try { (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId); } catch (_) {}
    }
    let next = dragStartOffset.current + deltaX;
    const half = getHalfWidth();
    if (half > 0) {
      next = ((next % half) + half) % half;
    }
    offsetRef.current = next;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${next}px)`;
    }
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  return (
    <section
      className="py-8 overflow-hidden border-y border-gold/10 bg-card/20 cursor-grab active:cursor-grabbing select-none"
      style={{ touchAction: "pan-y" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <div ref={trackRef} className="whitespace-nowrap flex will-change-transform">
        {[...services, ...services].map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <Link
              to={item.href}
              draggable={false}
              onClick={(e) => { if (hasDragged.current) e.preventDefault(); }}
              className="mx-4 font-display text-2xl md:text-3xl font-bold text-foreground/30 hover:text-gold transition-colors duration-200"
            >
              {item.label}
            </Link>
            <span className="text-gold font-bold text-2xl md:text-3xl mx-2">•</span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
