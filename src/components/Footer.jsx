import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { siteConfig } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display font-extrabold text-white">
            {siteConfig.shortName.toUpperCase()}
            <span className="text-[--color-accent]">.</span>
          </p>
          <p className="text-xs text-[--color-text-dim] mt-1">
            {siteConfig.title}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-[--color-text-muted] hover:text-white transition-colors focus-ring"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-[--color-text-muted] hover:text-white transition-colors focus-ring"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={siteConfig.social.email}
            aria-label="Email"
            className="text-[--color-text-muted] hover:text-white transition-colors focus-ring"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="text-xs text-[--color-text-dim] text-center md:text-right">
          <p>© 2026 Bharat Shinde</p>
          <p className="mt-1">Built with React &amp; ❤️</p>
        </div>
      </div>
    </footer>
  );
}
