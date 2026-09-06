import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Skills() {
  return (
    <section id="skills" className="mt-40">
      <div className="flex items-center gap-6 mb-12">
        <div className="h-[1px] w-16 bg-black dark:bg-white"></div>
        <h2 className={`${playfair.className} text-5xl md:text-6xl tracking-tight`}>
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800">
          <Image
            src="/heroimage.jpeg"
            alt="Videographer Setting up"
            fill
            className="object-cover object-[center_30%]"
          />
        </div>

        <div className="flex flex-col gap-12 pt-4">
          <div>
            <h3 className={`${playfair.className} text-4xl mb-6`}>Tools</h3>
            <div className="flex flex-wrap gap-3">
              {["Adobe Premier Pro", "Capcut", "Canva", "Higgsfield Sedance"].map(tool => (
                <span key={tool} className="border border-black/30 dark:border-white/30 rounded-[30px] px-5 py-2 text-sm whitespace-nowrap">{tool}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`${playfair.className} text-4xl mb-6`}>Video-editing skills</h3>
            <div className="flex flex-wrap gap-3">
              {["Sound editing", "Animation", "Rhythm", "Color correction", "Multi-camera video editing"].map(skill => (
                <span key={skill} className="border border-black/30 dark:border-white/30 rounded-[30px] px-5 py-2 text-sm whitespace-nowrap">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className={`${playfair.className} text-4xl mb-6`}>Videographer skills</h3>
            <div className="flex flex-wrap gap-3">
              {["Camera tools", "Composition", "Mise-en-scène", "Lighting schemes", "Sound recording", "Perspective", "Studio, interior, action, and object shooting", "Drone pilot"].map(skill => (
                <span key={skill} className="border border-black/30 dark:border-white/30 rounded-[30px] px-5 py-2 text-sm whitespace-nowrap">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
