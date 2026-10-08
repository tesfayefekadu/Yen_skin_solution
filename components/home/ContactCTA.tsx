import Link from "next/link";
import Container from "@/components/ui/Container";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#F8F3EB] py-24 sm:py-28 lg:py-36">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full border border-[#B88A3B]/15" />

      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[30rem] w-[30rem] rounded-full border border-[#B88A3B]/10" />

      <Container>
        <div className="relative overflow-hidden rounded-[40px] bg-[#3A2B22] px-7 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          
          {/* Inner decorative circle */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#B88A3B]/20" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full border border-[#FFFDF8]/5" />

          <div className="relative z-10 grid gap-14 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
            
            {/* Main message */}
            <div className="max-w-3xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#B88A3B]" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B88A3B]">
                  Begin Your Journey
                </span>
              </div>

              <h2 className="text-4xl font-medium leading-[1] tracking-[-0.04em] text-[#FFFDF8] sm:text-5xl lg:text-7xl">
                Your skin deserves
                <span className="block font-serif italic text-[#B88A3B]">
                  thoughtful care.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-7 text-[#D8CBBF]">
                Whether you're beginning your skincare journey or looking
                for a more personalized approach, we're here to help you
                understand what your skin needs.
              </p>
            </div>

            {/* CTA */}
            <div className="lg:pb-1">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFFDF8]"
              >
                <span>Book a consultation</span>

                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#B88A3B]/60 text-lg text-[#B88A3B] transition-all duration-300 group-hover:bg-[#B88A3B] group-hover:text-white">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Bottom information */}
          <div className="relative z-10 mt-16 border-t border-[#FFFDF8]/10 pt-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              
              <p className="text-[9px] uppercase tracking-[0.25em] text-[#B8A99B]">
                Personalized skincare · Thoughtful care · YEN Skin Solution
              </p>

              <Link
                href="/contact"
                className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#B88A3B] transition-colors hover:text-[#FFFDF8]"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}