
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Plus, ShoppingCart } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { Product } from "@/lib/products";

const Profile = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout, isSeller } = useAuth();
  const [sellerProducts, setSellerProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  
  useEffect(() => {
    // Check if user is logged in
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    
    // For demo purposes, we'll leave this empty
    // In a real app, you would fetch the user's products and orders
    
  }, [isAuthenticated, navigate]);
  
  const handleBecomeSeller = () => {
    // In a real app, this would update the user's status in the database
    const updatedUser = { ...user, isSeller: true };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    window.location.reload();
    toast({
      title: "You're now a seller!",
      description: "You can now list your products for sale.",
    });
  };
  
  const handleAddProduct = () => {
    toast({
      title: "Feature coming soon",
      description: "This functionality will be available in the next update.",
    });
  };
  
  if (!user) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <main className="container-custom py-12">
        <div className="max-w-5xl mx-auto">
          <Card>
            <CardHeader className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-start">
              <div className="text-center sm:text-left">
                <CardTitle className="text-2xl mb-2">My Account</CardTitle>
                <CardDescription>
                  Manage your profile, orders, and products
                </CardDescription>
              </div>
              <Avatar className="h-24 w-24 mt-4 sm:mt-0">
                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name || user.email}`} />
                <AvatarFallback>{(user.name || user.email).substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Account Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="font-medium">{user.name || "Not provided"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Account Status</p>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">
                        {isSeller ? "Buyer & Seller" : "Buyer"}
                      </p>
                      
                      {!isSeller && (
                        <Button variant="outline" size="sm" onClick={handleBecomeSeller}>
                          Become a Seller
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              <Tabs defaultValue="purchases" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="purchases" className="flex items-center gap-2">
                    <ShoppingCart size={16} /> My Purchases
                  </TabsTrigger>
                  <TabsTrigger value="selling" className="flex items-center gap-2" disabled={!isSeller}>
                    <Plus size={16} /> My Products
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="purchases" className="space-y-4 mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Recent Orders</h3>
                    <Button size="sm" variant="outline" onClick={() => navigate("/shop")}>
                      Browse Products
                    </Button>
                  </div>
                  
                  <div className="text-center text-muted-foreground py-8">
                    <p>You haven't placed any orders yet.</p>
                    <Button variant="default" className="mt-4" onClick={() => navigate("/shop")}>
                      Start Shopping
                    </Button>
                  </div>
                  
                  <h3 className="text-lg font-medium mt-8">Saved Addresses</h3>
                  <div className="text-center text-muted-foreground py-8">
                    <p>No saved addresses found.</p>
                    <Button variant="outline" className="mt-4">
                      Add Address
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="selling" className="space-y-4 mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Your Products</h3>
                    <Button size="sm" onClick={handleAddProduct}>
                      Add Product
                    </Button>
                  </div>
                  
                  {sellerProducts.length === 0 ? (
                    <div className="text-center text-muted-foreground py-8">
                      <p>You haven't added any products yet.</p>
                      <Button variant="default" className="mt-4" onClick={handleAddProduct}>
                        Create Your First Product
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sellerProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  )}
                  
                  <h3 className="text-lg font-medium mt-8">Farm Information</h3>
                  <div className="text-center text-muted-foreground py-8">
                    <p>You haven't added your farm details yet.</p>
                    <Button variant="outline" className="mt-4">
                      Add Farm Details
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="pt-4 border-t border-border">
                <Button variant="destructive" onClick={logout}>
                  Log Out
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
