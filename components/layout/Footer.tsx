import Link from "next/link";
import Container from "@/components/ui/Container";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2C211B] text-[#FFFDF8]">
      <Container>
        {/* Main footer */}
        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:gap-20 lg:py-24">

          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="inline-block">
              <span className="font-serif text-4xl italic tracking-[-0.04em] text-[#B88A3B]">
                YEN
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#CBBEB1]">
              Thoughtful skincare, personalized care, and a deeper
              understanding of what your skin needs.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#FFFDF8]"
            >
              Begin your journey

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#B88A3B]">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="w-fit text-sm text-[#CBBEB1] transition-colors duration-300 hover:text-[#FFFDF8]"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#B88A3B]">
              Connect
            </p>

            <div className="mt-6 space-y-4 text-sm text-[#CBBEB1]">
              {/* Temporary placeholders — replace with client details */}
              <p>Instagram</p>
              <p>WhatsApp</p>
              <p>Email</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#FFFDF8]/10 py-7">
          <div className="flex flex-col gap-4 text-[9px] uppercase tracking-[0.2em] text-[#9E9084] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} YEN Skin Solution. All rights
              reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="transition-colors hover:text-[#FFFDF8]"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="transition-colors hover:text-[#FFFDF8]"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}