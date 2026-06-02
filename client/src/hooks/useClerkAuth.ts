export function useClerkAuth() {
  return {
    user: null,
    isLoading: false,
    isAuthenticated: false,
    clerkUser: null,
    isSignedIn: false,
  };
}
