import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "./Reveal";
import { siteConfig } from "../data/site";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next = {};

    if (!form.name.trim()) {
      next.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email.";
    }

    if (!form.message.trim()) {
      next.message = "Please enter a message.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }

    setSent(true);
  };

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <section
      id="contact"
      className="py-28 md:py-36 border-t border-white/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-16">

          <Reveal>
            <p className="text-sm font-medium tracking-wide text-[--color-accent] mb-3">
              Get in touch
            </p>

            <h2 className="font-display font-extrabold text-white text-[clamp(2rem,5vw,3.25rem)] tracking-tight leading-[1.05]">
              Let's build something great.
            </h2>

            <p className="mt-5 text-[--color-text-muted] text-lg leading-relaxed max-w-md">
              Have an opportunity, project idea, or just want to connect?
              Let's talk.
            </p>

            <p className="mt-4 text-sm font-medium text-[--color-accent]">
              Open to Software Developer and Full Stack Developer opportunities.
            </p>

            <div className="mt-9 space-y-4">
              <ContactRow
                icon={Phone}
                href={siteConfig.phoneHref}
                label={siteConfig.phone}
              />

              <ContactRow
                icon={Mail}
                href={siteConfig.social.email}
                label={siteConfig.email}
              />

              <ContactRow
                icon={FaLinkedin}
                href={siteConfig.social.linkedin}
                label="LinkedIn"
                external
              />

              <ContactRow
                icon={FaGithub}
                href={siteConfig.social.github}
                label="GitHub"
                external
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              action="https://formspree.io/f/xjyvewrw"
              method="POST"
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-white/[0.08] bg-[--color-surface] p-6 md:p-8 space-y-5"
            >
              <Field
                label="Name"
                id="name"
                value={form.name}
                onChange={handleChange("name")}
                error={errors.name}
              />

              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                error={errors.email}
              />

              <Field
                label="Message"
                id="message"
                as="textarea"
                rows={5}
                value={form.message}
                onChange={handleChange("message")}
                error={errors.message}
              />

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-black text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-white/90 transition-colors focus-ring"
              >
                Send Message
                <ArrowRight size={16} />
              </motion.button>

              {sent && (
                <p className="text-sm text-[--color-accent] text-center pt-1">
                  Message sent successfully!
                </p>
              )}
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon: Icon, href, label, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel="noreferrer"
      className="flex items-center gap-3 text-[--color-text-muted] hover:text-white transition-colors group focus-ring"
    >
      <span className="w-10 h-10 rounded-full border border-white/[0.1] flex items-center justify-center group-hover:border-[--color-accent]/50 transition-colors">
        <Icon size={16} />
      </span>

      <span className="text-sm">{label}</span>
    </a>
  );
}

function Field({
  label,
  id,
  as = "input",
  type = "text",
  value,
  onChange,
  error,
  rows,
}) {
  const Comp = as;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-medium text-[--color-text-muted] mb-2"
      >
        {label}
      </label>

      <Comp
        id={id}
        name={id}
        type={as === "input" ? type : undefined}
        rows={rows}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-lg bg-black/30 border border-white/[0.1] px-4 py-3 text-sm text-white placeholder:text-[--color-text-dim] focus:border-[--color-accent]/60 focus:outline-none transition-colors resize-none"
      />

      {error && (
        <p
          id={`${id}-error`}
          className="text-xs text-red-400 mt-1.5"
        >
          {error}
        </p>
      )}
    </div>
  );
}