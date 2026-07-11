interface SectionTitleProps {
  title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex w-fit flex-col gap-1">
      <h2 className="text-3xl">{title}</h2>
      {/* w-fit shrinks this box to the title width even when SectionTitle is a
          stretched flex item, so the underline stays ~60% of the title. */}
      <span className="h-1 w-3/5 rounded-2xl bg-foreground" />
    </div>
  )
}
