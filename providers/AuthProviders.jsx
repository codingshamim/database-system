"use client";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export default function AuthProviders({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const parsedUser = JSON.parse(loggedInUser);
    setUser(parsedUser);
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
