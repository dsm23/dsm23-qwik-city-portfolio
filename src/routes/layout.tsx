import { $, component$, Slot, useSignal, useStyles$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import Nav from "~/components/nav";
import { getProfilePic } from "~/utils/api";

import styles from "./styles.css?inline";
import { twMerge } from "tailwind-merge";

import fooStyles from "./styles.module.css";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export const useProfilePic = routeLoader$(async () => {
  // This code runs only on the server, after every navigation
  return await getProfilePic();
});

const items = [
  "home",
  "experience",
  "education",
  "skills",
  "projects",
  "interests",
  "download",
];

export default component$(() => {
  useStyles$(styles);

  const profilePic = useProfilePic();

  const open = useSignal(false);

  const handleClose = $(() => {
    open.value = false;
  });

  const handleToggle = $(() => {
    open.value = !open.value;
  });

  const navItems = items.map((label) => (
    <button
      key={`nav-label-${label}`}
      onClick$={() => {
        return handleClose();
      }}
      class={twMerge(
        fooStyles.navLink,
        "group flex w-full items-center justify-start rounded py-2 uppercase hover:bg-gray-900 hover:text-white focus:outline-none lg:justify-center",
        // { "bg-blue-700 text-white": label === activeId() },
      )}
    >
      <span
        class={twMerge(
          fooStyles.navSpan,
          "px-px py-px group-focus:bg-yellow-500 group-focus:text-gray-900 lg:px-0.5",
        )}
      >
        {label}
      </span>
    </button>
  ));

  return (
    <div class="flex w-full flex-col font-sans lg:flex-row">
      <header class="contents">
        <Nav
          open={open.value}
          profilePic={profilePic.value}
          onClose={handleClose}
          onToggle={handleToggle}
        >
          <div class="block w-full text-gray-400 md:ml-auto md:flex md:w-auto md:items-start lg:block lg:h-auto lg:items-center">
            {navItems}
          </div>
          <div
            class="block w-full text-gray-400 md:ml-auto md:flex md:w-auto md:items-start lg:block lg:h-auto lg:items-center"
            q:slot="desktop"
          >
            {navItems}
          </div>
        </Nav>
      </header>
      <Slot />
    </div>
  );
});
