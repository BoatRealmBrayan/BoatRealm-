import { NextResponse } from "next/server";
import { subscribeNewsletterEmail } from "@/app/lib/brevo";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let email: string | undefined;

  try {
    const body = (await request.json()) as { email?: string };
    email = body.email?.trim().toLowerCase();

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: "Enter a valid email address." },
        { status: 400 }
      );
    }
  } catch {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 }
    );
  }

  try {
    const result = await subscribeNewsletterEmail(email);

    if (!result.ok) {
      console.error("Newsletter subscription failed", {
        message: result.message,
        missing: result.missing,
      });

      return NextResponse.json(
        { message: "Unable to subscribe right now. Please try again shortly." },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        message:
          "Thanks for subscribing. We will send release updates and maintenance tips.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: "Unable to subscribe right now. Please try again shortly." },
      { status: 503 }
    );
  }
}
