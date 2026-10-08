import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8F3EB]">

      {/* Decorative gold arc */}
      <div className="absolute -right-40 top-28 h-[520px] w-[520px] rounded-full border border-[#B88A3B]/20 sm:h-[650px] sm:w-[650px]" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-5 pb-16 pt-32 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8 lg:pb-10">

        {/* Left content */}
        <div className="relative z-10 max-w-xl">

          <div className="mb-7 flex items-center gap-3">
            <span className="h-px w-11 bg-[#B88A3B]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#B88A3B]">
              YEN SKIN SOLUTION
            </span>
          </div>

          <h1 className="text-[clamp(3.8rem,7vw,6.8rem)] font-medium leading-[0.88] tracking-[-0.055em] text-[#3A2B22]">
            Your skin.
            <br />
            <span className="font-serif italic text-[#B88A3B]">
              Your glow.
            </span>
          </h1>

          <p className="mt-8 max-w-md text-base leading-7 text-[#6B5A49] sm:text-lg">
            Thoughtful skincare solutions designed to reveal
            and enhance your natural beauty.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-4 rounded-full bg-[#3A2B22] px-7 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#B88A3B] hover:shadow-lg"
            >
              Book a Consultation
              <span>→</span>
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-3 px-5 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#6B5A49]"
            >
              Explore Services
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Brand values */}
          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 text-[10px] uppercase tracking-[0.16em] text-[#8A7663]">
            <span>Natural Care</span>
            <span className="h-4 w-px bg-[#B88A3B]/40" />
            <span>Safe &amp; Gentle</span>
            <span className="h-4 w-px bg-[#B88A3B]/40" />
            <span>Personalized Care</span>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative z-10 mx-auto w-full max-w-[570px] lg:ml-auto">

          <div className="relative aspect-[4/5] overflow-hidden rounded-[220px_220px_45px_45px] bg-[#D8C3A5]">

            {/* Temporary premium visual */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E9DCC9] via-[#F7F1E8] to-[#CBB28D]" />

            {/* Decorative circles */}
            <div className="absolute right-[12%] top-[12%] h-32 w-32 rounded-full border border-[#B88A3B]/30" />

            <div className="absolute bottom-[13%] left-[10%] h-24 w-24 rounded-full bg-[#B88A3B]/10" />

            {/* Placeholder brand composition */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-serif text-6xl italic text-[#B88A3B]/80">
                  Yen
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.38em] text-[#6B5A49]">
                  Skin Solution
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#3A2B22]/10 via-transparent to-white/10" />
          </div>

          {/* Floating information card */}
          <div className="absolute -bottom-5 left-4 rounded-2xl border border-[#3A2B22]/10 bg-[#FFFDF8]/95 px-5 py-4 shadow-xl backdrop-blur-sm sm:left-0">
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#B88A3B]">
              Skin Care
            </p>

            <p className="mt-1 text-sm font-medium text-[#3A2B22]">
              Designed for you
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-[#8A7663] sm:flex">
        <span>Scroll to discover</span>
        <span className="h-px w-8 bg-[#B88A3B]" />
      </div>
    </section>
  );
}