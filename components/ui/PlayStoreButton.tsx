import React from "react";
import { Button } from "./button";
import Image from "next/image";
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
    <Button
      onClick={() => router.push(link)}
      className="cursor-pointer flex items-center gap-2 bg-primary-700 text-white text-sm font-normal rounded-full p-5"
    >
      <Image src={image} width={20} height={20} alt="Play store" />
      <div className="text-left">
        <p className="text-[10px]">Get it on</p>
        <p>{text}</p>
      </div>
    </Button>
  );
};

export default PlayStoreButton;
