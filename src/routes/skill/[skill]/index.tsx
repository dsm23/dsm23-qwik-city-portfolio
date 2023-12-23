import { component$, useComputed$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import { EmptyStar, FilledStar, Main, StyledGoBack } from "~/components";
import { getSkillBySlug } from "~/utils/api";

export const useSkill = routeLoader$(async (requestEvent) => {
  // This code runs only on the server, after every navigation
  return await getSkillBySlug(requestEvent.params.skill);
});

export default component$(() => {
  const loc = useLocation();

  const signal = useSkill();

  const rating = useComputed$<number>(() => signal.value.rating);

  return (
    <Main class="w-full px-6 py-8">
      <StyledGoBack class="mb-4" href="/#skills" />

      <h1 class="text-4xl text-sky-700">{loc.params.skill}</h1>
      <div class="mb-4">
        {/* {documentToSolidComponents(content()?.json, contentfulOptions)} */}
        {loc.params.skill}
        <pre>{JSON.stringify(signal.value, null, 2)}</pre>
      </div>

      <div class="flex">
        <h2 class="tracking-widest text-sky-600">PROFICIENCY:</h2>

        {Array.from(
          { length: rating.value },
          (_, i) => `${loc.params.skill}-${i}`,
        ).map((val) => (
          <FilledStar key={val} />
        ))}

        {Array.from(
          { length: 5 - rating.value },
          (_, i) => `${loc.params.skill}-${i}`,
        ).map((val) => (
          <EmptyStar key={val} />
        ))}
      </div>
    </Main>
  );
});
