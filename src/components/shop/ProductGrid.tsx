
import { useState, useEffect } from 'react';
import { ProductCard } from '@/components/ui/ProductCard';
import { Product } from '@/lib/products';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  searchQuery?: string;
}

export function ProductGrid({ products, loading = false, searchQuery = '' }: ProductGridProps) {
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    if (loading) {
      setVisibleProducts([]);
      return;
    }
    
    // Add products one by one with a slight delay for animation
    const timer = setTimeout(() => {
      if (products.length > 0) {
        const addProductWithDelay = (index: number) => {
          if (index >= products.length) return;
          
          setVisibleProducts(prev => [...prev, products[index]]);
          setTimeout(() => addProductWithDelay(index + 1), 50);
        };
        
        setVisibleProducts([]);
        addProductWithDelay(0);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [products, loading]);
  
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div 
            key={index}
            className="bg-muted/30 rounded-lg animate-pulse h-80"
          />
        ))}
      </div>
    );
  }
  
  if (products.length === 0) {
    return (
      <div className="py-12 text-center">
        <h3 className="text-xl font-medium">No products found</h3>
        <p className="text-muted-foreground mt-2">
          {searchQuery 
            ? `No results for "${searchQuery}". Try a different search term.` 
            : "Try adjusting your filters or search terms"}
        </p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {visibleProducts.map((product, index) => (
        <div
          key={product.id}
          className="animate-scale-in"
          style={{ 
            animationDelay: `${index * 50}ms`,
            animationFillMode: 'both' 
          }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
