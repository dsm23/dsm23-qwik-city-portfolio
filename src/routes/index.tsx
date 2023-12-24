import { component$, useComputed$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Divisor } from "~/components";
import { Interests } from "~/components/sections";
import { getHomePageQuery } from "~/utils/api";

export const useHomeQuery = routeLoader$(async () => {
  // This code runs only on the server, after every navigation
  return await getHomePageQuery();
});

export default component$(() => {
  const signal = useHomeQuery();

  const interests = useComputed$(() => signal.value.interests);

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
        <Interests interests={interests.value} />
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
