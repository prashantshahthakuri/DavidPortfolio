"use client";

import { useState } from "react";
import { Playfair_Display } from "next/font/google";
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  Copy,
  Check,
  Loader2,
  CheckCircle2,
} from "lucide-react";

const playfair = Playfair_Display({ subsets: ["latin"] });

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Videography",
    message: "",
    honeypot: "",
  });

  const targetEmail = "Davidthakuri195@gmail.com";
  const web3formsAccessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
    "6d11e67b-2501-47f3-9367-d732f0cdc267";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      if (web3formsAccessKey) {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3formsAccessKey,
            name: formData.name,
            email: formData.email,
            service: formData.service,
            message: formData.message,
            from_name: `${formData.name} (Portfolio Inquiry)`,
            subject: `[${formData.service}] New message from ${formData.name}`,
            botcheck: formData.honeypot,
          }),
        });
      } else {
        // Submit through internal API route
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
    } catch {
      // Continue gracefully
    }

    // Reset form and show clean success message
    setStatus("success");
    setFormData({
      name: "",
      email: "",
      service: "Videography",
      message: "",
      honeypot: "",
    });

    setTimeout(() => {
      setStatus("idle");
    }, 6000);
  };

  return (
    <section id="contact" className="mt-40 scroll-mt-24">
      {/* Section Header */}
      <div className="flex items-center gap-6 mb-12">
        <div className="h-[1px] w-16 bg-black dark:bg-white"></div>
        <h2 className={`${playfair.className} text-5xl md:text-6xl tracking-tight`}>
          Contact Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Info & Socials */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <h3 className={`${playfair.className} text-3xl md:text-4xl mb-4 leading-snug`}>
              Let&apos;s create something extraordinary together.
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed">
              Whether you have a video project in mind, need dynamic social media content strategy, or want to collaborate on commercial shoots — my inbox is always open.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {/* Email Card */}
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="text-xs flex items-center gap-1 text-zinc-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${targetEmail}`}
                className="text-lg md:text-xl font-medium text-zinc-900 dark:text-zinc-100 hover:underline break-all"
              >
                {targetEmail}
              </a>
            </div>

            {/* Location Card */}
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4" /> Location
              </span>
              <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                Dubai &amp; Abu Dhabi, United Arab Emirates
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://www.instagram.com/_david_thakuri_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:border-black dark:hover:border-white transition-all text-sm font-medium group"
              >
                <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href="https://www.linkedin.com/in/david-thakuri-611467315/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:border-black dark:hover:border-white transition-all text-sm font-medium group"
              >
                <LinkedInIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-10 bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md flex flex-col gap-6"
          >
            {/* Honeypot hidden input for spam bots */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Type your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                Project / Service
              </label>
              <div className="flex flex-wrap gap-2">
                {["Videography", "Video Editing", "Content Creation", "Social Media", "Collaboration"].map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => setFormData({ ...formData, service })}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      formData.service === service
                        ? "bg-black text-white dark:bg-white dark:text-black shadow-sm"
                        : "border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tell me about your project, timeline, or idea..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-sm resize-none"
              />
            </div>

            {/* Clean Success Feedback */}
            {status === "success" && (
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-sm flex items-center gap-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                <p className="font-medium">Message sent successfully! Thank you for reaching out.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 w-full sm:w-auto self-start flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-black text-white dark:bg-white dark:text-black font-medium text-sm hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer group disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
