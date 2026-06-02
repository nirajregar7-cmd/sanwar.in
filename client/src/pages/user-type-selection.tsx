import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Store, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

export default function UserTypeSelection() {
  const [userType, setUserType] = useState<"customer" | "salon_owner">("customer");
  const [, navigate] = useLocation();
  const { toast } = useToast();
  const { user } = useAuth();

  const handleSubmit = () => {
    if (userType === "customer") {
      navigate("/customer/home");
    } else {
      navigate("/owner/dashboard");
    }
  };

  if (!user) {
    navigate("/auth");
    return null;
  }

  if (user && (user as any).userType && (user as any).userType !== "customer") {
    if ((user as any).userType === "salon_owner") {
      navigate("/owner/dashboard");
    } else if ((user as any).userType === "admin" || (user as any).userType === "super_admin") {
      navigate("/admin/dashboard");
    }
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 via-blue-100 to-slate-300 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Who are you?</h1>
          <p className="text-lg text-gray-600">Choose your account type to get started with Sanwar</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Customer Card */}
          <div
            onClick={() => setUserType("customer")}
            className={`bg-white rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
              userType === "customer" ? "border-blue-500 shadow-xl" : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="text-center mb-6">
              <div className="bg-blue-500 rounded-full p-3 inline-block mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">I'm a Customer</h2>
              <p className="text-gray-600 text-sm">I want to discover and book salon services</p>
            </div>
            <div className="space-y-3 mb-8">
              {["Find nearby salons", "Book appointments instantly", "Manage bookings", "Leave reviews & earn rewards"].map(f => (
                <div key={f} className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
            {userType === "customer" && (
              <Button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                Continue as Customer
              </Button>
            )}
          </div>

          {/* Salon Owner Card */}
          <div
            onClick={() => setUserType("salon_owner")}
            className={`bg-white rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
              userType === "salon_owner" ? "border-blue-500 shadow-xl" : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="text-center mb-6">
              <div className="bg-blue-500 rounded-full p-3 inline-block mb-4">
                <Store className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">I'm a Salon Owner</h2>
              <p className="text-gray-600 text-sm">I want to manage my salon business online</p>
            </div>
            <div className="space-y-3 mb-8">
              {["Setup salon profile", "Manage services & staff", "Create time slots", "Handle bookings & earnings"].map(f => (
                <div key={f} className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                  <span className="text-sm">{f}</span>
                </div>
              ))}
            </div>
            {userType === "salon_owner" && (
              <Button onClick={handleSubmit} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                Continue as Salon Owner
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
