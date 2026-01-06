
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Truck, ShieldCheck, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProductCard } from '@/components/ui/ProductCard';
import { useCart } from '@/context/CartContext';
import { getProductById, getRelatedProducts } from '@/lib/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem } = useCart();
  
  const product = getProductById(id || '');
  const relatedProducts = product ? getRelatedProducts(product) : [];
  
  useEffect(() => {
    // Reset scroll position when product changes
    window.scrollTo(0, 0);
    setImageLoaded(false);
    setQuantity(1);
  }, [id]);
  
  if (!product) {
    // If product not found, redirect to shop
    useEffect(() => {
      navigate('/shop');
    }, [navigate]);
    
    return null;
  }
  
  const handleAddToCart = () => {
    addItem(product, quantity);
  };
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity < 1) return;
    if (newQuantity > product.stock) return;
    setQuantity(newQuantity);
  };
  
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen pt-24">
        <div className="container-custom py-8">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <Link 
              to={`/shop?category=${product.category}`} 
              className="hover:text-primary transition-colors"
            >
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
          
          {/* Back button */}
          <Button 
            variant="ghost" 
            size="sm" 
            className="mb-8 group"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
            Back
          </Button>
          
          {/* Product Detail */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16 animate-fade-in">
            {/* Product Image */}
            <div className="bg-white rounded-lg overflow-hidden product-card-shadow">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'loaded' : 'loading'}`}
                  onLoad={() => setImageLoaded(true)}
                />
                
                {/* Product tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {product.isNew && (
                    <Badge className="bg-primary/80 hover:bg-primary/80">New</Badge>
                  )}
                  {product.isBestseller && (
                    <Badge className="bg-[#FFC107]/80 hover:bg-[#FFC107]/80 text-black">
                      Bestseller
                    </Badge>
                  )}
                  {product.isOrganic && (
                    <Badge className="bg-accent hover:bg-accent text-accent-foreground">
                      Organic
                    </Badge>
                  )}
                </div>
              </div>
            </div>
            
            {/* Product Info */}
            <div className="flex flex-col animate-slide-in-right">
              <h1 className="font-serif text-3xl font-semibold">{product.name}</h1>
              
              <div className="text-muted-foreground mt-2">
                {product.unit} • Origin: {product.origin}
              </div>
              
              <div className="mt-4 text-2xl font-semibold">
                ${product.price.toFixed(2)}
              </div>
              
              <div className="mt-6 space-y-4">
                <p className="text-muted-foreground">
                  {product.description}
                </p>
                
                {/* Stock Status */}
                <div className="text-sm">
                  <span className="font-medium">Availability:</span>{' '}
                  {product.stock > 0 ? (
                    <span className="text-green-600">In Stock ({product.stock} available)</span>
                  ) : (
                    <span className="text-red-500">Out of Stock</span>
                  )}
                </div>
              </div>
              
              {/* Add to Cart Section */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border border-border rounded">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-none"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-none"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= product.stock}
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} />
                  </Button>
                </div>
                
                {/* Add to Cart Button */}
                <Button 
                  onClick={handleAddToCart}
                  className="flex-1 btn-hover-effect"
                  disabled={product.stock === 0}
                >
                  {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </Button>
              </div>
              
              {/* Features */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: <Truck size={20} />,
                    title: "Free Shipping",
                    desc: "Orders over $50"
                  },
                  {
                    icon: <ShieldCheck size={20} />,
                    title: "Quality Guarantee",
                    desc: "100% satisfaction"
                  },
                  {
                    icon: <Leaf size={20} />,
                    title: "Sustainably Sourced",
                    desc: "Farm to table"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex space-x-3 p-3 bg-secondary/50 rounded-lg">
                    <div className="text-primary mt-0.5">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <section className="mt-16 pt-12 border-t border-border">
              <h2 className="font-serif text-2xl font-semibold mb-6">You may also like</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <div
                    key={relatedProduct.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard product={relatedProduct} />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default ProductDetail;
