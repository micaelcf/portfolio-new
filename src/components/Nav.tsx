import { useLocation } from "@solidjs/router";
import { createSignal, onMount, onCleanup } from "solid-js";
import { isServer } from "solid-js/web"; // Import isServer
// Import icons from solid-icons/cg
import { CgUser, CgList, CgCodeSlash, CgMail } from "solid-icons/cg";

export default function Nav() {
  const location = useLocation();
  // Initialize isScrolled to false. It will be updated client-side.
  const [isScrolled, setIsScrolled] = createSignal(false);

  // Function to handle scroll events - only run logic if not on server
  const handleScroll = () => {
    if (!isServer) {
      // Check if running on the client
      setIsScrolled(window.scrollY > 30); // Set true if scrolled more than 10px
    }
  };

  // Add/Remove scroll listener only on the client
  if (!isServer) {
    onMount(() => {
      window.addEventListener("scroll", handleScroll);
      // Initial check in case the page loads scrolled
      handleScroll();
    });

    onCleanup(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  }

  const active = (path: string) =>
    // Check location.hash only if not on server, otherwise default to false
    !isServer && path == location.hash
      ? "border-lime-500"
      : "border-transparent hover:border-lime-500";

  // Conditionally set background classes based on scroll state
  const navClasses = () =>
    `sticky top-0 z-50 transition-colors duration-300 ${
      isScrolled()
        ? "bg-gray-900/60 backdrop-blur-lg border-b border-lime-900/50" // Scrolled state
        : "bg-gray-900" // Top state
    }`;

  return (
    <nav class={navClasses()}>
      {" "}
      {/* Apply dynamic classes */}
      {/* Center the ul content and add icons */}
      <ul class="container flex items-center justify-center p-3 transition-all text-lg text-gray-100">
        {/* Added justify-center */}
        {/* Updated Nav Links with Icons */}
        <li class={`border-b-2 ${active("#about")} mx-1.5 sm:mx-6`}>
          <a href="/#about" class="flex items-center gap-2">
            {/* Flex container for icon + text */}
            <CgUser size={24} /> {/* Replaced Icon */}
            About
          </a>
        </li>
        <li class={`border-b-2 ${active("#projects")} mx-1.5 sm:mx-6`}>
          <a href="/#projects" class="flex items-center gap-2">
            <CgList size={24} /> {/* Replaced Icon */}
            Projects
          </a>
        </li>
        <li class={`border-b-2 ${active("#skills")} mx-1.5 sm:mx-6`}>
          <a href="/#skills" class="flex items-center gap-2">
            <CgCodeSlash size={24} /> {/* Replaced Icon */}
            Skills
          </a>
        </li>
        <li class={`border-b-2 ${active("#contact")} mx-1.5 sm:mx-6`}>
          <a href="/#contact" class="flex items-center gap-2">
            <CgMail size={24} /> {/* Replaced Icon */}
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
