import { apiClient } from "./apiClient";
import { Admin, ApiSuccessResponse } from "../types";

interface LoginPayload {
  email: string;
  password: string;
}

interface LoginResponseData {
  token: string;
  admin: Admin;
}

export const authService = {
  login: async (payload: LoginPayload) => {
    const { data } = await apiClient.post<ApiSuccessResponse<LoginResponseData>>(
      "/auth/login",
      payload
    );
    return data.data;
  },
};
