import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function ClerkSignInPage() {
  const [, setLocation] = useLocation();
  useEffect(() => { setLocation('/auth'); }, []);
  return null;
}

export function ClerkSignUpPage() {
  const [, setLocation] = useLocation();
  useEffect(() => { setLocation('/auth'); }, []);
  return null;
}
