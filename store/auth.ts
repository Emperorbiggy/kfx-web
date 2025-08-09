import { IUser } from "@/types/user";
import { create } from "zustand";


interface AuthState {
    user: IUser | null;
    isAuthenticated: boolean;
}

interface AuthActions {
  setUser: (user: IUser | null) => void;
    update: (updatedData: Partial<IUser>) => void;
    logout: () => void;
}

type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isAuthenticated: false,

  setUser: (user) => set({ user, isAuthenticated: !!user }),

  update: (updatedData) => {
    const currentUser = get().user;
    if (!currentUser) return;
    set({ user: { ...currentUser, ...updatedData } });
    },
    logout: () => {
        set({ user: null, isAuthenticated: false });
        localStorage.removeItem("authToken");
        window.location.href = "/auth/login";
    }
}));
