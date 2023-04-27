import React from "react";
import { BsGift } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineContactSupport } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsCloudCheck } from "react-icons/bs";
import profilepic from "../../images/profilepic.jpg";
import spain from "../../images/spain.png";
import { BiPlusCircle } from "react-icons/bi";
import { AiOutlineFolder } from "react-icons/ai";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BiImage } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsArrowUpShort } from "react-icons/bs";

const BethelMainDashBoard = () => {
  return (
    <div className=" w-6/12 ">
      <div className=" flex justify-between items-center px-12 py-3">
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
          <div className="flex items-center gap-2 bg-[#ff8130] py-1 px-3 rounded-3xl text-white font-semibold text-[.8rem]">
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
      <div className="flex flex-col px-12 gap-2 pb-3">
        <div className="flex justify-between items-center ">
          <div className="text-[1.3rem] font-bold ">Dashboard</div>
          <div className="bg-[#ff8130] flex items-center w-[4rem] py-1 rounded-md justify-center font-semibold text-[.7rem] gap-2 ">
            <BiPlusCircle size={18} />
            <div>ADD</div>
          </div>
        </div>
        {/* <div className="flex text-[1rem] font-semibold justify-between items-center">
          <div className="text">My Gameservers</div>
          <div className="text-[.9rem] font-semibold">My VPS</div>
          <div className="text-[.9rem] font-semibold">My Rootservers</div>
          <div className="text-[.9rem] font-semibold">My domains</div>
          <div className="text-[.9rem] font-semibold">My Te..</div>
          <div>
            <FiMoreHorizontal />
          </div>
        </div> */}
      </div>
      <div className="flex gap-6 flex-wrap items-center justify-center">
        <div className="bg-[#e6e0f6] gap-2 w-[27%] flex flex-col  pt-3 pb-3 rounded-3xl">
          <div className="flex justify-between items-center px-5">
            <div className="w-[30px] h-[32px] rounded-full bg-white flex justify-center items-center">
              <AiOutlineFolder size={18} />
            </div>
            <div className="flex flex-col justify-center items-center">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="text-[1.2rem] font-bold ">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <div className="text-sm px-5">Documents</div>
          <p className="text-[1.1rem] font-bold px-5">640 Files</p>
          <div className="flex flex-col  gap-2 px-5">
            <div className="flex  w-full rounded-xl  shadow-md bg-white  ">
              <div className="w-1/2 bg-[#7ca0fc] rounded-xl py-[.4rem] px-2"></div>
            </div>
            <div className="flex justify-between text-[.8rem]">
              <div className=" ">Storage</div>
              <div>69%</div>
            </div>
          </div>
          <hr className="bg-black w-full border-slate-500 border-[0.05rem]" />
          <div className="flex justify-between items-center px-5 pt-1  ">
            <div className="text-[.9rem] font-semibold">View</div>
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
        <div className="bg-[#ffe0e8] gap-2 w-[27%] flex flex-col  pt-5 pb-3 rounded-3xl">
          <div className="flex justify-between items-center px-5">
            <div className="w-[30px] h-[32px] rounded-full bg-white flex justify-center items-center">
              <BiImage size={18} />
            </div>
            <div className="flex flex-col justify-center items-center">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="text-[1.2rem] font-bold ">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <div className="text-sm px-5">Documents</div>
          <p className="text-[1.1rem] font-bold px-5">640 Files</p>
          <div className="flex flex-col  gap-2 px-5">
            <div className="flex  w-full rounded-xl  shadow-md bg-white  ">
              <div className="w-1/2 bg-[#fd7ea1] rounded-xl py-[.4rem] px-2"></div>
            </div>
            <div className="flex justify-between text-[.8rem]">
              <div className=" ">Storage</div>
              <div>69%</div>
            </div>
          </div>
          <hr className="bg-black w-full border-slate-500 border-[0.05rem]" />
          <div className="flex justify-between items-center px-5 pt-1  ">
            <div className="text-[.9rem] font-semibold">View</div>
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
        <div className="bg-[#e6e0f6] gap-2 w-[27%] flex flex-col  pt-3 pb-3 rounded-3xl">
          <div className="flex justify-between items-center px-5">
            <div className="w-[30px] h-[32px] rounded-full bg-white flex justify-center items-center">
              <AiOutlinePlayCircle si18={20} />
            </div>
            <div className="flex flex-col justify-center items-center">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="text-[1.2rem] font-bold ">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <div className="text-sm px-5">Documents</div>
          <p className="text-[1.1rem] font-bold px-5">640 Files</p>
          <div className="flex flex-col  gap-2 px-5">
            <div className="flex  w-full rounded-xl  shadow-md bg-white  ">
              <div className="w-1/2 bg-[#9779dc] rounded-xl py-[.4rem] px-2"></div>
            </div>
            <div className="flex justify-between text-[.8rem]">
              <div className=" ">Storage</div>
              <div>69%</div>
            </div>
          </div>
          <hr className="bg-black w-full border-slate-500 border-[0.05rem]" />
          <div className="flex justify-between items-center px-5 pt-1  ">
            <div className="text-[.9rem] font-semibold">View</div>
            <HiOutlineArrowNarrowRight />
          </div>
        </div>
      </div>
      <div className="px-12 pb-3 pt-2">
        <div className="flex justify-between items-center ">
          <div className="text-[1.3rem] font-bold ">Folders</div>
          <div className="text-[#ff8130] underline flex items-center w-[4.2rem] py-1 rounded-md justify-center font-semibold text-sm gap-2 ">
            See More
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap items-center justify-center px-12">
        <div className="bg-[#e1e9ff] gap-2 w-[24%] flex flex-col  pt-3 pb-3 rounded-3xl">
          <div className="flex justify-between items-center px-5">
            <div className="w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center">
              <AiOutlineFolder size={12} />
            </div>
            <div className="flex flex-col justify-center items-center">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="text-[1.2rem] font-bold ">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <div className="text-[.7rem] font-semibold px-5">Documents</div>
          <p className="text-[1.1rem] font-bold px-5">640 Files</p>
        </div>
        <div className="bg-[#e6e0f6] gap-2 w-[24%] flex flex-col  pt-3 pb-3 rounded-3xl">
          <div className="flex justify-between items-center px-5">
            <div className="w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center">
              <AiOutlineFolder size={12} />
            </div>
            <div className="flex flex-col justify-center items-center">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="text-[1.2rem] font-bold ">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <div className="text-[.7rem] font-semibold px-5">Documents</div>
          <p className="text-[1.1rem] font-bold px-5">640 Files</p>
        </div>
        <div className="bg-[#ffe0e8] gap-2 w-[24%] flex flex-col  pt-3 pb-3 rounded-3xl">
          <div className="flex justify-between items-center px-5">
            <div className="w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center">
              <AiOutlineFolder size={12} />
            </div>
            <div className="flex flex-col justify-center items-center">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="text-[1.2rem] font-bold ">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <div className="text-[.7rem] font-semibold px-5">Documents</div>
          <p className="text-[1.1rem] font-bold px-5">640 Files</p>
        </div>
        <div className="bg-[#fedfcc] gap-2 w-[24%] flex flex-col  pt-3 pb-3 rounded-3xl">
          <div className="flex justify-between items-center px-5">
            <div className="w-[24px] h-[24px] rounded-full bg-white flex justify-center items-center">
              <AiOutlineFolder size={12} />
            </div>
            <div className="flex flex-col justify-center items-center">
              {/* <img className="w-5 h-5 rounded-full" src={spain} alt="" /> */}
              <div className="text-[1.2rem] font-bold ">
                {" "}
                <FiMoreHorizontal />
              </div>
            </div>
          </div>
          <div className="text-[.7rem] font-semibold px-5">Documents</div>
          <p className="text-[1.1rem] font-bold px-5">640 Files</p>
        </div>
      </div>
      <div className="px-12 pb-3 pt-2">
        <div className="flex justify-between items-center ">
          <div className="text-[1.3rem] font-bold ">Files</div>
          <div className="text-[#ff8130] underline flex items-center w-[4.2rem] py-1 rounded-md justify-center font-semibold text-sm gap-2 ">
            See More
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mx-12 text-[.8rem]">
        <div className="flex justify-between">
          <div className="w-1/3 flex gap-2 items-center ">
            <div>Name</div>
            <BsArrowUpShort size={18} />
          </div>
          <div className="w-1/5 flex gap-2 items-center ">
            <div>Size</div>
            <BsArrowUpShort size={18} />
          </div>
          <div className="w-1/4 flex gap-2 items-center ">Folder</div>
          <div className="w-1/4 flex gap-2 items-center ">
            <div>Last Modified</div> <BsArrowUpShort size={18} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4 w-1/3">
            <div className="w-[28px] h-[28px] rounded-full bg-blue-400 flex justify-center items-center text-sm">
              <AiOutlineFolder size={16} />
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="text-[.8rem] font-bold">Learn Animation</p>
              <p>Ali Husni</p>
            </div>
          </div>
          <div className="w-1/5 ">34MB </div>
          <div className="w-1/4 ">Documents</div>
          <div className="w-1/4 ">
            <div>January, 10, 2023</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4 w-1/3">
            <div className="w-[28px] h-[28px] rounded-full bg-blue-400 flex justify-center items-center text-sm">
              <AiOutlineFolder size={16} />
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="text-[.8rem] font-bold">Learn Animation</p>
              <p>Ali Husni</p>
            </div>
          </div>
          <div className="w-1/5 ">34MB </div>
          <div className="w-1/4 ">Documents</div>
          <div className="w-1/4 ">
            <div>January, 10, 2023</div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4 w-1/3">
            <div className="w-[28px] h-[28px] rounded-full bg-blue-400 flex justify-center items-center text-sm">
              <AiOutlineFolder size={16} />
            </div>
            <div className="flex flex-col gap-1 ">
              <p className="text-[.8rem] font-bold">Learn Animation</p>
              <p>Ali Husni</p>
            </div>
          </div>
          <div className="w-1/5 ">34MB </div>
          <div className="w-1/4 ">Documents</div>
          <div className="w-1/4 ">
            <div>January, 10, 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BethelMainDashBoard;
