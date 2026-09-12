import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#fafafa] dark:bg-[#121212] min-h-screen text-[#1a1a1a] dark:text-[#f4f4f5] px-4 sm:px-8 py-6 sm:py-10 max-w-[1400px] mx-auto transition-colors duration-300">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

