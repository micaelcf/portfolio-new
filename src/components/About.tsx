import { CgUser } from "solid-icons/cg";

export default function About() {
  return (
    // Add scroll-mt-20 here
    <section id="about" class="container mx-auto p-8 scroll-mt-20">
      <div class="flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div class="w-full md:w-2/3">
          {/* Heading with Icon */}
          <h2 class="text-3xl font-semibold mb-4 text-lime-500 flex items-center gap-3">
            <CgUser class="w-7 h-7" /> {/* Icon */}
            About Me
          </h2>
          <p class="text-gray-300 leading-relaxed">
            Highly motivated Mid-level Front-end Developer with 5+ years of
            experience specializing in building sophisticated, high-performance
            web applications using modern frameworks like SvelteKit, Next.js,
            and SolidJS. 🚀 Proven ability to translate complex requirements
            into intuitive and responsive user interfaces, leveraging
            TypeScript, SSR, and advanced front-end techniques. Possesses strong
            full-stack understanding (Go, Node.js/NestJS) and cloud deployment
            experience (AWS, Docker, CI/CD), enabling effective collaboration
            and robust end-to-end solutions. Passionate about clean code,
            innovative technologies, and delivering exceptional user experiences
            within collaborative team environments. ✨
          </p>
        </div>
      </div>
    </section>
  );
}
