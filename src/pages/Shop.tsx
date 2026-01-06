
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductGrid } from '@/components/shop/ProductGrid';
import { ProductFilters } from '@/components/shop/ProductFilters';
import { getProductsByCategory, searchProducts, Product } from '@/lib/products';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Get category from URL or default to "all"
  const category = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('q') || '';
  
  useEffect(() => {
    // Simulate loading delay for smooth transitions
    setLoading(true);
    
    const fetchProducts = setTimeout(() => {
      let filteredProducts;
      
      if (searchQuery) {
        filteredProducts = searchProducts(searchQuery);
      } else {
        filteredProducts = getProductsByCategory(category);
      }
      
      setProducts(filteredProducts);
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(fetchProducts);
  }, [category, searchQuery]);
  
  const handleCategoryChange = (newCategory: string) => {
    const params = new URLSearchParams(searchParams);
    
    if (newCategory === 'all') {
      params.delete('category');
    } else {
      params.set('category', newCategory);
    }
    
    // Preserve search query if it exists
    if (searchQuery) {
      params.set('q', searchQuery);
    }
    
    setSearchParams(params);
  };
  
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-24">
        <div className="container-custom py-8">
          <div className="mb-8">
            <h1 className="font-serif text-3xl font-semibold">
              {searchQuery 
                ? `Search results for "${searchQuery}"` 
                : category === 'all' 
                  ? 'All Products' 
                  : `${category.charAt(0).toUpperCase() + category.slice(1)}`
              }
            </h1>
            <p className="text-muted-foreground mt-2">
              {searchQuery 
                ? `Found ${products.length} products matching your search` 
                : `Shop our selection of ${category === 'all' ? 'fresh produce and artisanal goods' : category}`
              }
            </p>
          </div>
          
          <ProductFilters 
            selectedCategory={category} 
            onCategoryChange={handleCategoryChange} 
          />
          
          <ProductGrid 
            products={products} 
            loading={loading} 
            searchQuery={searchQuery}
          />
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Shop;
