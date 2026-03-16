import { NextResponse } from "next/server";

import { mockPrisma } from "@/lib/mock-prisma";

export async function GET() {
  const prescriptions = await mockPrisma.prescription.findMany();
  return NextResponse.json(prescriptions);
}
