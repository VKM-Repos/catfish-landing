import FAQSection from "@/components/shared/faq";
import { FarmSlider } from "@/components/shared/farm-slider";
import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Features() {
  return (
    <>
      <Hero>
        <div className="relative md:px-[150px] flex md:flex-row flex-col md:items-center md:justify-between pt-12 h-[780px]">
          <img
            src="/assets/water_vector.svg"
            className="absolute top-0 w-[1445px] h-[500px] hidden md:block"
            alt=""
          />
          <img
            src="/assets/water_vector.svg"
            className="absolute bottom-0 w-[1445px] h-[px] hidden md:block"
            alt=""
          />
          <div className="md:w-[40%] w-[353px] flex flex-col gap-3.5 px-5 md:ml-38 mb-10 md:mb-0 z-10">
            <h2 className="md:text-6xl text-3xl text-primary-700 font-bold md:w-[579px] md:leading-16">
              Built to Simplify, Connect, and Grow Aquaculture
            </h2>
            <p className="md:w-[516px]">
              ADMS brings together every part of aquaculture management data
              recording, cluster coordination, and analytics into one seamless
              digital platform that works for farmers, managers, and
              policymakers alike.
            </p>
          </div>
          <Image
            src={"/assets/feature_hero.svg"}
            width={553}
            height={541}
            alt="Dashboard screen"
            className="object-cover"
          />
        </div>
      </Hero>

      <section className="mt-[100px]">
        <div className="flex md:flex-row flex-col md:items-center md:justify-between md:px-[150px] mx-5">
          <div>
            <Image
              src={"/assets/ai_insight.svg"}
              width={553}
              height={541}
              alt="AI Insight illustration"
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">AI insights </h2>
            <p>
              Tools that help farmers focus more on farming and less on
              paperwork.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                {" "}
                <Image
                  src={"/assets/drop.svg"}
                  width={9}
                  height={15}
                  alt="Pointer"
                />{" "}
                Simple, intuitive interface built for everyday use
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <Image
                  src={"/assets/drop.svg"}
                  width={9}
                  height={15}
                  alt="Pointer"
                />{" "}
                Real-time data sync with your cluster
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <Image
                  src={"/assets/drop.svg"}
                  width={9}
                  height={15}
                  alt="Pointer"
                />{" "}
                Works seamlessly even in low-connectivity areas
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex md:flex-row flex-col md:items-center md:justify-between md:px-[150px] mx-5 mt-[100px] ">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Real-Time Data Collection </h2>
            <p>
              Tools that help farmers focus more on farming and less on
              paperwork.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                {" "}
                <Image
                  src={"/assets/drop.svg"}
                  width={9}
                  height={15}
                  alt="Pointer"
                />{" "}
                Simple, intuitive interface built for everyday use
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <Image
                  src={"/assets/drop.svg"}
                  width={9}
                  height={15}
                  alt="Pointer"
                />{" "}
                Real-time data sync with your cluster
              </li>
              <li className="flex items-center gap-2">
                {" "}
                <Image
                  src={"/assets/drop.svg"}
                  width={9}
                  height={15}
                  alt="Pointer"
                />{" "}
                Works seamlessly even in low-connectivity areas
              </li>
            </ul>
          </div>
          <div>
            <Image
              src={"/assets/ai_insight.svg"}
              width={553}
              height={541}
              alt="AI Insight illustration"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-5">
        <div className="flex justify-center mt-[100px]">
          <Image
            src={"/assets/manage_farm_section.svg"}
            width={1232}
            height={615}
            alt="Manage Farm section"
            className="w-[1232px] max-auto hidden md:block"
          />
          <div className="md:hidden">
            <FarmSlider />
          </div>
        </div>
        <div className=" md:px-[150px] flex md:flex-row flex-col md:justify-between md:items-center mt-14">
          <div className="space-y-8">
            <h2 className="font-bold md:text-[42px] text-[40px] md:w-[450px] w-[350px]">
              The Aquadata Mobile App Coming Soon
            </h2>
            <p className="md:w-[518px] w-[353px]">
              Smart aquaculture management, right from your phone. The ADMS
              mobile app will make it easy for farmers and clusters to record
              data, track performance, and stay connected — anytime, anywhere.
            </p>
            <ul className="space-y-5 w-[344px]">
              <li className="flex items-center gap-3">
                <Image
                  src={"/assets/drop.svg"}
                  width={9}
                  height={15}
                  alt="Pointer"
                />
                Simple, intuitive interface built for everyday use
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src={"/assets/drop.svg"}
                  width={9}
                  height={15}
                  alt="Pointer"
                />{" "}
                Real-time data sync with your cluster
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src={"/assets/drop.svg"}
                  width={9}
                  height={15}
                  alt="Pointer"
                />{" "}
                Works seamlessly even in low-connectivity areas
              </li>
            </ul>
            <div className="flex items-center gap-5">
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
          </div>
          <div className="my-[50px]">
            <Image
              src={"/assets/mobile_app.svg"}
              width={518}
              height={650}
              alt="Mobile app sample"
              className="md:w-[518px] md:h-[650px] w-[363px]"
            />
          </div>
        </div>
      </section>

      <section className="md:px-[150px] flex md:flex-row flex-col md:items-center md:justify-center md:mt-[100px] px-5">
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
    </>
  );
}
