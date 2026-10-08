import Link from "next/link";
import Container from "@/components/ui/Container";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#F8F3EB] py-24 sm:py-28 lg:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-24">

          {/* Image / Visual */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">

            <div className="relative aspect-[4/5] overflow-hidden rounded-[45px_45px_180px_180px] bg-[#D8C3A5]">

              {/* Temporary image area */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E6D6C0] via-[#F7F1E8] to-[#CBB28D]" />

              {/* Decorative botanical-inspired shapes */}
              <div className="absolute left-[15%] top-[15%] h-32 w-32 rounded-full border border-[#B88A3B]/25" />

              <div className="absolute bottom-[14%] right-[12%] h-44 w-44 rounded-full border border-[#B88A3B]/15" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-serif text-7xl italic text-[#B88A3B]/70">
                    Y
                  </p>

                  <div className="mx-auto mt-3 h-px w-10 bg-[#B88A3B]" />

                  <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-[#6B5A49]">
                    The YEN Philosophy
                  </p>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#3A2B22]/10 via-transparent to-white/10" />
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-5 right-5 rounded-2xl border border-[#3A2B22]/10 bg-[#FFFDF8]/95 px-6 py-5 shadow-xl backdrop-blur-sm sm:right-0">
              <p className="font-serif text-2xl italic text-[#B88A3B]">
                Since
              </p>

              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#6B5A49]">
                YEN Skin Solution
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-xl">

            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B88A3B]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B88A3B]">
                About YEN
              </span>
            </div>

            <h2 className="text-4xl font-medium leading-[1] tracking-[-0.04em] text-[#3A2B22] sm:text-5xl lg:text-6xl">
              Beauty begins with
              <span className="block font-serif italic text-[#B88A3B]">
                understanding.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-7 text-[#6B5A49]">
              <p>
                At YEN Skin Solution, we believe skincare should be
                personal. Your skin has its own needs, story, and
                natural beauty.
              </p>

              <p>
                Our approach is centered around thoughtful care,
                personalized guidance, and helping you build a
                skincare journey that feels right for you.
              </p>
            </div>

            <Link
              href="/about"
              className="group mt-9 inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3A2B22]"
            >
              Discover our story

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B88A3B]/40 text-[#B88A3B] transition-all duration-300 group-hover:bg-[#B88A3B] group-hover:text-white">
                →
              </span>
            </Link>

          </div>
        </div>
      </Container>
    </section>
  );
}