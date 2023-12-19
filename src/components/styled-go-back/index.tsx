import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { LinkProps } from "@builder.io/qwik-city";
import { GoBack } from "../svgs";

import styles from "./styles.module.css";

const StyledGoBack = component$<LinkProps>((props) => (
  <Link {...props} class={[styles.anchor, "w-min", props.class]}>
    <GoBack class={[styles.svg, "h-8 w-8"]} aria-label="Go Back" />
  </Link>
));

export default StyledGoBack;
