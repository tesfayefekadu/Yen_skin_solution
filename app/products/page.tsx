import Navbar from "@/components/layout/Navbar";
import Container from "@/components/ui/Container";

export default function ProductsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#F8F1E5] pt-20">
        <section className="py-24 lg:py-32">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A7415]">
                Our Products
              </p>

              <h1 className="mt-5 text-5xl font-semibold tracking-tight text-[#3A3028] sm:text-6xl">
                Skincare selected
                <br />
                <span className="text-[#9A7415]">with intention.</span>
              </h1>

              <p className="mt-7 text-lg leading-8 text-[#6B5A49]">
                Our product collection will be presented here, including
                product details, pricing, and enquiry options.
              </p>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}