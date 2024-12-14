import { useState, useEffect, useRef } from "react";
import { FaRegHeart } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shopCategories, setShopCategories] = useState([]);
  const menuRef = useRef(null);

  const data = [
    { id: 1, name: "THCA Flower" },
    { id: 2, name: "THCA Flower Ounces" },
    { id: 3, name: "White Label THCA" },
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setShopCategories(
          data.map((category) => ({
            id: category.id,
            name: category.name,
            path: `/shop/category/${category.id}`,
          }))
        );
      } catch (error) {
        console.error("Error fetching shop categories:", error);
      }
    };

    fetchCategories();

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

  const navOptions = [
    { label: "Home", path: "/" },
    {
      label: (
        <Dropdown
          overlay={
            <Menu>
              {shopCategories.map((category) => (
                <Menu.Item key={category.id}>
                  <NavLink to={category.path}>{category.name}</NavLink>
                </Menu.Item>
              ))}
            </Menu>
          }
          trigger={["click"]}
        >
          <a onClick={(e) => e.preventDefault()}>
            Shop <DownOutlined />
          </a>
        </Dropdown>
      ),
    },
    { label: "FAQ", path: "/f-a-q" },
    { label: "About Us", path: "/aboutUs" },
    { label: "Contact Us", path: "/contactUs" },
  ];

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
