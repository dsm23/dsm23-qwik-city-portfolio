import { component$, type SVGProps } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import type { ClassNameValue } from "tailwind-merge";

import styles from "./styles.module.css";

interface Props extends Omit<SVGProps<SVGSVGElement>, "class"> {
  class?: ClassNameValue;
}

const ThreeDots = component$<Props>((props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    class={twMerge(["h-6 w-6", props.class])}
  >
    <circle class={styles.dots} fill="currentColor" cx="4" cy="12" r="3" />
    <circle
      class={twMerge(styles.dots, styles.dotTwo)}
      fill="currentColor"
      cx="12"
      cy="12"
      r="3"
    />
    <circle
      class={twMerge(styles.dots, styles.dotThree)}
      fill="currentColor"
      cx="20"
      cy="12"
      r="3"
    />
  </svg>
));

export default ThreeDots;
