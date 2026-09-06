import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading eyebrow="Technical skills" title="Tools I build with" />

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 0.06}>
              <div className="rounded-xl border border-white/[0.08] bg-[--color-surface] p-6 h-full">
                <h3 className="text-white font-semibold text-sm tracking-wide mb-4">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="text-sm text-[--color-text-muted] border border-white/[0.1] rounded-full px-3.5 py-1.5 hover:text-white hover:border-[--color-accent]/50 hover:bg-[--color-accent]/[0.08] transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
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
