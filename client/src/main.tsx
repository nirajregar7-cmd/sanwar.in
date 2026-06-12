import { createRoot } from "react-dom/client";
import "./i18n";
import App from "./App";
import "./index.css";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    if (import.meta.env.PROD) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
      return;
    }

    // Keep Vite development free of stale PWA caches. A cached service worker can
    // serve old module files and leave the app on a blank white screen.
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) => registrations.forEach((registration) => registration.unregister()))
      .catch(() => {});

    if ('caches' in window) {
      caches
        .keys()
        .then((cacheNames) =>
          Promise.all(
            cacheNames
              .filter((cacheName) => cacheName.startsWith('sanwar-'))
              .map((cacheName) => caches.delete(cacheName)),
          ),
        )
        .catch(() => {});
    }
  });
}

createRoot(document.getElementById("root")!).render(<App />);
