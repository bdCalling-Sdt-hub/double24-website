import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import {
  MdCancelPresentation,
  MdCategory,
  MdFeaturedPlayList,
  MdMiscellaneousServices,
} from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { TbUserScreen } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

import { PiUserPlus } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import Cookies from "js-cookie";
import logo from "../../assets/logo.png";
import { DiGoogleAnalytics } from "react-icons/di";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaMoneyBillTransfer, FaScissors } from "react-icons/fa6";
import { FaBorderStyle } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();
  const path = location.pathname;
  const [selectedKey, setSelectedKey] = useState("");
  const [openKeys, setOpenKeys] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("refreshToken");
    Cookies.remove("refreshToken");
    navigate("/auth/login");
  };

  const menuItems = [
    {
      key: "/dashboard",
      icon: <LuLayoutDashboard size={24} />,
      label: (
        <Link to="/dashboard" className="">
          Dashboard
        </Link>
      ),
    },
    {
      key: "/dashboard/product-management",
      icon: <LuLayoutDashboard size={24} />,
      label: (
        <Link to="/dashboard/product-management" className="">
          Product Management
        </Link>
      ),
    },
    {
      key: "/dashboard/add-product",
      icon: <LuLayoutDashboard size={24} />,
      label: (
        <Link to="/dashboard/add-product" className="">
          Add Product
        </Link>
      ),
    },
    {
      key: "/dashboard/order-management",
      icon: <LuLayoutDashboard size={24} />,
      label: (
        <Link to="/dashboard/order-management" className="">
          Order Management
        </Link>
      ),
    },
    {
      key: "/dashboard/user-management",
      icon: <LuLayoutDashboard size={24} />,
      label: (
        <Link to="/dashboard/user-management" className="">
          User Management
        </Link>
      ),
    },
    {
      key: "subMenuSetting",
      icon: <IoSettingsOutline size={24} />,
      label: "Settings",
      children: [
        {
          key: "/dashboard/personal-information",
          label: (
            <Link
              to="/dashboard/personal-info"
              className="text-white hover:text-white"
            >
              Personal Information
            </Link>
          ),
        },
        {
          key: "/auth/change-password",
          label: (
            <Link
              to="/auth/change-password"
              className="text-white hover:text-white"
            >
              Change Password
            </Link>
          ),
        },

        {
          key: "/dashboard/terms-and-conditions",
          label: (
            <Link
              to="/dashboard/terms-and-conditions"
              className="text-white hover:text-white"
            >
              Terms And Conditions
            </Link>
          ),
        },
        {
          key: "/dashboard/privacy-policy",
          label: (
            <Link
              to="/dashboard/privacy-policy"
              className="text-white hover:text-white"
            >
              Privacy Policy
            </Link>
          ),
        },
        {
          key: "/f-a-q",
          label: (
            <Link to="/f-a-q" className="text-white hover:text-white">
              FAQ
            </Link>
          ),
        },
      ],
    },
    {
      key: "/logout",
      icon: <IoIosLogOut size={24} />,
      label: <p onClick={handleLogout}>Logout</p>,
    },
  ];

  useEffect(() => {
    const selectedItem = menuItems.find(
      (item) =>
        item.key === path || item.children?.some((sub) => sub.key === path)
    );

    if (selectedItem) {
      setSelectedKey(path);

      if (selectedItem.children) {
        setOpenKeys([selectedItem.key]);
      } else {
        const parentItem = menuItems.find((item) =>
          item.children?.some((sub) => sub.key === path)
        );
        if (parentItem) {
          setOpenKeys([parentItem.key]);
        }
      }
    }
  }, [path]);

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <div className="mt-5">
      <div className="px-10">
        <Link
          to={"/"}
          className="mb-10 flex items-center flex-col gap-2 justify-center py-4"
        >
          <img src={logo} alt="" />
        </Link>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        style={{ borderRightColor: "transparent", background: "transparent" }}
        items={menuItems}
      />
    </div>
  );
};

export default Sidebar;
