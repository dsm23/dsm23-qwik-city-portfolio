import { Link } from "@builder.io/qwik-city";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import type { Options } from "../rich-text-qwik-renderer";

enum MARKS {
  BOLD = "bold",
}

const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => (
      <span class="font-bold text-gray-900 dark:text-white">{text}</span>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p class="mt-2 text-gray-900 dark:text-white">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul class="my-2 list-outside list-disc">{children}</ul>
    ),
    [BLOCKS.LIST_ITEM]: (node, children) => <li class="ml-8">{children}</li>,
    // [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
    //   <Image
    //     class="text-center shadow-lg mx-auto max-w-screen-md"
    //     contentfulId={node?.data?.target?.sys?.contentful_id}
    //   />
    // ),
    [INLINES.HYPERLINK]: (node, children) => (
      <Link href={node.data.uri} class="italic">
        {children}
      </Link>
    ),
  },
  // renderText: text => text.replace('!', '?'),
};

export default options;
