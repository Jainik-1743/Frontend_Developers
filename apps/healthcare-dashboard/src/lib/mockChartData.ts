// ─── Interfaces ────────────────────────────────────────────────────────────────

/** A single slice of the patient demographics pie chart. */
export interface DemographicSlice {
  label: string;
  value: number;
  color: string;
}

/** A single ECG telemetry sample (time in ms, voltage in mV). */
export interface ECGPoint {
  time: number;
  voltage: number;
}

/** An organ entry for the interactive body map. */
export interface OrganDatum {
  name: string;
  healthScore: number; // 0–100
  svgPath: string;
  position: { cx: number; cy: number };
}

// ─── Demographics Data ─────────────────────────────────────────────────────────

export const demographicsData: DemographicSlice[] = [
  { label: "0 – 18", value: 1240, color: "#0d9488" },
  { label: "19 – 35", value: 2870, color: "#0891b2" },
  { label: "36 – 60", value: 3650, color: "#2563eb" },
  { label: "60 +", value: 2140, color: "#16a34a" },
];

// ─── ECG Data (synthetic QRS-complex waveform, 60 points) ──────────────────────

function generateECGData(): ECGPoint[] {
  const points: ECGPoint[] = [];
  const totalPoints = 60;
  const msPerPoint = 20; // 50 Hz sampling

  for (let i = 0; i < totalPoints; i++) {
    const t = i * msPerPoint;
    // Position within a single heartbeat cycle (~60 points per 1.2 s)
    const phase = (i % 30) / 30; // normalised 0–1 within each beat

    let voltage: number;

    if (phase >= 0.15 && phase < 0.2) {
      // P-wave
      voltage = 0.15 * Math.sin(((phase - 0.15) * Math.PI) / 0.05);
    } else if (phase >= 0.28 && phase < 0.3) {
      // Q dip
      voltage = -0.15;
    } else if (phase >= 0.3 && phase < 0.35) {
      // R peak (sharp upward)
      voltage = 1.0 + 0.08 * Math.sin(i * 0.5);
    } else if (phase >= 0.35 && phase < 0.38) {
      // S dip
      voltage = -0.25;
    } else if (phase >= 0.45 && phase < 0.55) {
      // T-wave
      voltage = 0.3 * Math.sin(((phase - 0.45) * Math.PI) / 0.1);
    } else {
      // baseline with slight noise
      voltage = (Math.random() - 0.5) * 0.04;
    }

    points.push({ time: t, voltage: parseFloat(voltage.toFixed(3)) });
  }

  return points;
}

export const ecgData: ECGPoint[] = generateECGData();

// ─── Organ Body-Map Data ───────────────────────────────────────────────────────

export const organData: OrganDatum[] = [
  {
    name: "Brain",
    healthScore: 92,
    svgPath:
      "M0,-28 C16,-28 28,-16 28,0 C28,16 16,28 0,28 C-16,28 -28,16 -28,0 C-28,-16 -16,-28 0,-28 Z",
    position: { cx: 200, cy: 60 },
  },
  {
    name: "Heart",
    healthScore: 78,
    svgPath:
      "M0,-18 C10,-30 30,-18 20,0 C10,18 0,26 0,26 C0,26 -10,18 -20,0 C-30,-18 -10,-30 0,-18 Z",
    position: { cx: 185, cy: 170 },
  },
  {
    name: "Lungs",
    healthScore: 65,
    svgPath:
      "M-24,-20 Q-24,20 0,24 Q24,20 24,-20 Q24,-28 12,-28 L-12,-28 Q-24,-28 -24,-20 Z",
    position: { cx: 230, cy: 160 },
  },
  {
    name: "Liver",
    healthScore: 45,
    svgPath:
      "M-26,-12 Q-22,-20 0,-18 Q22,-20 26,-12 Q28,4 18,16 Q6,22 -6,20 Q-20,16 -26,-12 Z",
    position: { cx: 165, cy: 240 },
  },
  {
    name: "Kidneys",
    healthScore: 88,
    svgPath:
      "M-8,-18 C-16,-18 -18,-6 -14,4 C-10,14 -4,18 0,18 C4,18 10,14 14,4 C18,-6 16,-18 8,-18 Z",
    position: { cx: 235, cy: 250 },
  },
  {
    name: "Stomach",
    healthScore: 30,
    svgPath:
      "M-20,-14 Q-16,-22 4,-20 Q20,-16 22,-4 Q24,10 10,20 Q-2,26 -14,18 Q-24,8 -20,-14 Z",
    position: { cx: 200, cy: 310 },
  },
];
