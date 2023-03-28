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
      <div className="flex flex-col  bg-slate-200 rounded-lg pl-[10%] h-[90vh] gap-4 py-10">
        <div className="font-bold text-2xl">Account</div>
        <div className="flex flex-col justify-between gap-5">
          <div className="flex items-center gap-2">
            <RiDashboard3Line />
            <p>Dashboard</p>
          </div>
          <div className="flex items-center gap-2">
            <BsBoxSeam />
            <p>Cashbox</p>
          </div>
          <div className="flex items-center gap-2">
            <CgNotes />
            <p>Contact & Prepaid</p>
          </div>
          <div className="flex items-center gap-2">
            <BsEnvelope />
            <p>Cash in</p>
          </div>{" "}
          <div className="flex items-center gap-2">
            <ImFilesEmpty />
            <p>Orders</p>
          </div>
          <div className="flex items-center gap-2">
            <TbFileInvoice />
            <p>Invoices</p>
          </div>{" "}
          <div className="flex items-center gap-2">
            <BsPeople />
            <p>Affiliate</p>
          </div>{" "}
          <div className="flex items-center gap-2">
            <GiWireframeGlobe />
            <p>Community ads</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
