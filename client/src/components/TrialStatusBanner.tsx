import { Link } from "wouter";
import { Clock, Sparkles, ArrowRight, X, Crown } from "lucide-react";
import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";

interface TrialStatusBannerProps {
  className?: string;
}

export function TrialStatusBanner({ className = "" }: TrialStatusBannerProps) {
  const { user } = useAuth();
  const [dismissed, setDismissed] = useState(false);

  if (!user || user.userType !== "salon_owner" || dismissed) return null;

  const trialEndsAt = (user as any).trialEndsAt;
  const planType = (user as any).planType;

  if (!trialEndsAt || planType !== "trial") return null;

  const trialEnd = new Date(trialEndsAt);
  const now = new Date();
  const daysLeft = Math.ceil((trialEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  if (daysLeft <= 0) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-2xl p-4 flex items-center justify-between gap-4 ${className}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <p className="font-bold text-red-800 text-sm">Your free trial has ended</p>
            <p className="text-red-600 text-xs">Choose a plan to keep using Sanwar</p>
          </div>
        </div>
        <Link
          href="/pricing"
          className="flex-shrink-0 inline-flex items-center gap-1.5 bg-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-700 transition-colors"
          data-testid="button-trial-expired-cta"
        >
          Choose Plan <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const isUrgent = daysLeft <= 3;
  const bgClass = isUrgent ? "bg-orange-50 border-orange-200" : "bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200";
  const iconBg = isUrgent ? "bg-orange-100" : "bg-purple-100";
  const iconColor = isUrgent ? "text-orange-600" : "text-purple-600";
  const textColor = isUrgent ? "text-orange-800" : "text-purple-900";
  const subColor = isUrgent ? "text-orange-600" : "text-purple-600";
  const btnClass = isUrgent
    ? "bg-orange-500 text-white hover:bg-orange-600"
    : "bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:from-purple-700 hover:to-pink-600";

  return (
    <div className={`border rounded-2xl p-4 flex items-center justify-between gap-4 ${bgClass} ${className}`}>
      <div className="flex items-center gap-3 min-w-0">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`}>
          {isUrgent ? (
            <Clock className={`w-5 h-5 ${iconColor}`} />
          ) : (
            <Sparkles className={`w-5 h-5 ${iconColor}`} />
          )}
        </div>
        <div className="min-w-0">
          <p className={`font-bold text-sm ${textColor}`}>
            {isUrgent
              ? `⚠️ Only ${daysLeft} day${daysLeft === 1 ? "" : "s"} left in your free trial!`
              : `🎉 Free trial active — ${daysLeft} day${daysLeft === 1 ? "" : "s"} remaining`}
          </p>
          <p className={`text-xs mt-0.5 ${subColor}`}>
            {isUrgent
              ? "Pick a plan before your trial ends to keep all your data and bookings"
              : "You have full Growth plan access during your trial. Explore all features!"}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <Link
          href="/pricing"
          className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold transition-all ${btnClass}`}
          data-testid="button-trial-upgrade"
        >
          <Crown className="w-3.5 h-3.5" />
          {isUrgent ? "Choose Plan Now" : "See Plans"}
        </Link>
        {!isUrgent && (
          <button
            onClick={() => setDismissed(true)}
            className="w-8 h-8 rounded-xl bg-white/60 hover:bg-white flex items-center justify-center transition-colors"
            data-testid="button-dismiss-trial-banner"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>
    </div>
  );
}
