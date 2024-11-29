"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { PiUserCircleFill } from "react-icons/pi";
import { IoCloudDownloadOutline } from "react-icons/io5";

const Header: React.FC = () => {
  const handeldownload=()=>{
    console.log("download app")
  }
  return (
    <>
      <header className="h-20 flex-shrink-0 z-50 w-full fixed  text-sm border-b-2 shadow-xl flex top-0 right-0 bg-white">
        <div className=" w-[1400px] mx-36 text-center flex justify-between items-center">
          <div className="flex items-center justify-start gap-2 right-0 w-1/7 ">
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="rounded "
            />
            <p className="text-xl font-bold">لدیما</p>
          </div>
          <nav className="w-1/3 flex items-center justify-between gap-3">
            <Link
              href="/Introduction"
              className="w-1/3 flex items-center justify-start gap-2"
            >
              <AiOutlinePlaySquare />
              فیلم معرفی
            </Link>
            <Link href="/prouducts" className="w-1/3">
              محصولات و خدمات
            </Link>
            <Link href="/contact" className="w-1/3">
              تماس با ما
            </Link>
          </nav>
          <div className="w-1/3 flex items-center justify-start gap-6">
            <Link
            onClick={()=>handeldownload()}
              href="/downloadapp"
              className="bg-gray-300 px-4 py-2 hover:bg-blue-800 hover:text-white duration-700 transition-all hover:rounded-full rounded-sm flex gap-1 justify-center items-center"
            >
              <IoCloudDownloadOutline />
              دانلود اپلیکیشن
            </Link>
            <Link
              href="/basket"
              className=" flex gap-1 justify-center items-center"
            >
              <SlBasket />
              سبد سفارش
            </Link>
            <div className="flex gap-1">
              <Link
                href="/signin"
                className=" border-l-2 border-l-black pl-2 flex gap-1 justify-center items-center"
              >
                <PiUserCircleFill />
                ورود
              </Link>
              <Link href="/register" className="mr-2">
                ثبت نام
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
