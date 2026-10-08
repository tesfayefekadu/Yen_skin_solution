import Link from "next/link";

type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
  href?: string;
};

export default function ServiceCard({
  number,
  title,
  description,
  href = "/services",
}: ServiceCardProps) {
  return (
    <article className="group border-t border-[#3A2B22]/15 py-8 transition-all duration-500 first:border-t-0 sm:first:border-t sm:py-10">
      <div className="grid gap-6 sm:grid-cols-[80px_1fr_auto] sm:items-start sm:gap-8">

        {/* Number */}
        <div>
          <span className="font-serif text-lg italic text-[#B88A3B]">
            {number}
          </span>
        </div>

        {/* Content */}
        <div>
          <h3 className="text-2xl font-medium tracking-[-0.02em] text-[#3A2B22] transition-colors duration-300 group-hover:text-[#B88A3B] sm:text-3xl">
            {title}
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-7 text-[#6B5A49] sm:text-base">
            {description}
          </p>
        </div>

        {/* Arrow */}
        <div className="sm:pt-1">
          <Link
            href={href}
            aria-label={`Learn more about ${title}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B88A3B]/40 text-[#B88A3B] transition-all duration-300 group-hover:bg-[#B88A3B] group-hover:text-white"
          >
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              ↗
            </span>
          </Link>
        </div>
      </div>

      {/* Hover accent */}
      <div className="mt-7 h-px w-0 bg-[#B88A3B] transition-all duration-500 group-hover:w-full" />
    </article>
  );
}