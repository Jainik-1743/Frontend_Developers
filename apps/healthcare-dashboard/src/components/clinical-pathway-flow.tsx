"use client";

import "@xyflow/react/dist/style.css";

import { Background, Controls, ReactFlow } from "@xyflow/react";

const nodes = [
  {
    id: "intake",
    position: { x: 0, y: 50 },
    data: { label: "Triage Intake" },
    type: "default",
  },
  {
    id: "diagnostics",
    position: { x: 240, y: 50 },
    data: { label: "Lab Diagnostics" },
    type: "default",
  },
  {
    id: "treatment",
    position: { x: 480, y: 50 },
    data: { label: "Treatment Plan" },
    type: "default",
  },
];

const edges = [
  { id: "e1-2", source: "intake", target: "diagnostics", animated: true },
  { id: "e2-3", source: "diagnostics", target: "treatment", animated: true },
];

export function ClinicalPathwayFlow() {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Clinical Pathway
        </h3>
        <p className="text-sm text-slate-500">
          Interactive React Flow treatment map
        </p>
      </div>
      <div
        className="h-80 overflow-hidden rounded-xl border border-slate-200"
        data-testid="clinical-pathway-flow"
      >
        <ReactFlow edges={edges} fitView nodes={nodes}>
          <Controls />
          {/* <MiniMap /> */}
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}
