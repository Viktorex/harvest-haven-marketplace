
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CartItem } from '@/components/ui/CartItem';
import { useCart } from '@/context/CartContext';

const Cart = () => {
  const { state, clearCart, cartTotal } = useCart();
  const [isClearing, setIsClearing] = useState(false);
  
  const handleClearCart = () => {
    setIsClearing(true);
    setTimeout(() => {
      clearCart();
      setIsClearing(false);
    }, 300);
  };
  
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-24 pb-20">
        <div className="container-custom py-8 max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="font-serif text-3xl font-semibold">Your Cart</h1>
            <p className="text-muted-foreground mt-2">
              {state.items.length > 0 
                ? `You have ${state.items.length} item${state.items.length === 1 ? '' : 's'} in your cart` 
                : 'Your cart is empty'
              }
            </p>
          </div>
          
          {state.items.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="md:col-span-2">
                <div className={`transition-opacity duration-300 ${isClearing ? 'opacity-50' : 'opacity-100'}`}>
                  {state.items.map((item) => (
                    <div key={item.product.id}>
                      <CartItem 
                        product={item.product}
                        quantity={item.quantity}
                      />
                      <Separator />
                    </div>
                  ))}
                </div>
                
                {/* Actions */}
                <div className="flex justify-between mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="text-sm"
                  >
                    <Link to="/shop" className="inline-flex items-center">
                      <ArrowLeft size={14} className="mr-2" />
                      Continue Shopping
                    </Link>
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearCart}
                    className="text-sm text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 size={14} className="mr-2" />
                    Clear Cart
                  </Button>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-secondary/50 rounded-lg p-6 sticky top-24">
                  <h2 className="font-medium text-lg mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{cartTotal >= 50 ? 'Free' : '$4.99'}</span>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="flex justify-between font-medium text-base">
                      <span>Total</span>
                      <span>${(cartTotal >= 50 ? cartTotal : cartTotal + 4.99).toFixed(2)}</span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground pt-2">
                      Taxes and discounts calculated at checkout
                    </p>
                  </div>
                  
                  <Button className="w-full mt-6 btn-hover-effect">
                    Proceed to Checkout
                  </Button>
                  
                  {cartTotal < 50 && (
                    <p className="text-xs text-center mt-4 text-muted-foreground">
                      Add ${(50 - cartTotal).toFixed(2)} more to qualify for free shipping
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 animate-fade-in">
              <div className="inline-block p-6 bg-muted/30 rounded-full mb-6">
                <ShoppingBag size={48} className="text-muted-foreground" />
              </div>
              <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Button asChild className="btn-hover-effect">
                <Link to="/shop">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Cart;
