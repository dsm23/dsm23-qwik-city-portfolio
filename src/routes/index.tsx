import {
  component$,
  Resource,
  useComputed$,
  useResource$,
} from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Divisor, Home, Interests, Main, Skills } from "~/components";
import type { Maybe, Skill } from "~/generated/generated";
import { getHomePageQuery } from "~/utils/api";

export const useHomeQuery = routeLoader$(async () => {
  // This code runs only on the server, after every navigation
  return await getHomePageQuery();
});

const fetchSvg = async (url: string) => {
  const res = await fetch(url, {
    headers: new Headers({
      Accept: "image/svg+xml",
    }),
  });

  return await res.text();
};

export default component$(() => {
  const signal = useHomeQuery();

  const author = useComputed$(() => signal.value.person);
  const interests = useComputed$(() => signal.value.interests);

  const skills = useResource$(async () => {
    const promises =
      signal.value.skills?.map(
        async (skill) =>
          ({
            ...skill,
            svg: await fetchSvg(skill?.icon?.url as string),
          }) as Maybe<Skill & { svg: string }>,
      ) ?? [];

    return await Promise.all(promises);
  });

  return (
    <Main class="w-full px-6 py-8">
      <h1 class="sr-only">David Murdoch{"'"}s Portfolio</h1>

      <Home author={author.value} />

      <Divisor />
      <Resource
        value={skills}
        onPending={() => <div>Loading...</div>}
        onResolved={(data) => <Skills skills={data} />}
      />
      <Divisor />
      <Interests interests={interests.value} />
    </Main>
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
