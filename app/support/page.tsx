import FAQSection from "@/components/shared/faq";
import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { SupportCarousel } from "./components/support-carousel";

export default function Support() {
  return (
    <div className="">
      <div className="w-full h-[602px] shrink-0 rounded-b-4xl bg-[linear-gradient(181deg,#FFF_8.49%,#F1F6F8_77.17%,#4083A2_249.31%,#D0E0E8_249.31%)]">
        <div className="flex flex-col justify-center items-center text-center bg-[url(/assets/support_hero_bg.svg)] bg-center bg-cover bg-no-repeat h-[580px] w-full mx-auto rounded-b-3xl ">
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
          <div className="md:flex items-center gap-10 hidden absolute bottom-10">
            <div className="flex flex-col items-start text-left w-[400px] h-[300px] p-5 border-3 border-neutral-200 rounded-2xl bg-white">
              <Image
                src={"/assets/started.svg"}
                width={100}
                height={100}
                alt=""
              />
              <h2 className="font-bold text-[32px]">Getting started guide</h2>
              <p className="text-[16px]">
                Everything you need to know to set up your ADMS account, create
                ponds, and start recording data.
              </p>
            </div>
            <div className="flex flex-col items-start text-left w-[400px] h-[300px] p-5 border-3 border-neutral-200 rounded-2xl bg-white">
              <Image src={"/assets/faq.svg"} width={100} height={100} alt="" />
              <h2 className="font-bold text-[32px]">FAQs</h2>
              <p className="text-[16px]">
                Frequently asked questions and answers to every how to use and
                get the best of using ADMS.
              </p>
            </div>
            <div className="flex flex-col items-start text-left w-[400px] h-[300px] p-5 border-3 border-neutral-200 rounded-2xl bg-white">
              <Image
                src={"/assets/contact.svg"}
                width={100}
                height={100}
                alt=""
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
          <p className="md:text-lg text-base">
            Explore our growing library of walkthroughs and “how-to” videos on
            the official ADMS YouTube channel.
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center md:justify-center gap-10 mt-10">
          <div className="flex flex-col items-start text-left w-[364px] h-[340px] border-3 border-neutral-200 rounded-2xl bg-white overflow-hidden">
            <div className="relative">
              <Image
                src={"/assets/farm_setup.svg"}
                width={364}
                height={200}
                alt=""
              />
              <Image
                src={"/assets/play.svg"}
                width={50}
                height={50}
                alt=""
                className="absolute top-25 right-40"
              />
            </div>
            <div className="bg-[#EBEBEB] h-full overflow-hidden p-5">
              <h3 className="font-bold text-[20px]">Contact & Helpdesk</h3>
              <p className="text-[16px]">
                Everything you need to know to set up your ADMS account, create
                ponds, and start recording data.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start text-left w-[364px] h-[340px] border-3 border-neutral-200 rounded-2xl bg-white overflow-hidden">
            <div className="relative">
              <Image
                src={"/assets/farm_setup.svg"}
                width={364}
                height={200}
                alt=""
              />
              <Image
                src={"/assets/play.svg"}
                width={50}
                height={50}
                alt=""
                className="absolute top-25 right-40"
              />
            </div>
            <div className="bg-[#EBEBEB] h-full overflow-hidden p-5">
              <h3 className="font-bold text-[20px]">Contact & Helpdesk</h3>
              <p className="text-[16px]">
                Everything you need to know to set up your ADMS account, create
                ponds, and start recording data.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start text-left w-[364px] h-[340px] border-3 border-neutral-200 rounded-2xl bg-white overflow-hidden">
            <div className="relative">
              <Image
                src={"/assets/farm_setup.svg"}
                width={364}
                height={200}
                alt=""
              />
              <Image
                src={"/assets/play.svg"}
                width={50}
                height={50}
                alt=""
                className="absolute top-25 right-40"
              />
            </div>
            <div className="bg-[#EBEBEB] h-full overflow-hidden p-5">
              <h3 className="font-bold text-[20px]">Contact & Helpdesk</h3>
              <p className="text-[16px]">
                Everything you need to know to set up your ADMS account, create
                ponds, and start recording data.
              </p>
            </div>
          </div>
        </div>
        <Button className="bg-primary-800 text-white w-fit px-5 py-7 rounded-full mt-[24px]">
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
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Button>
      </section>
      <section className="md:px-[150px] flex md:flex-row flex-col md:items-center md:justify-center mt-[100px] px-5">
        <div className="md:w-[40%] h-fit sticky space-y-10">
          <div>
            <h2 className="font-bold text-4xl">You have got questions? </h2>
            <h2 className="font-bold text-4xl">We’ve got answers</h2>
          </div>
          <p>Quick answers to help you understand how ADMS works.</p>
          <div className="bg-primary-400 w-[296px] p-5 rounded-xl text-white space-y-2">
            <h4 className="text-[18px] font-bold">Still have questions?</h4>
            <p className="text-sm">Send a detailed email and we’ll help.</p>
            <Button className="bg-neutral-800 rounded-full text-sm py-2">
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
        <div className="md:w-[60%]">
          <FAQSection />
        </div>
      </section>
    </div>
  );
}
