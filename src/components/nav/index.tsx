import { Slot, component$, useId, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Hamburger from "~/components/hamburger";
import Transition from "~/components/transition";
// import useClickOutside from "~/hooks/useClickOutside";
import type { getProfilePic } from "~/utils/api";

import styles from "./styles.module.css";

interface Props {
  profilePic?: Awaited<ReturnType<typeof getProfilePic>>;
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const Nav = component$<Props>((props) => {
  const containerRef = useSignal<HTMLDivElement>();

  const id = useId();

  // useClickOutside(
  //   containerRef,
  //   $(() => {
  //     props.onClose();
  //   }),
  // );

  return (
    <div class={styles.container} ref={containerRef}>
      <Link
        href="/#home"
        class="inline-flex items-center border-2 border-transparent shadow-sm outline-none focus:border-yellow-500 lg:mb-4 lg:mr-0 lg:rounded-full lg:border-8 lg:border-sky-700"
      >
        <picture>
          <source srcset={props.profilePic?.image.srcset as string} />
          <img
            src={props.profilePic?.image.src as string}
            height={192}
            width={192}
            class="aspect-square w-10 rounded-full object-cover lg:w-48"
            alt={props.profilePic?.image.description as string}
          />
        </picture>

        <span class="ml-4 hidden text-xl font-bold tracking-wide text-white md:inline lg:hidden print:inline">
          David Murdoch
        </span>
        <span class="ml-4 inline text-xl font-bold tracking-wide text-white md:hidden print:hidden">
          DSM
        </span>
      </Link>
      <div class={styles.icon}>
        <button
          aria-label="Open the navigation menu"
          onClick$={props.onToggle}
          class="flex items-center justify-center rounded-md p-1 text-gray-400 hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none"
          aria-controls={id}
          aria-expanded={props.open}
        >
          <Hamburger class="h-6 w-6" open={props.open} />
        </button>
      </div>

      <nav aria-label="Primary" class={styles.sections}>
        <Transition
          show={props.open}
          // eslint-disable-next-line qwik/no-react-props
          className="grid md:hidden"
          enter="transition-[grid-template-rows] motion-reduce:transition-none duration-150"
          enterFrom="grid-rows-[0fr]"
          enterTo="grid-rows-[1fr]"
          leave="transition-[grid-template-rows] motion-reduce:transition-none duration-150"
          leaveFrom="grid-rows-[1fr]"
          leaveTo="grid-rows-[0fr]"
        >
          <div id={id} class="overflow-hidden">
            <div class="mt-2">
              <Slot />
            </div>
          </div>
        </Transition>
        <div class="hidden md:block">
          <Slot name="desktop" />
        </div>
      </nav>
    </div>
  );
});

export default Nav;
