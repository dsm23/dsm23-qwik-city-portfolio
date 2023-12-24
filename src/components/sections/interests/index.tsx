import { component$ } from "@builder.io/qwik";
import type { HTMLAttributes } from "@builder.io/qwik";
import Section from "~/components/section";

interface Props extends HTMLAttributes<HTMLElement> {
  interests: any[];
  // TODO: change later
  class?: string;
}

const Interests = component$<Props>(({ interests = [], ...props }) => (
  <Section {...props}>
    <h2 class="text-5xl">Interests</h2>
    <ul class="list-inside list-disc">
      {interests.map(({ interest }) => (
        <li key={`interest-${interest}`} class="ml-4">
          {interest}
        </li>
      ))}
    </ul>
  </Section>
));

export default Interests;
