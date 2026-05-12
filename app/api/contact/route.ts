import { NextResponse } from "next/server";
import { sendContactEmail } from "@/app/lib/brevo";

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim().toLowerCase() ?? "";
    const company = body.company?.trim() ?? "";
    const message = body.message?.trim() ?? "";

    if (name.length < 2 || name.length > 80) {
      return NextResponse.json(
        { message: "Name must be between 2 and 80 characters." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: "Enter a valid email address." },
        { status: 400 }
      );
    }

    if (company.length > 100) {
      return NextResponse.json(
        { message: "Fleet name is too long." },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { message: "Message must be between 10 and 2000 characters." },
        { status: 400 }
      );
    }

    const result = await sendContactEmail({
      name,
      email,
      company,
      message,
    });

    if (!result.ok) {
      return NextResponse.json(
        { message: "Unable to send your message right now. Please try again." },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        message:
          "Thanks for reaching out. Our team will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 }
    );
  }
}
