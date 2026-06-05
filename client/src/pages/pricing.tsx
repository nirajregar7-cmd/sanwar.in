import { Link } from "wouter";
import { useState } from "react";
import {
  Check,
  Scissors,
  Calendar,
  Users,
  BarChart3,
  MessageSquare,
  Star,
  Shield,
  Smartphone,
  Zap,
  Gift,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Sparkles,
  Clock,
  Bell,
  Image,
  CreditCard,
  MapPin,
} from "lucide-react";
import sanwarLogo from "@/assets/sanwar-logo.png";
import { useAuth } from "@/hooks/useAuth";

const features = [
  { icon: Calendar, title: "Smart Slot Booking", desc: "Real-time slot availability with automatic scheduling for each staff member" },
  { icon: Users, title: "Staff Management", desc: "Add unlimited staff, assign services, manage working hours and holidays" },
  { icon: BarChart3, title: "Business Analytics", desc: "Track revenue, bookings, top services, and customer retention metrics" },
  { icon: MessageSquare, title: "Customer Chat", desc: "In-app messaging to communicate with customers directly" },
  { icon: Bell, title: "Booking Notifications", desc: "Instant alerts for new bookings, cancellations, and reminders" },
  { icon: Star, title: "Reviews & Ratings", desc: "Collect customer reviews and manage your salon reputation" },
  { icon: Image, title: "Media Gallery", desc: "Showcase your salon with photos and videos to attract more customers" },
  { icon: Gift, title: "Offers & Discounts", desc: "Create promotional offers and loyalty programs for your customers" },
  { icon: TrendingUp, title: "Revenue Sharing", desc: "Transparent revenue tracking with automatic split calculation" },
  { icon: Smartphone, title: "Mobile App Access", desc: "Manage your salon from anywhere with our progressive web app" },
  { icon: CreditCard, title: "Walk-in Bookings", desc: "Handle walk-in customers alongside online bookings seamlessly" },
  { icon: MapPin, title: "Salon Discovery", desc: "Get discovered by thousands of customers searching nearby salons" },
];

const faqs = [
  {
    q: "Is the free trial really free? No credit card needed?",
    a: "Yes, completely free. No credit card, no payment method required. Just sign up and start managing your salon immediately.",
  },
  {
    q: "How long does the free trial last?",
    a: "Your free trial gives you full access to all features. We'll notify you well in advance before any changes — you'll always be in control.",
  },
  {
    q: "Can I add my staff members during the trial?",
    a: "Absolutely! You can add unlimited staff members, set their working hours, assign services, and generate slots for each of them.",
  },
  {
    q: "Will my customers be able to book online immediately?",
    a: "Yes. Once you complete your salon profile, you're instantly discoverable. Customers can search, find, and book your services in real time.",
  },
  {
    q: "What happens to my data after the trial?",
    a: "Your salon data, bookings, and customer history are always safe with us. We never delete your data.",
  },
  {
    q: "Do I need technical knowledge to set up?",
    a: "Not at all. Our step-by-step salon setup wizard guides you through every step in under 10 minutes.",
  },
];

export default function PricingPage() {
  const { isAuthenticated, user } = useAuth();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const ctaHref =
    isAuthenticated && user?.userType === "salon_owner"
      ? "/shopkeeper/dashboard"
      : "/auth?type=salon_owner";

  return (
    <div className="min-h-screen bg-white font-sans">
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

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #1e0a3c 0%, #4a1a6b 40%, #6d28d9 70%, #7c3aed 100%)",
          }}
        />
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #f472b6, transparent)", transform: "translate(-30%, 30%)" }} />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white/90 text-sm font-medium">Free for Salon Owners — No Credit Card Required</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Grow Your Salon<br />
            <span style={{ background: "linear-gradient(90deg, #f9a8d4, #c4b5fd, #93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              with Sanwar
            </span>
          </h1>
          <p className="text-purple-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            The complete salon management platform — online bookings, staff scheduling, analytics, and customer discovery. Everything you need, completely free to start.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={ctaHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 hover:shadow-2xl transition-all duration-200 group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              See how it works
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-purple-200">
            {[
              { icon: Check, text: "No credit card required" },
              { icon: Check, text: "Setup in under 10 minutes" },
              { icon: Check, text: "Full access to all features" },
              { icon: Check, text: "Cancel anytime" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3 h-3 text-green-400" />
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16 relative z-10">
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg">
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 rounded-3xl blur-lg opacity-40" />
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Card header */}
              <div className="p-8 text-center"
                style={{ background: "linear-gradient(135deg, #1e0a3c 0%, #6d28d9 100%)" }}>
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 rounded-full px-4 py-1.5 text-sm font-bold mb-4">
                  <Sparkles className="w-4 h-4" />
                  FREE TRIAL
                </div>
                <div className="text-white">
                  <div className="flex items-end justify-center gap-1 mb-2">
                    <span className="text-7xl font-extrabold">₹0</span>
                    <span className="text-purple-300 text-lg mb-3">/month</span>
                  </div>
                  <p className="text-purple-200 text-base">Full access — all features included</p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-8">
                <ul className="space-y-3 mb-8">
                  {[
                    "Unlimited bookings",
                    "Unlimited staff members",
                    "Real-time slot management",
                    "Customer discovery & profile page",
                    "Business analytics dashboard",
                    "In-app customer messaging",
                    "Offer & discount campaigns",
                    "Photo & video gallery",
                    "Walk-in booking management",
                    "Mobile app (PWA)",
                    "Booking notifications & reminders",
                    "Review management",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={ctaHref}
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-pink-600 hover:shadow-xl transition-all duration-200"
                  data-testid="button-start-free-trial"
                >
                  Start Free Trial — It's Free
                </Link>
                <p className="text-center text-xs text-gray-400 mt-3">
                  No credit card • No commitment • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" />
              Everything Included
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              All the tools you need to run a<br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                successful salon
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              No hidden features, no locked tiers. Everything in the free trial is everything we have.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mb-4 group-hover:from-purple-200 group-hover:to-pink-200 transition-colors">
                  <Icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1.5">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Ready in 3 simple steps
            </h2>
            <p className="text-gray-500 text-lg">From sign-up to first booking in under 10 minutes</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Scissors,
                title: "Create your salon profile",
                desc: "Sign up as a Salon Owner, fill in your salon details, add services and pricing.",
                color: "from-purple-500 to-violet-600",
              },
              {
                step: "02",
                icon: Users,
                title: "Add your team",
                desc: "Add staff members, assign working hours, and generate time slots automatically.",
                color: "from-pink-500 to-rose-600",
              },
              {
                step: "03",
                icon: Calendar,
                title: "Start taking bookings",
                desc: "Go live and start receiving real-time bookings from customers near you.",
                color: "from-blue-500 to-indigo-600",
              },
            ].map(({ step, icon: Icon, title, desc, color }) => (
              <div key={step} className="relative text-center">
                <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${color} items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-0 right-8 text-6xl font-black text-gray-100 -z-10 select-none leading-none">{step}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-purple-700 hover:to-pink-600 hover:shadow-xl transition-all duration-200 group"
              data-testid="button-get-started"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Setting up my salon on Sanwar took less than 10 minutes. My bookings doubled in the first month.",
                name: "Priya Sharma",
                salon: "Priya Beauty Studio, Mumbai",
                stars: 5,
              },
              {
                quote: "The staff scheduling feature saved me hours every week. Everything is managed from my phone now.",
                name: "Rajesh Kumar",
                salon: "Style Zone, Bangalore",
                stars: 5,
              },
              {
                quote: "My customers love being able to book online. The reviews feature helped me build real trust.",
                name: "Anita Patel",
                salon: "Glamour Hub, Delhi",
                stars: 5,
              },
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
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-500">Everything you need to know about the Sanwar free trial</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
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

      {/* Bottom CTA Banner */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, #1e0a3c 0%, #4a1a6b 50%, #6d28d9 100%)" }}
        />
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent)", transform: "translate(30%, -30%)" }} />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 rounded-full px-4 py-1.5 mb-6">
            <Clock className="w-4 h-4 text-yellow-300" />
            <span className="text-yellow-300 text-sm font-medium">Start in under 10 minutes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to digitize your salon?
          </h2>
          <p className="text-purple-200 text-lg mb-8 leading-relaxed">
            Join salon owners across India already growing their business on Sanwar. Free to start, forever.
          </p>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-white text-purple-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 hover:shadow-2xl transition-all duration-200 group"
            data-testid="button-bottom-cta"
          >
            Start Free Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-purple-300 text-sm mt-4">No credit card required · No hidden fees</p>
        </div>
      </section>

      {/* Footer strip */}
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
