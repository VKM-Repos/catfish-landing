import { Card } from "@/components/ui/card";
import Image from "next/image";

const ManageFarmSection = () => {
  const SectionCard = ({
    img,
    text,
    className,
    reverse = false,
  }: {
    img: string;
    text: string;
    className?: string;
    reverse?: boolean;
  }) => (
    <Card
      className={`w-full max-w-[250px]  min-h-[350px] h-[450px] bg-white z-200 flex flex-col items-center justify-center rounded-3xl border-none ${className || ""}`}
    >
      <p className="text-center mt-4 font-bold p-6 text-[14px]">{text}</p>
      <Image
        src={img}
        alt="section image"
        width={180}
        height={200}
        style={{
          filter: "drop-shadow(-20px 10px 20px var(--color-primary-300))",
        }}
        className={`${reverse ? "mb-auto" : "mt-auto"} w-[140px] md:w-[180px] h-auto`}
      />
    </Card>
  );
  return (
    <div className="w-[80%] mx-auto bg-primary-800 h-[500px] my-[100px] hidden md:flex justify-between relative rounded-4xl flex-col">
      <div className="absolute inset-0 bg-[url('/assets/water_mark.svg')] bg-no-repeat bg-center bg-cover opacity-20 h-2/3" />
      <p className="text-white lg:text-4xl mt-20 font-bold self-center text-3xl">
        Manage Your Farm, Anytime, Anywhere
      </p>
      <div className="flex lg:gap-20 gap-10 mt-20 self-center">
        <SectionCard
          img="/assets/Farmsection1.svg"
          text="Syncing your farm, ponds, and data seamlessly."
        />
        <SectionCard
          img="/assets/Farmsection2.svg"
          text="Every Detail, Right Where You Need It."
          className="flex-col-reverse"
          reverse={true}
        />
        <SectionCard
          img="/assets/Farmsection3.svg"
          text="Get instant insight to your farm at a glance."
        />
      </div>
    </div>
  );
};

export default ManageFarmSection;
