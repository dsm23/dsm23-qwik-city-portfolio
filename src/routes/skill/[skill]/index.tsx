import { component$, useComputed$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import { EmptyStar, FilledStar, Main, StyledGoBack } from "~/components";
import { getSkillBySlug } from "~/utils/api";
import contentfulOptions from "~/utils/content-options";
import { documentToQwikComponents } from "~/utils/rich-text-qwik-renderer";

export const useSkill = routeLoader$(async (requestEvent) => {
  // This code runs only on the server, after every navigation
  return await getSkillBySlug(requestEvent.params.skill);
});

export default component$(() => {
  const loc = useLocation();

  const signal = useSkill();

  const content = useComputed$(() => signal.value.content);
  const rating = useComputed$(() => signal.value.rating);

  return (
    <Main class="w-full px-6 py-8">
      <StyledGoBack class="mb-4" href="/#skills" />

      <h1 class="text-4xl text-sky-700">{loc.params.skill}</h1>
      <div class="mb-4">
        {documentToQwikComponents(content.value?.json, contentfulOptions)}
      </div>

      <div class="flex">
        <h2 class="tracking-widest text-sky-600">PROFICIENCY:</h2>

        {Array.from(
          { length: rating.value ?? 0 },
          (_, i) => `${loc.params.skill}-${i}`,
        ).map((val) => (
          <FilledStar key={`filled-${val}`} />
        ))}

        {Array.from(
          { length: 5 - (rating.value ?? 0) },
          (_, i) => `${loc.params.skill}-${i}`,
        ).map((val) => (
          <EmptyStar key={`empty-${val}`} />
        ))}
      </div>
    </Main>
  );
});
