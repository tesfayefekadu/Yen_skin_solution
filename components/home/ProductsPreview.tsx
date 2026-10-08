import Link from "next/link";
import Container from "@/components/ui/Container";

const products = [
  {
    number: "01",
    category: "Daily Care",
    name: "The Essential",
    description: "A thoughtful everyday skincare ritual.",
    tone: "from-[#EEE4D5] via-[#F8F4ED] to-[#D8C4A7]",
  },
  {
    number: "02",
    category: "Glow Care",
    name: "The Radiance",
    description: "Designed for a fresh, luminous-looking complexion.",
    tone: "from-[#E7D8C7] via-[#FAF6EF] to-[#CDB08A]",
  },
  {
    number: "03",
    category: "Targeted Care",
    name: "The Balance",
    description: "Focused care for skin that needs a little more attention.",
    tone: "from-[#DDD5C8] via-[#F5F1EA] to-[#BFA98A]",
  },
];

export default function ProductsPreview() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] py-24 sm:py-28 lg:py-36">
      <Container>
        {/* Heading */}
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#B88A3B]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B88A3B]">
              The Collection
            </span>
          </div>

          <h2 className="text-4xl font-medium leading-[1] tracking-[-0.04em] text-[#3A2B22] sm:text-5xl lg:text-6xl">
            Skincare chosen
            <span className="block font-serif italic text-[#B88A3B]">
              with intention.
            </span>
          </h2>

          <p className="mt-7 max-w-lg text-base leading-7 text-[#6B5A49]">
            Thoughtfully selected skincare designed to complement your
            routine and support the needs of your skin.
          </p>
        </div>

        {/* Products */}
        <div className="mt-16 grid gap-8 md:grid-cols-3 lg:mt-20 lg:gap-10">
          {products.map((product) => (
            <article key={product.number} className="group">
              {/* Product visual */}
              <div
                className={`relative aspect-[4/5] overflow-hidden rounded-[32px] bg-gradient-to-br ${product.tone}`}
              >
                {/* Decorative circles */}
                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-[#B88A3B]/15" />

                <div className="absolute -bottom-20 -left-12 h-44 w-44 rounded-full border border-[#B88A3B]/15" />

                {/* Product placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-64 w-32 transition-transform duration-700 ease-out group-hover:-translate-y-2">
                    {/* Bottle */}
                    <div className="absolute bottom-0 left-1/2 h-52 w-28 -translate-x-1/2 rounded-[18px_18px_24px_24px] border border-[#8D765C]/20 bg-[#F8F3EB]/80 shadow-xl backdrop-blur-sm">
                      <div className="absolute left-1/2 top-1/2 w-20 -translate-x-1/2 -translate-y-1/2 text-center">
                        <p className="font-serif text-2xl italic text-[#B88A3B]">
                          YEN
                        </p>

                        <div className="mx-auto my-2 h-px w-6 bg-[#B88A3B]" />

                        <p className="text-[6px] uppercase tracking-[0.25em] text-[#6B5A49]">
                          Skin Solution
                        </p>
                      </div>
                    </div>

                    {/* Cap */}
                    <div className="absolute left-1/2 top-1 h-14 w-20 -translate-x-1/2 rounded-t-lg rounded-b-sm bg-[#C7B297] shadow-md" />
                  </div>
                </div>

                {/* Number */}
                <span className="absolute left-6 top-6 text-[10px] font-semibold tracking-[0.2em] text-[#6B5A49]/70">
                  {product.number}
                </span>

                {/* Hover overlay */}
                <div className="absolute inset-x-0 bottom-0 h-24 translate-y-full bg-gradient-to-t from-[#3A2B22]/15 to-transparent transition-transform duration-500 group-hover:translate-y-0" />
              </div>

              {/* Product information */}
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#B88A3B]">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em] text-[#3A2B22]">
                    {product.name}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-[#6B5A49]">
                    {product.description}
                  </p>
                </div>

                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B88A3B]/30 text-sm text-[#B88A3B] transition-all duration-300 group-hover:bg-[#B88A3B] group-hover:text-white">
                  ↗
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex justify-start lg:mt-16">
          <Link
            href="/products"
            className="group inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3A2B22]"
          >
            View all products

            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B88A3B]/40 text-[#B88A3B] transition-all duration-300 group-hover:bg-[#B88A3B] group-hover:text-white">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}