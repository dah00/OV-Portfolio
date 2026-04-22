import { Resend } from "resend";

export default function Messaging() {
  const resend = new Resend(process.env.RESEND_API_KEY);
  async function serverFn(formData: FormData) {
    "use server";

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const botField = String(formData.get("company") ?? "").trim()

    if (botField) return
    if (!name || !email || !message) {
      return;
    }

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      subject: `Portfolio message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
  }

  return (
    <form
      action={serverFn}
      className="flex flex-col gap-8 px-4  border border-surface bg-surface/20 w-[80%]"
    >
      <div>
        <input
          id="Name"
          name="name"
          type="text"
          autoCapitalize="words"
          autoComplete="name"
          required
        />
      </div>
      <div>
        <input
          id="Email"
          name="email"
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          required
        />
      </div>
      <input
        type="text"
        name="componay"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit" className="cursor-pointer">
        Send Message
      </button>
    </form>
  );
}
