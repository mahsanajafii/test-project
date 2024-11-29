import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-20 bottom-0 bg-blue-800 flex justify-start items-center">
      <div className="flex flex-col justify-start items-center">
        <h3>لدیما؛ دستیار آنلاین فروش مبتنی بر سفارش </h3>
      </div>
      <div className="flex flex-col justify-start items-center">
        <h3>دسترسی سریع</h3>
        <nav className="w-full h-full  flex flex-col items-start justify-start">
          <Link
            href="/Introduction"
            className="w-1/4 flex items-center justify-center gap-2 border-l-2 border-l-gray-400"
          >
            انواع چاپ
          </Link>
          <Link
            href="/prouducts"
            className="w-1/4 flex items-center justify-center gap-4 border-l-2 border-l-gray-400"
          >
            هدایایی تبلیغاتی{" "}
          </Link>
          <Link
            href="/contact"
            className="w-1/4 flex items-center justify-center gap-4 border-l-2 border-l-gray-400"
          >
            طراحی تخصصی
          </Link>
          <Link
            href="/contact"
            className="w-1/4 flex items-center justify-center gap-4"
          >
            چند رسانه ای
          </Link>
        </nav>
      </div>
      <div className="flex flex-col justify-start items-center">
        <h3> اطلاعات تماس</h3>
        <ul>
            <li>
                آدرس:تهران-پردیس- کدپستی 1515-87878
            </li>
            <li>
                تلفن پشتیبانی : 021-1234566789
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
