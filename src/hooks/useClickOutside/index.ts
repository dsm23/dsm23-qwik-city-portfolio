import { $, useOnDocument } from "@builder.io/qwik";
import type { Signal } from "@builder.io/qwik";

const useClickOutside = (el: Signal<HTMLElement>, handler: Function) => {
  const handleClick = (e: MouseEvent) =>
    !el.value.contains(e.target as Node) && handler?.();

  useOnDocument("click", $(handleClick));
};

export default useClickOutside;
