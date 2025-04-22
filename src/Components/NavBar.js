import { useTour } from "@reactour/tour";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { setIsOpen } = useTour();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Business", to: "/business" },
    { name: "Entertainment", to: "/entertainment" },
    { name: "Health", to: "/health" },
    { name: "Science", to: "/science" },
    { name: "Sports", to: "/sports" },
    { name: "Technology", to: "/technology" },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed-top w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl First-step font-bold text-white">
            NewsPulse
          </Link>

          {/* Hamburger menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="focus:outline-none"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </div>
            </button>
          </div>

          {/* Desktop nav */}
          <ul className="hidden lg:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="hover:text-indigo-400 second-step transition duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsOpen(true)}
            className="hidden lg:flex ml-4 bg-red-500 hover:bg-white hover:text-red-500 px-3 py-1 rounded text-sm"
          >
            Start Tour
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden px-4 pb-4 bg-gray-800">
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  className="block py-2 hover:text-indigo-400"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <button
              onClick={() => setIsOpen(true)}
              className="bg-red-500 hover:bg-white hover:text-red-500 px-3 py-1 rounded text-sm"
            >
              Open Tour
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
