"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import LogoMenu from "../logoMenu/LogoMenu";

// interface
interface IMenuItem {
  label: string;
  to: string;
}

const HeaderComponent: React.FC = () => {
  const [bgcolor, setBgColor] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const color = localStorage.getItem("backgroundColor");
    if (color) {
      setBgColor(color);
    } else {
      setBgColor("blue");
    }
  }, []);

  const menuItems: IMenuItem[] = [
    { to: "/", label: "Dashboard" },
    { to: "/", label: "Create-product" },
    { to: "/", label: "Users" },
    { to: "/", label: "Orders" },
    { to: "/", label: "AllProducts" },
  ];

  const handelClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <header
        className="w-full h-28 text-3xl top-0 text-center flex justify-center items-center px-8 overflow-y-visible"
        style={{ backgroundColor: bgcolor }}
      >
        <div className={`absolute w-1/6 left-5 top-5 rounded-xl flex z-10`}>
          <LogoMenu handelClick={() => handelClick()} />
          <div
            className={`absolute  top-[2rem] w-56 transition-opacity duration-500 ease-in-out bg-gray-100 border py-6  gap-6 left-[2rem] rounded-xl ${
              isChecked ? "block " : "hidden"
            } `}
          >
            <div className="flex flex-col transition-width duration-700 ease-in-out justify-around items-start h-full  text-2xl leading-8 font-normal">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.to}
                  onClick={() => handelClick()}
                  className={`transition-width duration-700 ease-in-out gap-4 rounded-lg p-3 cursor-pointer  hover:bg-[#DB277714] text-justifym text-lg  ${
                    isChecked ? " w-full" : " w-0"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="w-5/6 text-center ">This Is Header</p>
      </header>
    </>
  );
};

export default HeaderComponent;
