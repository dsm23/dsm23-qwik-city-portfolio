import { component$ } from "@builder.io/qwik";
import type { SVGProps } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import type { ClassNameValue } from "tailwind-merge";

interface Props extends Omit<SVGProps<SVGSVGElement>, "class"> {
  class?: ClassNameValue;
}
const Nuxt = component$<Props>((props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    class={twMerge(["h-6 w-6", props.class])}
  >
    <path
      fill="currentColor"
      d="M13.464 19.83h8.922c.283 0 .562-.073.807-.21a1.59 1.59 0 0 0 .591-.574 1.53 1.53 0 0 0 .216-.783 1.529 1.529 0 0 0-.217-.782L17.792 7.414a1.59 1.59 0 0 0-.591-.573 1.652 1.652 0 0 0-.807-.21c-.283 0-.562.073-.807.21a1.59 1.59 0 0 0-.59.573L13.463 9.99 10.47 4.953a1.591 1.591 0 0 0-.591-.573 1.653 1.653 0 0 0-.807-.21c-.284 0-.562.073-.807.21a1.591 1.591 0 0 0-.591.573L.216 17.481a1.53 1.53 0 0 0-.217.782c0 .275.074.545.216.783a1.59 1.59 0 0 0 .59.574c.246.137.525.21.808.21h5.6c2.22 0 3.856-.946 4.982-2.79l2.733-4.593 1.464-2.457 4.395 7.382h-5.859Zm-6.341-2.46-3.908-.002 5.858-9.842 2.923 4.921-1.957 3.29c-.748 1.196-1.597 1.632-2.916 1.632z"
    />
  </svg>
));

export default Nuxt;
