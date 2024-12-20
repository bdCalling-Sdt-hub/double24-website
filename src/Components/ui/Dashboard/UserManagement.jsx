import React, { useState } from "react";
import { Input, Table, Tag, Button, Modal, Form, Select } from "antd";

const { Search } = Input;
const { Option } = Select;

const UserManagement = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([
    {
      key: "1",
      username: "john_doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      key: "2",
      username: "jane_smith",
      email: "jane.smith@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      key: "3",
      username: "mike_brown",
      email: "mike.brown@example.com",
      role: "User",
      status: "Active",
    },
    {
      key: "4",
      username: "susan_white",
      email: "susan.white@example.com",
      role: "Admin",
      status: "Pending",
    },
    {
      key: "5",
      username: "david_jones",
      email: "david.jones@example.com",
      role: "User",
      status: "Inactive",
    },
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const showModal = (user) => {
    setCurrentUser(user);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    // Here we could handle the updates for the user
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSearch = (value) => {
    setSearchText(value.trim());
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((field) =>
      String(field).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <Tag color={role === "Admin" ? "blue" : "green"}>{role}</Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag
          color={
            status === "Active"
              ? "green"
              : status === "Inactive"
              ? "red"
              : "orange"
          }
        >
          {status}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => showModal(record)}
          className="text-blue-600"
        >
          Edit
        </Button>
      ),
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-start">User Management</h1>
      <Search
        placeholder="Search users"
        onSearch={handleSearch}
        enterButton
        allowClear
        className="mb-4"
      />
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="key"
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title="Edit User"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
          </Button>,
        ]}
      >
        <Form layout="vertical" initialValues={currentUser} onFinish={handleOk}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please enter the username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter the email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please select a role!" }]}
          >
            <Select>
              <Option value="Admin">Admin</Option>
              <Option value="User">User</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please select a status!" }]}
          >
            <Select>
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
              <Option value="Pending">Pending</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserManagement;
