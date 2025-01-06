export type User = {
  email: string;
  token: string;
};

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface Credentials {
  email: string;
  password: string;
}
