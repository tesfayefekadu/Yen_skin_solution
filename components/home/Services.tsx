import Link from "next/link";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";

export default function Services() {
  const featuredServices = services.filter(
    (service) => service.featured
  );

  return (
    <section className="relative overflow-hidden bg-[#FFFDF8] py-24 sm:py-28 lg:py-36">
      
      {/* Decorative circle */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border border-[#B88A3B]/10 sm:h-96 sm:w-96" />

      <Container>

        {/* Section intro */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B88A3B]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B88A3B]">
                Our Services
              </span>
            </div>

            <h2 className="max-w-md text-4xl font-medium leading-[0.98] tracking-[-0.04em] text-[#3A2B22] sm:text-5xl lg:text-6xl">
              Care that begins
              <span className="block font-serif italic text-[#B88A3B]">
                with you.
              </span>
            </h2>
          </div>

          <div className="max-w-lg lg:ml-auto">
            <p className="text-base leading-7 text-[#6B5A49] sm:text-lg">
              Every skin journey is different. Our approach combines
              thoughtful care with personalized skincare solutions
              designed around your individual needs.
            </p>

            <div className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#8A7663]">
              <span className="h-px w-8 bg-[#B88A3B]" />
              Personalized skincare
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mt-16 lg:mt-20">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              description={service.shortDescription}
              href="/services"
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-5 border-t border-[#3A2B22]/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-[#8A7663]">
            Discover the right care for your skin.
          </p>

          <Link
            href="/services"
            className="group inline-flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#3A2B22]"
          >
            View all services

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B88A3B]/40 text-[#B88A3B] transition-all duration-300 group-hover:bg-[#B88A3B] group-hover:text-white">
              →
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}