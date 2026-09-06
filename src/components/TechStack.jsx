import { techStack } from "../data/skills";

export default function TechStack() {
  const loop = [...techStack, ...techStack];

  return (
    <section className="py-14 border-t border-white/[0.06] overflow-hidden">
      <div
        className="group flex w-max"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        <MarqueeGroup />
        <MarqueeGroup />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .group:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function MarqueeGroup() {
  return (
    <div className="flex items-center shrink-0">
      {techStack.map((tech, i) => (
        <span
          key={tech + i}
          className="flex items-center text-2xl md:text-3xl font-display font-bold text-[--color-text-dim] px-8 whitespace-nowrap select-none"
        >
          {tech}
          <span className="ml-16 text-[--color-accent]/40">•</span>
        </span>
      ))}
    </div>
  );
}
