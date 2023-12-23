import { Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { Options } from "../rich-text-qwik-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <span class="font-bold text-gray-900 dark:text-white">{text}</span>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: () => (
      <p class="mt-2 text-gray-900 dark:text-white">
        <Slot />
      </p>
    ),
    [BLOCKS.UL_LIST]: () => (
      <ul class="my-2 list-outside list-disc">
        <Slot />
      </ul>
    ),
    [BLOCKS.LIST_ITEM]: () => (
      <li class="ml-8">
        <Slot />
      </li>
    ),
    // [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
    //   <Image
    //     class="text-center shadow-lg mx-auto max-w-screen-md"
    //     contentfulId={node?.data?.target?.sys?.contentful_id}
    //   />
    // ),
    [INLINES.HYPERLINK]: (node) => (
      <Link href={node.data.uri} class="italic">
        <Slot />
      </Link>
    ),
  },
  // renderText: text => text.replace('!', '?'),
};

export default options;
