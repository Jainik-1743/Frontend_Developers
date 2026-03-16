import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as { patientId: string };

  return NextResponse.json({
    status: "mock-discharged",
    patientId: payload.patientId,
  });
}
