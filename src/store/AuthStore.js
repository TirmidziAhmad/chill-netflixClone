import create from "zustand";
import { persist } from "zustand/middleware";
import userData from "../api/userData";
// Store with persist to keep the login state even after page reload
const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      error: null,

      // Register function
      register: async (userData) => {
        try {
          // You can add your API call here
          const response = await fakeRegisterApi(userData); // Replace with your actual API call
          set({ user: response.user, isLoggedIn: true });
        } catch (error) {
          set({ error });
        }
      },

      // Login function
      login: async (credentials) => {
        try {
          const response = await fakeLoginApi(credentials); // Replace with your actual API call
          set({ user: response.user, isLoggedIn: true });
        } catch (error) {
          set({ error });
        }
      },

      // Logout function
      logout: () => set({ user: null, isLoggedIn: false }),
    }),
    {
      name: "auth-storage", // Name of the key in localStorage
    }
  )
);

export default useAuthStore;
