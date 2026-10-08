export type Service = {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  featured: boolean;
};

export const services: Service[] = [
  {
    id: "skin-consultation",
    number: "01",
    title: "Skin Consultation",
    shortDescription:
      "Personalized skincare guidance based on your individual needs.",
    description:
      "Detailed service information will be added when the actual YEN SKIN SOLUTION service details are available.",
    image: "/images/services/skin-consultation.jpg",
    featured: true,
  },
  {
    id: "facial-treatments",
    number: "02",
    title: "Facial Treatments",
    shortDescription:
      "Professional facial care focused on healthy-looking skin.",
    description:
      "Detailed service information will be added when the actual YEN SKIN SOLUTION service details are available.",
    image: "/images/services/facial-treatments.jpg",
    featured: true,
  },
  {
    id: "acne-blemish-care",
    number: "03",
    title: "Acne & Blemish Care",
    shortDescription:
      "Targeted care for blemish-prone and uneven-looking skin.",
    description:
      "Detailed service information will be added when the actual YEN SKIN SOLUTION service details are available.",
    image: "/images/services/acne-blemish-care.jpg",
    featured: true,
  },
  {
    id: "glow-brightening",
    number: "04",
    title: "Glow & Brightening",
    shortDescription:
      "Skincare focused on a fresh and radiant-looking complexion.",
    description:
      "Detailed service information will be added when the actual YEN SKIN SOLUTION service details are available.",
    image: "/images/services/glow-brightening.jpg",
    featured: true,
  },
];