type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  id?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  id,
  as: Tag = "h2",
}: Props) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-berry">
        {eyebrow}
      </p>
      <Tag
        id={id}
        className="mt-3 font-display text-3xl font-semibold leading-tight text-cocoa sm:text-4xl lg:text-5xl"
      >
        {title}
      </Tag>
      {intro && (
        <p className="mt-4 text-base leading-relaxed text-cocoa-soft sm:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}
