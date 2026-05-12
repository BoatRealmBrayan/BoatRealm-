const BREVO_API_BASE_URL = "https://api.brevo.com/v3";

type BrevoConfigResult =
  | { ok: true; value: string }
  | { ok: false; missing: string[] };

type ContactEmailPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type BrevoErrorPayload = {
  message?: string;
  code?: string;
};

function getRequiredEnv(...keys: string[]): BrevoConfigResult {
  const missing = keys.filter((key) => !process.env[key]?.trim());

  if (missing.length > 0) {
    return { ok: false, missing };
  }

  return { ok: true, value: "ok" };
}

async function parseBrevoError(response: Response): Promise<string> {
  try {
    const body = (await response.json()) as BrevoErrorPayload;
    return body.message ?? body.code ?? `Brevo request failed with ${response.status}`;
  } catch {
    return `Brevo request failed with ${response.status}`;
  }
}

async function brevoRequest(
  path: string,
  apiKey: string,
  body: unknown
): Promise<Response> {
  return fetch(`${BREVO_API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(body),
  });
}

export async function subscribeNewsletterEmail(email: string): Promise<{
  ok: true;
} | {
  ok: false;
  message: string;
  missing?: string[];
}> {
  const env = getRequiredEnv("BREVO_API_KEY", "BREVO_NEWSLETTER_LIST_ID");
  if (!env.ok) {
    return {
      ok: false,
      message: "Newsletter service is not configured yet.",
      missing: env.missing,
    };
  }

  const apiKey = process.env.BREVO_API_KEY!.trim();
  const listId = Number.parseInt(process.env.BREVO_NEWSLETTER_LIST_ID!.trim(), 10);

  if (Number.isNaN(listId) || listId <= 0) {
    return {
      ok: false,
      message: "BREVO_NEWSLETTER_LIST_ID must be a positive integer.",
    };
  }

  const response = await brevoRequest("/contacts", apiKey, {
    email,
    listIds: [listId],
    updateEnabled: true,
  });

  if (!response.ok) {
    return {
      ok: false,
      message: await parseBrevoError(response),
    };
  }

  return { ok: true };
}

export async function sendContactEmail(payload: ContactEmailPayload): Promise<{
  ok: true;
} | {
  ok: false;
  message: string;
  missing?: string[];
}> {
  const env = getRequiredEnv(
    "BREVO_API_KEY",
    "BREVO_CONTACT_TO_EMAIL",
    "BREVO_SENDER_EMAIL"
  );

  if (!env.ok) {
    return {
      ok: false,
      message: "Contact service is not configured yet.",
      missing: env.missing,
    };
  }

  const apiKey = process.env.BREVO_API_KEY!.trim();
  const toEmail = process.env.BREVO_CONTACT_TO_EMAIL!.trim();
  const senderEmail = process.env.BREVO_SENDER_EMAIL!.trim();
  const senderName = process.env.BREVO_SENDER_NAME?.trim() || "BoatRealm Website";

  const subject = `New contact form submission from ${payload.name}`;
  const textContent = [
    "New contact message from boatrealm.com",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Fleet name: ${payload.company || "(not provided)"}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const response = await brevoRequest("/smtp/email", apiKey, {
    sender: {
      email: senderEmail,
      name: senderName,
    },
    to: [{ email: toEmail }],
    replyTo: {
      email: payload.email,
      name: payload.name,
    },
    subject,
    textContent,
  });

  if (!response.ok) {
    return {
      ok: false,
      message: await parseBrevoError(response),
    };
  }

  return { ok: true };
}
