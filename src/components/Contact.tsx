// Import icons from solid-icons
import { CgMail } from "solid-icons/cg";
import { SiLinkedin, SiGithub } from "solid-icons/si"; // Import brand icons from 'si' pack

export default function Contact() {
  const email = "micaelf81@gmail.com";
  const linkedin = "https://linkedin.com/in/micael-fernandes21";
  const github = "https://github.com/micaelcf";

  return (
    // Add scroll-mt-20 here
    <section
      id="contact"
      class="container mx-auto p-8 text-center scroll-mt-20"
    >
      {/* Heading with Icon */}
      <h2 class="text-3xl font-semibold mb-6 text-lime-500 flex items-center justify-center gap-3">
        <CgMail size={28} /> {/* Replaced Icon */}
        Contact Me
      </h2>
      <p class="text-gray-300 mb-6">
        Feel free to reach out! You can contact me via email or connect on
        LinkedIn / GitHub.
      </p>
      <div class="flex justify-center items-center gap-6 flex-wrap">
        <a
          href={`mailto:${email}`}
          class="inline-flex items-center gap-2 bg-lime-600 hover:bg-lime-700 text-gray-900 font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          <CgMail size={20} /> {/* Replaced Icon */}
          Email Me
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-lime-300 font-medium py-2 px-4 rounded transition-colors duration-300"
        >
          <SiLinkedin size={20} /> {/* Replaced Icon */}
          LinkedIn
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-lime-300 font-medium py-2 px-4 rounded transition-colors duration-300"
        >
          <SiGithub size={20} /> {/* Replaced Icon */}
          GitHub
        </a>
      </div>
      {/* Basic Form Placeholder - Functionality needs backend/service */}
      <div class="mt-12 max-w-xl mx-auto text-left">
        <h3 class="text-2xl font-semibold mb-4 text-lime-500 text-center">
          Or Send a Message
        </h3>
        <form class="space-y-4">
          <div>
            <label
              for="name"
              class="block text-sm font-medium text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              for="email_form"
              class="block text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email_form"
              name="email"
              required
              class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
            />
          </div>
          <div>
            <label
              for="message"
              class="block text-sm font-medium text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              class="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent"
            ></textarea>
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="bg-lime-600 hover:bg-lime-700 text-gray-900 font-bold py-2 px-6 rounded transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
        <p class="text-xs text-gray-500 mt-4 text-center">
          Note: Form submission requires backend setup.
        </p>
      </div>
    </section>
  );
}
