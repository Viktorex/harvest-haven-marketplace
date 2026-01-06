
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Award, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to product page
    addItem(product, 1);
  };
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  return (
    <Link 
      to={`/product/${product.id}`}
      className="group block relative rounded-lg overflow-hidden bg-white transition-all duration-300 hover-scale product-card-shadow"
    >
      {/* Product Image */}
      <div className="aspect-square w-full overflow-hidden relative bg-muted/30">
        <img
          ref={imageRef}
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'loaded' : 'loading'}`}
          onLoad={handleImageLoad}
        />
        
        {/* Product tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <Badge className="bg-primary/80 hover:bg-primary/80">New</Badge>
          )}
          {product.isBestseller && (
            <Badge className="bg-[#FFC107]/80 hover:bg-[#FFC107]/80 text-black flex items-center gap-1">
              <Award size={12} /> Bestseller
            </Badge>
          )}
          {product.isOrganic && (
            <Badge className="bg-accent hover:bg-accent text-accent-foreground flex items-center gap-1">
              <Leaf size={12} /> Organic
            </Badge>
          )}
        </div>
        
        {/* Add to cart button (appears on hover) */}
        <div className="absolute right-3 bottom-3 translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            size="icon"
            className="h-9 w-9 bg-white text-primary shadow-md hover:bg-primary hover:text-white"
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <ShoppingCart size={16} />
          </Button>
        </div>
      </div>
      
      {/* Product info */}
      <div className="p-4">
        <h3 className="font-medium line-clamp-1">{product.name}</h3>
        <div className="text-sm text-muted-foreground mt-1">
          {product.unit}
        </div>
        <div className="mt-2 font-semibold">
          ${product.price.toFixed(2)}
        </div>
      </div>
    </Link>
  );
}
