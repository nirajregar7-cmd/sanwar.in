import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "../lib/queryClient";
import { useToast } from "@/hooks/use-toast";

type LoginData = {
  email: string;
  password: string;
};

type RegisterData = {
  email: string;
  password: string;
  firstName: string;
  lastName?: string;
  userType: "customer" | "salon_owner";
};

export function useAuth() {
  const { toast } = useToast();
  
  const { data: user, isLoading, error, isError } = useQuery({
    queryKey: ["/api/auth/user"],
    queryFn: async () => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout
      try {
        const res = await fetch("/api/auth/user", {
          credentials: "include",
          signal: controller.signal,
        });
        clearTimeout(timeout);
        
        // Don't throw on 401, just return null
        if (res.status === 401) {
          return null;
        }
        
        if (!res.ok) {
          return null; // treat server errors as unauthenticated, don't block UI
        }
        
        return await res.json();
      } catch (e: any) {
        clearTimeout(timeout);
        // Network error or timeout — treat as unauthenticated to avoid infinite spinner
        if (e?.name === 'AbortError') {
          console.warn("Auth check timed out, proceeding as unauthenticated");
        }
        return null;
      }
    },
    retry: false,
    staleTime: 5 * 60 * 1000,
    refetchInterval: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: true,
    gcTime: 15 * 60 * 1000,
    enabled: true,
  });

  const isAuthenticated = !!user && !isError;

  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginData) => {
      const res = await apiRequest("POST", "/api/login", credentials);
      return await res.json();
    },
    onSuccess: (user) => {
      queryClient.setQueryData(["/api/auth/user"], user);
    },
    onError: (error: Error) => {
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const registerMutation = useMutation({
    mutationFn: async (credentials: RegisterData) => {
      const res = await apiRequest("POST", "/api/register", credentials);
      return await res.json();
    },
    onSuccess: (user) => {
      queryClient.setQueryData(["/api/auth/user"], user);
    },
    onError: (error: Error) => {
      toast({
        title: "Registration failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      try {
        await apiRequest("POST", "/api/logout");
      } catch (err) {
        console.warn("Logout server call failed, logging out locally:", err);
      }
    },
    onSuccess: () => {
      queryClient.setQueryData(["/api/auth/user"], null);
      queryClient.clear();
      window.location.href = '/';
    },
    onError: (error: Error) => {
      queryClient.setQueryData(["/api/auth/user"], null);
      queryClient.clear();
      window.location.href = '/';
    },
  });

  return {
    user,
    isLoading,
    isAuthenticated,
    loginMutation,
    registerMutation,
    logoutMutation,
  };
}
