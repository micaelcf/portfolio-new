import About from "~/components/About"; // Import new component
import Contact from "~/components/Contact"; // Import new component
import HeroSection from "~/components/HeroSection";
import Projects from "~/components/Projects";
import Skills from "~/components/Skills"; // Import new component

export default function Home() {
  return (
    <main class="bg-gray-900 text-gray-100">
      {/* Apply base background/text color here */}
      {/* Heading Section */}
      {/* Use Components for Sections */}
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
