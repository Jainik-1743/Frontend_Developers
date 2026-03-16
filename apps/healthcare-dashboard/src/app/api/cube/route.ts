import { NextRequest, NextResponse } from "next/server";

import admissions from "../../../../data/admissions.json";
import patients from "../../../../data/patients.json";

import type { AdmissionPoint, PatientRecord } from "@/types/healthcare";

export async function GET(request: NextRequest) {
  const metric = request.nextUrl.searchParams.get("metric");

  if (metric === "telemetry") {
    const primaryPatient = (patients as PatientRecord[])[0];

    return NextResponse.json({
      resultSet: {
        telemetry: primaryPatient.telemetry,
      },
    });
  }

  return NextResponse.json({
    resultSet: {
      series: admissions as AdmissionPoint[],
    },
  });
}
