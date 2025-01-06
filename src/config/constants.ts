export const API_BASE_URL =
  import.meta.env.VITE_BASE_PRODUCTS_API_URL || "http://localhost:3000/api";

export const APP_CONFIG = {
  API_TIMEOUT: 10000,
  TOKEN_KEY: "app_token",
} as const;
