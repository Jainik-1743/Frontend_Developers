import { calculatePatientAge } from "@/lib/calculate-patient-age";

describe("calculatePatientAge", () => {
  it("returns the correct age for a known birth date", () => {
    const age = calculatePatientAge("1990-03-14", new Date("2026-03-15"));

    expect(age).toBe(36);
  });
});
