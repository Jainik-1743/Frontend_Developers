"use client";

import dynamic from "next/dynamic";

import { useVitalsAnalytics } from "@/hooks/use-healthcare-queries";
import type { TelemetryPoint } from "@/types/healthcare";

const Plot: any = dynamic(
  async () => (await import("react-plotly.js")).default as any,
  {
    ssr: false,
  },
);

export function VitalsTelemetryPlot() {
  const { data, isLoading } = useVitalsAnalytics();

  if (isLoading || !data) {
    return (
      <div className="flex h-80 items-center justify-center rounded-2xl border border-slate-200/70 bg-white shadow-sm">
        <p className="text-sm text-slate-500">Loading telemetry...</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Vitals Telemetry
        </h3>
        <p className="text-sm text-slate-500">
          Plotly scatter view of heart-rate signals
        </p>
      </div>
      <Plot
        config={{ displayModeBar: false, responsive: true }}
        data={[
          {
            mode: "lines+markers",
            name: "Heart Rate",
            type: "scatter",
            x: data.resultSet.telemetry.map(
              (point: TelemetryPoint) => point.timestamp,
            ),
            y: data.resultSet.telemetry.map(
              (point: TelemetryPoint) => point.heartRate,
            ),
            marker: { color: "#dc2626" },
            line: { color: "#ef4444" },
          },
        ]}
        layout={{
          autosize: true,
          height: 260,
          margin: { l: 40, r: 10, t: 10, b: 40 },
          paper_bgcolor: "white",
          plot_bgcolor: "white",
        }}
        style={{ width: "100%" }}
      />
    </div>
  );
}
