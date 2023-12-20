import { component$ } from "@builder.io/qwik";
import type { SVGProps } from "@builder.io/qwik";

type Props = SVGProps<SVGSVGElement>;

const FilledStar = component$<Props>((props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    class={["text-yellow-500", props.class]}
  >
    <path fill="currentColor" d="M12 2l3 7h7l-5 6 2 7-7-4-7 4 2-7-5-6h7l3-7z" />
  </svg>
));

export default FilledStar;
