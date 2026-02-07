import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // MVP: Log submission. In production, integrate with email service (Resend, SendGrid, etc.)
    console.log("Contact form submission:", validatedData);

    return NextResponse.json(
      { success: true, message: "Mesajınız başarıyla gönderildi." },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error && error.name === "ZodError") {
      return NextResponse.json(
        { success: false, message: "Geçersiz form verisi." },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Bir hata oluştu." },
      { status: 500 }
    );
  }
}
