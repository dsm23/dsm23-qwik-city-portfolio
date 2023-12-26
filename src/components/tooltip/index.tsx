import { Slot, component$ } from "@builder.io/qwik";
import type { ClassList, HTMLAttributes } from "@builder.io/qwik";

import styles from "./styles.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  class?: ClassList;
}

const Tooltip = component$<Props>((props) => (
  <div
    data-tip-position="top"
    {...props}
    inert={true}
    role="tooltip"
    class={[styles.tooltip, props.class]}
  >
    <Slot />
  </div>
));

export default Tooltip;
