import { ExternalLink, ImageOff } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Featured projects"
          title="A few things I've built"
          description="From e-commerce platforms to machine learning models — here's a selection of projects across the stack."
        />

        <div className="mt-16 space-y-20 md:space-y-28">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, reverse }) {
  return (
    <Reveal>
      <div
        className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${reverse ? "lg:[direction:rtl]" : ""
          }`}
      >
        <div className="[direction:ltr] aspect-video rounded-2xl border border-white/[0.08] bg-[--color-surface] flex items-center justify-center overflow-hidden">
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />

          <div className="hidden w-full h-full items-center justify-center flex-col gap-3 text-[--color-text-dim]">
            <ImageOff size={28} />
            <span className="text-xs">Project screenshot</span>
          </div>
        </div>

        <div className="[direction:ltr]">
          <span className="text-xs font-mono text-[--color-text-dim]">
            {project.id}
          </span>
          <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
            {project.name}
          </h3>
          <p className="mt-4 text-[--color-text-muted] leading-relaxed">
            {project.description}
          </p>

          <ul className="mt-5 space-y-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 text-sm text-[--color-text-muted] leading-relaxed"
              >
                <span className="mt-2 w-1 h-1 rounded-full bg-[--color-accent] shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs text-[--color-text-muted] border border-white/[0.1] rounded-full px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-4">
            <a
              href={project.github || "#"}
              target={project.github ? "_blank" : undefined}
              rel="noreferrer"
              aria-disabled={!project.github}
              onClick={(e) => !project.github && e.preventDefault()}
              className={`inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border transition-colors focus-ring ${project.github
                  ? "border-white/[0.14] text-white hover:border-[--color-accent]/60 hover:bg-[--color-accent]/10"
                  : "border-white/[0.08] text-[--color-text-dim] cursor-not-allowed"
                }`}
            >
              <FaGithub size={16} />
              Code
            </a>
            <a
              href={project.demo || "#"}
              target={project.demo ? "_blank" : undefined}
              rel="noreferrer"
              aria-disabled={!project.demo}
              onClick={(e) => !project.demo && e.preventDefault()}
              className={`inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full transition-colors focus-ring ${project.demo
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-white/[0.06] text-[--color-text-dim] cursor-not-allowed"
                }`}
            >
              <ExternalLink size={16} />
              Demo
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
