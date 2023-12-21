import { Slot, component$ } from "@builder.io/qwik";
import type { ClassList, HTMLAttributes } from "@builder.io/qwik";

interface Props extends HTMLAttributes<HTMLElement> {
  class: ClassList;
}

const Main = component$<Props>((props) => (
  <main {...props} class={["mt-20 lg:mt-0 dark:text-white", props.class]}>
    <Slot />
  </main>
));

export default Main;
