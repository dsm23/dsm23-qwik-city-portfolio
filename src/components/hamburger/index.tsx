import { component$ } from "@builder.io/qwik";
import type { SVGProps } from "@builder.io/qwik";

import styles from "./styles.module.css";

interface Props extends SVGProps<SVGSVGElement> {
  open: boolean;
}

const Hamburger = component$<Props>((props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class={[styles.hamburger, { [styles.open]: props.open }, props.class]}
    viewBox="0 0 100 100"
  >
    <rect
      class={[styles.line, styles.top]}
      width="80"
      height="10"
      x="10"
      y="20"
      rx="5"
    />
    <rect
      class={[styles.line, styles.middle]}
      width="80"
      height="10"
      x="10"
      y="45"
      rx="5"
    />
    <rect
      class={[styles.line, styles.bottom]}
      width="80"
      height="10"
      x="10"
      y="70"
      rx="5"
    />
  </svg>
));

export default Hamburger;
