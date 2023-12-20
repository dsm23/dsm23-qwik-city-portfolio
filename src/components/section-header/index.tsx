import { Slot, component$ } from "@builder.io/qwik";
import type { ClassList, HTMLAttributes } from "@builder.io/qwik";

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  class: ClassList;
}

const SectionHeader = component$<Props>((props) => (
  <h2 {...props} class={["text-6xl font-medium text-gray-900", props.class]}>
    <Slot />
  </h2>
));

export default SectionHeader;
