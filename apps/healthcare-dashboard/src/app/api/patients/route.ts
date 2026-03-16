import { NextRequest, NextResponse } from "next/server";

import patients from "../../../../data/patients.json";

import type { PatientRecord } from "@/types/healthcare";

export async function GET(request: NextRequest) {
  const cursorParam = request.nextUrl.searchParams.get("cursor");
  const hasCursor = cursorParam !== null;
  const allPatients = patients as PatientRecord[];

  if (!hasCursor) {
    return NextResponse.json(allPatients);
  }

  const cursor = Number(cursorParam ?? 0);
  const pageSize = 2;
  const items = allPatients.slice(cursor, cursor + pageSize);
  const nextCursor =
    cursor + pageSize < allPatients.length ? cursor + pageSize : null;

  return NextResponse.json({
    items,
    nextCursor,
  });
}
