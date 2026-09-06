import { Award, ExternalLink, FileBadge, Trophy } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { achievements } from "../data/achievements";

const ICONS = { Trophy, Award, FileBadge };

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 md:py-36 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Certifications, research & professional development"
          title="Achievements"
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {achievements.map((ach, i) => {
            const Icon = ICONS[ach.icon] || Award;
            const hasCertificate = ach.certificateUrl && ach.certificateUrl !== "#";

            return (
              <Reveal key={ach.title} delay={i * 0.08}>
                <div className="group h-full flex flex-col rounded-xl border border-white/[0.08] bg-[--color-surface] p-6 hover:border-[--color-accent]/40 transition-colors duration-300">
                  <div className="w-11 h-11 rounded-lg bg-[--color-accent-soft] flex items-center justify-center mb-5 group-hover:bg-[--color-accent]/20 transition-colors duration-300">
                    <Icon size={20} className="text-[--color-accent]" />
                  </div>

                  <h3 className="text-white font-semibold text-base leading-snug">
                    {ach.title}
                  </h3>
                  {ach.organization && (
                    <p className="text-sm text-[--color-text-dim] mt-1">
                      {ach.organization}
                    </p>
                  )}

                  <p className="text-[--color-text-muted] text-sm mt-3 leading-relaxed flex-1">
                    {ach.description}
                  </p>

                  {ach.date && (
                    <p className="text-xs text-[--color-text-dim] mt-4">
                      {ach.date}
                    </p>
                  )}

                  <a
                    href={ach.certificateUrl}
                    target={hasCertificate ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-disabled={!hasCertificate}
                    onClick={(e) => !hasCertificate && e.preventDefault()}
                    className={`mt-5 inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2.5 rounded-full border transition-colors focus-ring ${
                      hasCertificate
                        ? "border-white/[0.14] text-white hover:border-[--color-accent]/60 hover:bg-[--color-accent]/10"
                        : "border-white/[0.08] text-[--color-text-dim] cursor-not-allowed"
                    }`}
                  >
                    View Certificate
                    <ExternalLink size={14} />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
