/**
 * Shared formatting utilities.
 *
 * Centralises date, time, currency, and relative-time helpers that were
 * previously duplicated across pages and components.
 */

// ---------------------------------------------------------------------------
// Relative time ("2m", "3h", "5d", or "Jan 12")
// ---------------------------------------------------------------------------

export function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const min = Math.floor(diff / 60000);
  if (min < 1) return "now";
  if (min < 60) return `${min}m`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h`;
  const d = Math.floor(hr / 24);
  if (d < 7) return `${d}d`;
  return new Date(dateStr).toLocaleDateString([], {
    month: "short",
    day: "numeric",
  });
}

// ---------------------------------------------------------------------------
// Message timestamp ("02:34 PM")
// ---------------------------------------------------------------------------

export function formatMessageTime(dateStr: string): string {
  return new Date(dateStr).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ---------------------------------------------------------------------------
// Countdown timer (seconds → "M:SS")
// ---------------------------------------------------------------------------

export function formatCountdown(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

// ---------------------------------------------------------------------------
// 24-h time string → 12-h display ("9:30 AM")
// ---------------------------------------------------------------------------

export function formatTimeOfDay(time: string): string {
  if (!time) return "";
  const [hours, minutes] = time.split(":");
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  return `${displayHour}:${minutes} ${ampm}`;
}

// ---------------------------------------------------------------------------
// Date formatting helpers (consistent locale/options)
// ---------------------------------------------------------------------------

/** "Jan 12, 2025" */
export function formatDateShort(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/** "Jan 12" (no year) */
export function formatDateCompact(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });
}

/** "Mon, 12 Jan" */
export function formatDateWithWeekday(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

// ---------------------------------------------------------------------------
// Currency formatting
// ---------------------------------------------------------------------------

export function formatCurrency(
  amount: number | string,
  symbol = "₹",
): string {
  const num = typeof amount === "string" ? parseFloat(amount) : amount;
  if (isNaN(num)) return `${symbol}0`;
  return `${symbol}${num.toLocaleString("en-IN")}`;
}
