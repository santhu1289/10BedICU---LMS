/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import axios from "axios";
import { LoginProps, SignupProps } from "@/schema/userSchema";
import { toast } from "sonner";

const API_END_POINT = "http://localhost:8000/api/v1/";
axios.defaults.withCredentials = true;

type User = {
  name: string;
  email: string;
  profilePicture: string;
  admin: boolean;
  isVerified: boolean;
};

type UserState = {
  user: User | null;
  isAuthenticated: boolean;
  isCheckingAuth: boolean;
  loading: boolean;
  signup: (input: SignupProps) => Promise<void>;
  login: (input: LoginProps) => Promise<void>;
  checkAuthentication: () => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (input: any) => Promise<void>;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isCheckingAuth: true,
      loading: false,
      //Sign up API Implementation
      signup: async (input: SignupProps) => {
        try {
          set({ loading: true });
          const response = await axios.post(
            `${API_END_POINT}/registration`,
            input,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.data.success) {
            toast.success(response.data.message);
            set({
              loading: false,
              user: response.data.user,
              isAuthenticated: true,
            });
          }
        } catch (error: any) {
          toast.error(error.response.data.message);
          set({ loading: false });
        }
      },
      login: async (input: LoginProps) => {
        try {
          set({ loading: true });
          const response = await axios.post(`${API_END_POINT}/login`, input, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (response.data.success) {
            toast.success(response.data.message);
            set({
              loading: false,
              user: response.data.user,
              isAuthenticated: true,
            });
          }
        } catch (error: any) {
          toast.error(error.response.data.message);
          set({ loading: false });
        }
      },
      checkAuthentication: async () => {
        try {
          set({ isCheckingAuth: true });
          const response = await axios.get(`${API_END_POINT}/me`);
          if (response.data.success) {
            set({
              user: response.data.user,
              isAuthenticated: true,
              isCheckingAuth: false,
            });
          }
        } catch (error) {
          set({
            isAuthenticated: false,
            isCheckingAuth: false,
          });
          console.log(error);
        }
      },
      logout: async () => {
        try {
          set({ loading: true });
          const response = await axios.get(`${API_END_POINT}/logout`);
          if (response.data.success) {
            toast.success(response.data.message);
            set({ loading: false, user: null, isAuthenticated: false });
          }
        } catch (error) {
          set({ loading: false });
          console.log(error);
        }
      },
      updateProfile: async (input: any) => {
        try {
          set({ loading: true });
          const response = await axios.put(
            `${API_END_POINT}/update-user-avatar`,
            input,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.data.success) {
            toast.success(response.data.message);
            set({
              loading: false,
              user: response.data.user,
              isAuthenticated: true,
            });
          }
        } catch (error) {
          set({ loading: false });
          console.log(error);
        }
      },
    }),

    {
      name: "user-name",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
