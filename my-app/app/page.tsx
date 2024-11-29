import Banner from "./components/banner/Banner";
import InfoCard from "./components/InfoCard/InfoCard";


const Home: React.FC = () => {
  const informations = [
    {
      title: "سفارش آنلاین",
      src: "/images/online-order.png",
      dir: "rtl",
      dec: "لورم ایپسوم دولور سیت آمت، کانسکتتتور آدیپیسیلینگ الیت. سدو اد منیم ونیام، کوئس اکیپیزن اید است. نون سکوید سیت، کامپرون دیکتوس، ریپوس اندیداست فقط دمر ایوچتا. موریس آنتیویمیانوس، آکولیر شروع کے بیلع اؤدین دادی است.این متن برای نمایش چیدمان بهینه صفحات و ارزیابی ترکیب‌های رنگی و گرافیکی کاربرد دارد. ضمن اینکه طراحان با استفاده از لورم ایپسوم می‌توانند میزان فضای خالی را در طراحی‌های خود مدیریت کنند.",
    },
    {
      title: "تحویل درب منزل",
      src: "/images/transfer2.png",
      dir: "ltr",
      dec: "لورم ایپسوم دولور سیت آمت، کانسکتتتور آدیپیسیلینگ الیت. سدو اد منیم ونیام، کوئس اکیپیزن اید است. نون سکوید سیت، کامپرون دیکتوس، ریپوس اندیداست فقط دمر ایوچتا. موریس آنتیویمیانوس، آکولیر شروع کے بیلع اؤدین دادی است.این متن برای نمایش چیدمان بهینه صفحات و ارزیابی ترکیب‌های رنگی و گرافیکی کاربرد دارد. ضمن اینکه طراحان با استفاده از لورم ایپسوم می‌توانند میزان فضای خالی را در طراحی‌های خود مدیریت کنند.",
    },
    {
      title: "پشتیبانی نامحدود",
      src: "/images/customer-service.png",
      dir: "rtl",
      dec: "لورم ایپسوم دولور سیت آمت، کانسکتتتور آدیپیسیلینگ الیت. سدو اد منیم ونیام، کوئس اکیپیزن اید است. نون سکوید سیت، کامپرون دیکتوس، ریپوس اندیداست فقط دمر ایوچتا. موریس آنتیویمیانوس، آکولیر شروع کے بیلع اؤدین دادی است.این متن برای نمایش چیدمان بهینه صفحات و ارزیابی ترکیب‌های رنگی و گرافیکی کاربرد دارد. ضمن اینکه طراحان با استفاده از لورم ایپسوم می‌توانند میزان فضای خالی را در طراحی‌های خود مدیریت کنند.",
    },
  ];
  return (
    <>
      <main className="flex h-[100vh] flex-col items-center justify-between gap-3">
        <Banner />

        {informations.map((info) => (
          <InfoCard info={info} />
        ))}
      </main>
      </>
  );
};
export default Home;
