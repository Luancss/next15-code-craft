"use client";

import { CheckCircle, Copy } from "lucide-react";
import { useState } from "react";

interface SnippetsCodeProps {
  code: string;
}

export const CopyButton = ({ code }: SnippetsCodeProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      title="Copy to clipboard"
      onClick={copyToClipboard}
      className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200 group relative"
    >
      {copied ? (
        <CheckCircle className="size-4 text-green-400" />
      ) : (
        <Copy className="size-4 text-gray-400 group-hover:text-gray-300" />
      )}
    </button>
  );
};
