import nodemailer from "nodemailer"
import { NextRequest, NextResponse } from "next/server"

// NOTE: make sure you set SMTP_USER and SMTP_PASS in your .env (or use an
// external service like SendGrid, Mailgun etc.). For Gmail you may need an
// app-specific password or OAuth2 configuration.

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { name, email, message, attachments } = data

    if (!email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 })
    }

    // If a SendGrid API key is provided, prefer sending through SendGrid's
    // Web API so you don't need an SMTP password (safer for many setups).
    const sendgridKey = process.env.SENDGRID_API_KEY
    if (sendgridKey) {
      const fromEmail = process.env.FROM_EMAIL || process.env.SMTP_USER || "no-reply@example.com"
      const displayName = name ? `${name} via Portfolio` : `Website Visitor via Portfolio`
      const payload: any = {
        personalizations: [
          { to: [{ email: "dhruvsaini137@gmail.com" }] },
        ],
        from: { email: fromEmail, name: displayName },
        subject: `New message from ${name || "visitor"}`,
        content: [{ type: "text/plain", value: `${message}\n\n— ${name} <${email}>` }],
      }

      if (attachments && Array.isArray(attachments)) {
        // SendGrid expects attachments with base64 content
        payload.attachments = attachments.map((a: any) => ({
          content: a.content,
          filename: a.filename,
          type: a.type || 'application/octet-stream',
          disposition: 'attachment',
        }))
      }

      const sgRes = await fetch("https://api.sendgrid.com/v3/mail/send", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${sendgridKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!sgRes.ok) {
        const text = await sgRes.text()
        console.error("SendGrid error", sgRes.status, text)
        return NextResponse.json({ ok: false, error: `SendGrid error ${sgRes.status}` }, { status: 502 })
      }

      return NextResponse.json({ ok: true })
    }

    // Otherwise fall back to nodemailer using SMTP. If SMTP credentials
    // are missing, create an Ethereal test account so the form still works
    // and provides a preview URL for development.
    let transporter
    let usingTestAccount = false

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT) || 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })
    } else {
      usingTestAccount = true
      const testAccount = await nodemailer.createTestAccount()
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      })
      console.log("[contact] using ethereal test account", testAccount)
    }

    const fromAddress = process.env.SMTP_USER || "nodemailer@test"
    const fromDisplay = name ? `${name} via Portfolio` : `Website Visitor via Portfolio`
    const mailOptions: any = {
      from: `"${fromDisplay}" <${fromAddress}>`,
      to: "dhruvsaini137@gmail.com",
      subject: `New message from ${name || "visitor"}`,
      text: `${message}\n\n— ${name} <${email}>`,
      replyTo: email,
    }

    if (attachments && Array.isArray(attachments)) {
      mailOptions.attachments = attachments.map((a: any) => ({
        filename: a.filename,
        content: Buffer.from(a.content, 'base64'),
        contentType: a.type || 'application/octet-stream',
      }))
    }

    const info = await transporter.sendMail(mailOptions)

    console.log("mail sent", info.messageId)
    let previewUrl: string | null = null
    if (nodemailer.getTestMessageUrl) {
      previewUrl = nodemailer.getTestMessageUrl(info) || null
      if (previewUrl) console.log("preview URL:", previewUrl)
    }

    return NextResponse.json({ ok: true, previewUrl, usingTestAccount })
  } catch (err: any) {
    console.error("send error:", err)
    return NextResponse.json(
      { ok: false, error: err.message || "Failed to send" },
      { status: 500 }
    )
  }
}
