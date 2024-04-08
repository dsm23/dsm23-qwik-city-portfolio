import type { QwikJSX } from "@builder.io/qwik";

export function appendKeyToValidElement(
  element: QwikJSX.Element,
  key: number,
): QwikJSX.Element {
  if (Object.prototype.hasOwnProperty.call(element, "key")) {
    // @ts-ignore
    element.key = `${element.type}-${key}`;
  }

  return element;
}
