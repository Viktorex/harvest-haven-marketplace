
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  stock: number;
  unit: string;
  origin: string;
  isBestseller?: boolean;
  isNew?: boolean;
  isOrganic?: boolean;
}

export const products: Product[] = [
  {
    id: "prod-01",
    name: "Organic Heirloom Tomatoes",
    description: "Vibrant, flavorful organic heirloom tomatoes. Perfect for salads, sauces, or eating fresh. Grown with sustainable farming practices to ensure the best taste and nutritional value.",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=800&auto=format&fit=crop",
    category: "vegetables",
    featured: true,
    stock: 50,
    unit: "pound",
    origin: "Local Farm",
    isBestseller: true,
    isOrganic: true
  },
  {
    id: "prod-02",
    name: "Fresh Avocados",
    description: "Creamy, ripe avocados. Rich in healthy fats and perfect for guacamole, sandwiches, or as a nutritious addition to any meal.",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1601039641847-7857b994d704?q=80&w=800&auto=format&fit=crop",
    category: "fruits",
    featured: true,
    stock: 35,
    unit: "each",
    origin: "Mexico",
    isBestseller: true
  },
  {
    id: "prod-03",
    name: "Premium Honey",
    description: "Pure, unfiltered honey collected from wildflower meadows. This golden honey has a complex flavor profile with subtle floral notes.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=800&auto=format&fit=crop",
    category: "pantry",
    featured: true,
    stock: 20,
    unit: "jar",
    origin: "Local Apiary",
    isOrganic: true
  },
  {
    id: "prod-04",
    name: "Artisanal Sourdough Bread",
    description: "Handcrafted sourdough with a perfectly crisp crust and tender interior. Made with organic flour and our special 5-year-old starter culture.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=800&auto=format&fit=crop",
    category: "bakery",
    featured: true,
    stock: 15,
    unit: "loaf",
    origin: "In-house Bakery",
    isNew: true
  },
  {
    id: "prod-05",
    name: "Organic Kale Bunch",
    description: "Fresh, crisp organic kale rich in vitamins and minerals. Versatile for salads, smoothies, or sautéed as a nutritious side dish.",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?q=80&w=800&auto=format&fit=crop",
    category: "vegetables",
    featured: false,
    stock: 40,
    unit: "bunch",
    origin: "Local Farm",
    isOrganic: true
  },
  {
    id: "prod-06",
    name: "Free-Range Eggs",
    description: "Farm-fresh eggs from free-range chickens. These eggs feature vibrant, golden yolks and exceptional flavor.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1598965675045-45c7c820b077?q=80&w=800&auto=format&fit=crop",
    category: "dairy",
    featured: false,
    stock: 30,
    unit: "dozen",
    origin: "Family Farm",
    isBestseller: true
  },
  {
    id: "prod-07",
    name: "Artisan Goat Cheese",
    description: "Creamy, tangy goat cheese handcrafted in small batches. Perfect for salads, pasta, or paired with fresh fruit and honey.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?q=80&w=800&auto=format&fit=crop",
    category: "dairy",
    featured: false,
    stock: 25,
    unit: "8 oz",
    origin: "Local Creamery"
  },
  {
    id: "prod-08",
    name: "Fresh Blueberries",
    description: "Sweet, plump blueberries bursting with flavor and antioxidants. Perfect for snacking, baking, or adding to breakfast dishes.",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?q=80&w=800&auto=format&fit=crop",
    category: "fruits",
    featured: false,
    stock: 45,
    unit: "pint",
    origin: "Regional Farm",
    isNew: true
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "vegetables", name: "Vegetables" },
  { id: "fruits", name: "Fruits" },
  { id: "dairy", name: "Dairy & Eggs" },
  { id: "bakery", name: "Bakery" },
  { id: "pantry", name: "Pantry" }
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}

export function searchProducts(query: string): Product[] {
  const searchTerm = query.toLowerCase();
  return products.filter(
    product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm)
  );
}
