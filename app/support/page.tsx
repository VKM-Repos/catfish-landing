"use client";
import FAQSection from "@/components/shared/faq";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SupportCarousel } from "./components/support-carousel";
import Link from "next/link";
import { useRouter } from "next/navigation";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "";
const PLAYLIST_ID = process.env.NEXT_PUBLIC_PLAYLIST_ID || "";

export default function Support() {
  const [videos, setVideos] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const getYoutubePlayList = async () => {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${PLAYLIST_ID}&key=${API_KEY}`,
    );
    const data = await response.json();
    setVideos(data.items);
  };

  useEffect(() => {
    setIsClient(true);
    getYoutubePlayList();
  }, []);

  const SupportCard = ({
    thumbnail,
    title,
    description,
    link,
  }: {
    thumbnail: string;
    title: string;
    description: string;
    link: string;
  }) => (
    <Link
      href={link}
      target="_blank"
      className="flex flex-col items-start text-left md:w-[420px] h-[390px] border-3 border-neutral-200 rounded-2xl bg-[#F8F6F1] overflow-hidden relative group mx-5"
    >
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center" />
      <Image
        src={"/assets/play-button.svg"}
        width={100}
        height={100}
        alt=""
        priority
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-80"
      />
      <Image src={thumbnail} width={1280} height={720} alt="" priority />
      <div className="gap-2 flex flex-col bg-[#EBEBEB] px-5 rounded-xl pt-4 h-full">
        <h2 className="font-bold line-clamp-2">{title}</h2>
        <p className="line-clamp-3">{description}</p>
      </div>
    </Link>
  );
  return (
    <div className="flex flex-col gap-20 md:gap-0">
      <div className="w-full h-[602px] shrink-0 rounded-b-4xl bg-[linear-gradient(181deg,#FFF_8.49%,#F1F6F8_77.17%,#4083A2_249.31%,#D0E0E8_249.31%)]">
        <div className="flex flex-col justify-center items-center text-center bg-[url(/assets/support_hero_bg.svg)] bg-center bg-cover bg-no-repeat h-[580px] w-full mx-auto rounded-b-3xl px-5">
          <div className="space-y-10 md:mb-[150px] mt-[50px] px-">
            <div className="space-y-3">
              <h2 className="md:text-[61px] text-[40px] font-bold text-neutral-700">
                Support Center
              </h2>
              <p className="text-base text-neutral-600">
                Get the Support You Need, When You Need It
              </p>
            </div>
            <p className="text-base text-neutral-600 md:w-[700px] w-full">
              Whether you’re setting up your first pond, managing your cluster,
              or exploring new features — ADMS Support is your go-to space for
              guidance, tutorials, and updates.
            </p>
          </div>
          <div className="md:flex items-center  gap-10 hidden absolute top-150 w-full justify-center px-2">
            <div className="flex flex-col items-start text-left w-[400px] h-80 p-5 overflow-hidden border-3 border-neutral-200 rounded-2xl bg-white ">
              <Image
                src={"/assets/started.svg"}
                width={100}
                height={100}
                alt=""
                priority
              />
              <h2 className="font-bold text-[32px]">Getting started guide</h2>
              <p className="text-[16px]">
                Everything you need to know to set up your ADMS account, create
                ponds, and start recording data.
              </p>
            </div>
            <div className="flex flex-col items-start text-left w-[400px] h-80 p-5 overflow-hidden border-3 border-neutral-200 rounded-2xl bg-white">
              <Image
                src={"/assets/faq.svg"}
                width={100}
                height={100}
                alt=""
                priority
              />
              <h2 className="font-bold text-[32px]">FAQs</h2>
              <p className="text-[16px]">
                Frequently asked questions and answers to every how to use and
                get the best of using ADMS.
              </p>
            </div>
            <div className="flex flex-col items-start text-left w-[400px] h-80 p-5 overflow-hidden border-3 border-neutral-200 rounded-2xl bg-white">
              <Image
                src={"/assets/contact.svg"}
                width={100}
                height={100}
                alt=""
                priority
              />
              <h2 className="font-bold text-[32px]">Contact & Helpdesk</h2>
              <p className="text-[16px]">
                Everything you need to know to set up your ADMS account, create
                ponds, and start recording data.
              </p>
            </div>
          </div>
          <SupportCarousel />
        </div>
      </div>

      <section className="md:mt-[300px] mt-[100px] text-center">
        <div className="flex flex-col items-center gap-4 md:w-[719px] mx-auto text-center px-5">
          <h2 className="font-bold text-[32px]">
            Watch & Learn with ADMS Tutorials
          </h2>
          <p className="md:text-lg text-base ">
            Explore our growing library of walkthroughs and “how-to” videos on
            the official ADMS YouTube channel.
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center md:justify-center gap-10 mt-10">
          {!isClient ? null : videos.length === 0 ? (
            <p className="text-neutral-400">Loading videos...</p>
          ) : (
            videos.map((video: any, k: number) => (
              <SupportCard
                title={video.snippet.title}
                description={video.snippet.description}
                thumbnail={video.snippet.thumbnails.maxres.url}
                key={k}
                link={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
              />
            ))
          )}
        </div>
        <Link
          href="https://youtube.com/@viableknowledgemasters9397?si=m-W_ljK3o34Jp_nb"
          target="_blank"
        >
          <Button className="bg-primary-500 text-white w-fit px-5 py-7 rounded-full mt-6">
            View All on YouTube{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 18L8.5 15.5M18 6H9M18 6V15M18 6L11.5 12.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </Link>
      </section>
      <section className="md:px-[150px] flex md:flex-row flex-col md:items-start md:justify-center md:mt-[100px] px-5 gap-8">
        <div className="md:w-[40%] h-fit md:top-20 space-y-10 shrink-0">
          <div>
            <h2 className="font-bold text-4xl">You have got questions? </h2>
            <h2 className="font-bold text-4xl">We’ve got answers</h2>
          </div>
          <p>Quick answers to help you understand how ADMS works.</p>
          <div className="bg-primary-400 w-[296px] p-5 rounded-xl text-white space-y-2">
            <h4 className="text-[18px] font-bold">Still have questions?</h4>
            <p className="text-sm">Send a detailed email and we’ll help.</p>
            <Button
              className="bg-primary-500 rounded-full text-sm py-2"
              onClick={() => router.push("/support")}
            >
              Support
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L8.5 15.5M18 6H9M18 6V15M18 6L11.5 12.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="md:w-[60%] shrink-0">
          <FAQSection />
        </div>
      </section>
    </div>
  );
}
