import { component$ } from "@builder.io/qwik";
import type { SVGProps } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import type { ClassNameValue } from "tailwind-merge";

interface Props extends Omit<SVGProps<SVGSVGElement>, "class"> {
  class?: ClassNameValue;
}

const ArrowDownTray = component$<Props>((props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    class={twMerge(["h-6 w-6", props.class])}
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    />
  </svg>
));

export default ArrowDownTray;
