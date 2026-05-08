"use client";

import { useState } from "react";

export default function CopyableCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-md bg-[#0d1117] my-4 border border-[#30363d] overflow-hidden">
      <div className="absolute right-2 top-2 z-10">
        <button
          onClick={handleCopy}
          className="px-2 py-1 bg-[#21262d] text-[#c9d1d9] hover:text-white hover:bg-[#30363d] rounded transition-colors text-xs flex items-center justify-center border border-[#30363d] cursor-pointer"
          aria-label="Copy code"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="!mt-0 !mb-0 overflow-x-auto p-4 pt-10 text-sm text-[#e6edf3] bg-[#0d1117]">
        <code>{code}</code>
      </pre>
    </div>
  );
}
