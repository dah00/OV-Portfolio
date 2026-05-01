interface SectionTitleProps {
  title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="text-3xl">{title}</h2>
      {/* TODO: make span's width 80% of title's length */}
      <span className="h-1 w-20 rounded-2xl bg-foreground" />
    </div>
  )
}
