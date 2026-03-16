import { NextResponse } from "next/server";

import patients from "../../../../data/patients.json";

import { calculatePatientAge } from "@/lib/calculate-patient-age";
import type { PatientRecord } from "@/types/healthcare";

export async function POST() {
  const directory = (patients as PatientRecord[]).map((patient) => ({
    id: patient.id,
    name: patient.name,
    age: calculatePatientAge(patient.birthDate),
    gender: patient.gender,
    condition: patient.condition,
    riskLevel: patient.riskLevel,
  }));

  return NextResponse.json({
    data: {
      patients: directory,
    },
  });
}
