import { UserSolid } from "solid-iconify/flowbite"; // Import icon

export default function About() {
  return (
    <section id="about" class="container mx-auto p-8">
      <div class="flex flex-col md:flex-row items-center gap-8">
        {/* Image Placeholder */}
        <div class="w-full md:w-1/3 flex-shrink-0">
          <img
            src="https://placehold.co/400x400/1f2937/a3e635?text=Micael+F." // Placeholder image URL
            alt="Placeholder image for Micael Fernandes"
            class="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        {/* Text Content */}
        <div class="w-full md:w-2/3">
          {/* Heading with Icon */}
          <h2 class="text-3xl font-semibold mb-4 text-lime-500 flex items-center gap-3">
             <UserSolid class="w-7 h-7" /> {/* Icon */}
             About Me
          </h2>
          <p class="text-gray-300 leading-relaxed">
            Highly motivated Mid-level Front-end Developer with 5+ years of experience specializing in building sophisticated, high-performance web applications using modern frameworks like SvelteKit, Next.js, and SolidJS. 🚀 Proven ability to translate complex requirements into intuitive and responsive user interfaces, leveraging TypeScript, SSR, and advanced front-end techniques. Possesses strong full-stack understanding (Go, Node.js/NestJS) and cloud deployment experience (AWS, Docker, CI/CD), enabling effective collaboration and robust end-to-end solutions. Passionate about clean code, innovative technologies, and delivering exceptional user experiences within collaborative team environments. ✨
          </p>
        </div>
      </div>
    </section>
  );
}