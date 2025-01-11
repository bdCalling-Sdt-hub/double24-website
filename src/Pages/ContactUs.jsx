import { PiPhoneDisconnectFill } from "react-icons/pi";
import TitleBg from "../Components/ui/TitleBg";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Button, Form, Input } from "antd";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Doublet24</title>
      </Helmet>
      <TitleBg title="Contact Us" />
      <div className="relative h-[1100px]">
        <div className="absolute h-full inset-0 bg-gradient-to-t from-[#eaf7ea] -z-10"></div>
        <div className="min-h-screen mt-20 max-w-7xl mx-auto">
          <div className="flex flex-col mx-5 md:w-[50%] md:mx-auto mb-10 p-5 rounded-2xl border gap-5 items-center justify-center shadow-xl border-t-8 border-t-[#004620]">
            <div className="bg-gray-100 p-5 rounded-full">
              <MdEmail className="text-[#0caf55]" size={40} />
            </div>
            <h1 className="text-2xl mt-3 font-semibold">Email</h1>
            <p className="text-xl font-bold">cannasseursconsulting@gmail.com</p>
          </div>

          <div className="md:w-[50%] w-[80%] mx-auto shadow-lg">
            <div className="bg-[#033F1B] pb-10 md:pt-20 pt-5 md:px-16 px-7 rounded-2xl shadow-lg">
              <div className="text-center space-y-3 mb-6">
                <h2 className="text-2xl text-[#FCD707] font-bold text-center">
                  Get In Touch <span className="text-white">With Us</span>
                </h2>
                <p className="text-white">
                  We’ll get back to you as soon as possible.
                </p>
              </div>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="space-y-4"
              >
                {/* Full Name */}
                <Form.Item
                  name="fullName"
                  label={<span className="text-white">Business Name</span>}
                  rules={[
                    { required: true, message: "Please enter your full name" },
                  ]}
                >
                  <Input placeholder="Enter your full name" />
                </Form.Item>

                {/* Email */}
                <Form.Item
                  name="email"
                  label={<span className="text-white">Email</span>}
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}
                >
                  <Input type="email" placeholder="Enter your email" />
                </Form.Item>

                {/* Phone Number */}
                <Form.Item
                  name="phone"
                  label={<span className="text-white">Phone Number</span>}
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <Input placeholder="Enter your phone number" />
                </Form.Item>

                {/* Message */}
                <Form.Item
                  name="message"
                  label={<span className="text-white">Message</span>}
                  rules={[
                    { required: true, message: "Please enter your message" },
                  ]}
                >
                  <Input.TextArea rows={4} placeholder="Enter your message" />
                </Form.Item>

                {/* Submit Button */}
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full bg-[#0c9b45] font-semibold text-white py-5"
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
