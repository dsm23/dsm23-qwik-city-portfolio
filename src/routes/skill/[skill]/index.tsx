import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Main, StyledGoBack } from "~/components";

export default component$(() => {
  const loc = useLocation();
  return (
    <Main class="w-full px-6 py-8">
      <StyledGoBack class="mb-4" href="/#skills" />

      <h1 class="text-4xl text-sky-700">{loc.params.skill}</h1>
      <div class="mb-4">
        {/* {documentToSolidComponents(content()?.json, contentfulOptions)} */}
        {loc.params.skill}
      </div>

      <div class="flex">
        <h2 class="tracking-widest text-sky-600">PROFICIENCY:</h2>

        {/* <For each={Array.from({ length: rating() })}>
          {() => <FilledStar class="h-6 w-6" />}
        </For>

        <For each={Array.from({ length: 5 - rating() })}>
          {() => <EmptyStar class="h-6 w-6" />}
        </For> */}
      </div>
    </Main>
  );
});
