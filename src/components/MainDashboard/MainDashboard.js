import React from "react";
import { BsGift } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineContactSupport } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsCloudCheck } from "react-icons/bs";
import profilepic from "../../images/profilepic.jpg";
import spain from "../../images/spain.png";

const MainDashboard = () => {
  return (
    <div className=" w-6/12 ">
      <div className=" flex justify-between items-center px-12 py-5">
        <div className="flex gap-5">
          <div className="flex gap-2 items-center">
            <div>
              <BsGift />
            </div>
            <div className="text-[.9rem] font-semibold">Voucher</div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <BsFillPersonFill />
            </div>
            <div className="text-[.9rem] font-semibold">Partner</div>
          </div>
          <div className="flex gap-2 items-center">
            <div>
              <MdOutlineContactSupport />
            </div>
            <div className="text-[.9rem] font-semibold">Support</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-green-600 py-1 px-3 rounded-3xl text-white font-semibold text-[.8rem]">
            <div>
              <BsCloudCheck color="black" size={18} />
            </div>
            <div className="text-[.8rem] font-semibold"> Rent a Server</div>
          </div>
          <div>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
      <div className="flex flex-col px-12 gap-5 pb-3 pt-5">
        <div className="text-2xl font-bold ">Dashboard</div>
        <div className="flex text-[1rem] font-semibold justify-between items-center">
          <div className="text">My Gameservers</div>
          <div className="text-[.9rem] font-semibold">My VPS</div>
          <div className="text-[.9rem] font-semibold">My Rootservers</div>
          <div className="text-[.9rem] font-semibold">My domains</div>
          <div className="text-[.9rem] font-semibold">My Te..</div>
          <div>
            <FiMoreHorizontal />
          </div>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        <div className="bg-green-600 bg-opacity-10 gap-2 w-[27%] flex flex-col px-5 py-5 rounded-3xl">
          <div className="flex justify-between items-center">
            <img
              className="w-[42px] h-[42px] rounded-full"
              src={profilepic}
              alt=""
            />
            <div className="flex flex-col justify-center items-center">
              <img className="w-5 h-5 rounded-full" src={spain} alt="" />
              <div className="text-[.7rem] font-semibold">online</div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[.8rem] font-semibold">Fivem Dev #256019</p>
            <p className="text-[.6rem] font-semibold text-slate-600">
              185.223.28.170.2000
            </p>
          </div>
          <div className="text-[.6rem] font-sembold pt-4">21.11.2020</div>
        </div>
        <div className="bg-blue-500 bg-opacity-10 gap-2  w-[27%] flex flex-col px-5 py-5 rounded-3xl">
          <div className="flex justify-between items-center">
            <img
              className="w-[42px] h-[42px] rounded-full"
              src={profilepic}
              alt=""
            />
            <div className="flex flex-col justify-center items-center">
              <img className="w-5 h-5 rounded-full" src={spain} alt="" />
              <div className="text-[.7rem] font-semibold">online</div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[.8rem] font-semibold">Fivem Dev #256019</p>
            <p className="text-[.6rem] font-semibold text-slate-600">
              185.223.28.170.2000
            </p>
          </div>
          <div className="text-[.6rem] font-sembold pt-4">21.11.2020</div>
        </div>
        <div className="bg-yellow-400 bg-opacity-10 gap-2  w-[27%] flex flex-col px-5 py-5 rounded-3xl">
          <div className="flex justify-between items-center">
            <img
              className="w-[42px] h-[42px] rounded-full"
              src={profilepic}
              alt=""
            />
            <div className="flex flex-col justify-center items-center">
              <img className="w-5 h-5 rounded-full" src={spain} alt="" />
              <div className="text-[.7rem] font-semibold">online</div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[.8rem] font-semibold">Fivem Dev #256019</p>
            <p className="text-[.6rem] font-semibold text-slate-600">
              185.223.28.170.2000
            </p>
          </div>
          <div className="text-[.6rem] font-sembold pt-4">21.11.2020</div>
        </div>
        <div className="bg-red-600 bg-opacity-10 gap-2 w-[27%] flex flex-col px-5 py-5 rounded-3xl">
          <div className="flex justify-between items-center">
            <img
              className="w-[42px] h-[42px] rounded-full"
              src={profilepic}
              alt=""
            />
            <div className="flex flex-col justify-center items-center">
              <img className="w-5 h-5 rounded-full" src={spain} alt="" />
              <div className="text-[.7rem] font-semibold">online</div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[.8rem] font-semibold">Fivem Dev #256019</p>
            <p className="text-[.6rem] font-semibold text-slate-600">
              185.223.28.170.2000
            </p>
          </div>
          <div className="text-[.6rem] font-sembold pt-4">21.11.2020</div>
        </div>
        <div className="bg-blue-500 bg-opacity-10 gap-2  w-[27%] flex flex-col px-5 py-5 rounded-3xl">
          <div className="flex justify-between items-center">
            <img
              className="w-[42px] h-[42px] rounded-full"
              src={profilepic}
              alt=""
            />
            <div className="flex flex-col justify-center items-center">
              <img className="w-5 h-5 rounded-full" src={spain} alt="" />
              <div className="text-[.7rem] font-semibold">online</div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[.8rem] font-semibold">Fivem Dev #256019</p>
            <p className="text-[.6rem] font-semibold text-slate-600">
              185.223.28.170.2000
            </p>
          </div>
          <div className="text-[.6rem] font-sembold pt-4">21.11.2020</div>
        </div>
        <div className="bg-yellow-400 bg-opacity-10 gap-2  w-[27%] flex flex-col px-5 py-5 rounded-3xl">
          <div className="flex justify-between items-center">
            <img
              className="w-[42px] h-[42px] rounded-full"
              src={profilepic}
              alt=""
            />
            <div className="flex flex-col justify-center items-center">
              <img className="w-5 h-5 rounded-full" src={spain} alt="" />
              <div className="text-[.7rem] font-semibold">online</div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[.8rem] font-semibold">Fivem Dev #256019</p>
            <p className="text-[.6rem] font-semibold text-slate-600">
              185.223.28.170.2000
            </p>
          </div>
          <div className="text-[.6rem] font-sembold pt-4">21.11.2020</div>
        </div>
        <div className="bg-red-700 bg-opacity-10 gap-2 w-[27%] flex flex-col px-5 py-5 rounded-3xl">
          <div className="flex justify-between items-center">
            <img
              className="w-[42px] h-[42px] rounded-full"
              src={profilepic}
              alt=""
            />
            <div className="flex flex-col justify-center items-center">
              <img className="w-5 h-5 rounded-full" src={spain} alt="" />
              <div className="text-[.7rem] font-semibold">online</div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[.8rem] font-semibold">Fivem Dev #256019</p>
            <p className="text-[.6rem] font-semibold text-slate-600">
              185.223.28.170.2000
            </p>
          </div>
          <div className="text-[.6rem] font-sembold pt-4">21.11.2020</div>
        </div>
        <div className="bg-blue-500 bg-opacity-10 gap-2  w-[27%] flex flex-col px-5 py-5 rounded-3xl">
          <div className="flex justify-between items-center">
            <img
              className="w-[42px] h-[42px] rounded-full"
              src={profilepic}
              alt=""
            />
            <div className="flex flex-col justify-center items-center">
              <img className="w-5 h-5 rounded-full" src={spain} alt="" />
              <div className="text-[.7rem] font-semibold">online</div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[.8rem] font-semibold">Fivem Dev #256019</p>
            <p className="text-[.6rem] font-semibold text-slate-600">
              185.223.28.170.2000
            </p>
          </div>
          <div className="text-[.6rem] font-sembold pt-4">21.11.2020</div>
        </div>
        <div className="bg-yellow-400 bg-opacity-10 gap-2  w-[27%] flex flex-col px-5 py-5 rounded-3xl">
          <div className="flex justify-between items-center">
            <img
              className="w-[42px] h-[42px] rounded-full"
              src={profilepic}
              alt=""
            />
            <div className="flex flex-col justify-center items-center">
              <img className="w-5 h-5 rounded-full" src={spain} alt="" />
              <div className="text-[.7rem] font-semibold">online</div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[.8rem] font-semibold">Fivem Dev #256019</p>
            <p className="text-[.6rem] font-semibold text-slate-600">
              185.223.28.170.2000
            </p>
          </div>
          <div className="text-[.6rem] font-sembold pt-4">21.11.2020</div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
