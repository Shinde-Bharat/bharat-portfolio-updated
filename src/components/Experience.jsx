import { Briefcase, MapPin, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="mt-14 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.role + job.period} delay={i * 0.1}>
              <div
                className={`rounded-xl border p-6 md:p-8 ${
                  job.current
                    ? "border-[--color-accent]/40 bg-[--color-accent]/[0.06]"
                    : "border-white/[0.08] bg-[--color-surface]"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                        <Briefcase size={18} className="text-[--color-accent] shrink-0" />
                        {job.role}
                      </h3>
                      {job.current && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-[--color-accent] bg-[--color-accent]/10 px-2.5 py-1 rounded-full">
                          <Sparkles size={12} />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-[--color-text-muted] text-sm mt-1">
                      {job.company}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs font-medium text-[--color-text-dim]">
                      {job.period}
                    </p>
                    <p className="text-xs text-[--color-text-dim] flex items-center gap-1 justify-end mt-1">
                      <MapPin size={12} />
                      {job.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.responsibilities.map((resp) => (
                    <li
                      key={resp}
                      className="flex gap-3 text-sm text-[--color-text-muted] leading-relaxed"
                    >
                      <span className="mt-2 w-1 h-1 rounded-full bg-[--color-accent] shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-[--color-text-muted] border border-white/[0.1] rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
