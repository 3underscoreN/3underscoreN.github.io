"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { cn } from "@/util/cn";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faClipboard,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

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
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div
      className={cn(
        "bg-neutral dark:bg-base-300 rounded-field border-[0.5px] border-base-300 *:text-sm px-4 py-1",
        firacode.className,
      )}
    >
      <div className="mt-2 flex flex-row items-center justify-start gap-2">
        <FontAwesomeIcon icon={faCode} />
        <span>{children.props.className?.replace("language-", "")}</span>
        <div className="flex-1" />
        <button
          className={cn(
            "btn btn-sm btn-icon btn-circle",
            copied ? "btn-success" : "",
          )}
          onClick={() => handleCopy(children.props.children)}
        >
          {copied ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <FontAwesomeIcon icon={faClipboard} />
          )}
        </button>
      </div>
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
