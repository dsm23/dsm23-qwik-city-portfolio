import type { QwikJSX } from "@builder.io/qwik";

export function appendKeyToValidElement(
  element: QwikJSX.Element,
  key: number,
): QwikJSX.Element {
  // eslint-disable-next-line no-prototype-builtins
  if (element.hasOwnProperty("key")) {
    element.key = `${element.type}-${key}`;
  }

  return element;
}
