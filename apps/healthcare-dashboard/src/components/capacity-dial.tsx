"use client";

import { useEffect, useRef } from "react";

import * as d3 from "d3";

import { useCapacitySnapshot } from "@/hooks/use-healthcare-queries";

export function CapacityDial() {
  const ref = useRef<SVGSVGElement | null>(null);
  const { data } = useCapacitySnapshot();

  useEffect(() => {
    if (!ref.current || !data) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const width = 220;
    const height = 140;
    const centerX = width / 2;
    const centerY = 110;
    const ratio = data.capacityPercentage / 100;

    const backgroundArc = d3
      .arc<any>()
      .innerRadius(42)
      .outerRadius(58)
      .startAngle(-Math.PI)
      .endAngle(0);

    const valueArc = d3
      .arc<any>()
      .innerRadius(42)
      .outerRadius(58)
      .startAngle(-Math.PI)
      .endAngle(-Math.PI + Math.PI * ratio);

    const group = svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .append("g")
      .attr("transform", `translate(${centerX}, ${centerY})`);

    group
      .append("path")
      .attr("d", backgroundArc({}) ?? "")
      .attr("fill", "#e2e8f0");
    group
      .append("path")
      .attr("d", valueArc({}) ?? "")
      .attr("fill", ratio > 0.8 ? "#dc2626" : "#0f766e");

    group
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", -8)
      .attr("font-size", 28)
      .attr("font-weight", 700)
      .attr("fill", "#0f172a")
      .text(`${data.capacityPercentage}%`);

    group
      .append("text")
      .attr("text-anchor", "middle")
      .attr("y", 18)
      .attr("font-size", 12)
      .attr("fill", "#64748b")
      .text("Hospital Capacity");
  }, [data]);

  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">Capacity Dial</h3>
        <p className="text-sm text-slate-500">Custom D3 SVG visualization</p>
      </div>
      <svg className="mx-auto block w-full max-w-[240px]" ref={ref} />
      {data ? (
        <p className="mt-2 text-center text-sm text-slate-500">
          {data.occupiedBeds} / {data.totalBeds} beds occupied
        </p>
      ) : null}
    </div>
  );
}
