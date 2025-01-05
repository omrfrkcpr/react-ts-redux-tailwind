interface User {
  name: string;
  email: string;
}

interface AuthProps extends User {
  user: User;
  token: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null | undefined;
}
