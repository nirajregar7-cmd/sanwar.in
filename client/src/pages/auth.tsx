import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Eye,
  EyeOff,
  Users,
  Scissors,
  Gift,
  Check,
  X,
  ArrowLeft,
  Sparkles,
  Star,
  Shield,
  Zap,
} from "lucide-react";
import SalonOwnerOtpAuth from "@/components/SalonOwnerOtpAuth";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");
  const [userType, setUserType] = useState<
    "customer" | "salon_owner" | "brand_owner"
  >("customer");
  const [showOtpAuth, setShowOtpAuth] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    referralCode: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [, navigate] = useLocation();
  const [referralCodeStatus, setReferralCodeStatus] = useState<{
    status: "idle" | "validating" | "valid" | "invalid";
    message: string;
  }>({ status: "idle", message: "" });

  const getRedirectUrl = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("redirect") || "/";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (activeTab === "signin") {
        if (!formData.email || !formData.password) {
          setError("Email and password are required");
          return;
        }

        const response = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });

        let loginData: any = {};
        try {
          loginData = await response.json();
        } catch {}

        if (response.ok) {
          const redirectUrl = await getRedirectUrl();
          navigate(redirectUrl);
          window.location.reload();
        } else {
          setError(
            loginData.error ||
              loginData.message ||
              "Login failed. Please check your credentials."
          );
        }
      } else {
        if (!formData.firstName) {
          setError("First name is required");
          return;
        }
        if (!formData.mobileNumber) {
          setError("Mobile number is required");
          return;
        }

        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.mobileNumber,
            userType: userType,
            referralCode: formData.referralCode,
          }),
        });

        let regData: any = {};
        try {
          regData = await response.json();
        } catch {}

        if (response.ok) {
          localStorage.removeItem(`sanwar_onboarding_${userType}`);
          localStorage.removeItem(`sanwar_onboarding_${userType}_completed_at`);
          localStorage.removeItem(`sanwar_onboarding_${userType}_skipped_at`);
          localStorage.setItem(`sanwar_onboarding_${userType}_fresh_signup`, "true");

          if (userType === "salon_owner" || userType === "brand_owner") {
            navigate("/pricing?welcome=1");
          } else {
            const redirectUrl = await getRedirectUrl();
            navigate(redirectUrl);
          }
          window.location.reload();
        } else {
          setError(
            regData.error ||
              regData.message ||
              "Registration failed. Please try again."
          );
        }
      }
    } catch (error) {
      setError("Unable to connect to the server. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleValidateReferralCode = async () => {
    if (!formData.referralCode.trim()) {
      setReferralCodeStatus({ status: "invalid", message: "Please enter a referral code" });
      return;
    }
    setReferralCodeStatus({ status: "validating", message: "Checking..." });
    try {
      const response = await fetch("/api/validate-referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: formData.referralCode.trim() }),
      });
      const data = await response.json();
      if (response.ok && data.valid) {
        setReferralCodeStatus({
          status: "valid",
          message: `✓ Valid! Referred by ${data.referrerName}. You'll get ${data.bonusAmount} bonus credits!`,
        });
      } else {
        setReferralCodeStatus({ status: "invalid", message: data.message || "Invalid referral code" });
      }
    } catch {
      setReferralCodeStatus({ status: "invalid", message: "Error validating code. Try again." });
    }
  };

  const handleOtpAuthSuccess = (isNewRegistration?: boolean) => {
    if (isNewRegistration) {
      navigate("/pricing?welcome=1");
    } else {
      navigate("/shopkeeper/dashboard");
    }
    window.location.reload();
  };

  if (showOtpAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-900 px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Welcome to Sanwar</h1>
            <p className="text-purple-200 text-lg">Your smart salon booking platform</p>
          </div>
          <SalonOwnerOtpAuth onBack={() => setShowOtpAuth(false)} onSuccess={handleOtpAuthSuccess} />
        </div>
      </div>
    );
  }

  const features = [
    { icon: Zap, text: "Instant slot booking" },
    { icon: Shield, text: "Secure & verified salons" },
    { icon: Star, text: "Trusted by thousands" },
  ];

  const userTypeOptions = [
    { value: "customer", icon: Users, label: "Customer", desc: "Book salon appointments" },
    { value: "salon_owner", icon: Scissors, label: "Salon Owner", desc: "Manage your salon" },
    { value: "brand_owner", icon: Gift, label: "Brand Owner", desc: "Manage multiple salons" },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Left Panel — Branding */}
      <div className="hidden lg:flex lg:w-5/12 xl:w-1/2 relative flex-col justify-between p-12 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1e0a3c 0%, #4a1a6b 40%, #6d28d9 100%)" }}>
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #818cf8, transparent)", transform: "translate(-30%, 30%)" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #c4b5fd, transparent)", transform: "translate(-50%, -50%)" }} />

        {/* Logo */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Center Content */}
        <div className="relative z-10 flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-200" />
              </div>
              <div>
                <h2 className="text-white text-2xl font-bold tracking-tight">Sanwar</h2>
                <p className="text-purple-300 text-xs uppercase tracking-widest">Smart Salon Booking</p>
              </div>
            </div>

            <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-4">
              Your next great<br />
              <span style={{ background: "linear-gradient(90deg, #c4b5fd, #a5f3fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                salon experience
              </span><br />
              starts here.
            </h1>
            <p className="text-purple-200 text-lg leading-relaxed">
              Discover top salons near you, book in seconds, and enjoy verified professionals at the best prices.
            </p>
          </div>

          {/* Feature pills */}
          <div className="flex flex-col gap-3">
            {features.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-purple-200" />
                </div>
                <span className="text-purple-100 text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {["A", "B", "C", "D"].map((l) => (
                <div key={l} className="w-8 h-8 rounded-full border-2 border-purple-800 flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: `hsl(${l.charCodeAt(0) * 30}, 60%, 45%)` }}>
                  {l}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-purple-300 text-xs">Loved by many happy customers</p>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="relative z-10">
          <p className="text-purple-400 text-xs">© 2024 Sanwar · Built for India's salons</p>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-10 bg-white overflow-y-auto">
        {/* Mobile logo */}
        <div className="lg:hidden w-full max-w-md mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #6d28d9, #4f46e5)" }}>
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Sanwar</span>
          </div>
          <Link href="/" className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
        </div>

        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">
              {activeTab === "signin" ? "Welcome back" : "Create account"}
            </h2>
            <p className="text-gray-500 text-sm">
              {activeTab === "signin"
                ? "Sign in to your Sanwar account"
                : "Join thousands of happy customers"}
            </p>
          </div>

          {/* Tab Toggle */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
            {["signin", "signup"].map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setError(""); }}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                data-testid={`button-tab-${tab}`}
              >
                {tab === "signin" ? "Sign In" : "Sign Up"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Error Alert */}
            {error && (
              <div className="flex items-start gap-3 p-3.5 rounded-xl border border-red-200 bg-red-50">
                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3 h-3 text-red-600" />
                </div>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            {/* Role Selection (Sign Up only) */}
            {activeTab === "signup" && (
              <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">I am a:</p>
                <RadioGroup
                  value={userType}
                  onValueChange={(v) => setUserType(v as any)}
                  className="grid grid-cols-1 gap-2"
                >
                  {userTypeOptions.map(({ value, icon: Icon, label, desc }) => (
                    <label
                      key={value}
                      htmlFor={value}
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                        userType === value
                          ? "border-violet-500 bg-violet-50"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <RadioGroupItem value={value} id={value} className="sr-only" />
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        userType === value ? "bg-violet-100" : "bg-gray-100"
                      }`}>
                        <Icon className={`w-4 h-4 ${userType === value ? "text-violet-600" : "text-gray-500"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-semibold ${userType === value ? "text-violet-700" : "text-gray-800"}`}>{label}</p>
                        <p className="text-xs text-gray-500">{desc}</p>
                      </div>
                      {userType === value && (
                        <Check className="w-4 h-4 text-violet-600 flex-shrink-0" />
                      )}
                    </label>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Name fields (Sign Up only) */}
            {activeTab === "signup" && (
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-1.5 block">
                    First Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="First name"
                    className="h-11 rounded-xl border-gray-200 focus:border-violet-400 focus:ring-violet-100"
                    value={formData.firstName}
                    onChange={(e) => setFormData((p) => ({ ...p, firstName: e.target.value }))}
                    data-testid="input-firstName"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-1.5 block">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Last name"
                    className="h-11 rounded-xl border-gray-200 focus:border-violet-400 focus:ring-violet-100"
                    value={formData.lastName}
                    onChange={(e) => setFormData((p) => ({ ...p, lastName: e.target.value }))}
                    data-testid="input-lastName"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1.5 block">
                Email {activeTab === "signup" && <span className="text-red-500">*</span>}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-11 rounded-xl border-gray-200 focus:border-violet-400 focus:ring-violet-100"
                value={formData.email}
                onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                data-testid="input-email"
              />
            </div>

            {/* Mobile (Sign Up only) */}
            {activeTab === "signup" && (
              <div>
                <Label htmlFor="mobileNumber" className="text-sm font-medium text-gray-700 mb-1.5 block">
                  Mobile Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="mobileNumber"
                  type="tel"
                  placeholder="+91 9876543210"
                  className="h-11 rounded-xl border-gray-200 focus:border-violet-400 focus:ring-violet-100"
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData((p) => ({ ...p, mobileNumber: e.target.value }))}
                  data-testid="input-mobileNumber"
                />
              </div>
            )}

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password {activeTab === "signup" && <span className="text-red-500">*</span>}
                </Label>
                {activeTab === "signin" && (
                  <Link href="/forgot-password" className="text-xs text-violet-600 hover:text-violet-700 font-medium" data-testid="link-forgot-password">
                    Forgot password?
                  </Link>
                )}
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={activeTab === "signup" ? "Min. 6 characters" : "Enter your password"}
                  className="h-11 rounded-xl border-gray-200 focus:border-violet-400 focus:ring-violet-100 pr-10"
                  value={formData.password}
                  onChange={(e) => setFormData((p) => ({ ...p, password: e.target.value }))}
                  data-testid="input-password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Referral Code (Sign Up only) */}
            {activeTab === "signup" && (
              <div>
                <Label htmlFor="referralCode" className="text-sm font-medium text-gray-700 mb-1.5 block">
                  Referral Code <span className="text-gray-400 font-normal">(optional)</span>
                </Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      id="referralCode"
                      placeholder="Enter code if you have one"
                      className={`h-11 rounded-xl pr-9 ${
                        referralCodeStatus.status === "valid"
                          ? "border-green-400 bg-green-50"
                          : referralCodeStatus.status === "invalid"
                          ? "border-red-400 bg-red-50"
                          : "border-gray-200"
                      } focus:border-violet-400 focus:ring-violet-100`}
                      value={formData.referralCode}
                      onChange={(e) => {
                        setFormData((p) => ({ ...p, referralCode: e.target.value }));
                        setReferralCodeStatus({ status: "idle", message: "" });
                      }}
                      data-testid="input-referralCode"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      {referralCodeStatus.status === "validating" ? (
                        <div className="w-4 h-4 border-2 border-violet-400 border-t-transparent rounded-full animate-spin" />
                      ) : referralCodeStatus.status === "valid" ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : referralCodeStatus.status === "invalid" ? (
                        <X className="w-4 h-4 text-red-500" />
                      ) : (
                        <Gift className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleValidateReferralCode}
                    disabled={!formData.referralCode.trim() || referralCodeStatus.status === "validating"}
                    className="px-4 h-11 text-sm font-semibold rounded-xl bg-violet-600 text-white hover:bg-violet-700 disabled:opacity-40 transition-colors flex-shrink-0"
                    data-testid="button-apply-referral"
                  >
                    Apply
                  </button>
                </div>
                {referralCodeStatus.message && (
                  <p className={`text-xs mt-1.5 ${referralCodeStatus.status === "valid" ? "text-green-600" : "text-red-500"}`}>
                    {referralCodeStatus.message}
                  </p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-xl text-sm font-bold text-white transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
              style={{ background: loading ? "#7c3aed" : "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
              data-testid={activeTab === "signin" ? "button-signin" : "button-signup"}
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  {activeTab === "signin" ? "Signing in..." : "Creating account..."}
                </>
              ) : activeTab === "signin" ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </button>

            {/* Footer links */}
            <div className="text-center pt-1">
              {activeTab === "signin" ? (
                <p className="text-sm text-gray-500">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => { setActiveTab("signup"); setError(""); }}
                    className="text-violet-600 font-semibold hover:text-violet-700"
                    data-testid="button-switch-to-signup"
                  >
                    Sign up for free
                  </button>
                </p>
              ) : (
                <p className="text-sm text-gray-500">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => { setActiveTab("signin"); setError(""); }}
                    className="text-violet-600 font-semibold hover:text-violet-700"
                    data-testid="button-switch-to-signin"
                  >
                    Sign in
                  </button>
                </p>
              )}
            </div>

            {activeTab === "signup" && (
              <p className="text-center text-xs text-gray-400">
                By continuing, you agree to our{" "}
                <span className="text-violet-500 cursor-pointer hover:underline">Terms of Service</span>{" "}
                and{" "}
                <span className="text-violet-500 cursor-pointer hover:underline">Privacy Policy</span>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
