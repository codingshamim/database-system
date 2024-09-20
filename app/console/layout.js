/* eslint-disable react/no-unescaped-entities */
import Sidebar from "./Sidebar";

export default function layout({ children }) {
  return (
    <main className="flex gap-4">
      {/* Sidebar */}

      <Sidebar />
      {/* End Sidebar */}
      {children}
    </main>
  );
}
