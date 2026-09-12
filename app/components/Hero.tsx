import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Hero() {
  return (
    <main>
      <h1 className={`${playfair.className} text-[2.5rem] md:text-[4rem] lg:text-[5rem] leading-[0.9] text-center tracking-tight mb-20 font-normal`}>
        CONTENT CREATOR
        <br />
        &amp;
        <br />SOCIAL MEDIA EXECUTIVE
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-start">
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-zinc-200">
          <Image
            src="/hero.jpeg"
            alt="Videographer working"
            fill
            className="object-cover object-[center_10%]"
            priority
          />
        </div>
        <div className="text-[1.1rem] leading-relaxed pr-8">
          <p>
            I’m David Shahi Thakuri, a Dubai-based Content Creator and Social Media Management professional, currently working as a Lead Content Creator & Social Media Manager at Al Rais Holding.{" "}With hands-on experience in content creation, social media strategy, photography, videography, video editing, and digital marketing,Currently working across leading hospitality and lifestyle brands under Al Rais Holding, I manage content from concept development and shooting to editing, publishing, and social media execution.
          </p>
        </div>
      </div>
    </main>
  );
}
