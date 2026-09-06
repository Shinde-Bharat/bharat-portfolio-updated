import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <Reveal className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      {eyebrow && (
        <p className="text-sm font-medium tracking-wide text-[--color-accent] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display font-extrabold text-white text-[clamp(1.8rem,4vw,2.75rem)] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[--color-text-muted] text-base md:text-lg leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </Reveal>
  );
}
