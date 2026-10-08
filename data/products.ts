export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  featured: boolean;
  available: boolean;
};

export const products: Product[] = [
  {
    id: "product-001",
    name: "Product Name",
    category: "Skincare",
    description:
      "Product description will be added when the actual YEN SKIN SOLUTION product information is available.",
    price: "",
    image: "/images/products/product-001.jpg",
    featured: true,
    available: true,
  },
];