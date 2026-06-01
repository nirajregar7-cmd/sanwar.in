import { useState, useEffect } from 'react';

export interface CountryConfig {
  name: string;
  code: string;
  flag: string;
  timezone: string;
  currency: {
    code: string;
    symbol: string;
    name: string;
  };
  paymentGateway: string;
  languages: string[];
  defaultLanguage: string;
}

const defaultConfig: CountryConfig = {
  name: "India",
  code: "IN",
  flag: "🇮🇳",
  timezone: "Asia/Kolkata (IST)",
  currency: { code: "INR", symbol: "₹", name: "Indian Rupee" },
  paymentGateway: "Cashfree",
  languages: ["Hindi", "English"],
  defaultLanguage: "Hindi/English"
};

function readConfigFromStorage(): { config: CountryConfig; configured: boolean } {
  try {
    const savedConfig = localStorage.getItem('sanwar_country_config');
    const onboardingCompleted = localStorage.getItem('sanwar_country_onboarding_completed');
    if (savedConfig && onboardingCompleted) {
      const config = JSON.parse(savedConfig);
      return { config, configured: true };
    }
  } catch {
    // ignore parse errors
  }
  return { config: defaultConfig, configured: false };
}

export function useCountryConfig() {
  const [countryConfig, setCountryConfig] = useState<CountryConfig>(() => readConfigFromStorage().config);
  const [isConfigured, setIsConfigured] = useState<boolean>(() => readConfigFromStorage().configured);

  useEffect(() => {
    const { config, configured } = readConfigFromStorage();
    setCountryConfig(config);
    setIsConfigured(configured);
  }, []);

  const updateCountryConfig = (newConfig: CountryConfig) => {
    setCountryConfig(newConfig);
    localStorage.setItem('sanwar_country_config', JSON.stringify(newConfig));
    localStorage.setItem('sanwar_country_onboarding_completed', 'true');
    setIsConfigured(true);
  };

  const resetCountryConfig = () => {
    localStorage.removeItem('sanwar_country_config');
    localStorage.removeItem('sanwar_country_onboarding_completed');
    setCountryConfig(defaultConfig);
    setIsConfigured(false);
  };

  return {
    countryConfig,
    isConfigured,
    updateCountryConfig,
    resetCountryConfig
  };
}
