"use client";
import PlayStoreButton from "@/components/ui/PlayStoreButton";
import { useRouter } from "next/navigation";

export default function ComingSoon() {
  const router = useRouter();
  return (
    <div className="relative pb-10">
      <img
        src="/assets/Edge_bg.svg"
        width={405}
        height={232}
        alt="Edge background"
        className="absolute bottom-0 left-0 z-10 opacity-50"
      />
      <img
        src="/assets/Edge_bg.svg"
        width={202}
        height={116}
        alt="Edge background"
        className="absolute bottom-0 right-0 z-10 opacity-50 scale-x-[-1]"
      />
      <div className="flex justify-center px-5 text-center mt-20 flex-col md:w-[80%] mx-auto gap-5">
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
          <PlayStoreButton
            link="https://play.google.com/store/apps/details?id=com.vkm.aquadata"
            image="/assets/google_play_icon.svg"
            text="Play Store"
          />
          <PlayStoreButton
            link="/coming-soon"
            image="/assets/apple_play_icon.svg"
            text="App Store"
          />
        </div>
        <img
          src={"/assets/coming-soon-img.svg"}
          width={1058}
          height={492}
          className="self-center mt-10 z-50"
          alt="Mobile app preview"
        />

        <p>
          Already using ADMS on the web? Your data will sync seamlessly once the
          app is live
        </p>
      </div>
    </div>
  );
}
