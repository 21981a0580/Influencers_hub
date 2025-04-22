import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-700 dark:bg-gray-900 fixed top-0 w-full z-50 text-white dark:text-gray-100">
      <div className="flex justify-between items-center px-4 py-3 md:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            className="w-12 h-12 rounded"
            alt="logo"
            src="https://static.vecteezy.com/system/resources/previews/000/390/524/original/modern-company-logo-design-vector.jpg"
          />
          <span className="text-lg font-bold">Influencer Hub</span>
        </div>

        {/* Search (hidden on small screens) */}
        <div className="hidden md:block">
          <input
            className="border border-yellow-300 dark:border-yellow-500 rounded-md px-3 py-1 text-black dark:text-white dark:bg-gray-800"
            type="text"
            placeholder="Search your influencer"
          />
        </div>

        {/* Theme Toggle + Hamburger */}
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleTheme}>
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/discover" className="hover:text-yellow-300">Discover</Link>
          <Link to="/about" className="hover:text-yellow-300">About Us</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact Us</Link>
          <button onClick={toggleTheme}>
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 dark:bg-gray-900 px-4 py-4 space-y-4 text-center">
          <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Home</Link>
          <Link to="/discover" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Discover</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">About Us</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block hover:text-yellow-300">Contact Us</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
