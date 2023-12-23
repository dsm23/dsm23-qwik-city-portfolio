import { component$ } from "@builder.io/qwik";
import type { SVGProps } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import type { ClassNameValue } from "tailwind-merge";

interface Props extends Omit<SVGProps<SVGSVGElement>, "class"> {
  class?: ClassNameValue;
}

const EmptyStar = component$<Props>((props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    class={twMerge(["h-6 w-6 text-yellow-500", props.class])}
  >
    <path
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke="currentColor"
      d="M12 2l3 7h7l-5 6 2 7-7-4-7 4 2-7-5-6h7l3-7z"
    />
  </svg>
));

export default EmptyStar;
