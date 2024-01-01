import { Slot, component$ } from "@builder.io/qwik";
import type { HTMLAttributes } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import type { ClassNameValue } from "tailwind-merge";

interface Props extends Omit<HTMLAttributes<HTMLHeadingElement>, "class"> {
  class?: ClassNameValue;
}

const SectionHeader = component$<Props>((props) => (
  <h2
    {...props}
    class={twMerge("text-6xl font-medium text-gray-900", props.class)}
  >
    <Slot />
  </h2>
));

export default SectionHeader;
