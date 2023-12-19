import { Slot, component$ } from "@builder.io/qwik";
import type { ClassList, HTMLAttributes } from "@builder.io/qwik";

type Props = HTMLAttributes<HTMLElement>;

const Main = component$<Props>((props) => (
  <main
    {...props}
    class={["mt-20 dark:text-white lg:mt-0", props.class as ClassList]}
  >
    <Slot />
  </main>
));

export default Main;
