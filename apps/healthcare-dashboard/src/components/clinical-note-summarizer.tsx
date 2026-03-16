"use client";

import type { ChangeEvent } from "react";

import { useCompletion } from "ai/react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ClinicalNoteSummarizer() {
  const { completion, complete, input, setInput, isLoading } = useCompletion({
    api: "/api/clinical-summary",
  });

  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Clinical Note Summarizer
        </h3>
        <p className="text-sm text-slate-500">
          Mocked AI SDK streaming summary, no external model required
        </p>
      </div>
      <div className="space-y-4">
        <Textarea
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
            setInput(event.target.value)
          }
          placeholder="Paste a clinical note to summarize..."
          value={input}
        />
        <Button
          disabled={!input || isLoading}
          onClick={() => complete(input)}
          type="button"
        >
          {isLoading ? "Summarizing..." : "Generate Summary"}
        </Button>
        <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
          {completion || "Summary will stream here."}
        </div>
      </div>
    </div>
  );
}
