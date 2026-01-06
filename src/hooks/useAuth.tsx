
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

interface User {
  id: string;
  name?: string;
  email: string;
  isSeller: boolean;
  isAdmin: boolean;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in via localStorage
    const checkAuth = () => {
      setIsLoading(true);
      const userString = localStorage.getItem("user");
      
      if (userString) {
        try {
          const userData = JSON.parse(userString);
          setUser(userData);
        } catch (error) {
          console.error("Failed to parse user data:", error);
          localStorage.removeItem("user");
          setUser(null);
        }
      } else {
        setUser(null);
      }
      
      setIsLoading(false);
    };
    
    checkAuth();
  }, []);

  const login = (userData: User) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    toast({
      title: "Login successful",
      description: "Welcome to your account!",
    });
    navigate("/profile");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const isAuthenticated = !!user;
  const isSeller = user?.isSeller || false;
  const isAdmin = user?.isAdmin || false;

  return {
    user,
    isLoading,
    isAuthenticated,
    isAdmin,
    isSeller,
    login,
    logout
  };
};
