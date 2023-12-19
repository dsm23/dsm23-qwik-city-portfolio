import { component$ } from "@builder.io/qwik";

import styles from "./styles.module.css";

type Props = {
  isMajor: boolean;
  radial: number;
};

const Marker = component$<Props>((props) => (
  <line
    class={props.isMajor ? styles.major : styles.minor}
    y1={props.isMajor ? 35 : 42}
    y2="45"
    transform={`rotate(${
      props.isMajor ? 30 * props.radial : 6 * props.radial
    })`}
  />
));

export default Marker;
