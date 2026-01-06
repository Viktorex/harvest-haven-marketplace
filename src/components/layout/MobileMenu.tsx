
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

type NavLink = {
  name: string;
  path: string;
  action?: () => void;
};

type MobileMenuProps = {
  isOpen: boolean;
  links: NavLink[];
};

export function MobileMenu({ isOpen, links }: MobileMenuProps) {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  
  // Create auth links based on authentication status
  const authLinks = isAuthenticated
    ? [
        { name: 'My Profile', path: '/profile' },
        { name: 'Logout', path: '#', action: logout }
      ]
    : [
        { name: 'Sign In', path: '/login' }
      ];
  
  // Combine regular links with auth links
  const displayLinks = [...links, ...authLinks];

  return (
    <div 
      className={`fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden pt-20`}
    >
      <nav className="container-custom flex flex-col space-y-4 p-6">
        {displayLinks.map((link, index) => (
          <Link
            key={`${link.path}-${index}`}
            to={link.path}
            onClick={link.action}
            className={`text-lg py-2 border-b border-border ${
              location.pathname === link.path 
                ? 'text-primary font-medium' 
                : 'text-muted-foreground'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
