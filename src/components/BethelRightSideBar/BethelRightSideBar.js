import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { BiRightArrowCircle } from "react-icons/bi";
import { BsCloudCheck } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import { GrCircleInformation } from "react-icons/gr";
import { MdOutlineMenuBook } from "react-icons/md";
import { SiJsonwebtokens } from "react-icons/si";
import { BiBookContent } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { BsTicketPerforated } from "react-icons/bs";
import { RiFolderWarningLine } from "react-icons/ri";
import { GrSettingsOption } from "react-icons/gr";
import { TbJewishStar } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import { FiChevronDown } from "react-icons/fi";
import pic from "../../images/profilepic.jpg";
import diagram from "../../images/diagram.png";
import { RxDotFilled } from "react-icons/rx";
import { BsHandbag } from "react-icons/bs";

const BethelRightSideBar = () => {
  return (
    <div className=" w-3/12 flex flex-col justify-between items-center px-10 py-5 ">
      <div className="flex flex-col w-full gap-4">
        <div className="flex flex-col gap-6">
          {/* <div className="flex justify-between items-center ">
            <div className="flex gap-2">
              <div>
                <AiOutlineQuestionCircle size={20} />
              </div>
              <div>
                <BiRightArrowCircle size={20} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <BsCloudCheck size={20} />
              </div>
              <div>online</div>
            </div>
          </div> */}
          <div className="flex justify-between items-center">
            <div className="w-10 h-10 rounded-full bg-red-900 flex item-center justify-center">
              <img className="rounded-full" src={pic} alt="" />
            </div>
            <div className="text-[.7rem]">
              <div className="flex items-center gap-1">
                <p className="font-bold">Nevzat Gokmen</p>
                <p>
                  <GoPrimitiveDot />
                </p>
                <p>
                  <FiChevronDown />
                </p>
              </div>
              <div>Nevzat4023</div>
            </div>
          </div>
          {/* <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">150.080.01$</div>
              <div>
                <BsPlusCircle />
              </div>
            </div>
            <div className="flex gap-2 items-center text-sm">
              <GrCircleInformation />
              <p className="font-semibold">Zap Coins</p>
            </div>
          </div> */}
          <div className="flex flex-col gap-1">
            <div className="flex  w-full rounded-xl  shadow-md  ">
              <div className="w-1/2 bg-yellow-400 rounded-xl py-2 px-2">
                <SiJsonwebtokens />
              </div>
            </div>
            <div className="flex justify-between font-semibold text-sm">
              <div className=" ">Storage</div>
              <div>69%</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-[.9rem] font-bold">
          <div className="flex items-center gap-2">
            <MdOutlineMenuBook />
            <div className="">Partner menu</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <div>
                <BiBookContent />
              </div>
              <div>Web interface</div>
            </div>
            {/* <div className="flex gap-2 items-center">
              <div>
                <CgWebsite />
              </div>
              <div>Website</div>
            </div> */}
            <div className="flex gap-2 items-center">
              <div>
                <BsTicketPerforated />
              </div>
              <div>Ticket Support</div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <RiFolderWarningLine />
              </div>
              <div>Interruptions</div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <GrSettingsOption />
              </div>
              <div>Donation Settings</div>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <TbJewishStar />
              </div>
              <div>Wish list</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-2xl font-bold">Storage Details</div>
          <div className=" flex flex-col gap-3">
            <div className=" flex justify-center">
              <img src={diagram} alt="" />
            </div>
            <div className="flex flex-col mx-10">
              <div className="flex justify-between gap-12">
                <div className="flex items-center w-1/2">
                  <RxDotFilled /> <div>Documents</div>
                </div>
                <div className="flex items-center w-1/2">
                  <RxDotFilled />
                  <div>Images</div>
                </div>
              </div>
              <div className="flex justify-between gap-16 ">
                <div className="flex items-center w-1/2">
                  <RxDotFilled />
                  <div>Audio</div>
                </div>
                <div className="flex items-center w-1/2">
                  <RxDotFilled />
                  <div>Video</div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center  pl-5 py-1 w-3/4 mx-auto rounded-lg bg-[#ff8130]">
              <BsHandbag />
              <div className="text-md font-bold">$150</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between w-full items-center">
        <div className="text-sm font-semibold">Quick news</div>
        <div className="flex">
          <div>
            <FaFacebookF />
          </div>
          <div>
            <AiOutlineTwitter />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BethelRightSideBar;
