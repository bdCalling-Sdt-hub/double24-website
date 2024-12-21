import React from "react";

import { Link } from "react-router-dom";
import { FaRegBell } from "react-icons/fa6";
import { Badge } from "antd";
import logo from "../../assets/randomProfile2.0.png";
// import { useFetchAdminProfileQuery } from "../../redux/apiSlices/authSlice";

const Header = () => {
  // const { data: userData, isLoading } = useFetchAdminProfileQuery();
  const isLoading = false;
  const userData = {
    data: {
      role: "admin",
      name: "Alison Burger",
    },
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center my-20 text-lg text-secondary">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex items-center gap-5 justify-end">
      <Link to="/dashboard/notifications" className="h-fit mt-[10px]">
        <Badge count={5}>
          <FaRegBell color="#4E4E4E" size={24} />
        </Badge>
      </Link>
      <div className="flex items-center justify-center border-4 rounded-3xl">
        <img className="w-12 h-12 rounded-full" src={logo} alt="" />
        <h1 className="mx-2 mt-2 text-lg font-bold">{userData?.data?.name}</h1>
      </div>
    </div>
  );
};

export default Header;
