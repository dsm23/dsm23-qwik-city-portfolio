import { component$, Slot } from "@builder.io/qwik";
import type { HTMLAttributes } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import type { ClassNameValue } from "tailwind-merge";

import styles from "./styles.module.css";

interface Props extends Omit<HTMLAttributes<HTMLElement>, "class"> {
  class?: ClassNameValue;
}

const Section = component$<Props>((props) => (
  <section {...props} class={twMerge(styles.section, props.class)}>
    <div class={styles.centering}>
      <div class="min-w-full flex-grow-0 px-4 py-8 lg:flex-grow lg:px-32 lg:py-64">
        <Slot />
      </div>
    </div>
  </section>
));

export default Section;
