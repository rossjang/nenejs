import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email } = await request.json();

  // 이메일 유효성 검사
  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  // 중복 체크 및 저장
  const existing = await prisma.waitlist.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ message: "Already registered" });
  }

  await prisma.waitlist.create({ data: { email } });

  return NextResponse.json({ message: "Success" });
}
