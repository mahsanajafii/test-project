import HeaderComponent from "../components/headerComponent/HeaderComponent";
import Link from "next/link";

const secendPage: React.FC = () => {
  return (
    <main className="flex flex-col h-screen gap-8 items-center justify-start overflow-y-auto">
      <HeaderComponent/>
      <Link href="/" className="hover:font-bold italic underline">Back To Home</Link>

    </main>
  );
};

export default secendPage;
