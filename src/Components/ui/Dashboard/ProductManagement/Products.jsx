import React, { useState } from "react";
import { Table, Input, Button, Tag } from "antd";
import herbImg from "../../../../assets/herb-2.jpg";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import { IoMdAdd } from "react-icons/io";

const Products = () => {
  // Herb product data (moved above useState)
  const data = [
    {
      id: 1,
      name: "Basil",
      image: herbImg,
      weight: "1 unit",
      category: "Leafy Herbs",
      price: "$5",
      date: "2024-12-20",
      store: 30,
      status: "Available",
    },
    {
      id: 2,
      name: "Rosemary",
      image: herbImg,
      weight: "2 units",
      category: "Aromatic Herbs",
      price: "$8",
      date: "2024-12-15",
      store: 5,
      status: "Short Stock",
    },
    {
      id: 3,
      name: "Mint",
      image: herbImg,
      weight: "3 units",
      category: "Leafy Herbs",
      price: "$4",
      date: "2024-12-18",
      store: 0,
      status: "Unavailable",
    },
    {
      id: 4,
      name: "Parsley",
      image: herbImg,
      weight: "1 unit",
      category: "Leafy Herbs",
      price: "$3",
      date: "2024-12-10",
      store: 20,
      status: "Available",
    },
    {
      id: 5,
      name: "Thyme",
      image: herbImg,
      weight: "2 units",
      category: "Aromatic Herbs",
      price: "$6",
      date: "2024-12-12",
      store: 10,
      status: "Available",
    },
    {
      id: 6,
      name: "Coriander",
      image: herbImg,
      weight: "1 unit",
      category: "Leafy Herbs",
      price: "$3",
      date: "2024-12-19",
      store: 25,
      status: "Available",
    },
    {
      id: 7,
      name: "Sage",
      image: herbImg,
      weight: "3 units",
      category: "Aromatic Herbs",
      price: "$7",
      date: "2024-12-14",
      store: 8,
      status: "Short Stock",
    },
    {
      id: 8,
      name: "Oregano",
      image: herbImg,
      weight: "2 units",
      category: "Aromatic Herbs",
      price: "$5",
      date: "2024-12-11",
      store: 12,
      status: "Available",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // Handle search
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);

    const filtered = data.filter((item) =>
      Object.values(item).some((field) =>
        field.toString().toLowerCase().includes(value)
      )
    );

    setFilteredData(filtered);
  };

  // Columns for the Ant Design table
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    {
      title: "Product Name",
      key: "name",
      render: (_, record) => (
        <div className="flex items-center space-x-3">
          <img
            src={record.image}
            alt={record.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>{record.name}</span>
        </div>
      ),
    },
    { title: "Weight", dataIndex: "weight", key: "weight" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Store", dataIndex: "store", key: "store" },
    {
      title: "Status",
      key: "status",
      render: (_, record) => (
        <Tag
          color={
            record.status === "Available"
              ? "green"
              : record.status === "Short Stock"
              ? "orange"
              : "red"
          }
        >
          {record.status}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex items-center gap-1">
          <Link to={`/dashboard/edit-product/${record.id}`}>
            <FaRegEdit className="" size={20} />
          </Link>
          <Link>
            <MdDelete className="text-red-600" size={20} />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-start">Products</h1>

      <div className="flex justify-between gap-10">
        <Input
          placeholder="Search products..."
          value={searchText}
          onChange={handleSearch}
          className="mb-4 py-3 w-[50%]"
        />
        <Link to={"/dashboard/add-product"}>
          <button className="flex items-center gap-1 rounded-lg justify-center bg-[#173616] text-white p-4 ">
            {" "}
            <IoMdAdd /> Add Product
          </button>
        </Link>
      </div>

      <Table
        dataSource={filteredData}
        columns={columns}
        rowKey="id"
        bordered={false}
        className="shadow-md table-no-border"
        pagination={{ pageSize: 5 }}
      />

      <style jsx>{`
        .ant-table {
          border: none !important;
        }
        .ant-table-cell {
          border-bottom: 1px solid #e5e7eb !important; /* Tailwind gray-200 */
        }
      `}</style>
    </div>
  );
};

export default Products;
