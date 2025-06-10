import {
  Component,
  createEffect,
  createSignal,
  For,
  JSXElement,
} from "solid-js";
import { OrbitingCircles } from "./mystic-ui/OrbitingCircles";
import {
  TbBrandGithub,
  TbBrandHtml5,
  TbBrandSolidjs,
  TbBrandSvelte,
  TbBrandTypescript,
} from "solid-icons/tb";
import { randN } from "~/lib/utils";
import { isServer } from "solid-js/web";

const HeroSection: Component = (props) => {
  const baseRadius = 32;
  const brands: Array<JSXElement> = [
    <TbBrandHtml5 size="28" />,
    <TbBrandSvelte size="28" />,
    <TbBrandSolidjs size="28" />,
    <TbBrandTypescript size="28" />,
  ];
  const [imgW, setImgW] = createSignal(0);
  let imgEl: HTMLImageElement | undefined;

  createEffect(() => {
    if (!isServer && imgEl) {
      window.addEventListener("resize", () => {
        setImgW(imgEl.getBoundingClientRect().width);
      });
      setImgW(imgEl.getBoundingClientRect().width);
    }
  });
  return (
    <section
      class="flex flex-col items-center justify-center h-[calc(100svh-54px)] gap-6
    bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div class="relative w-full flex items-center justify-center min-h-[400px] h-[60%] overflow-hidden">
        <img
          ref={imgEl}
          src="perfil.webp"
          alt="Micael Fernandes"
          class="rounded-full bg-lime-500 shadow-lg w-44 md:w-64 h-44 md:h-64 object-cover"
        />
        <For each={brands}>
          {(brand, i) => (
            <OrbitingCircles
              reverse={i() % 2 == 0}
              radius={baseRadius * i() + 1 + imgW() / 2}
              delay={i() * randN({ min: 10, max: 15 })}
            >
              {brand}
            </OrbitingCircles>
          )}
        </For>
        {/* <OrbitingCircles radius={imgW() / 2}>
          <TbBrandGithub size="28" />
        </OrbitingCircles>
        <OrbitingCircles radius={240} delay={10}>
          <TbBrandSvelte size="28" />
        </OrbitingCircles>
        <OrbitingCircles reverse radius={160}>
          <TbBrandSolidjs size="28" />
        </OrbitingCircles>
        <OrbitingCircles reverse radius={160} delay={10}>
          <TbBrandTypescript size="28" />
        </OrbitingCircles> */}
      </div>

      <div class="text-center">
        <h1 class="text-3xl md:text-5xl font-bold mb-2">Micael Fernandes</h1>
        <p class="text-xl md:text-2xl text-lime-500 font-light">
          Software Developer
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
