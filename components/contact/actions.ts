"use server"

import { Resend } from "resend"

export type ContactActionState = {
  success: boolean
  message: string
}

const emptyState: ContactActionState = { success: false, message: "" }

/** Pragmatic email shape check (server-side companion to the client `type="email"`). */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function sendMessage(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  const botField = String(formData.get("company") ?? "").trim()

  if (botField) return emptyState
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in your name, email, and message.",
    }
  }

  if (!EMAIL_PATTERN.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM_EMAIL
  const to = process.env.CONTACT_TO_EMAIL

  if (!apiKey || !from || !to) {
    return {
      success: false,
      message:
        "Email is not configured on the server. Add RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL (e.g. in Vercel env).",
    }
  }

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from,
      to,
      subject: `Portfolio message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return {
      success: true,
      message: "Message sent. Thanks for reaching out!",
    }
  } catch {
    return {
      success: false,
      message: "Could not send message right now. Please try again shortly.",
    }
  }
}
