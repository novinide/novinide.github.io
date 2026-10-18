import { NextResponse } from "next/server";

// Required for `output: "export"` (GitHub Pages build) — prerenders this
// handler at build time instead of treating it as a dynamic server route.
export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ message: "Hello, world!" });
}