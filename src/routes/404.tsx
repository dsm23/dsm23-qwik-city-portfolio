import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { NoContent } from "~/components/svgs";

export const head: DocumentHead = {
  title: `Not Found`,
};

const NotFound = component$(() => (
  <main class="container mx-auto p-4 text-center text-gray-700">
    <h1 class="max-6-xs my-16 text-6xl font-thin uppercase text-sky-700">
      Page Not Found
    </h1>
    <p class="mt-8">
      Visit{" "}
      <a
        href="https://solidjs.com"
        target="_blank"
        class="text-sky-600 hover:underline"
      >
        solidjs.com
      </a>{" "}
      to learn how to build Solid apps.
    </p>
    <p class="my-4">
      <Link href="/" class="text-sky-600 hover:underline">
        Home
      </Link>
      {" - "}
      <Link href="/about" class="text-sky-600 hover:underline">
        About Page
      </Link>
    </p>

    <NoContent class="mx-auto w-64" />
  </main>
));

export default NotFound;
