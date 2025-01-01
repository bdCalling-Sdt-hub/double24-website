import React, { useState } from "react";
import { Form, Input, Select, Upload, Button, InputNumber, Image } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const AddProduct = () => {
  const [fileList, setFileList] = useState([]);

  const categories = ["Leafy Herbs", "Aromatic Herbs", "Medicinal Plants"];
  const subCategories = ["Mint", "Basil", "Rosemary", "Thyme", "Parsley"];

  const handleUploadChange = ({ file, fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleSubmit = (values) => {
    const productData = {
      ...values,
      images: fileList.map((file) => file.originFileObj),
    };
    console.log("Submitted Product Data:", productData);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-start">Add New Product</h1>
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          quantity: "1 unit",
        }}
      >
        <div className="grid grid-cols-2 gap-8">
          {/* Left Side */}
          <div className="space-y-4">
            {/* Image Upload */}
            <Form.Item
              label="Product Images"
              name="images"
              rules={[
                { required: true, message: "Please upload product images!" },
              ]}
            >
              <Upload.Dragger
                multiple
                fileList={fileList}
                onChange={handleUploadChange}
                beforeUpload={() => false} // Prevent auto-upload
                style={{
                  minHeight: "150px",
                  padding: "20px",
                  border: "2px dashed #d9d9d9",
                }}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined size={40} />
                </p>
                <div className="ant-upload-text">
                  {fileList ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {fileList.map((file, index) => (
                        <Image
                          key={index}
                          src={URL.createObjectURL(file.originFileObj)}
                          alt={`Product ${index + 1}`}
                          width={80}
                          className="rounded-md !w-20 !h-20 object-cover"
                        />
                      ))}
                    </div>
                  ) : (
                    "Click or drag images here to upload"
                  )}
                </div>
              </Upload.Dragger>
            </Form.Item>

            <div className="flex gap-5 items-center justify-center">
              <Form.Item
                label="Quantity"
                name="quantity"
                className="w-full"
                rules={[
                  { required: true, message: "Please select a quantity!" },
                ]}
              >
                <Input className="py-3" placeholder="Enter quantity" />
              </Form.Item>

              {/* Brand Input */}
              <Form.Item
                label="Brand (If You Have)"
                name="brand"
                className="w-full"
              >
                <Input className="py-3" placeholder="Enter brand name" />
              </Form.Item>
            </div>

            {/* Description */}
            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please add a product description!",
                },
              ]}
            >
              <TextArea
                className=""
                rows={6}
                placeholder="Enter product description"
              />
            </Form.Item>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            {/* Product Name */}
            <Form.Item
              label="Product Name"
              name="productName"
              rules={[
                { required: true, message: "Please enter the product name!" },
              ]}
              className="text-2xl"
            >
              <Input className="py-3" placeholder="Enter product name" />
            </Form.Item>

            {/* Regular Price */}
            <Form.Item
              label="Regular Price"
              name="regularPrice"
              rules={[
                { required: true, message: "Please enter the regular price!" },
              ]}
            >
              <InputNumber
                className="w-full py-3"
                placeholder="Enter regular price"
                prefix="$"
                min={0}
              />
            </Form.Item>

            {/* Discount */}
            <Form.Item label="Discount (Optional)" name="discount">
              <InputNumber
                className="w-full py-3"
                placeholder="Enter discount amount"
                prefix="$"
                min={0}
              />
            </Form.Item>

            {/* Category Dropdown */}
            <Form.Item
              label="Category"
              name="category"
              rules={[{ required: true, message: "Please select a category!" }]}
            >
              <Select style={{ height: "55px" }} placeholder="Select category">
                {categories.map((cat) => (
                  <Option key={cat} value={cat}>
                    {cat}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            {/* Sub-Category Dropdown */}
            <Form.Item
              label="Sub-Category"
              name="subCategory"
              rules={[
                { required: true, message: "Please select a sub-category!" },
              ]}
            >
              <Select
                style={{ height: "55px" }}
                placeholder="Select sub-category"
              >
                {subCategories.map((sub) => (
                  <Option key={sub} value={sub}>
                    {sub}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>
        </div>

        {/* Submit Button */}
        <Form.Item>
          <Button
            htmlType="submit"
            className="w-full bg-[#173616] text-white py-7 text-xl mt-6"
          >
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
