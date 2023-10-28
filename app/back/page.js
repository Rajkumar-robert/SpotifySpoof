import React from "react";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Web3ModalProvider from "@/contexts/Web3ModalProvider";
import IPFSUpload from "@/components/FileUploadIPFS";

const TestPage = () => {
  return (
    <div >
      <IPFSUpload/>
    </div>
  );
};

export default TestPage;
