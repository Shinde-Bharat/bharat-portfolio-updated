import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "../data/education";

export default function Education() {
  return (
    <section id="education" className="py-28 md:py-36 border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="mt-14 relative pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-white/[0.1]" />

          <div className="space-y-10">
            {education.map((edu, i) => (
              <Reveal key={edu.degree} delay={i * 0.1} className="relative">
                <span
                  className={`absolute -left-8 md:-left-10 top-1.5 w-4 h-4 rounded-full border-2 ${
                    edu.current
                      ? "bg-[--color-accent] border-[--color-accent] shadow-[0_0_0_4px_rgba(124,92,252,0.15)]"
                      : "bg-[--color-bg] border-white/[0.24]"
                  }`}
                />
                <div
                  className={`rounded-xl border p-6 ${
                    edu.current
                      ? "border-[--color-accent]/40 bg-[--color-accent]/[0.06]"
                      : "border-white/[0.08] bg-[--color-surface]"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-[--color-text-dim]">
                      {edu.period}
                    </span>
                    {edu.status && (
                      <span className="text-xs font-medium text-[--color-accent] bg-[--color-accent]/10 px-2.5 py-1 rounded-full">
                        {edu.status}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                    <GraduationCap size={18} className="text-[--color-text-dim] shrink-0" />
                    {edu.degree}
                  </h3>
                  <p className="text-[--color-text-muted] text-sm mt-1">
                    {edu.institution}
                  </p>
                  {edu.description && (
                    <p className="text-[--color-text-muted] text-sm mt-3 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
