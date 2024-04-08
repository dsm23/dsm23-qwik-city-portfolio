import { component$, Slot } from "@builder.io/qwik";
import type { Component, PropsOf, QwikJSX } from "@builder.io/qwik";
import { twMerge } from "tailwind-merge";

export type PolymorphicProps<
  E extends QwikJSX.ElementType = QwikJSX.ElementType,
> = {
  as?: E;
};

export type AnchorProps<E extends QwikJSX.ElementType> = PolymorphicProps<E> &
  Omit<PropsOf<E>, keyof PolymorphicProps>;

const defaultElement = "a";

const Anchor: Component<AnchorProps<any>> = component$(
  ({ as: Component = defaultElement, ...props }) => (
    <Component
      {...props}
      class={twMerge(
        "-mx-1 px-1 text-sky-900 outline-none hover:underline focus:rounded focus:bg-yellow-500 dark:text-sky-300 print:underline",
        props.class,
      )}
    >
      <Slot />
    </Component>
  ),
);

export default Anchor;
