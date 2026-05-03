import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body.from_name ?? "").trim();
    const email = String(body.from_email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { data: { error: "Name, email, and message are required." } },
        { status: 400 },
      );
    }

    const user = process.env.MAIL_USER;
    const pass = process.env.MAIL_PASS;
    const to = process.env.MAIL_TO ?? user;

    if (!user || !pass || !to) {
      return NextResponse.json(
        { data: { error: "Mail service is not configured." } },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    await transporter.sendMail({
      from: user,
      replyTo: email,
      to,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email} \n\n${message}`,
      html: `
        <p><b>Name:</b> ${safeName}</p>
        <p><b>Email:</b> ${safeEmail}</p>
        <p><b>Message:</b>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ data: { mesg: "done" } });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { data: { error: "Message could not be sent." } },
      { status: 500 },
    );
  }
}
