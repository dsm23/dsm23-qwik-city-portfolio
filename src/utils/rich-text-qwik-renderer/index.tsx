// import { Slot } from "@builder.io/qwik";
import type { QwikJSX } from "@builder.io/qwik";
// import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import type {
  Block,
  // Document,
  Inline,
  Text,
} from "@contentful/rich-text-types";
// import { nodeToSolidComponent } from "./util/nodeListToSolidComponents";

// const defaultNodeRenderers: RenderNode = {
//   [BLOCKS.DOCUMENT]: (node, children) => <Slot />,
//   [BLOCKS.PARAGRAPH]: (node, children) => (
//     <p>
//       <Slot />
//     </p>
//   ),
//   [BLOCKS.HEADING_1]: (node, children) => (
//     <h1>
//       <Slot />
//     </h1>
//   ),
//   [BLOCKS.HEADING_2]: (node, children) => (
//     <h2>
//       <Slot />
//     </h2>
//   ),
//   [BLOCKS.HEADING_3]: (node, children) => (
//     <h3>
//       <Slot />
//     </h3>
//   ),
//   [BLOCKS.HEADING_4]: (node, children) => (
//     <h4>
//       <Slot />
//     </h4>
//   ),
//   [BLOCKS.HEADING_5]: (node, children) => (
//     <h5>
//       <Slot />
//     </h5>
//   ),
//   [BLOCKS.HEADING_6]: (node, children) => (
//     <h6>
//       <Slot />
//     </h6>
//   ),
//   [BLOCKS.EMBEDDED_ENTRY]: (node, children) => (
//     <div>
//       <Slot />
//     </div>
//   ),
//   [BLOCKS.EMBEDDED_RESOURCE]: (node, children) => (
//     <div>
//       <Slot />
//     </div>
//   ),
//   [BLOCKS.UL_LIST]: (node, children) => (
//     <ul>
//       <Slot />
//     </ul>
//   ),
//   [BLOCKS.OL_LIST]: (node, children) => (
//     <ol>
//       <Slot />
//     </ol>
//   ),
//   [BLOCKS.LIST_ITEM]: (node, children) => (
//     <li>
//       <Slot />
//     </li>
//   ),
//   [BLOCKS.QUOTE]: (node, children) => (
//     <blockquote>
//       <Slot />
//     </blockquote>
//   ),
//   [BLOCKS.HR]: () => <hr />,
//   [BLOCKS.TABLE]: (node, children) => (
//     <table>
//       <tbody>
//         <Slot />
//       </tbody>
//     </table>
//   ),
//   [BLOCKS.TABLE_ROW]: (node, children) => (
//     <tr>
//       <Slot />
//     </tr>
//   ),
//   [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
//     <th>
//       <Slot />
//     </th>
//   ),
//   [BLOCKS.TABLE_CELL]: (node, children) => (
//     <td>
//       <Slot />
//     </td>
//   ),
//   [INLINES.ASSET_HYPERLINK]: (node) =>
//     defaultInline(INLINES.ASSET_HYPERLINK, node as Inline),
//   [INLINES.ENTRY_HYPERLINK]: (node) =>
//     defaultInline(INLINES.ENTRY_HYPERLINK, node as Inline),
//   [INLINES.RESOURCE_HYPERLINK]: (node) =>
//     defaultInlineResource(INLINES.RESOURCE_HYPERLINK, node as Inline),
//   [INLINES.EMBEDDED_ENTRY]: (node) =>
//     defaultInline(INLINES.EMBEDDED_ENTRY, node as Inline),
//   [INLINES.EMBEDDED_RESOURCE]: (node) =>
//     defaultInlineResource(INLINES.EMBEDDED_RESOURCE, node as Inline),
//   [INLINES.HYPERLINK]: (node, children) => (
//     <a href={node.data.uri}>
//       <Slot />
//     </a>
//   ),
// };

// function defaultInline(type: string, node: Inline): QwikJSX.Element {
//   return (
//     <span>
//       type: {node.nodeType} id: {node.data.target.sys.id}
//     </span>
//   );
// }

// function defaultInlineResource(type: string, node: Inline) {
//   return (
//     <span>
//       type: {node.nodeType} urn: {node.data.target.sys.urn}
//     </span>
//   );
// }

export type CommonNode = Text | Block | Inline;

export interface NodeRenderer {
  (node: Block | Inline, children: QwikJSX.Element): QwikJSX.Element;
}

export interface RenderNode {
  [k: string]: NodeRenderer;
}

export interface RenderMark {
  [k: string]: (text: QwikJSX.Element) => QwikJSX.Element;
}

export interface RenderText {
  (text: string): QwikJSX.Element;
}

export interface Options {
  /**
   * Node renderers
   */
  renderNode?: RenderNode;
  /**
   * Mark renderers
   */
  renderMark?: RenderMark;
  /**
   * Text renderer
   */
  renderText?: RenderText;
  /**
   * Keep line breaks and multiple spaces
   */
  preserveWhitespace?: boolean;
}
