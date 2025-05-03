import { useLocation } from "@solidjs/router";
import { createSignal, onMount, onCleanup } from "solid-js";
// Import Flowbite icons
import { UserSolid, FolderSolid, WrenchScrewdriverSolid, EnvelopeSolid } from "solid-iconify/flowbite";

export default function Nav() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = createSignal(false); // Signal to track scroll state

  // Function to handle scroll events
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10); // Set true if scrolled more than 10px
  };

  // Add scroll listener when component mounts
  onMount(() => {
    window.addEventListener("scroll", handleScroll);
    // Initial check in case the page loads scrolled
    handleScroll();
  });

  // Remove scroll listener when component unmounts
  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  const active = (path: string) =>
    path == location.hash ? "border-lime-500" : "border-transparent hover:border-lime-500";

  // Conditionally set background classes based on scroll state
  const navClasses = () =>
    `sticky top-0 z-50 transition-colors duration-300 ${
      isScrolled()
        ? 'bg-gray-900/80 backdrop-blur-lg border-b border-lime-900/50' // Scrolled state: semi-transparent, blurred, subtle lime border
        : 'bg-gray-900' // Top state: solid dark background
    }`;

  return (
    <nav class={navClasses()}> {/* Apply dynamic classes */}
      {/* Center the ul content and add icons */}
      <ul class="container flex items-center justify-center p-3 text-gray-100"> {/* Added justify-center */}
        {/* Updated Nav Links with Icons */}
        <li class={`border-b-2 ${active("#about")} mx-1.5 sm:mx-6`}>
          <a href="/#about" class="flex items-center gap-2"> {/* Flex container for icon + text */}
            <UserSolid class="w-4 h-4" /> {/* Icon */}
            About Me
          </a>
        </li>
        <li class={`border-b-2 ${active("#projects")} mx-1.5 sm:mx-6`}>
          <a href="/#projects" class="flex items-center gap-2">
            <FolderSolid class="w-4 h-4" />
            Projects
          </a>
        </li>
        <li class={`border-b-2 ${active("#skills")} mx-1.5 sm:mx-6`}>
          <a href="/#skills" class="flex items-center gap-2">
            <WrenchScrewdriverSolid class="w-4 h-4" />
            Skills
          </a>
        </li>
        <li class={`border-b-2 ${active("#contact")} mx-1.5 sm:mx-6`}>
          <a href="/#contact" class="flex items-center gap-2">
            <EnvelopeSolid class="w-4 h-4" />
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
