"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    quote:
      "YEN made my skincare journey feel personal. For the first time, I felt like I truly understood what my skin needed.",
    name: "Client One",
    detail: "YEN Skin Solution Client",
  },
  {
    quote:
      "The experience feels thoughtful from beginning to end. My skin feels healthier, and my routine finally makes sense.",
    name: "Client Two",
    detail: "YEN Skin Solution Client",
  },
  {
    quote:
      "What I loved most was the attention to my individual needs. It never felt rushed or like a one-size-fits-all approach.",
    name: "Client Three",
    detail: "YEN Skin Solution Client",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="relative overflow-hidden bg-[#3A2B22] py-24 text-[#FFFDF8] sm:py-28 lg:py-36">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-[#B88A3B]/20" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full border border-[#B88A3B]/10" />

      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-24">

          {/* Intro */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#B88A3B]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B88A3B]">
                Client Stories
              </span>
            </div>

            <h2 className="text-4xl font-medium leading-[1] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Skin stories
              <span className="block font-serif italic text-[#B88A3B]">
                worth sharing.
              </span>
            </h2>

            <p className="mt-7 max-w-sm text-sm leading-7 text-[#D8CBBF]">
              Every skin journey is different. These words reflect the
              thoughtful care and personal experience we aim to create
              at YEN.
            </p>
          </div>

          {/* Testimonial */}
          <div className="relative">

            {/* Large quotation mark */}
            <div className="absolute -left-4 -top-12 font-serif text-[120px] leading-none text-[#B88A3B]/20 sm:-left-8">
              “
            </div>

            <div
              key={activeIndex}
              className="relative border-l border-[#B88A3B]/40 pl-8 animate-[fadeIn_500ms_ease-in-out] sm:pl-12"
            >
              <blockquote className="max-w-3xl font-serif text-3xl leading-[1.3] text-[#FFFDF8] sm:text-4xl lg:text-[42px]">
                {activeTestimonial.quote}
              </blockquote>

              <div className="mt-10 flex items-center gap-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B88A3B]/50">
                  <span className="font-serif text-lg italic text-[#B88A3B]">
                    Y
                  </span>
                </div>

                <div>
                  <p className="text-sm font-medium text-[#FFFDF8]">
                    {activeTestimonial.name}
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-[#B8A99B]">
                    {activeTestimonial.detail}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation indicators */}
            <div className="mt-12 flex items-center gap-3 pl-8 sm:pl-12">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View testimonial ${index + 1}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`h-1 transition-all duration-300 ${
                    activeIndex === index
                      ? "w-10 bg-[#B88A3B]"
                      : "w-5 bg-[#FFFDF8]/20 hover:bg-[#B88A3B]/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-24 border-t border-[#FFFDF8]/10 pt-8 lg:mt-32">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#B8A99B]">
              Your skin. Your story. Your journey.
            </p>

            <span className="font-serif text-lg italic text-[#B88A3B]">
              YEN Skin Solution
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}