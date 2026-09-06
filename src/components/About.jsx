import { Code2, Cpu, Lightbulb } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const cards = [
  {
    icon: Code2,
    title: "Software Developer",
    description:
      "Focused on creating reliable, high-quality software solutions with clean architecture, strong logic, and modern development practices.",
  },
  {
    icon: Cpu,
    title: "ML Enthusiast",
    description:
      "Passionate about machine learning and AI. Developed models for signature detection and resume analysis using TensorFlow and Keras.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Love tackling complex challenges with elegant solutions. Strong foundation in algorithms, data structures, and system design.",
  },
];

const stats = [
  { value: "5+", label: "Full-Stack Projects", span: "md:col-span-2" },
  { value: "2+", label: "ML Projects", span: "" },
  { value: "10+", label: "Technologies", span: "" },
  { value: "∞", label: "Learning", span: "md:col-span-2" },
];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="About me"
          title="Curiosity first. Code second. Impact always."
        />

        <div className="mt-14 grid lg:grid-cols-[1fr_1fr] gap-14 items-start">
          <Reveal delay={0.1} className="space-y-5 text-[--color-text-muted] text-base md:text-lg leading-relaxed">
            <p>
              My journey in tech began with curiosity and grew into a passion
              for building meaningful solutions. I specialize in C, C++,
              Python and modern web technologies like React. From developing
              ML models to creating full-stack applications, I enjoy
              learning, experimenting, and improving every day.
            </p>
            <p>
              When I'm not coding, I explore new frameworks, contribute to
              projects, and stay updated with the latest technology trends.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`rounded-xl border border-white/[0.08] bg-[--color-surface] px-5 py-5 ${stat.span}`}
                >
                  <p className="font-display text-3xl font-bold gradient-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-[--color-text-dim] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4">
            {cards.map((card, i) => (
              <Reveal key={card.title} delay={0.15 + i * 0.08}>
                <div className="group rounded-xl border border-white/[0.08] bg-[--color-surface] p-6 hover:border-[--color-accent]/40 transition-colors duration-300">
                  <div className="w-11 h-11 rounded-lg bg-[--color-accent-soft] flex items-center justify-center mb-4 group-hover:bg-[--color-accent]/20 transition-colors duration-300">
                    <card.icon size={20} className="text-[--color-accent]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[--color-text-muted] text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
