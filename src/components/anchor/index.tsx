// import { component$, Slot } from "@builder.io/qwik";
// import type { PropsOf, QwikJSX } from "@builder.io/qwik";
// import { twMerge } from "tailwind-merge";
// import type { ClassNameValue } from "tailwind-merge";

// type AnchorOwnProps<E extends QwikJSX.ElementType = QwikJSX.ElementType> = {
//   as?: E;
//   class?: ClassNameValue;
// };

// type Props<E extends QwikJSX.ElementType> = AnchorOwnProps<E> &
//   Omit<PropsOf<E>, keyof AnchorOwnProps>;

// const defaultElement = "a";

// // TODO: change this
// // @ts-ignore
// export const Anchor: <E extends QwikJSX.ElementType = typeof defaultElement>(
//   props: Props<E>,
// ) => QwikJSX.Element | null = component$(
//   ({ as: Component = defaultElement, ...props }) => (
//     <Component
//       {...props}
//       class={twMerge(
//         "-mx-1 px-1 text-sky-900 outline-none hover:underline focus:rounded focus:bg-yellow-500 print:underline dark:text-sky-300",
//         props.class,
//       )}
//     >
//       <Slot />
//     </Component>
//   ),
// );

// export default Anchor;

// @ts-nocheck
import { component$, Slot } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

const defaultElement = "a";

export const Anchor = component$(
  ({ as: Component = defaultElement, ...props }) => (
    <Component
      {...props}
      class={twMerge(
        "-mx-1 px-1 text-sky-900 outline-none hover:underline focus:rounded focus:bg-yellow-500 print:underline dark:text-sky-300",
        props.class,
      )}
    >
      <Slot />
    </Component>
  ),
);

export default Anchor;
