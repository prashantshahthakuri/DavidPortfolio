import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Hero() {
  return (
    <main>
      <h1 className={`${playfair.className} text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[0.9] text-center tracking-tight mb-20`}>
        VIDEOGRAPHER
        <br />
        &amp;VIDEO-EDITOR
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-center">
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-zinc-200">
          <Image
            src="/heroimage.jpeg"
            alt="Videographer working"
            fill
            className="object-cover object-[center_30%]"
            priority
          />
        </div>
        <div className="text-[1.1rem] leading-relaxed pr-8">
          <p>
            My name is David Shahi. I'm from Nepal, but currently I'm based in Dubai. I have experience in creating and editing music, dance, scenery and social media videos (such as Reels and TikTok). I'm eager to work hard to fuel my skills.
          </p>
        </div>
      </div>
    </main>
  );
}
