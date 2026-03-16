"use client";

import dynamic from "next/dynamic";

import { ecgData } from "@/lib/mockChartData";

/* react-plotly.js must be loaded client-side only (no SSR) */
const Plot: any = dynamic(
  async () => (await import("react-plotly.js")).default as any,
  { ssr: false },
);

export function PlotlyECGTelemetry() {
  const timeValues = ecgData.map((p) => p.time);
  const voltageValues = ecgData.map((p) => p.voltage);

  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">ECG Telemetry</h3>
        <p className="text-sm text-slate-500">
          Simulated 12-lead electrocardiogram — zoom &amp; pan enabled
        </p>
      </div>

      <div className="overflow-hidden rounded-xl">
        <Plot
          config={{
            displayModeBar: true,
            displaylogo: false,
            modeBarButtonsToRemove: ["select2d", "lasso2d", "autoScale2d"],
            responsive: true,
            scrollZoom: true,
          }}
          data={[
            {
              type: "scatter" as const,
              mode: "lines" as const,
              x: timeValues,
              y: voltageValues,
              line: {
                color: "#22c55e",
                width: 2,
                shape: "spline" as const,
              },
              hovertemplate:
                "<b>%{x} ms</b><br>Voltage: %{y} mV<extra></extra>",
            },
          ]}
          layout={{
            autosize: true,
            height: 300,
            margin: { l: 50, r: 20, t: 10, b: 45 },
            paper_bgcolor: "#0a0a0a",
            plot_bgcolor: "#0a0a0a",
            font: { color: "#a3a3a3" },
            xaxis: {
              title: { text: "Time (ms)", font: { size: 12 } },
              color: "#525252",
              gridcolor: "#1a2e1a",
              zerolinecolor: "#1a2e1a",
              rangeslider: { visible: false },
              fixedrange: false,
            },
            yaxis: {
              title: { text: "Voltage (mV)", font: { size: 12 } },
              color: "#525252",
              gridcolor: "#1a2e1a",
              zerolinecolor: "#1a2e1a",
              fixedrange: true,
              range: [-0.6, 1.4],
            },
            dragmode: "zoom" as const,
          }}
          style={{ width: "100%" }}
          useResizeHandler
        />
      </div>
    </div>
  );
}
