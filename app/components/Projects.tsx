import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Projects() {
  return (
    <section id="projects" className="mt-40">
      <div className="flex items-center gap-6 mb-12">
        <div className="h-[1px] w-16 bg-black dark:bg-white"></div>
        <h2 className={`${playfair.className} text-5xl md:text-6xl tracking-tight`}>
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Solo dance video", src: "/dance.jpg" },
          { title: "Sax player", src: "/sax.jpg" },
          { title: "Drone video", src: "/drone.jpg" },
          { title: "Dentistry", src: "/dentistry.jpg" },
          { title: "Music video", src: "/music.jpg" },
          { title: "Group dance video", src: "/dance.jpg" },
        ].map((project, idx) => (
          <div key={idx} className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden cursor-pointer">
            <Image
              src={project.src}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className={`${playfair.className} absolute bottom-6 left-6 text-white text-2xl`}>
              {project.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
