
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

type NavbarActionsProps = {
  cartCount: number;
  isSearchOpen: boolean;
  isMobileMenuOpen: boolean;
  toggleSearch: () => void;
  toggleMobileMenu: () => void;
};

export function NavbarActions({
  cartCount,
  isSearchOpen,
  isMobileMenuOpen,
  toggleSearch,
  toggleMobileMenu
}: NavbarActionsProps) {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const handleAuthAction = () => {
    if (isAuthenticated) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="flex items-center space-x-1">
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={toggleSearch}
        aria-label="Search"
      >
        <Search className={`h-5 w-5 transition-all ${isSearchOpen ? 'opacity-0 scale-90' : 'opacity-100'}`} />
        <X className={`absolute h-5 w-5 transition-all ${isSearchOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="relative"
        onClick={handleGoToCart}
        aria-label="Shopping cart"
      >
        <ShoppingCart className="h-5 w-5" />
        {cartCount > 0 && (
          <Badge className="absolute -top-1 -right-1 min-w-[18px] h-[18px] p-0 flex items-center justify-center text-[10px] font-medium">
            {cartCount}
          </Badge>
        )}
      </Button>
      
      <Button
        variant="ghost"
        onClick={handleAuthAction}
        className="hidden md:flex items-center gap-2"
        aria-label={isAuthenticated ? "My Account" : "Sign In"}
      >
        <User className="h-4 w-4" />
        {isAuthenticated ? user?.name || 'Account' : 'Sign In'}
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden ml-1"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMobileMenuOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}
