import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Divisor } from "~/components";

export default component$(() => {
  return (
    <>
      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container-center container-spacing-xl container">
        <h3>
          You can <span class="highlight">count</span>
          <br /> on me
        </h3>
      </div>

      <div class="container-flex container">
        <div>
          <Divisor />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
