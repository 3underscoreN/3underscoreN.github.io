import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { cn } from "@/util/cn";

import { Fira_Code } from "next/font/google";
const firacode = Fira_Code({
  subsets: ["latin"],
});

export function CustomInlineCode({ children, className }) {
  return (
    <code
      className={cn(
        "bg-base-200 text-sm px-1 py-0.5 rounded",
        firacode.className,
        className,
      )}
    >
      {children}
    </code>
  );
}

export function CustomMultilineCode({ children }) {
  return (
    <div
      className={cn(
        "bg-neutral dark:bg-base-300 rounded-field border-[0.5px] border-base-300 *:text-sm px-4 py-1",
        firacode.className,
      )}
    >
      <SyntaxHighlighter
        style={atomDark}
        language={children.props.className?.replace("language-", "")}
        customStyle={{ background: "transparent" }}
        wrapLines
      >
        {children.props.children}
      </SyntaxHighlighter>
    </div>
  );
}
