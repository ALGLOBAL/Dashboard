export interface LoginFormDTO {
  email: string;
  password: string;
}

export interface LoginResponseDTO {
  access_token: string;
  email: string;
  userId: string;
}

export type RegisterFormDTO = LoginFormDTO & { fullName: string };
export type RegisterResponseDTO = LoginResponseDTO;

export interface User {
  id: number;
  email: string;
  fullName: string;
}
