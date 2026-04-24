import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { cn } from "@/util/cn";

export function CustomInlineCode({ children, className }) {
  return (
    <code className={cn("bg-base-200 text-sm px-1 py-0.5 rounded", className)}>
      {children}
    </code>
  );
}

export function CustomMultilineCode({ children }) {
  return (
    <div className="bg-neutral dark:bg-base-300 rounded-field border-[0.5px] border-base-300 *:text-sm px-4 py-1">
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
