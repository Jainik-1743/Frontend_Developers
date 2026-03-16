"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

import { organData, type OrganDatum } from "@/lib/mockChartData";

/** Map a 0-100 health score to a red ↔ green colour. */
function healthColor(score: number): string {
  const t = Math.max(0, Math.min(score, 100)) / 100;
  return d3.interpolateRgb("#dc2626", "#16a34a")(t);
}

/** Resting (dimmed) fill — a muted teal for all organs. */
const REST_FILL = "#94a3b8";

export function D3InteractiveBodyMap() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const tooltip = d3.select(tooltipRef.current);

    // Clear previous render (React strict-mode safety)
    svg.selectAll("*").remove();

    const width = 400;
    const height = 400;

    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    // ── Draw a faint body silhouette outline ───────────────────────────────
    svg
      .append("ellipse")
      .attr("cx", 200)
      .attr("cy", 50)
      .attr("rx", 28)
      .attr("ry", 32)
      .attr("fill", "none")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-width", 1.5);

    svg
      .append("rect")
      .attr("x", 155)
      .attr("y", 80)
      .attr("width", 90)
      .attr("height", 160)
      .attr("rx", 20)
      .attr("fill", "none")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-width", 1.5);

    svg
      .append("rect")
      .attr("x", 170)
      .attr("y", 240)
      .attr("width", 24)
      .attr("height", 120)
      .attr("rx", 10)
      .attr("fill", "none")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-width", 1.5);

    svg
      .append("rect")
      .attr("x", 206)
      .attr("y", 240)
      .attr("width", 24)
      .attr("height", 120)
      .attr("rx", 10)
      .attr("fill", "none")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-width", 1.5);

    // ── Render organ shapes ────────────────────────────────────────────────
    const organs = svg
      .selectAll<SVGPathElement, OrganDatum>("path.organ")
      .data(organData)
      .enter()
      .append("path")
      .attr("class", "organ")
      .attr("d", (d) => d.svgPath)
      .attr(
        "transform",
        (d) => `translate(${d.position.cx}, ${d.position.cy}) scale(1)`,
      )
      .attr("fill", REST_FILL)
      .attr("stroke", "#475569")
      .attr("stroke-width", 1)
      .attr("cursor", "pointer")
      .style("transition", "fill 0.2s ease");

    // ── Hover interactions ─────────────────────────────────────────────────
    organs
      .on("mouseenter", function (_event: MouseEvent, d: OrganDatum) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr(
            "transform",
            `translate(${d.position.cx}, ${d.position.cy}) scale(1.15)`,
          )
          .attr("fill", healthColor(d.healthScore));

        tooltip
          .style("opacity", "1")
          .html(
            `<span class="font-semibold">${d.name}</span><br/>` +
              `Health: <span style="color:${healthColor(d.healthScore)}">${d.healthScore}%</span>`,
          );
      })
      .on("mousemove", function (event: MouseEvent) {
        const svgRect = svgRef.current?.getBoundingClientRect();
        if (!svgRect) return;

        tooltip
          .style("left", `${event.clientX - svgRect.left + 14}px`)
          .style("top", `${event.clientY - svgRect.top - 10}px`);
      })
      .on("mouseleave", function (_event: MouseEvent, d: OrganDatum) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr(
            "transform",
            `translate(${d.position.cx}, ${d.position.cy}) scale(1)`,
          )
          .attr("fill", REST_FILL);

        tooltip.style("opacity", "0");
      });

    // ── Organ labels ───────────────────────────────────────────────────────
    svg
      .selectAll<SVGTextElement, OrganDatum>("text.organ-label")
      .data(organData)
      .enter()
      .append("text")
      .attr("class", "organ-label")
      .attr("x", (d) => d.position.cx)
      .attr("y", (d) => d.position.cy + 36)
      .attr("text-anchor", "middle")
      .attr("font-size", 10)
      .attr("fill", "#64748b")
      .text((d) => d.name);
  }, []);

  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">
          Interactive Body Map
        </h3>
        <p className="text-sm text-slate-500">
          Hover over an organ to view its health status
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-[400px]">
        <svg className="block w-full" ref={svgRef} />
        {/* Floating tooltip rendered in HTML for rich formatting */}
        <div
          className="pointer-events-none absolute rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 shadow-md"
          ref={tooltipRef}
          style={{ opacity: 0, transition: "opacity 0.15s ease" }}
        />
      </div>
    </div>
  );
}
