"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
} from "recharts";

import { demographicsData, type DemographicSlice } from "@/lib/mockChartData";

/* ── Custom Tooltip ─────────────────────────────────────────────────────────── */

interface PayloadEntry {
  payload: DemographicSlice;
  value: number;
}

function DemographicsTooltip({
  active,
  payload,
}: TooltipProps<number, string>) {
  if (!active || !payload || payload.length === 0) return null;

  const entry = (payload[0] as unknown as PayloadEntry).payload;
  const total = demographicsData.reduce((sum, d) => sum + d.value, 0);
  const pct = ((entry.value / total) * 100).toFixed(1);

  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-md">
      <p className="text-sm font-semibold text-slate-800">{entry.label}</p>
      <p className="text-xs text-slate-500">
        {entry.value.toLocaleString()} patients ({pct}%)
      </p>
    </div>
  );
}

/* ── Component ──────────────────────────────────────────────────────────────── */

export function RechartsDemographics() {
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Patient Demographics
        </h3>
        <p className="text-sm text-slate-500">
          Age-group distribution across registered patients
        </p>
      </div>

      <ResponsiveContainer height={300} width="100%">
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={demographicsData}
            dataKey="value"
            innerRadius={60}
            nameKey="label"
            outerRadius={100}
            paddingAngle={3}
            strokeWidth={0}
          >
            {demographicsData.map((slice) => (
              <Cell fill={slice.color} key={slice.label} />
            ))}
          </Pie>
          <Tooltip content={<DemographicsTooltip />} />
          <Legend
            formatter={(value: string) => (
              <span className="text-sm text-slate-600">{value}</span>
            )}
            iconType="circle"
            verticalAlign="bottom"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
