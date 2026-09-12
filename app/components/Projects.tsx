"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Projects() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const lineProgressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current || !circleRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const containerHeight = timelineRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const dotSize = 32;
      const maxTravel = Math.max(0, containerHeight - dotSize);

      // Trigger tracking across the middle of the viewport
      const triggerPoint = viewportHeight * 0.5;
      const scrollDistance = triggerPoint - rect.top;
      const progress = Math.min(Math.max(scrollDistance / (rect.height - dotSize || 1), 0), 1);
      const currentY = progress * maxTravel;

      circleRef.current.style.transform = `translate(-50%, ${currentY}px)`;
      if (lineProgressRef.current) {
        lineProgressRef.current.style.height = `${currentY + dotSize / 2}px`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const projects = [
    { title: "Ice", src: "/ice.MOV" },
    { title: "Passion Fruit Mojito", src: "/Passion fruits mojito.MOV" },
    { title: "Heritage", src: "/heritage.mp4" },
    { title: "Orange Fruits", src: "/orange.jpeg" },
    { title: "Food", src: "/food.jpeg" },
    { title: "Drone video", src: "/drone.jpg" },
  ];

  const isVideoFile = (src: string) => {
    const lower = src.toLowerCase();
    return lower.endsWith(".mov") || lower.endsWith(".mp4") || lower.endsWith(".webm");
  };

  return (
    <section id="projects" className="mt-40">
      <div className="flex items-center gap-6 mb-12">
        <div className="h-[1px] w-16 bg-black dark:bg-white"></div>
        <h2 className={`${playfair.className} text-5xl md:text-6xl tracking-tight`}>
          Works
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => {
          const isVid = isVideoFile(project.src);
          return (
            <div
              key={idx}
              className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden cursor-pointer bg-zinc-900"
            >
              {isVid ? (
                <video
                  src={encodeURI(project.src)}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
              <div
                className={`${playfair.className} absolute bottom-6 left-6 text-white text-2xl z-10 pointer-events-none`}
              >
                {project.title}
              </div>
            </div>
          );
        })}
      </div>

      {/* Experience Section */}
      <div className="mt-32">
        <div className="flex items-center gap-6 mb-12">
          <div className="h-[1px] w-16 bg-black dark:bg-white"></div>
          <h2 className={`${playfair.className} text-5xl md:text-6xl tracking-tight`}>
            Experience
          </h2>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-zinc-300 dark:bg-zinc-700 hidden md:block"></div>

          {/* Active line fill */}
          <div
            ref={lineProgressRef}
            className="absolute left-4 top-0 w-[1.5px] -translate-x-[0.25px] bg-zinc-800 dark:bg-zinc-200 hidden md:block"
            style={{ height: "0px" }}
          ></div>

          {/* Single animated moving circle */}
          <div
            ref={circleRef}
            className="absolute left-4 top-0 hidden md:flex items-center justify-center pointer-events-none z-10 will-change-transform"
            style={{ transform: "translate(-50%, 0px)" }}
          >
            <div className="w-8 h-8 rounded-full border-2 border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-950 flex items-center justify-center shadow-sm">
              <div className="w-3.5 h-3.5 rounded-full bg-zinc-700 dark:bg-zinc-300"></div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            {/* Al Rais Holding */}
            <div className="relative md:pl-14">
              <div className="group border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 md:p-10 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
                  <div>
                    <h3 className={`${playfair.className} text-2xl md:text-3xl`}>
                      Al Rais Holding
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      Lead Content Creator / Social Media Executive
                    </p>
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 md:text-right shrink-0">
                    <p>Jumeirah-3, Dubai</p>
                    <p>Oct 2024 — Present</p>
                  </div>
                </div>
                <ul className="space-y-3 text-[0.95rem] leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <li className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></span>
                    Managed content strategy and social media execution for five leading UAE brands — Arabian Tea House, Arabian Fish House, Arabian Boutique Hotel &amp; Si-Italiano — ensuring consistent brand identity and engagement.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></span>
                    Drove audience growth and engagement through data-driven content planning and trend-focused campaigns.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></span>
                    Produced high-quality visual content, including videography and short-form videos aligned with brand positioning.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></span>
                    Coordinated marketing activities, content calendars, and campaigns in line with business objectives.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></span>
                    Monitored performance analytics to optimize strategy and improve overall digital growth.
                  </li>
                </ul>
              </div>
            </div>

            {/* Spark Security Services */}
            <div className="relative md:pl-14">
              <div className="group border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 md:p-10 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
                  <div>
                    <h3 className={`${playfair.className} text-2xl md:text-3xl`}>
                      Spark Security Services
                    </h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      Safety &amp; Security Specialist
                    </p>
                  </div>
                  <div className="text-sm text-zinc-500 dark:text-zinc-400 md:text-right shrink-0">
                    <p>Abu Dhabi</p>
                    <p>Oct 2019 — June 2024</p>
                  </div>
                </div>
                <ul className="space-y-3 text-[0.95rem] leading-relaxed text-zinc-700 dark:text-zinc-300">
                  <li className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></span>
                    Managed event safety and coordination through effective risk assessment and planning.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></span>
                    Oversaw access control and ensured compliance with safety regulations.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0"></span>
                    Handled critical incidents with quick, professional response.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
