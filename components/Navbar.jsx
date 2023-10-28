"use client";
import React, { useContext } from "react";
import { Web3ModalContext } from "@/contexts/Web3ModalProvider";

const Navbar = () => {

  return (
    <div className="flex flex-col h-[100vh] w-[250px] bg-gradient-to-b from-[#766A62] via-[#514D51] to-[#313D49] bg-opacity-60 backdrop-filter backdrop-blur-lg shadow-md px-4 text-white">
      <div className="mb-4 flex flex-col justify-center items-center mt-10">
        <img
          src="/einstein.jpeg"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover"
        />
        <p className="mt-3">Einstein</p>
      </div>

      <div className="flex flex-col gap-[10px]">
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/musical.png"
          text="Featured"
        />
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/musical.png"
          text="Ranking"
        />
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/musical.png"
          text="Song List"
        />
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/musical.png"
          text="Radio"
        />
        <MenuItem
          icon="https://img.icons8.com/metro/26/ffffff/musical.png"
          text="MV"
        />
      </div>

      <div className="mt-10 ">
        <MenuItem icon="/collection-icon.png" text="Collection" />
        <MenuItem icon="/download-icon.png" text="Download" />
        <MenuItem icon="/history-icon.png" text="History" />
      </div>
    </div>
  );
};

const MenuItem = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-[15px] menu-item px-5 py-3 rounded-md cursor-pointer">
      <img src={icon} alt={text} className="w-[17px] h-[17px]" />
      <p className="text-base">{text}</p>
    </div>
  );
};

export default Navbar;
