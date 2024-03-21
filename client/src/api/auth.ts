import axios from "@/core/axios";
import {
  LoginFormDTO,
  LoginResponseDTO,
  RegisterFormDTO,
  RegisterResponseDTO,
  User,
} from "@/api/types/auth.types";
import { destroyCookie } from "nookies";
import { USER_ID, TOKEN } from "@/constants";

export const login = async (
  values: LoginFormDTO
): Promise<LoginResponseDTO> => {
  return (await axios.post("/auth/login", values)).data;
};

export const register = async (
  values: RegisterFormDTO
): Promise<RegisterResponseDTO> => {
  return (await axios.post("/auth/register", values)).data;
};

export const getMe = async (): Promise<User> => {
  return (await axios.get("/auth/profile")).data;
};

export const logout = () => {
  destroyCookie(null, TOKEN, { path: "/" });
  destroyCookie(null, USER_ID, { path: "/" });
};
