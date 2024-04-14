import { $, useOnDocument } from "@builder.io/qwik";
import type { QRL, Signal } from "@builder.io/qwik";

const useClickOutside = (
  el: Signal<HTMLElement | undefined>,
  handler: QRL<Function>,
) => {
  const handleClick = $((e: MouseEvent) => {
    if (el.value) {
      !el.value.contains(e.target as Node) && handler();
    }
  });

  useOnDocument("click", handleClick);
};

export default useClickOutside;
