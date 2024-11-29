import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-56 bottom-0 bg-blue-800 z-50 gap-3  flex justify-start text-xs w-full items-center text-white">
      <div className=" w-[1400px] text-center flex flex-col justify-between items-start mx-36 gap-3">
        <div className="border-gray-100 border-b-2 py-3 flex justify-between items-center">
          <div className=" w-1/3 flex flex-col justify-between gap-4 items-start">
            <h3 className="font-bold text-lg">
              لدیما؛ دستیار آنلاین فروش مبتنی بر سفارش
            </h3>
            <p className="text-right">
              لورم ایپسوم دولور سیت آمت، کانسکتتتور آدیپیسیلینگ الیت. سدو اد
              منیم ونیام، کوئس اکیپیزن اید است. نون سکوید سیت، کامپرون دیکتوس،
              ریپوس اندیداست فقط دمر ایوچتا. موریس آنتیویمیانوس، آکولیر شروع
              کستفاده از لورم ایپسوم می‌توانند میزان فضای خالی را در طراحی‌های
              خود مدیریت کنند.
            </p>
          </div>
          <div className="w-1/3 flex flex-col justify-start items-start gap-4">
            <h3 className="font-bold text-lg">دسترسی سریع</h3>
            <nav className="w-full h-full  flex flex-col gap-2 items-start justify-start">
              <Link href="/printservices">انواع چاپ</Link>
              <Link href="/giftsservices">هدایایی تبلیغاتی</Link>
              <Link href="/designservices">طراحی تخصصی</Link>
              <Link href="/multimediaservises">چند رسانه ای</Link>
            </nav>
          </div>
          <div className=" flex flex-col justify-start items-start gap-4">
            <h3 className="font-bold text-lg"> اطلاعات تماس</h3>
            <ul className="text-right gap-3 flex flex-col">
              <li>آدرس : تهران - پردیس - کدپستی 78778778-1515</li>
              <li>تلفن پشتیبانی : 123456789-021</li>
            </ul>
          </div>
        </div>
        <p className="mb-3">ارایه شده توسط لدیما @ 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
