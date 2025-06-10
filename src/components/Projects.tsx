import { For, Show } from "solid-js";
// Import icon from solid-icons/cg
import { CgBriefcase } from "solid-icons/cg";

// Define a type for project data for better structure (optional but good practice)
type ProjectItem = {
  role: string;
  company: string;
  duration: string;
  description: string;
  tech?: string[]; // Optional tech stack
};

// Project data based on CV experience
const projectData: ProjectItem[] = [
  {
    role: "Mid-level Front-End Developer",
    company: "@Febrafar",
    duration: "April 2024 - Present",
    description:
      "Developed optimized enterprise web apps (Svelte/SvelteKit), enhancing UX & contributing to a 15% user increase. Collaborated in an agile team, focusing on performance & maintainability, reducing build time by 30%.",
    tech: ["SvelteKit", "Svelte", "TypeScript", "Agile"],
  },
  {
    role: "Scientific Researcher / Developer",
    company: "@GEDAE",
    duration: "January 2023 - June 2024",
    description:
      "Developed an AI-powered system with a smartphone interface for photovoltaic nanogrid monitoring. Implemented front-end for data visualization & recommendations from Deep Learning models.",
    tech: ["AI", "Deep Learning", "Frontend Dev"],
  },
  {
    role: "Full Stack Developer",
    company: "@ENCIBRA S.A.",
    duration: "February 2024 - April 2024",
    description:
      "Architected scalable solutions (front-end & back-end). Designed robust APIs using Go, ensuring efficient data flow. Focused on code quality & scalable patterns, reducing cloud costs by ~50%.",
    tech: ["Go", "APIs", "Full Stack", "Cloud Cost Optimization"],
  },
  {
    role: "Full Stack Developer",
    company: "@COTIC PROEG UFPA",
    duration: "November 2023 - February 2024",
    description:
      "Maintained & developed features for the university's PCC system (JS, HTML, CSS, PHP, MySQL). Improved system stability & reduced loading time by 40% using Scrum/Kanban. Gained Docker & CI/CD experience.",
    tech: ["JavaScript", "PHP", "MySQL", "Docker", "CI/CD"],
  },
  // Add other experiences as needed
];

export default function Projects() {
  return (
    // Add scroll-mt-20 here
    <section id="projects" class="container mx-auto p-8 scroll-mt-20">
      {/* Heading with Icon */}
      <h2 class="text-3xl font-semibold mb-6 text-lime-500 text-center flex items-center justify-center gap-3">
        <CgBriefcase size={28} /> {/* Replaced Icon */}
        Experience / Projects
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Use For to iterate over projectData */}
        <For each={projectData}>
          {({ role, company, tech, duration, description }) => (
            <div class="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-lime-500 transition-colors duration-300">
              <h3 class="text-xl font-bold text-lime-400 mb-1">{role}</h3>
              <p class="text-md font-semibold text-gray-300 mb-1">{company}</p>
              <p class="text-sm text-gray-400 mb-3">{duration}</p>
              <p class="text-gray-300 mb-4">{description}</p>
              {/* Use Show for conditional rendering and For for the tech list */}
              <Show when={tech && tech.length > 0}>
                <div class="flex flex-wrap gap-2">
                  <For each={tech}>
                    {(tech) => (
                      <span class="bg-gray-700 text-lime-300 text-xs font-medium px-2.5 py-0.5 rounded">
                        {tech}
                      </span>
                    )}
                  </For>
                </div>
              </Show>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}
