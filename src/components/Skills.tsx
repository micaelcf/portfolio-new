import { For } from "solid-js";
// Import icon from solid-icons/cg
import { CgCodeSlash } from "solid-icons/cg";

const skillsData = {
  "Front-End": [
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Svelte/SvelteKit",
    "SolidJS",
    "Next.js",
    "React",
    "SSR",
    "Responsive Design",
    "UI/UX Principles",
    "Web Performance Optimization",
    "Accessibility (a11y)",
  ],
  "Back-End": [
    "Go (Golang)",
    "Node.js",
    "NestJS",
    "RESTful APIs",
    "Microservices",
  ],
  Databases: ["SQL (MySQL, PostgreSQL)", "NoSQL"],
  "Cloud & DevOps": [
    "AWS",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Git",
    "GitHub",
  ],
  Methodologies: ["Agile", "Scrum", "Kanban"],
  Other: ["Python (for ML/Scripting)", "Linux", "Shell Scripting"],
};

export default function Skills() {
  return (
    // Add scroll-mt-20 here
    <section id="skills" class="container mx-auto p-8 scroll-mt-20">
      {/* Heading with Icon */}
      <h2 class="text-3xl font-semibold mb-6 text-lime-500 text-center flex items-center justify-center gap-3">
        <CgCodeSlash size={28} /> {/* Replaced Icon */}
        Skills
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Use For to iterate over skill categories */}
        <For each={Object.entries(skillsData)}>
          {([category, skillsList]) => (
            <div class="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
              {/* Key is implicitly handled by For, but good practice on element */}
              <h3 class="text-xl font-semibold text-lime-400 mb-3">
                {category}
              </h3>
              <ul class="list-none space-y-1">
                {/* Use For to iterate over skills in the list */}
                <For each={skillsList}>
                  {(skill) => (
                    <li class="text-gray-300">
                      {/* Key is implicitly handled by For */}
                      <span class="text-lime-500 mr-2">✓</span>
                      {skill}
                    </li>
                  )}
                </For>
              </ul>
            </div>
          )}
        </For>
      </div>
    </section>
  );
}
