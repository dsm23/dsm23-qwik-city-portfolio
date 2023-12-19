import {
  component$,
  useComputed$,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import Marker from "./marker";

import styles from "./styles.module.css";

const Clock = component$(() => {
  const time = useSignal(new Date());

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const interval = setInterval(() => {
      time.value = new Date();
    }, 1000);
    cleanup(() => clearInterval(interval));
  });

  const hours = useComputed$(() => time.value.getHours());
  const minutes = useComputed$(() => time.value.getMinutes());
  const seconds = useComputed$(() => time.value.getSeconds());

  return (
    <svg viewBox="-50 -50 100 100" class={styles.svg}>
      <circle class={styles.clockFace} r="48" />

      {Array.from<unknown, [boolean, number]>({ length: 60 }, (_, i) => [
        i % 5 === 0,
        i,
      ]).map(([isMajor, radial]) => (
        <Marker
          isMajor={isMajor}
          radial={radial}
          key={`markers-${isMajor}-${radial}`}
        />
      ))}

      <line
        id="hour"
        class={styles.hour}
        y1="2"
        y2="-20"
        transform={`rotate(${30 * hours.value + minutes.value / 2})`}
      />

      <line
        id="minute"
        class={styles.minute}
        y1="4"
        y2="-30"
        transform={`rotate(${6 * minutes.value + seconds.value / 10})`}
      />

      <g id="second" transform={`rotate(${6 * seconds.value})`}>
        <line class="text-red-700" y1="10" y2="-38" stroke="currentColor" />
        <line
          class="text-red-700"
          y1="10"
          y2="2"
          stroke="currentColor"
          stroke-width="3"
        />
      </g>
    </svg>
  );
});

export default Clock;
