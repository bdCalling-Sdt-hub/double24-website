import { useState, useEffect, useRef } from "react";
import { FaRegHeart } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const navOptions = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Shop",
    path: "/shop",
  },
  {
    label: "FAQ",
    path: "/f-a-q",
  },
  {
    label: "About Us",
    path: "/aboutUs",
  },
  {
    label: "Contact Us",
    path: "/contactUs",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar flex px-5 lg:px-20 py-5 bg-[#F9FDF9] justify-between items-center relative">
      <button
        className="lg:hidden z-50"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <HiX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
      </button>

      <img
        src={logo}
        alt="logo"
        className="logo absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none"
      />

      <div
        ref={menuRef}
        className={`absolute lg:relative top-16 left-0 lg:top-0 lg:left-auto w-full lg:w-auto lg:flex flex-col lg:flex-row bg-[#F9FDF9] lg:bg-yellow-100 shadow-lg lg:shadow-none p-5 lg:p-2 lg:rounded-2xl space-y-4 lg:space-y-0 lg:space-x-6 transition-all duration-300 z-50 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {navOptions.map((option, index) => (
          <NavLink
            key={index}
            to={option.path}
            className={({ isActive }) =>
              `nav-link flex flex-col px-3 py-1 rounded-lg ${
                isActive ? "bg-[#FFC313]" : "hover:bg-gray-200"
              }`
            }
            onClick={() => setIsMenuOpen(false)}
          >
            {option.label}
          </NavLink>
        ))}
      </div>

      <div className="nav-icons flex gap-4">
        <NavLink to="/favorites">
          <FaRegHeart size={24} />
        </NavLink>
        <NavLink to="/cart">
          <IoCartOutline size={24} />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
