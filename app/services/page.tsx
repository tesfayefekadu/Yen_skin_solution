import Navbar from "@/components/layout/Navbar";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FFFDF8] pt-20">
        <section className="py-24 lg:py-32">
          <Container>
            <SectionHeading
              eyebrow="Our Services"
              title="Care created around your skin."
              description="Explore our skincare services and discover an approach designed around individual skin needs."
              centered
            />

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard
                  key={service.number}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}