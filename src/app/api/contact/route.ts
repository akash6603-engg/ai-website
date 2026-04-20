import { NextResponse } from "next/server";

const HEADERS = ["Timestamp", "Name", "Email", "Company", "Platform", "Message"];

export async function POST(request: Request) {
  try {
    const { name, email, company, platform, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL is not set in .env.local");
      return NextResponse.json({ error: "Server not configured — missing GOOGLE_SCRIPT_URL" }, { status: 500 });
    }

    const res = await fetch(scriptUrl, {
      method: "POST",
      redirect: "follow",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({
        headers: HEADERS,
        row: [
          new Date().toLocaleString("en-GB", { timeZone: "UTC" }),
          name,
          email,
          company || "",
          platform || "",
          message,
        ],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Apps Script error:", text);
      throw new Error(`Script responded with ${res.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Contact API error:", msg);
    return NextResponse.json({ error: "Failed to save submission. " + msg }, { status: 500 });
  }
}
