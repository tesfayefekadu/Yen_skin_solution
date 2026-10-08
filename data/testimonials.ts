export type Testimonial = {
  id: string;
  name: string;
  text: string;
  rating: number;
  featured: boolean;
};

export const testimonials: Testimonial[] = [];