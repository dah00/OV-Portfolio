interface SectionTitleProps {
  title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="inline-flex flex-col gap-1">
      <h2 className="text-3xl">{title}</h2>
      {/* Underline spans ~60% of the title's width via the inline-flex container. */}
      <span className="h-1 w-3/5 rounded-2xl bg-foreground" />
    </div>
  )
}
