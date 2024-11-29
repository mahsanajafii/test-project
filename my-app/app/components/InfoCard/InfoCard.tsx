import { StaticImageData } from "next/image";
import OnlineOrder from "../../../public/images/online shopping.jpg";
import Image from "next/image";

interface IInfoCardProps {
  title: string,
  src: string,
  dec: string,
  dir:string,
}

const InfoCard: React.FC<IInfoCardProps> = ({ info }) => {
  return (
    <div className={`${info.dir==="rtl"?"flex-row":"flex-row-reverse"} w-5/6 h-96  flex gap-3 justify-between items-center`}>
        <div className="h-80 flex justify-center z-0 p-4 w-1/2 items-center animate-[appear_2s_ease-in-out]">
      <Image
      
        src={info.src}
        alt={info.title}
        width={300}
        height={300}
        className="rounded z-0 bg-transparent"
        />
        </div>
      <div className="w-1/2 flex flex-col justify-center items-start gap-4 animate-[appear_3s_ease-in-out]">
        <h2 className="font-bold">{info.title}</h2>
        <p>{info.dec}</p>
      </div>
    </div>
  );
};

export default InfoCard;
