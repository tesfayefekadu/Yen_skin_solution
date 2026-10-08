import Navbar from "@/components/layout/Navbar";
import Container from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFFDF8] pt-20">
        <section className="py-24 lg:py-32">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7415]">
                Contact
              </p>

              <h1 className="mt-5 text-5xl font-semibold tracking-tight text-[#3A3028] sm:text-6xl">
                Let's talk about
                <br />
                <span className="text-[#9A7415]">your skin.</span>
              </h1>

              <p className="mt-7 text-lg leading-8 text-[#6B5A49]">
                Contact information, booking, location, business hours, and
                enquiry options will be available here.
              </p>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}