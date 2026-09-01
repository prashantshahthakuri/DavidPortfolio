import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#fafafa] min-h-screen text-[#1a1a1a] px-8 py-10 max-w-[1400px] mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center mb-24">
        <div className="text-xl tracking-[0.2em] font-medium">David Shahi</div>
        <nav className="flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:opacity-70 transition-opacity">About me</a>
          <a href="#projects" className="hover:opacity-70 transition-opacity">Projects</a>
          <a href="#skills" className="hover:opacity-70 transition-opacity">Skills</a>
        </nav>
      </header>

      <Hero />
      <Projects />
      <Skills />

      <Footer />
    </div>
  );
}
