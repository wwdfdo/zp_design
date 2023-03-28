import React from "react";

import { MdAccountCircle } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { TbNotes } from "react-icons/tb";

const LeftSideBar = () => {
  return (
    <div className=" w-1/12  flex flex-col justify-between items-center pb-20 pt-5">
      <div className="flex flex-col gap-10 justify-center items-center">
        <div className="text-3xl font-bold">zp</div>
        <div className="flex flex-col gap-5 items-center justify-center">
          <MdAccountCircle size={24} />
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

export default LeftSideBar;
