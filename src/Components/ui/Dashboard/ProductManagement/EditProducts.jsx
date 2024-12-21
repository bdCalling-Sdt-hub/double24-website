import React, { useState } from "react";
import { Form, Input, Select, Upload, Button, InputNumber, Image } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import product1 from "../../../../assets/whatIsImg.png";
import product2 from "../../../../assets/bubbaKush.png";

const { TextArea } = Input;
const { Option } = Select;

const EditProduct = () => {
  const [fileList, setFileList] = useState([
    {
      uid: "1",
      name: "product-image-1.png",
      status: "done",
      url: product1,
      originFileObj: new File([], "product-image-1.png"),
    },
    {
      uid: "2",
      name: "product-image-2.png",
      status: "done",
      url: product2,
      originFileObj: new File([], "product-image-2.png"),
    },
  ]);

  const categories = ["Leafy Herbs", "Aromatic Herbs", "Medicinal Plants"];
  const subCategories = ["Mint", "Basil", "Rosemary", "Thyme", "Parsley"];

  const initialValues = {
    productName: "Fresh Mint Leaves",
    regularPrice: 5,
    discount: 1,
    quantity: "1 unit",
    brand: "Herbal Co.",
    description:
      "Freshly harvested mint leaves for your culinary and medicinal needs.",
    category: "Leafy Herbs",
    subCategory: "Mint",
  };

  const handleUploadChange = ({ file, fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleSubmit = (values) => {
    const productData = {
      ...values,
      images: fileList.map((file) => file.originFileObj),
    };
    console.log("Updated Product Data:", productData);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-start">Edit Product</h1>
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={initialValues}
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
                className="upload-list-inline"
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <div className="ant-upload-text">
                  {fileList ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {fileList.map((file, index) => (
                        <Image
                          key={index}
                          src={
                            file.url || URL.createObjectURL(file.originFileObj)
                          }
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

            {/* Quantity Dropdown */}
            <div className="flex gap-5 items-center justify-center">
              <Form.Item
                label="Quantity"
                name="quantity"
                className="w-full"
                rules={[
                  { required: true, message: "Please select a quantity!" },
                ]}
              >
                <Select className="custom-select-height">
                  <Option value="1 unit">1 unit</Option>
                  <Option value="2 units">2 units</Option>
                  <Option value="3 units">3 units</Option>
                </Select>
              </Form.Item>

              {/* Brand Input */}
              <Form.Item
                label="Brand (If You Have)"
                name="brand"
                className="w-full py-5"
              >
                <Input
                  className="py-5 custom-input-height"
                  placeholder="Enter brand name"
                />
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
                rows={4}
                placeholder="Enter product description"
                className="custom-textarea-height"
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
            >
              <Input
                placeholder="Enter product name"
                className="custom-input-height"
              />
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
                className="w-full custom-input-height"
                placeholder="Enter regular price"
                prefix="$"
                min={0}
              />
            </Form.Item>

            {/* Discount */}
            <Form.Item label="Discount (Optional)" name="discount">
              <InputNumber
                className="w-full custom-input-height"
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
              <Select
                placeholder="Select category"
                className="custom-select-height"
              >
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
                placeholder="Select sub-category"
                className="custom-select-height"
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
            Save Changes
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditProduct;
