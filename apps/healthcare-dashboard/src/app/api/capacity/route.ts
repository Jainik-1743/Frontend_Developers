import { NextResponse } from "next/server";

import capacity from "../../../../data/hospital-capacity.json";

export async function GET() {
  return NextResponse.json(capacity);
}
