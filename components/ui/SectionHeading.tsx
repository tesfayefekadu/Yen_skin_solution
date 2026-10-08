type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto text-center" : ""}>
      <div
        className={`mb-5 flex items-center gap-3 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-10 bg-[#C9A227]" />

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7415]">
          {eyebrow}
        </p>

        {centered && <span className="h-px w-10 bg-[#C9A227]" />}
      </div>

      <h2 className="text-4xl font-semibold tracking-tight text-[#3A3028] sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-7 text-[#6B5A49]">
          {description}
        </p>
      )}
    </div>
  );
}