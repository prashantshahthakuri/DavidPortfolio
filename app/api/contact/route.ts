import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, service, message, honeypot } = body;

    // Spam honeypot protection
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Message received." });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const recipientEmail = "Davidthakuri195@gmail.com";
    const gmailUser = process.env.GMAIL_USER || process.env.EMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS;
    const web3formsKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    // Option 1: Send via Nodemailer (Gmail / SMTP)
    if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${gmailUser}>`,
        replyTo: email,
        to: recipientEmail,
        subject: `[${service || "Portfolio Inquiry"}] New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #333; margin-top: 0;">New Inquiry from Portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Service / Interest:</strong> ${service || "General"}</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <h3 style="color: #555;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6; color: #444;">${message}</p>
          </div>
        `,
      });

      return NextResponse.json({
        success: true,
        message: "Message sent directly to inbox!",
      });
    }

    // Option 2: Send via Web3Forms API if key is present
    if (web3formsKey) {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name,
          email,
          service: service || "General Inquiry",
          message,
          from_name: `${name} (Portfolio Inquiry)`,
          subject: `[${service || "Inquiry"}] New message from ${name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        return NextResponse.json({
          success: true,
          message: "Message sent directly to inbox!",
        });
      }
    }

    // If no credentials configured yet, return fallback signal
    return NextResponse.json({
      success: false,
      fallback: true,
      message: "Opening Gmail composer with your message prefilled...",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        fallback: true,
        message: "Backend error, falling back to Gmail composer...",
      },
      { status: 500 }
    );
  }
}
