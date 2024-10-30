// AuthStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      register: (userData) => {
        set({
          user: userData,
          isAuthenticated: true,
        });
      },

      login: (userData) => {
        set({
          user: userData,
          isAuthenticated: true,
        });
      },

      updateUser: (userData) =>
        set({
          user: {
            ...userData,
          },
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),
    }),
    {
      name: "current-user",
    }
  )
);

export default useAuthStore;
