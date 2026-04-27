"use client";

import React from "react";
import { cn } from "@/util/cn";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";

export default function ShareBtn({ url, title, className, ...props }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        url: url,
      });
    } else {
      navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <>
      <button
        onClick={handleShare}
        className={cn(
          "btn btn-primary btn-circle",
          isCopied ? "tooltip tooltip-success" : "tooltip",
          isCopied ? "tooltip-open" : "",
          className,
        )}
        data-tip={isCopied ? "Link Copied!" : "Share this post"}
        {...props}
      >
        <FontAwesomeIcon icon={faShareNodes} />
      </button>
    </>
  );
}
