import Image from "next/image";
import React from "react";

export default function ComingSoon() {
  return (
    <div className="flex justify-center px-5 text-center my-20 flex-col md:w-[80%] mx-auto gap-5">
      <h1 className="md:text-6xl font-medium text-3xl">
        ADMS <span className="text-primary-500 ">Mobile APP </span> is Almost
        Here
      </h1>
      <p className="">
        A smarter way manage your farm operations anytime, anywhere. The ADMS
        mobile app is designed to bring data collection, tracking, and insights
        directly to your fingertips — even in low-connectivity environments all
        from your mobile device.
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
        src={"/assets/coming-soon-img.png"}
        width={1058}
        height={492}
        className="self-center mt-10"
        alt="Mobile app preview"
      />

      <p>
        Already using ADMS on the web? Your data will sync seamlessly once the
        app is live
      </p>
    </div>
  );
}
