import Link from "next/link";
import { Button } from "./button";
import { useRouter } from "next/navigation";

const PlayStoreButton = ({
  link,
  image,
  text,
}: {
  link: string;
  image: string;
  text: string;
}) => {
  const router = useRouter();
  return (
    <Link href={link}>
      <Button className="cursor-pointer flex items-center gap-2 bg-primary-700 text-white text-sm font-normal rounded-full px-5 py-6">
        <img src={image} width={20} height={20} alt="Play store" />
        <div className="text-left ">
          <p className="">Get it on</p>
          <p className="text-lg">{text}</p>
        </div>
      </Button>
    </Link>
  );
};

export default PlayStoreButton;
