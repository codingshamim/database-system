"use client";

import { registerAction } from "@/actions";
import { useState } from "react";
import LoadingButton from "./LoadingButton";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
export default function SignUpform() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const handleChange = (e) => {
    setError(false);
    const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleRegister = async (e) => {
    setLoading(true);
    setError(false);
    e.preventDefault();
    try {
      const response = await registerAction(state);
      if (!response?.ok) {
        setError(response?.message);
      } else {
        localStorage.setItem("user", JSON.stringify(response?.data));
        router.push("/");
        setUser(response?.data);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleRegister}>
      {error && (
        <p className=" text-xs text-red-600 mt-2" id="email-error">
          {error}
        </p>
      )}
      <div className="grid gap-y-4">
        {/* Form Group */}
        <div>
          <label htmlFor="name" className="block text-sm mb-2">
            Name
          </label>
          <div className="relative">
            <input
              type="text"
              name="name"
              className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm outline-none focus:border-black disabled:pointer-events-none"
              required=""
              onChange={handleChange}
              value={state?.name}
            />
            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
              <svg
                className="size-5 text-red-500"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
        </div>
        {/* End Form Group */}
        {/* Form Group */}
        <div>
          <label htmlFor="email" className="block text-sm mb-2">
            Email address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={state?.email}
              className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm outline-none focus:border-black disabled:pointer-events-none"
              required=""
              aria-describedby="email-error"
            />
            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
              <svg
                className="size-5 text-red-500"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          <p className="hidden text-xs text-red-600 mt-2" id="email-error">
            Please include a valid email address so we can get back to you
          </p>
        </div>
        {/* End Form Group */}
        {/* Form Group */}
        <div>
          <label htmlFor="password" className="block text-sm mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={state?.password}
              className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-black disabled:pointer-events-none"
              required=""
              aria-describedby="password-error"
            />
            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
              <svg
                className="size-5 text-red-500"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          <p className="hidden text-xs text-red-600 mt-2" id="password-error">
            8+ characters required
          </p>
        </div>
        {/* End Form Group */}
        {/* Form Group */}
        <div>
          <label htmlFor="confirm-password" className="block text-sm mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type="password"
              id="confirm-password"
              name="cPassword"
              onChange={handleChange}
              value={state?.cPassword}
              className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-black disabled:pointer-events-none"
              required=""
              aria-describedby="confirm-password-error"
            />
            <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
              <svg
                className="size-5 text-red-500"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
              </svg>
            </div>
          </div>
          <p
            className="hidden text-xs text-red-600 mt-2"
            id="confirm-password-error"
          >
            Password does not match the password
          </p>
        </div>
        {/* End Form Group */}
        <LoadingButton loading={loading}>Sign Up</LoadingButton>
      </div>
    </form>
  );
}
