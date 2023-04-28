import React from "react";

import { RiDashboard3Line } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { BsEnvelope } from "react-icons/bs";
import { ImFilesEmpty } from "react-icons/im";
import { TbFileInvoice } from "react-icons/tb";

import { FiSettings } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";

const BethelCloud = () => {
  return (
    <div className=" w-2/12   py-2 px-4">
      <div className="flex flex-col justify-between bg-black text-white rounded-xl pl-[8%] h-[98vh] gap-4 py-10">
        <div className="flex flex-col gap-5">
          <div className="font-bold text-2xl">Account</div>
          <div className="flex flex-col justify-between gap-5 ">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full  flex items-center justify-center">
                <RiDashboard3Line size={20} />
              </div>
              <p className="text-[1rem] font-semibold">Dashboard</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center">
                <BsBoxSeam size={20} />
              </div>
              <p className="text-[1rem] font-semibold">My Cloud</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center">
                <CgNotes size={20} />
              </div>
              <p className="text-[1rem] font-semibold">General</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full flex items-center justify-center">
                <TbFileInvoice size={20} />
              </div>
              <p className="text-[1rem] font-semibold">Updates</p>
            </div>{" "}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full  flex items-center justify-center">
              <FiSettings size={20} />
            </div>
            <p className="text-[1rem] font-semibold">Settings</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center">
              <RiDeleteBinLine size={20} />
            </div>
            <p className="text-[1rem] font-semibold">Recycle Bin</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center">
              <TbLogout size={20} />
            </div>
            <p className="text-[1rem] font-semibold">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BethelCloud;
