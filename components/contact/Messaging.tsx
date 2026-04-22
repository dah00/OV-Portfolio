"use client"

export default function Messaging() {
  const handleSubmit = () => {}

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="fex flex-col gap-8 px-4  border border-surface bg-surface/20 w-[80%]"
    >
      <div>
        <input
          id="Name"
          name="name"
          type="text"
          autoCapitalize="true"
          autoComplete="name"
          required
        />
      </div>
      <div>
        <input
          id="Email"
          name="email"
          type="text"
          autoCapitalize="false"
          autoComplete="name"
          required
        />
      </div>
      <div>
        <textarea />
      </div>
      <button type="submit">Send Message</button>
    </form>
  )
}
