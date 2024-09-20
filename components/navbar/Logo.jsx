import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
      aria-label="Brand"
    >
      RksDB
    </Link>
  );
}
