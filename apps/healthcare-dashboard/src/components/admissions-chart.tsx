"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useAdmissionsAnalytics } from "@/hooks/use-healthcare-queries";

export function AdmissionsChart() {
  const { data } = useAdmissionsAnalytics();

  return (
    <div className="h-80 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Patient Admissions
        </h3>
        <p className="text-sm text-slate-500">
          Cube.js-style mocked analytics feed
        </p>
      </div>
      <ResponsiveContainer height="100%" width="100%">
        <BarChart data={data.resultSet.series}>
          <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
          <XAxis dataKey="day" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip />
          <Bar dataKey="admissions" fill="#0f766e" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
