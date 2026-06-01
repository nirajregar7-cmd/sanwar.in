import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowLeft, CheckCircle, Mail, KeyRound } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useMutation } from "@tanstack/react-query";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<"request" | "verify" | "done">("request");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [, navigate] = useLocation();

  const requestMutation = useMutation({
    mutationFn: async (data: { email: string }) => {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });
      let json: any = {};
      try { json = await res.json(); } catch {}
      if (!res.ok) throw new Error(json.message || "Failed to send reset code");
      return json;
    },
    onSuccess: () => setStep("verify"),
  });

  const resetMutation = useMutation({
    mutationFn: async (data: { email: string; otp: string; newPassword: string }) => {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(data),
      });
      let json: any = {};
      try { json = await res.json(); } catch {}
      if (!res.ok) throw new Error(json.message || "Failed to reset password");
      return json;
    },
    onSuccess: () => {
      setStep("done");
      setTimeout(() => navigate("/auth"), 3000);
    },
  });

  const handleRequestCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    requestMutation.mutate({ email });
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp || !newPassword || !confirmPassword) return;
    if (newPassword !== confirmPassword) return;
    if (newPassword.length < 6) return;
    resetMutation.mutate({ email, otp, newPassword });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-200 via-blue-100 to-slate-300 px-4 py-12">
      <Card className="w-full max-w-md shadow-2xl border-0 rounded-3xl bg-white/95 backdrop-blur-sm">
        <CardHeader className="space-y-1 pb-2">
          <div className="flex items-center gap-2 mb-1">
            <Link href="/auth">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <CardTitle className="text-xl font-bold">
              {step === "request" ? "Forgot Password" : step === "verify" ? "Enter Reset Code" : "Password Reset"}
            </CardTitle>
          </div>
          <CardDescription className="text-sm text-gray-500 pl-10">
            {step === "request" && "Enter your email to receive a 6-digit reset code"}
            {step === "verify" && `We sent a 6-digit code to ${email}`}
            {step === "done" && "Your password has been reset successfully"}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4 pt-2">
          {/* Step 1 — Request code */}
          {step === "request" && (
            <form onSubmit={handleRequestCode} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-medium">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your registered email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-11 rounded-xl"
                    required
                    data-testid="input-forgot-email"
                  />
                </div>
              </div>

              {requestMutation.isError && (
                <Alert variant="destructive" className="rounded-xl">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{(requestMutation.error as any)?.message}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full h-11 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 font-semibold"
                disabled={requestMutation.isPending || !email}
                data-testid="button-send-reset-code"
              >
                {requestMutation.isPending ? "Sending..." : "Send Reset Code"}
              </Button>
            </form>
          )}

          {/* Step 2 — Enter code + new password */}
          {step === "verify" && (
            <form onSubmit={handleReset} className="space-y-4">
              <Alert className="rounded-xl border-blue-200 bg-blue-50">
                <Mail className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-700 text-sm">
                  Check your inbox at <strong>{email}</strong> for the 6-digit code. It expires in 15 minutes.
                </AlertDescription>
              </Alert>

              <div className="space-y-2">
                <Label htmlFor="otp" className="font-medium">6-Digit Reset Code</Label>
                <div className="relative">
                  <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="otp"
                    type="text"
                    inputMode="numeric"
                    placeholder="Enter code from email"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    className="pl-10 h-11 rounded-xl text-center tracking-widest text-lg font-mono"
                    maxLength={6}
                    required
                    data-testid="input-reset-otp"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="newPassword" className="font-medium">New Password</Label>
                <Input
                  id="newPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="At least 6 characters"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="h-11 rounded-xl"
                  required
                  data-testid="input-new-password"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="font-medium">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Re-enter your new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-11 rounded-xl"
                  required
                  data-testid="input-confirm-password"
                />
              </div>

              <button
                type="button"
                className="text-xs text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"} passwords
              </button>

              {newPassword && confirmPassword && newPassword !== confirmPassword && (
                <Alert variant="destructive" className="rounded-xl">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>Passwords do not match</AlertDescription>
                </Alert>
              )}

              {newPassword && newPassword.length < 6 && (
                <Alert variant="destructive" className="rounded-xl">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>Password must be at least 6 characters</AlertDescription>
                </Alert>
              )}

              {resetMutation.isError && (
                <Alert variant="destructive" className="rounded-xl">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{(resetMutation.error as any)?.message}</AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full h-11 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 font-semibold"
                disabled={
                  resetMutation.isPending ||
                  otp.length !== 6 ||
                  !newPassword ||
                  !confirmPassword ||
                  newPassword !== confirmPassword ||
                  newPassword.length < 6
                }
                data-testid="button-reset-password"
              >
                {resetMutation.isPending ? "Resetting..." : "Reset Password"}
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full h-11 rounded-xl"
                onClick={() => { setStep("request"); requestMutation.reset(); }}
              >
                Resend Code
              </Button>
            </form>
          )}

          {/* Step 3 — Done */}
          {step === "done" && (
            <div className="text-center space-y-4 py-6">
              <div className="flex justify-center">
                <div className="bg-green-100 rounded-full p-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Password Updated!</h3>
              <p className="text-gray-500 text-sm">
                Your password has been reset successfully. Redirecting you to login...
              </p>
              <Button
                onClick={() => navigate("/auth")}
                className="w-full h-11 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 font-semibold"
              >
                Go to Login
              </Button>
            </div>
          )}

          {step !== "done" && (
            <div className="text-center pt-2">
              <Link href="/auth" className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
                Back to Login
              </Link>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
