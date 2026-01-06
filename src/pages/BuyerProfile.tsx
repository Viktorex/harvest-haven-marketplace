
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/components/ui/use-toast";

interface User {
  id: string;
  name?: string;
  email: string;
  userType: string;
}

const BuyerProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    // Check if user is logged in
    const userString = localStorage.getItem("user");
    if (!userString) {
      navigate("/login");
      return;
    }
    
    const userData = JSON.parse(userString);
    
    // Verify user type
    if (userData.userType !== "buyer") {
      toast({
        title: "Access denied",
        description: "You don't have permission to view this page.",
        variant: "destructive",
      });
      
      if (userData.userType === "seller") {
        navigate("/seller-profile");
      } else if (userData.userType === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/login");
      }
      return;
    }
    
    setUser(userData);
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem("user");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/login");
  };
  
  if (!user) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <main className="container-custom py-12">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader className="flex flex-col items-center sm:flex-row sm:justify-between sm:items-start">
              <div className="text-center sm:text-left">
                <CardTitle className="text-2xl mb-2">Buyer Profile</CardTitle>
                <CardDescription>
                  Manage your account details and orders
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
                    <p className="text-sm text-muted-foreground">Account Type</p>
                    <p className="font-medium capitalize">{user.userType}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Recent Orders</h3>
                <div className="text-center text-muted-foreground py-8">
                  <p>You haven't placed any orders yet.</p>
                  <Button variant="outline" className="mt-4" onClick={() => navigate("/shop")}>
                    Browse Products
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Saved Addresses</h3>
                <div className="text-center text-muted-foreground py-8">
                  <p>No saved addresses found.</p>
                  <Button variant="outline" className="mt-4">
                    Add Address
                  </Button>
                </div>
              </div>
              
              <div className="pt-4 border-t border-border">
                <Button variant="destructive" onClick={handleLogout}>
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

export default BuyerProfile;
