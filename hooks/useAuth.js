import { AuthContext } from "@/providers/AuthProviders";
import { useContext } from "react";

export default function useAuth() {
  const { user, setUser } = useContext(AuthContext);
  return { user, setUser };
}
