import React from "react";

import { RiDashboard3Line } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { BsEnvelope } from "react-icons/bs";
import { ImFilesEmpty } from "react-icons/im";
import { TbFileInvoice } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { GiWireframeGlobe } from "react-icons/gi";

const Dashboard = () => {
  return (
    <div className=" w-2/12   py-5 px-4">
      <div className="flex flex-col  bg-slate-200 bg-opacity-50 rounded-xl pl-[10%] h-[90vh] gap-4 py-10">
        <div className="font-bold text-2xl">Account</div>
        <div className="flex flex-col justify-between gap-5 ">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
              <RiDashboard3Line size={20} />
            </div>
            <p className="text-[.8rem] font-semibold">Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center">
              <BsBoxSeam size={20} />
            </div>
            <p className="text-[.8rem] font-semibold">Cashbox</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center">
              <CgNotes size={20} />
            </div>
            <p className="text-[.8rem] font-semibold">Contact & Prepaid</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center">
              <BsEnvelope size={20} />
            </div>
            <p className="text-[.8rem] font-semibold">Cash in</p>
          </div>{" "}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center">
              <ImFilesEmpty size={20} />
            </div>
            <p className="text-[.8rem] font-semibold">Orders</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center">
              <TbFileInvoice size={20} />
            </div>
            <p className="text-[.8rem] font-semibold">Invoices</p>
          </div>{" "}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center">
              <BsPeople size={20} />
            </div>
            <p className="text-[.8rem] font-semibold">Affiliate</p>
          </div>{" "}
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              s
            >
              <GiWireframeGlobe size={20} />
            </div>
            <p className="text-[.8rem] font-semibold">Community ads</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
