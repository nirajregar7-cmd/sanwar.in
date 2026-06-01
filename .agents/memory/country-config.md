---
name: Country config init
description: useCountryConfig must read localStorage synchronously to avoid CountryOnboarding flash
---

## Rule
Use lazy useState initializer to read localStorage on the FIRST render, not in useEffect.

**Why:** `useState(false)` + `useEffect` causes isConfigured=false on the first render. The Router shows `<CountryOnboarding />` for one frame before useEffect runs and sets isConfigured=true. On slower devices this is a visible flash or blank screen.

**How to apply:**
```ts
function readConfigFromStorage() { /* read localStorage */ }
const [isConfigured, setIsConfigured] = useState(() => readConfigFromStorage().configured);
```
Keep the useEffect as a sync safety net for edge cases.
