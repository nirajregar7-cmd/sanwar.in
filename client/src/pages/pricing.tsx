import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import {
  Check, X, Scissors, Calendar, Users, BarChart3, MessageSquare, Star,
  Shield, Smartphone, Zap, Gift, TrendingUp, ChevronDown, ChevronUp,
  ArrowRight, Sparkles, Clock, Bell, Image, CreditCard, MapPin, Crown,
  Rocket, Building2, Headphones, Globe, PartyPopper,
} from "lucide-react";
import sanwarLogo from "@/assets/sanwar-logo.png";
import { useAuth } from "@/hooks/useAuth";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    icon: Scissors,
    price: 499,
    yearlyPrice: 399,
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-200",
    tagBg: "bg-blue-100 text-blue-700",
    popular: false,
    description: "Perfect for a solo stylist or small salon just getting started",
    staff: "Up to 3 staff",
    features: [
      "Up to 3 staff members",
      "Online booking page",
      "Real-time slot management",
      "Customer discovery listing",
      "Basic booking analytics",
      "Booking notifications",
      "Walk-in management",
      "Photo gallery (up to 10 photos)",
      "WhatsApp & email support",
    ],
    notIncluded: [
      "Advanced analytics & reports",
      "Offer & discount campaigns",
      "Customer messaging",
      "Priority listing",
      "Revenue sharing dashboard",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    icon: Rocket,
    price: 999,
    yearlyPrice: 799,
    color: "from-purple-600 to-pink-500",
    borderColor: "border-purple-300",
    tagBg: "bg-purple-100 text-purple-700",
    popular: true,
    description: "Most popular — for growing salons that want full control",
    staff: "Unlimited staff",
    features: [
      "Unlimited staff members",
      "Online booking page",
      "Real-time slot management",
      "Customer discovery listing",
      "Full analytics & revenue reports",
      "Booking notifications & reminders",
      "Walk-in management",
      "Unlimited photo & video gallery",
      "Offer & discount campaigns",
      "In-app customer messaging",
      "Revenue sharing dashboard",
      "Priority listing in search",
      "Priority email & chat support",
    ],
    notIncluded: [
      "Multi-location management",
      "Dedicated account manager",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    icon: Crown,
    price: 2499,
    yearlyPrice: 1999,
    color: "from-amber-500 to-orange-500",
    borderColor: "border-amber-200",
    tagBg: "bg-amber-100 text-amber-700",
    popular: false,
    description: "For salon chains and high-volume businesses needing everything",
    staff: "Unlimited staff & locations",
    features: [
      "Unlimited staff members",
      "Up to 5 salon locations",
      "Online booking page per location",
      "Real-time slot management",
      "Customer discovery listing",
      "Full analytics & revenue reports",
      "Booking notifications & reminders",
      "Walk-in management",
      "Unlimited photo & video gallery",
      "Offer & discount campaigns",
      "In-app customer messaging",
      "Revenue sharing dashboard",
      "Top priority listing in search",
      "Advanced customer loyalty tools",
      "Dedicated account manager",
      "Phone + priority support",
    ],
    notIncluded: [],
  },
];

const faqs = [
  {
    q: "Is the 15-day trial really free?",
    a: "Yes — completely free. No credit card, no payment required. You get full Growth plan access for 15 days. After the trial, choose the plan that fits you best.",
  },
  {
    q: "What happens after my trial ends?",
    a: "We'll remind you 3 days before your trial ends. You can then pick any plan and continue. Your salon data, bookings, and history are always safe — we never delete anything.",
  },
  {
    q: "Can I change my plan later?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time from your dashboard. Changes take effect immediately.",
  },
  {
    q: "Is billing monthly or yearly?",
    a: "We offer both. Monthly billing gives you full flexibility. Yearly billing saves you ~20% compared to monthly.",
  },
  {
    q: "Can I add staff members during the trial?",
    a: "Yes! During the trial you get full Growth plan access — unlimited staff, all features. Just sign up and start your salon setup.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "Not at all. Our 6-step setup wizard guides you through everything in under 10 minutes. No tech skills needed.",
  },
];

export default function PricingPage() {
  const { isAuthenticated, user } = useAuth();
  const [, navigate] = useLocation();
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("welcome") === "1") {
      setShowWelcome(true);
      window.history.replaceState({}, "", "/pricing");
    }
  }, []);

  const ctaHref =
    isAuthenticated && user?.userType === "salon_owner"
      ? "/shopkeeper/dashboard"
      : "/auth?type=salon_owner";

  const handlePlanCta = (planId: string) => {
    if (isAuthenticated && user?.userType === "salon_owner") {
      navigate("/shopkeeper/dashboard");
    } else {
      navigate(`/auth?type=salon_owner&plan=${planId}`);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Welcome Modal — shown after new signup */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4" onClick={() => setShowWelcome(false)}>
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-xl">
                <PartyPopper className="w-7 h-7 text-white" />
              </div>
            </div>

            <div className="mt-6">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-1.5 text-sm font-bold mb-4">
                <Check className="w-4 h-4" strokeWidth={3} />
                Account created successfully!
              </div>

              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                Welcome to Sanwar! 🎉
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Your <strong className="text-purple-700">15-day free trial</strong> has started. You have full Growth plan access — unlimited bookings, staff, and analytics. No credit card needed.
              </p>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 mb-6 text-left">
                <p className="text-xs font-bold text-purple-700 uppercase tracking-wide mb-2">What's included in your trial</p>
                {[
                  "Unlimited staff & bookings",
                  "Full analytics dashboard",
                  "Customer discovery listing",
                  "Offer & discount campaigns",
                  "In-app customer messaging",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 py-1">
                    <Check className="w-3.5 h-3.5 text-green-500 flex-shrink-0" strokeWidth={3} />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href="/salon-wizard"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3.5 rounded-2xl font-bold hover:from-purple-700 hover:to-pink-600 transition-all"
                  data-testid="button-welcome-setup"
                >
                  Set Up My Salon Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => setShowWelcome(false)}
                  className="text-sm text-gray-400 hover:text-gray-600 transition-colors py-1"
                >
                  Explore plans first
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2 group">
              <img src={sanwarLogo} alt="Sanwar" className="w-10 h-10 object-contain" />
              <div>
                <span className="text-xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
                  Sanwar
                </span>
                <p className="text-xs text-gray-400 -mt-1">Smart Salon Booking</p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm text-gray-600 hover:text-purple-600 font-medium transition-colors hidden sm:block">
                Home
              </Link>
              <Link
                href={ctaHref}
                className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                {isAuthenticated ? "Go to Dashboard" : "Start Free Trial"}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1e0a3c 0%, #4a1a6b 40%, #6d28d9 70%, #7c3aed 100%)" }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #f472b6, transparent)", transform: "translate(-30%, 30%)" }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 backdrop-blur rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-yellow-200 text-sm font-semibold">15-Day Free Trial — No Credit Card Required</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-5">
            Simple, Transparent<br />
            <span style={{ background: "linear-gradient(90deg, #f9a8d4, #c4b5fd, #93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Pricing for Salons
            </span>
          </h1>
          <p className="text-purple-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Start free for 15 days with full access. Then pick the plan that fits your salon — no surprises, no hidden fees.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full p-1 mb-4">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${billing === "monthly" ? "bg-white text-purple-700 shadow" : "text-white/70 hover:text-white"}`}
              data-testid="toggle-monthly"
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${billing === "yearly" ? "bg-white text-purple-700 shadow" : "text-white/70 hover:text-white"}`}
              data-testid="toggle-yearly"
            >
              Yearly
              <span className="ml-2 text-xs bg-green-400 text-green-900 font-bold px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 pb-20 relative z-10">
        {/* Trial banner */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-2xl shadow-lg shadow-green-200">
            <Clock className="w-5 h-5 flex-shrink-0" />
            <span className="font-bold text-sm sm:text-base">All plans start with a FREE 15-day trial — pick any plan and cancel before day 15 to pay nothing</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {PLANS.map((plan) => {
            const Icon = plan.icon;
            const price = billing === "monthly" ? plan.price : plan.yearlyPrice;

            return (
              <div
                key={plan.id}
                data-testid={`plan-card-${plan.id}`}
                className={`relative rounded-3xl border-2 ${plan.popular ? "border-purple-400 shadow-2xl shadow-purple-100 md:-mt-4 md:mb-4" : plan.borderColor + " shadow-lg"} bg-white overflow-hidden transition-transform hover:-translate-y-1 duration-200`}
              >
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500" />
                )}

                {plan.popular && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-b-xl shadow-md">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="p-6 pt-8">
                  {/* Plan header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-sm`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-gray-900 text-lg">{plan.name}</h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${plan.tagBg}`}>{plan.staff}</span>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-5">
                    <div className="flex items-end gap-1">
                      <span className="text-gray-400 text-lg font-bold">₹</span>
                      <span className="text-5xl font-black text-gray-900">{price.toLocaleString("en-IN")}</span>
                      <span className="text-gray-400 text-sm mb-2">/month</span>
                    </div>
                    {billing === "yearly" && (
                      <p className="text-xs text-green-600 font-semibold mt-1">
                        Billed ₹{(price * 12).toLocaleString("en-IN")}/year — save ₹{((plan.price - plan.yearlyPrice) * 12).toLocaleString("en-IN")}
                      </p>
                    )}
                    <p className="text-xs text-purple-600 font-semibold mt-1.5 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      15 days free, then billed {billing}
                    </p>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handlePlanCta(plan.id)}
                    data-testid={`button-plan-cta-${plan.id}`}
                    className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600 hover:shadow-xl"
                        : "bg-gray-900 text-white hover:bg-gray-700 hover:shadow-lg"
                    }`}
                  >
                    {isAuthenticated && user?.userType === "salon_owner" ? "Go to Dashboard" : "Start Free Trial"}
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-2">No credit card required</p>

                  {/* Divider */}
                  <div className="border-t border-gray-100 my-5" />

                  {/* Features */}
                  <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                        </div>
                        <span className="text-gray-700 text-sm">{f}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 opacity-40">
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-gray-400" strokeWidth={3} />
                        </div>
                        <span className="text-gray-400 text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Full feature comparison</h2>
            <p className="text-gray-500 text-lg">See exactly what you get on each plan</p>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
            {/* Table header */}
            <div className="grid grid-cols-4 gap-0 border-b border-gray-100">
              <div className="p-5 text-gray-500 text-sm font-semibold">Feature</div>
              {PLANS.map((p) => (
                <div key={p.id} className={`p-5 text-center border-l border-gray-100 ${p.popular ? "bg-purple-50" : ""}`}>
                  <p className={`font-bold text-sm ${p.popular ? "text-purple-700" : "text-gray-900"}`}>{p.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">₹{(billing === "monthly" ? p.price : p.yearlyPrice).toLocaleString("en-IN")}/mo</p>
                </div>
              ))}
            </div>

            {[
              { feature: "Staff members", starter: "Up to 3", growth: "Unlimited", premium: "Unlimited" },
              { feature: "Salon locations", starter: "1", growth: "1", premium: "Up to 5" },
              { feature: "Online bookings", starter: true, growth: true, premium: true },
              { feature: "Real-time slot management", starter: true, growth: true, premium: true },
              { feature: "Customer discovery listing", starter: true, growth: true, premium: true },
              { feature: "Walk-in management", starter: true, growth: true, premium: true },
              { feature: "Photo gallery", starter: "10 photos", growth: "Unlimited", premium: "Unlimited" },
              { feature: "Booking notifications", starter: true, growth: true, premium: true },
              { feature: "Analytics & reports", starter: "Basic", growth: "Full", premium: "Advanced" },
              { feature: "Offer & discount campaigns", starter: false, growth: true, premium: true },
              { feature: "Customer messaging", starter: false, growth: true, premium: true },
              { feature: "Priority listing in search", starter: false, growth: true, premium: "Top priority" },
              { feature: "Revenue sharing dashboard", starter: false, growth: true, premium: true },
              { feature: "Customer loyalty tools", starter: false, growth: false, premium: true },
              { feature: "Dedicated account manager", starter: false, growth: false, premium: true },
              { feature: "Support", starter: "Email", growth: "Priority chat", premium: "Phone + priority" },
            ].map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-4 gap-0 border-b border-gray-50 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}>
                <div className="p-4 text-sm text-gray-700 font-medium flex items-center">{row.feature}</div>
                {(["starter", "growth", "premium"] as const).map((planId, pi) => {
                  const val = row[planId];
                  const isPop = PLANS[pi].popular;
                  return (
                    <div key={planId} className={`p-4 text-center flex items-center justify-center border-l border-gray-100 ${isPop ? "bg-purple-50/50" : ""}`}>
                      {val === true ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" strokeWidth={2.5} />
                      ) : val === false ? (
                        <X className="w-4 h-4 text-gray-300 mx-auto" />
                      ) : (
                        <span className={`text-xs font-semibold ${isPop ? "text-purple-700" : "text-gray-600"}`}>{val as string}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How trial works */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">How the free trial works</h2>
            <p className="text-gray-500 text-lg">No surprises — here's exactly what happens</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { day: "Day 1", icon: Zap, color: "from-purple-500 to-violet-600", title: "Sign up & get started", desc: "Create your salon profile in minutes. Full Growth plan access, instantly." },
              { day: "Day 1–15", icon: Calendar, color: "from-pink-500 to-rose-500", title: "Use everything free", desc: "Unlimited bookings, staff, analytics — everything included, no restrictions." },
              { day: "Day 12", icon: Bell, color: "from-amber-500 to-orange-500", title: "Reminder sent", desc: "We'll remind you 3 days before the trial ends so you're never surprised." },
              { day: "Day 15", icon: CreditCard, color: "from-blue-500 to-cyan-500", title: "Choose your plan", desc: "Pick Starter, Growth, or Premium. Cancel before day 15 and pay nothing." },
            ].map(({ day, icon: Icon, color, title, desc }) => (
              <div key={day} className="text-center">
                <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${color} items-center justify-center mb-3 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-xs font-bold text-purple-600 uppercase tracking-wide mb-1">{day}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-8">Salon owners love Sanwar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "The Growth plan is perfect for us. My bookings doubled in the first month and the analytics are super clear.", name: "Priya Sharma", salon: "Priya Beauty Studio, Mumbai", stars: 5 },
              { quote: "Started with the trial, moved to Growth after 1 week. The staff scheduling alone is worth the price.", name: "Rajesh Kumar", salon: "Style Zone, Bangalore", stars: 5 },
              { quote: "The Premium plan helps me manage all 3 of my salon locations from one dashboard. Incredible value.", name: "Anita Patel", salon: "Glamour Hub, Delhi", stars: 5 },
            ].map(({ quote, name, salon, stars }) => (
              <div key={name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-gray-400 text-xs">{salon}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500">Everything you need to know about pricing and the free trial</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200">
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1e0a3c 0%, #4a1a6b 50%, #6d28d9 100%)" }} />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent)", transform: "translate(30%, -30%)" }} />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-6">
            <Clock className="w-4 h-4 text-yellow-300" />
            <span className="text-yellow-300 text-sm font-medium">15-day free trial · No credit card</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Start your free trial today
          </h2>
          <p className="text-purple-200 text-lg mb-8 leading-relaxed">
            Join salon owners across India growing their business on Sanwar. Try any plan free for 15 days.
          </p>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-white text-purple-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 hover:shadow-2xl transition-all duration-200 group"
            data-testid="button-bottom-cta"
          >
            Start Free — 15 Days
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-purple-300 text-sm mt-4">No credit card required · Cancel anytime · Full access</p>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={sanwarLogo} alt="Sanwar" className="w-8 h-8 object-contain" />
            <span className="text-white font-bold">Sanwar</span>
            <span className="text-gray-500 text-sm">· Smart Salon Booking</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            <Link href="/auth" className="hover:text-white transition-colors">Sign Up</Link>
          </div>
          <p className="text-gray-500 text-xs">© 2024 Sanwar. Built for India's salons.</p>
        </div>
      </div>
    </div>
  );
}
