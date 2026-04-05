const words = [
  "SOCIAL MEDIA", "•", "CONTENT", "•", "BRANDING", "•", "VIDEOGRAPHY", "•",
  "PPC", "•", "SEO", "•", "DIGITAL", "•", "SOCIAL", "•",
];

const MarqueeSection = () => {
  return (
    <section className="py-8 overflow-hidden border-y border-gold/10 bg-card/20">
      <div className="animate-marquee whitespace-nowrap flex">
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className={`mx-4 font-display text-2xl md:text-3xl font-bold ${
              word === "•" ? "text-gold" : "text-foreground/20"
            }`}
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;
