import { MDXContent } from "@content-collections/mdx/react";

import { CustomLink } from "@/components/MDXCustomized/CustomLink";
import { CustomBlockquote } from "@/components/MDXCustomized/CustomBlockquote";
import {
  CustomInlineCode,
  CustomMultilineCode,
} from "@/components/MDXCustomized/CustomCode";
import {
  HeaderOne,
  HeaderTwo,
  HeaderThree,
  HeaderFour,
  HeaderFive,
  HeaderSix,
} from "@/components/MDXCustomized/CustomHeader";

import {
  CustomUnorderedList,
  CustomOrderedList,
} from "@/components/MDXCustomized/CustomLists";

export default function MDXCustomized({ code }) {
  return (
    <MDXContent
      code={code}
      components={{
        a: CustomLink,
        blockquote: CustomBlockquote,
        code: CustomInlineCode,
        pre: CustomMultilineCode,
        h1: HeaderOne,
        h2: HeaderTwo,
        h3: HeaderThree,
        h4: HeaderFour,
        h5: HeaderFive,
        h6: HeaderSix,
        ol: CustomOrderedList,
        ul: CustomUnorderedList,
        p: ({ children }) => <p className="text-justify">{children}</p>,
      }}
    />
  );
}
