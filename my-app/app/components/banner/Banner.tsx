import Link from "next/link";
import { PiVideoCameraBold } from "react-icons/pi";
import { SiAffinitydesigner } from "react-icons/si";
import { TbShirt } from "react-icons/tb";
import { TiPrinter } from "react-icons/ti";

const Banner = () => {
  return (
    <div className="w-full text-white font-bold flex flex-col justify-center items-center gap-0 ">
      <div className="bg-blue-800 w-full h-72 justify-center items-center flex flex-col gap-2">
        <h1>هر چیز که در جستن آنی ... آنی</h1>
        <p className="w-fit px-4 py-1 bg-yellow-700 rounded-full">کانون تبلیغات آریا</p>
      </div>
      <div className="bg-white h-16 mt-[-40px]  shadow-[10px_10px_0px_0_rgba(133,180,245,.4)] w-5/6 ">
        <nav className="w-full h-full text-black flex items-center justify-between">
          <Link
            href="/printservices"
            className="w-1/4 flex items-center justify-center gap-2 border-l-2 border-l-gray-400"
          >
            <TiPrinter size={24} />
            انواع چاپ
          </Link>
          <Link
            href="/giftsservices"
            className="w-1/4 flex items-center justify-center gap-4 border-l-2 border-l-gray-400"
          >
            <TbShirt size={24} />
            هدایایی تبلیغاتی{" "}
          </Link>
          <Link
            href="/designservices"
            className="w-1/4 flex items-center justify-center gap-4 border-l-2 border-l-gray-400"
          >
            <SiAffinitydesigner size={24} />
            طراحی تخصصی
          </Link>
          <Link
            href="/multimediaservises"
            className="w-1/4 flex items-center justify-center gap-4"
          >
            <PiVideoCameraBold size={24} />
            چند رسانه ای
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Banner;
