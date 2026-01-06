
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/products';

interface CartItemProps {
  product: Product;
  quantity: number;
}

export function CartItem({ product, quantity }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const [isRemoving, setIsRemoving] = useState(false);
  
  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      removeItem(product.id);
    }, 300);
  };
  
  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) return;
    if (newQuantity > product.stock) return;
    updateQuantity(product.id, newQuantity);
  };
  
  return (
    <div 
      className={`flex gap-4 py-4 transition-all duration-300 ${
        isRemoving ? 'opacity-0 -translate-x-4' : 'opacity-100'
      }`}
    >
      {/* Product image */}
      <Link to={`/product/${product.id}`} className="shrink-0">
        <div className="w-20 h-20 rounded overflow-hidden border border-border">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      
      {/* Product details */}
      <div className="flex-1 min-w-0">
        <Link 
          to={`/product/${product.id}`}
          className="font-medium line-clamp-1 hover:text-primary transition-colors"
        >
          {product.name}
        </Link>
        
        <div className="text-sm text-muted-foreground mt-1">
          {product.unit}
        </div>
        
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center border border-border rounded-md">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={() => handleUpdateQuantity(quantity - 1)}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              <Minus size={14} />
            </Button>
            <span className="w-8 text-center text-sm">{quantity}</span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-none"
              onClick={() => handleUpdateQuantity(quantity + 1)}
              disabled={quantity >= product.stock}
              aria-label="Increase quantity"
            >
              <Plus size={14} />
            </Button>
          </div>
          
          <div className="font-medium">
            ${(product.price * quantity).toFixed(2)}
          </div>
        </div>
      </div>
      
      {/* Remove button */}
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground hover:text-destructive"
        onClick={handleRemove}
        aria-label="Remove item"
      >
        <Trash2 size={16} />
      </Button>
    </div>
  );
}
