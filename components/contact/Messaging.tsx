"use client"

import { useActionState, useEffect, useRef } from "react"
import { useFormStatus } from "react-dom"
import { initialContactState, sendMessage } from "./actions"

const inputFieldStyling =
  "border-1 border-surface bg-surface/40 w-full px-4 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-accent/60 focus:border-accent"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" className="cursor-pointer text-sm" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </button>
  )
}

export default function Messaging() {
  const [state, formAction] = useActionState(sendMessage, initialContactState)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset()
    }
  }, [state.success])

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col gap-4 px-4 py-6 border border-surface bg-surface/20 rounded-xl w-full"
    >
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        autoCapitalize="words"
        autoComplete="name"
        required
        className={inputFieldStyling}
        aria-label="Visitor's name"
      />

      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        autoCapitalize="none"
        autoComplete="email"
        required
        className={inputFieldStyling}
        aria-label="Visitor's email address"
      />

      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <textarea
        id="message"
        name="message"
        placeholder="Say what's up"
        rows={8}
        required
        className={inputFieldStyling}
      />

      <div className="self-center rounded-xl bg-accent px-4 py-2">
        <SubmitButton />
      </div>
      {state.message ? (
        <p
          className={state.success ? "text-sm text-accent" : "text-sm text-red-400"}
          role="status"
          aria-live="polite"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  )
}
