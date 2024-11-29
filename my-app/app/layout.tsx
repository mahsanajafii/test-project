import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "لدیما",
  description: " دستیار آنلاین فروش مبتنی بر سفارش ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={` antialiased bg-gray-100 gap-3 flex flex-col scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300  overflow-y-scroll h-96`}>
        <Header />
        <div className="mt-20 mb-1 px-36 h-fit flex-grow ">{children}</div>
          <Footer />

      </body>
    </html>
  );
}
