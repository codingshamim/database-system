"use client";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";

export default function NavActions() {
  const { user, setUser } = useAuth();
  const logOutAction = () => {
    setUser(null);
    localStorage.clear("user");
  };
  return (
    <div
      id="hs-header-base"
      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
      aria-labelledby="hs-header-base-collapse"
    >
      <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
          <div className="grow" />
          {/* Button Group */}
          <div className="flex flex-wrap items-center gap-x-1.5">
            <Link
              className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100"
              href={user ? "/console" : "/signin"}
            >
              {user ? "Go to console" : "Sign In"}
            </Link>
            {user ? (
              <button className="btn" onClick={logOutAction}>
                Log Out
              </button>
            ) : (
              <Link className="btn" href="/signup">
                {" "}
                Get started{" "}
              </Link>
            )}
          </div>
          {/* End Button Group */}
        </div>
      </div>
    </div>
  );
}
