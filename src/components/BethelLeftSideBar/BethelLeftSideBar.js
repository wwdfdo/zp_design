import React from "react";

import { MdAccountCircle } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { TbNotes } from "react-icons/tb";

const BethelLeftSideBar = () => {
  return (
    <div className=" w-1/12  flex flex-col justify-between items-center pb-20 pt-5">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="text-4xl font-bold">BC</div>
        <div className="flex flex-col gap-5 items-center justify-center">
          <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#ff8130]">
            <MdAccountCircle size={24} />
          </div>
          <TbNotes size={24} />
          <MdOutlineShoppingCart size={24} />
          <MdSearch size={24} />
        </div>
      </div>
      <div>
        <div className="text-sm">EUR</div>
        <div className="text-sm">US</div>
      </div>
    </div>
  );
};

export default BethelLeftSideBar;
