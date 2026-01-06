
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Leaf } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary mt-24 overflow-hidden">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-tight inline-flex items-center">
              <Leaf className="h-5 w-5 mr-2" strokeWidth={1.5} />
              Harvest
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Bringing the finest organic produce from local farms directly to your table, with care for both people and planet.
            </p>
            <div className="flex space-x-4">
              <Link 
                to="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Link>
              <Link 
                to="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </Link>
              <Link 
                to="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </Link>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-6">Shop</h3>
            <ul className="space-y-3">
              {['All Products', 'Vegetables', 'Fruits', 'Dairy & Eggs', 'Bakery'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/shop${item === 'All Products' ? '' : `?category=${item.toLowerCase().replace(' & ', '-')}`}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-6">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Sustainability', 'Our Farmers', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-medium text-sm uppercase tracking-wider mb-6">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to receive updates on new products and seasonal specials.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 text-sm rounded-l-md bg-white border border-r-0 border-border focus:outline-none focus:ring-1 focus:ring-primary/20"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-primary text-primary-foreground px-4 py-2 text-sm rounded-r-md hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy.
              </p>
            </form>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <div className="mb-4 md:mb-0">
            © {currentYear} Harvest. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping-policy" className="hover:text-primary transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
