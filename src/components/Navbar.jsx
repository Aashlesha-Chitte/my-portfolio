import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg sm:px-6 px-3">
      <div className="max-w-7xl mx-auto sm:px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            WEL<span className="text-blue-500">COME</span>
          </a>

          {/* Hamburger Icon */}
          <div
            className="relative cursor-pointer z-40 md:hidden text-4xl flex items-center"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hove:text-white transition-colors"
            >

              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hove:text-white transition-colors"
            >

              About
            </a>
            <a
              href="#timeline"
              className="text-gray-300 hove:text-white transition-colors"
            >

              Timeline
            </a>
            <a
              href="#expertize"
              className="text-gray-300 hove:text-white transition-colors"
            >

              Expertize
            </a>
            <a
              href="#projects"
              className="text-gray-300 hove:text-white transition-colors"
            >

              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hove:text-white transition-colors"
            >

              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
