import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <main className="bg-[#FFFDF8] text-[#3A2B22]">
      <Navbar />

      {/* Hero */}
      <section className="overflow-hidden border-b border-[#3A2B22]/10">
        <Container>
          <div className="grid min-h-[70vh] items-center gap-16 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-28">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B88A3B]">
                About YEN
              </p>

              <h1 className="mt-6 max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Beauty begins with{" "}
                <span className="italic text-[#8A6A4A]">
                  understanding.
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-base leading-8 text-[#6B5A49]">
                YEN Skin Solution is built around a simple idea: skincare
                should begin with understanding your skin, not following
                trends.
              </p>

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#3A2B22]"
              >
                Start your journey
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[55px_45px_180px_180px] bg-[#EDE3D6]">
                <Image 
                  src="/images/logo/yen-logo-transparent.png"
                  alt="YEN Skin Solution"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 2040px) 100vw, 50vw"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 hidden rounded-full border border-[#B88A3B]/30 bg-[#FFFDF8] px-7 py-7 sm:block">
                <p className="font-serif text-2xl italic text-[#8A6A4A]">
                  Skin, understood.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="bg-[#F8F3EB] py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B88A3B]">
                Our Philosophy
              </p>

              <p className="mt-5 font-serif text-3xl italic leading-tight text-[#8A6A4A] sm:text-4xl">
                Thoughtful care over complicated routines.
              </p>
            </div>

            <div className="max-w-2xl">
              <p className="text-lg leading-9 text-[#4D3C30]">
                Every person’s skin is different. That is why YEN focuses on
                thoughtful care, individual needs, and routines that make sense
                for real life.
              </p>

              <p className="mt-7 text-base leading-8 text-[#6B5A49]">
                Rather than overwhelming you with unnecessary steps, our
                approach is centered on helping you understand your skin and
                make intentional choices about how you care for it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What makes YEN different */}
      <section className="py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B88A3B]">
              The YEN Approach
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
              A more intentional way to care for your skin.
            </h2>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[30px] bg-[#3A2B22]/10 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Understand",
                text: "Start by understanding what your skin needs rather than guessing.",
              },
              {
                number: "02",
                title: "Personalize",
                text: "Build an approach that reflects your individual skin and lifestyle.",
              },
              {
                number: "03",
                title: "Simplify",
                text: "Focus on thoughtful choices instead of unnecessary complexity.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="bg-[#FFFDF8] p-8 sm:p-10 lg:p-12"
              >
                <span className="font-serif text-2xl italic text-[#B88A3B]">
                  {item.number}
                </span>

                <h3 className="mt-10 font-serif text-3xl">
                  {item.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#6B5A49]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="bg-[#F8F3EB] py-24 sm:py-28">
        <Container>
          <div className="rounded-[40px] bg-[#3A2B22] px-7 py-16 text-center text-[#FFFDF8] sm:px-12 sm:py-20 lg:px-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B88A3B]">
              Your Skin, Your Journey
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl lg:text-6xl">
              Let’s make skincare feel more intentional.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#CBBEB1]">
              Discover an approach to skincare built around understanding,
              thoughtful choices, and care that feels personal.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-4 rounded-full bg-[#FFFDF8] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3A2B22] transition-transform duration-300 hover:-translate-y-1"
            >
              Book a consultation
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}