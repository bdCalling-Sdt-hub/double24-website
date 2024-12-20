import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

import logo from "../../../../assets/logo.png";
import toast from "react-hot-toast";

const TermsAndConditions = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [selectedTab, setSelectedTab] = useState("USER");
  const isLoading = false;

  // const {
  //   data: privacyPolicy,
  //   isLoading,
  //   refetch,
  // } = usePrivacyPolicyQuery(selectedTab);

  // const [updatePricyPolicy] = useUpdatePricyPolicyMutation();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <img src={logo} alt="" />
      </div>
    );
  }

  const privacyPolicy = [];

  const privacyPolicyData = privacyPolicy?.content;

  const termsDataSave = async () => {
    const data = {
      content: content,
      userType: selectedTab,
    };

    try {
      // const res = await updatePricyPolicy(data).unwrap();
      if (res.success) {
        toast.success("Privacy Policy updated successfully");
        setContent(res.data.content);
        refetch();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Update failed. Please try again.");
    }
  };

  const tabContent = {
    USER: privacyPolicyData,
    VENDOR: privacyPolicyData,
    CUSTOMER: privacyPolicyData,
  };

  return (
    <div>
      <JoditEditor
        ref={editor}
        value={tabContent[selectedTab]}
        onChange={(newContent) => {
          setContent(newContent);
        }}
        className=""
      />

      <div className="flex items-center justify-center mt-5">
        <button
          onClick={termsDataSave}
          type="submit"
          className="bg-primary bg-[#173616] text-white w-[160px] h-[42px] rounded-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions;
