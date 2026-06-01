---
name: Auth hook resilience
description: useAuth must not block rendering on network errors or slow servers
---

## Rule
The `/api/auth/user` fetch must never leave `isLoading=true` indefinitely. Use a 10-second AbortController timeout and return `null` on any non-401 error (rather than throwing).

**Why:** In Vercel serverless with cold starts, the function can take 10-30s. If the fetch hangs, the Router stays in the spinner state (which shows on top of CustomerBottomNav, looking like a broken blank page).

**How to apply:**
- Add `AbortController` with a 10s timeout to the queryFn
- Catch AbortError and return `null` (unauthenticated) instead of throwing
- Return `null` for all non-ok responses (not just 401) to avoid blocking the UI
- Keep `retry: false`
