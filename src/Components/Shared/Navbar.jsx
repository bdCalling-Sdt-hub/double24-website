import { FaRegHeart } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { IoCartOutline } from "react-icons/io5";

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
    label: "About Us",
    path: "/aboutUs",
  },
  {
    label: "Contact Us",
    path: "/contactUs",
  },
];

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center">
      <img src={logo} alt="logo" className="logo" />
      <div className="nav-links">
        {navOptions.map((option, index) => (
          <a key={index} href={option.path} className="nav-link">
            {option.label}
          </a>
        ))}
      </div>
      <div className="nav-icons">
        <FaRegHeart />
        <IoCartOutline />
      </div>
    </div>
  );
};

export default Navbar;
