import { component$ } from "@builder.io/qwik";
import type { SVGProps } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";
import type { ClassNameValue } from "tailwind-merge";

interface Props extends Omit<SVGProps<SVGSVGElement>, "class"> {
  class?: ClassNameValue;
}

const CodeSandbox = component$<Props>((props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    class={twMerge(["h-6 w-6", props.class])}
  >
    <path d="m1.5 6 10.455-6L22.41 6l.09 11.95L11.955 24 1.5 18zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272zm16.739 0-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM4.634 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L4.633 6.6z" />
  </svg>
));

export default CodeSandbox;
