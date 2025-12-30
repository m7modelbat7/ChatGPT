import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = formData.get("email");

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ message: "Invalid email." }, { status: 400 });
  }

  return NextResponse.json({ message: "Subscribed" });
}
