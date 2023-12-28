import type { QwikJSX } from "@builder.io/qwik";
import { helpers } from "@contentful/rich-text-types";
import type { Mark } from "@contentful/rich-text-types";
import type { CommonNode, Options } from "..";
import { appendKeyToValidElement } from "./appendKeyToValidElement";

export function nodeListToQwikComponents(
  nodes: CommonNode[],
  options: Options,
): QwikJSX.Element {
  // TODO: change this
  // @ts-ignore
  return nodes.map((node: CommonNode, index: number): QwikJSX.Element => {
    return appendKeyToValidElement(nodeToQwikComponent(node, options), index);
  });
}

export function nodeToQwikComponent(
  node: CommonNode,
  options: Options,
): QwikJSX.Element {
  const { renderNode, renderMark, renderText } = options;
  if (helpers.isText(node)) {
    // TODO: change this
    // @ts-ignore
    return node.marks.reduce(
      (value: QwikJSX.Element, mark: Mark): QwikJSX.Element => {
        if (!renderMark?.[mark.type]) {
          return value;
        }
        return renderMark[mark.type](value);
      },
      renderText ? renderText(node.value) : node.value,
    );
  } else {
    const children: QwikJSX.Element = nodeListToQwikComponents(
      node.content,
      options,
    );
    if (!renderNode?.[node.nodeType]) {
      return children;
    }

    return renderNode[node.nodeType](node, children);
  }
}
