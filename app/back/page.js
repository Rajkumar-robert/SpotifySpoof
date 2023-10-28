import React from "react";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Web3ModalProvider from "@/contexts/Web3ModalProvider";

const TestPage = () => {
  return (
    <div >
      <Web3ModalProvider>
        <Header />
        <Content />
      </Web3ModalProvider>
    </div>
  );
};

export default TestPage;
