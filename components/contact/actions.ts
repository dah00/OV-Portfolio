"use server"

import { Resend } from "resend"

export type ContactActionState = {
  success: boolean
  message: string
}

export const initialContactState: ContactActionState = {
  success: false,
  message: "",
}

export async function sendMessage(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  const botField = String(formData.get("company") ?? "").trim()

  if (botField) return initialContactState
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill in your name, email, and message.",
    }
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
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
