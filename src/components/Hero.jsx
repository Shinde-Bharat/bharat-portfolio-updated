import { motion } from "framer-motion";
import { Mail, Phone, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "../data/site";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const codeLines = [
  { indent: 0, text: "const build = () => {" },
  { indent: 1, text: "stack: ['react', 'node', 'ml']," },
  { indent: 1, text: "focus: 'reliable systems'," },
  { indent: 1, text: "status: 'shipping'" },
  { indent: 0, text: "}" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 md:pt-24 overflow-hidden"
      >
      {/* background */}
      <div className="absolute inset-0 noise-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <div className="absolute -top-32 -right-32 w-[32rem] h-[32rem] rounded-full bg-[--color-accent]/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[--color-accent-2]/10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto w-full px-6 md:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="text-sm font-medium tracking-wide text-[--color-accent] mb-6"
          >
            Hello, I'm Bharat
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-extrabold text-white leading-[0.95] tracking-tight text-[clamp(2.8rem,7vw,5.5rem)]"
          >
            Bharat Shinde
          </motion.h1>

          <motion.div variants={item} className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-lg md:text-xl text-[--color-text-muted] font-medium">
            <span>Software Developer</span>
            <span className="text-[--color-text-dim]">·</span>
            <span>Full Stack Enthusiast</span>
            <span className="text-[--color-text-dim]">·</span>
            <span>Problem Solver</span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-base md:text-lg text-[--color-text-muted] leading-relaxed"
          >
            Building reliable software, solving complex problems, and turning
            ideas into meaningful digital experiences.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors focus-ring"
            >
              View My Work
            </a>
            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/[0.14] text-white text-sm font-semibold hover:border-[--color-accent]/60 hover:bg-[--color-accent]/10 transition-colors focus-ring"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 text-sm text-[--color-text-muted] hover:text-white transition-colors focus-ring"
            >
              <Phone size={16} className="text-[--color-accent]" />
              {siteConfig.phone}
            </a>

            <div className="flex items-center gap-3">
              <SocialIcon href={siteConfig.social.github} label="GitHub">
                <FaGithub size={17} />
              </SocialIcon>
              <SocialIcon href={siteConfig.social.linkedin} label="LinkedIn">
                <FaLinkedin size={17} />
              </SocialIcon>
              <SocialIcon href={siteConfig.social.email} label="Email">
                <Mail size={18} />
              </SocialIcon>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-2xl border border-white/[0.08] bg-[--color-surface]/80 backdrop-blur-sm shadow-2xl shadow-black/50 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-xs text-[--color-text-dim] font-mono">
                bharat.dev
              </span>
            </div>
            <div className="p-6 font-mono text-[13px] leading-relaxed">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.12, duration: 0.4 }}
                  style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                >
                  <span className="text-[--color-text-dim] select-none mr-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <SyntaxLine text={line.text} />
                </motion.div>
              ))}
              <motion.span
                className="inline-block w-2 h-4 bg-[--color-accent] ml-8 align-middle"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.1, repeat: Infinity }}
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="absolute -bottom-6 -left-8 rounded-xl border border-white/[0.08] bg-[--color-surface-2]/90 backdrop-blur-sm px-4 py-3 shadow-xl"
          >
            <p className="text-xs text-[--color-text-dim]">Currently building</p>
            <p className="text-sm font-semibold text-white mt-0.5">
              Full-stack + ML projects
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
  href="#about"
  onClick={(e) => {
    e.preventDefault();
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.6, duration: 0.8 }}
  className="mt-8 md:hidden flex flex-col items-center gap-2 text-xs text-[--color-text-dim] hover:text-[--color-text-muted] transition-colors focus-ring"
>
  Scroll to explore
  <motion.span
    animate={{ y: [0, 6, 0] }}
    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
  >
    <ArrowDown size={14} />
  </motion.span>
</motion.a>
    </section>
  );
}

function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-white/[0.1] text-[--color-text-muted] hover:text-white hover:border-white/[0.24] transition-colors focus-ring"
    >
      {children}
    </a>
  );
}

function SyntaxLine({ text }) {
  // very small illustrative syntax coloring
  const parts = text.split(/(\[.*?\]|'.*?'|:)/g);
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith("'"))
          return (
            <span key={i} className="text-[--color-accent-2]">
              {part}
            </span>
          );
        if (part === ":")
          return (
            <span key={i} className="text-[--color-text-dim]">
              {part}
            </span>
          );
        return (
          <span key={i} className="text-[--color-text]/90">
            {part}
          </span>
        );
      })}
    </span>
  );
}
