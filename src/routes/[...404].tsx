import { A } from "@solidjs/router";
import { CgDanger, CgHome } from "solid-icons/cg"; // Import some icons

export default function NotFound() {
  return (
    // Update main container styling for dark theme
    <main class="text-center mx-auto text-gray-300 p-8 min-h-screen flex flex-col justify-center items-center bg-gray-900">
      <CgDanger size={64} class="text-lime-500 mb-4" /> {/* Icon */}
      <h1 class="text-6xl text-lime-400 font-thin uppercase my-4">
        404 - Lost Signal
      </h1>
      <p class="mt-4 text-lg max-w-md">
        Oops! Looks like this page took a wrong turn somewhere in the digital
        ether. Maybe it's chasing a rogue semicolon?
      </p>
      <p class="my-8">
        {/* Update link styling */}
        <A
          href="/"
          class="text-lime-500 hover:text-lime-400 hover:underline text-lg inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-md transition-colors"
        >
          <CgHome size={20} /> Go Back Home
        </A>
      </p>
    </main>
  );
}
