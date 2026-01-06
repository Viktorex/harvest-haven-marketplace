
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

type NavLink = {
  name: string;
  path: string;
  action?: () => void;
};

type NavLinksProps = {
  links: NavLink[];
  className?: string;
  includeAuth?: boolean;
};

export function NavLinks({ links, className = '', includeAuth = false }: NavLinksProps) {
  const location = useLocation();
  const { isAuthenticated, logout } = useAuth();
  
  // Create auth links based on authentication status
  const authLinks = isAuthenticated
    ? [
        { name: 'My Profile', path: '/profile' },
        { name: 'Logout', path: '#', action: logout }
      ]
    : [];
  
  // Combine regular links with auth links if includeAuth is true
  const displayLinks = includeAuth ? [...links, ...authLinks] : links;
  
  return (
    <nav className={`${className}`}>
      {displayLinks.map((link, index) => (
        <Link
          key={`${link.path}-${index}`}
          to={link.path}
          onClick={link.action}
          className={`relative px-3 py-2 text-sm font-medium transition-colors
            ${location.pathname === link.path 
              ? 'text-primary' 
              : 'text-muted-foreground hover:text-primary'
            }
            after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary 
            after:scale-x-0 after:origin-center after:transition-transform after:duration-300
            ${location.pathname === link.path ? 'after:scale-x-100' : ''}
          `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
