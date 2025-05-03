
import About from "~/components/About"; // Import new component
import Contact from "~/components/Contact"; // Import new component
import Projects from "~/components/Projects";
import Skills from "~/components/Skills"; // Import new component

export default function Home() {
  return (
    <main class="bg-gray-900 text-gray-100"> {/* Apply base background/text color here */}

      {/* Heading Section */}
      <section class="text-center py-16 bg-gradient-to-b from-gray-800 to-gray-900"> {/* Slightly different bg for heading */}
        <h1 class="text-5xl font-bold mb-2">Micael Fernandes</h1>
        <p class="text-2xl text-lime-500 font-light">Software Developer</p>
      </section>

      {/* Use Components for Sections */}
      <About />
      <Projects />
      <Skills />
      <Contact />

    </main>
  );
}
