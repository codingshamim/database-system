import Logo from "./Logo";
import NavActions from "./NavActions";

export default function Navbar() {
  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200">
      <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-x-1">
          <Logo />
          {/* Collapse Button */}

          {/* End Collapse Button */}
        </div>
        {/* Collapse */}
        <NavActions />
        {/* End Collapse */}
      </nav>
    </header>
  );
}
