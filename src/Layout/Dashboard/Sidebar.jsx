import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import {
  MdAdd,
  MdCancelPresentation,
  MdCategory,
  MdChangeCircle,
  MdFeaturedPlayList,
  MdMiscellaneousServices,
  MdOutlineAdminPanelSettings,
  MdOutlineProductionQuantityLimits,
} from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TbUserScreen } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { PiUserPlus } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import Cookies from "js-cookie";
import logo from "../../assets/logoGreenBg.png";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";

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
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "/dashboard/product-management",
      icon: <MdOutlineProductionQuantityLimits size={24} />,
      label: <Link to="/dashboard/product-management">Product Management</Link>,
    },
    {
      key: "/dashboard/add-product",
      icon: <MdAdd size={24} />,
      label: <Link to="/dashboard/add-product">Add Product</Link>,
    },
    {
      key: "/dashboard/order-management",
      icon: <AiOutlineUnorderedList size={24} />,
      label: <Link to="/dashboard/order-management">Order Management</Link>,
    },
    {
      key: "/dashboard/user-management",
      icon: <FaUsers size={24} />,
      label: <Link to="/dashboard/user-management">User Management</Link>,
    },
    {
      key: "subMenuSetting",
      icon: <IoSettingsOutline size={24} />,
      label: "Settings",
      children: [
        {
          key: "/dashboard/personal-information",

          label: (
            <Link to="/dashboard/personal-info">Personal Information</Link>
          ),
        },
        {
          key: "/dashboard/change-password",

          label: <Link to="/dashboard/change-password">Change Password</Link>,
        },
        {
          key: "/dashboard/terms-and-conditions",
          label: (
            <Link to="/dashboard/terms-and-conditions">
              Terms and Conditions
            </Link>
          ),
        },
        {
          key: "/dashboard/privacy-policy",
          label: <Link to="/dashboard/privacy-policy">Privacy Policy</Link>,
        },
        // {
        //   key: "/f-a-q",
        //   label: <Link to="/f-a-q">FAQ</Link>,
        // },
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
      const parentItem = menuItems.find((item) =>
        item.children?.some((sub) => sub.key === path)
      );
      setOpenKeys(parentItem ? [parentItem.key] : []);
    }
  }, [path]);

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  return (
    <div style={{ marginTop: "1.25rem" }}>
      <div style={{ padding: "0 2.5rem" }}>
        <Link
          to="/"
          style={{
            marginBottom: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem 0",
          }}
        >
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={[selectedKey]}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        style={{
          borderRight: "none",
          background: "transparent",
        }}
        items={menuItems}
      />
      <style jsx>{`
        .ant-menu-item-selected {
          background-color: white !important;
          border-radius: 4px;
          color: black !important;
        }
        .ant-menu-item-selected a {
          color: black !important;
        }
        .ant-menu-submenu .ant-menu-item-selected {
          background-color: white !important;
          color: black !important;
        }
        .ant-menu-submenu .ant-menu-item {
          background-color: transparent !important;
          color: #fff; /* Default color for text */
        }
        .ant-menu-submenu .ant-menu-item:hover {
          background-color: #f6e7ff !important;
          color: black !important;
        }
        .ant-menu-dark.ant-menu-inline .ant-menu-sub.ant-menu-inline {
          background-color: transparent !important;
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
