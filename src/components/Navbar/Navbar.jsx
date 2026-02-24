import { useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-scroll";

export const Navlinks = [
  { id: 1, name: "HOME", link: "home" },
  { id: 2, name: "CARS", link: "carlist" },
  { id: 3, name: "ABOUT", link: "about" },
  { id: 4, name: "CONTACT", link: "contact" },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative z-10 shadow-md w-full dark:bg-gray-900 dark:text-white duration-300">
      
      {/* Top Notification Ticker (Moved to the very top) */}
      <div className="w-full bg-blue-600 h-8 flex items-center overflow-hidden">
        <div className="animate-marquee inline-block whitespace-nowrap text-sm font-medium">
          <span className="text-white">• Find your best taxi at Murdeshwar</span>
          <span className="mx-6 text-white">|</span>
          <span className="text-white">• 24/7 Service</span>
          <span className="mx-6 text-white">|</span>
          <span className="text-white">• Local & Outstation Cabs</span>
          <span className="mx-6 text-white">|</span>
          <span className="text-white">Airport Pickup</span>
          <span className="mx-6 text-white">|</span>
          <span className="text-white">Affordable Prices</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container mx-auto px-6 sm:px-8 md:px-10 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo / Brand Name */}
          <div className="top-ticker">
            <span className="text-xl md:text-3xl font-bold font-serif">SRI GANESH TAXI SERVICES</span>
            <h3 className="tagline text-sm md:text-xl">Your Journey Our Passion</h3>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id}>
                  <Link
                    to={link}
                    smooth={true}
                    duration={1500}
                    className="text-lg font-medium cursor-pointer hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500"
                  >
                    {name}
                  </Link>
                </li>
              ))}
              {/* Dark Mode Toggle */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl cursor-pointer"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl cursor-pointer"
                />
              )}
            </ul>
          </nav>

          {/* Mobile View Toggle Buttons */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl cursor-pointer"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {showMenu && (
        <div className="md:hidden bg-white dark:bg-black absolute top-full left-0 w-full shadow-lg p-6">
          <ul className="flex flex-col gap-4">
            {Navlinks.map(({ id, name, link }) => (
              <li key={id}>
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  onClick={() => setShowMenu(false)}
                  className="block text-lg font-medium text-black dark:text-white cursor-pointer hover:text-primary transition-colors duration-500"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;