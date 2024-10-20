import { create } from "zustand";
import { persist } from "zustand/middleware";
import usersData from "../api/userData";

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      users: usersData, // Store the entire users array

      login: (username, password) => {
        const user = get().users.find((u) => u.username === username && u.password === password);

        if (user) {
          set({ user, isAuthenticated: true });
          return true;
        } else {
          return false;
        }
      },

      register: (newUser) => {
        set((state) => ({
          users: [...state.users, newUser],
          user: newUser,
          isAuthenticated: true,
        }));
      },

      logout: () => {
        set({ user: null, isAuthenticated: false });
      },

      updateUser: (updatedUser) => {
        set((state) => ({
          users: state.users.map((u) => (u.id === updatedUser.id ? updatedUser : u)),
          user: state.user?.id === updatedUser.id ? updatedUser : state.user,
        }));
      },

      deleteUser: (userId) => {
        set((state) => ({
          users: state.users.filter((u) => u.id !== userId),
          user: state.user?.id === userId ? null : state.user,
          isAuthenticated: state.user?.id === userId ? false : state.isAuthenticated,
        }));
      },
    }),
    { name: "auth" }
  )
);

export default useAuthStore;
