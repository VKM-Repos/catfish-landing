import Image from "next/image";
import React from "react";

export default function ComingSoon() {
  return (
    <div className="relative pb-10 ">
      <Image
        src="/assets/Edge_bg.svg"
        width={405}
        height={232}
        alt="Edge background"
        className="absolute bottom-0 left-0 z-10 opacity-50"
        priority
      />
      <Image
        src="/assets/Edge_bg.svg"
        width={202}
        height={116}
        alt="Edge background"
        className="absolute bottom-0 right-0 z-10 opacity-50 scale-x-[-1]"
        priority
      />
      <div className="flex justify-center px-5 text-center mt-20 flex-col md:w-[80%] mx-auto gap-5 ">
        <h1 className="md:text-6xl font-medium text-3xl">
          ADMS <span className="text-primary-500 ">Mobile APP </span> is Almost
          Here
        </h1>
        <p className="">
          A smarter way manage your farm operations anytime, anywhere. The ADMS
          mobile app is designed to bring data collection, tracking, and
          insights directly to your fingertips — even in low-connectivity
          environments all from your mobile device.
        </p>
        <p className="font-medium text-xl">Launching soon. Stay connected.</p>
        <div className="flex self-center gap-5">
          <Image
            src={"/assets/play_store.svg"}
            width={143}
            height={51}
            className="cursor-point"
            alt="Play store"
          />
          <Image
            src={"/assets/app_store.svg"}
            width={143}
            height={51}
            className="cursor-point"
            alt="App store"
          />
        </div>
        <Image
          src={"/assets/coming-soon-img.svg"}
          width={1058}
          height={492}
          className="self-center mt-10 z-50"
          alt="Mobile app preview"
          priority
        />

        <p>
          Already using ADMS on the web? Your data will sync seamlessly once the
          app is live
        </p>
      </div>
    </div>
  );
}
