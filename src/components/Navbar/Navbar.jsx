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
    <div className="relative z-10 shadow-md w-full dark:bg-gray-900 dark:text-white duration-300 py-4">
      <div className="container mx-auto px-6 sm:px-8 md:px-10">
        <div className="flex justify-between items-center">
          <div className="ml-6">
            <span className="text-3xl font-bold font-serif">SRI GANESH TAXI SERICES</span>
            <h3 className="tagline text-xl"> Your Journey Our Passion</h3>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
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

          {/* Mobile View */}
          <div className="flex items-center gap-4 md:hidden">
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
            {/* Mobile Hamburger Menu Icon */}
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
