import { NextResponse } from "next/server";

import { mockPrisma } from "@/lib/mock-prisma";

export async function GET() {
  const appointments = await mockPrisma.appointment.findMany();
  return NextResponse.json(appointments);
}
