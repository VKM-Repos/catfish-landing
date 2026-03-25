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
        <div className="relative md:px-[150px] flex md:flex-row flex-col md:items-center md:justify-between pt-12 min-h-[calc(100vh-80px)] md:py-20 overflow-hidden">
          <Image
            src="/assets/water_vector.svg"
            className="absolute top-0 right-0 w-[1445px] h-[500px] hidden md:block pointer-events-none"
            alt=""
            width={1445}
            height={500}
            priority
          />
          <Image
            src="/assets/water_vector.svg"
            className="absolute bottom-0 right-0 w-[1445px] h-[500px] hidden md:block pointer-events-none"
            alt=""
            width={1445}
            height={500}
            priority
          />
          <div className="relative md:w-[40%] w-[353px] flex flex-col gap-3.5 px-5 md:ml-38 mb-10 md:mt-0 z-10 lg:pl-[120px] xl:pl-[150px]">
            <h2 className="md:text-5xl lg:text-[64px] text-3xl text-primary-700 font-bold md:w-[579px] md:leading-[1.15]">
              Built to Simplify, Connect, and Grow Aquaculture
            </h2>
            <p className="md:w-[516px]">
              ADMS brings together every part of aquaculture management data
              recording, cluster coordination, and analytics into one seamless
              digital platform that works for farmers, managers, and
              policymakers alike.
            </p>
          </div>
          <div className="relative z-10 w-full lg:w-[55%] flex justify-end mt-12 lg:mt-0 px-5 flex-shrink-0">
            <Image
              src={"/assets/feature_hero.svg"}
              width={553}
              height={541}
              priority
              quality={100}
              alt="Dashboard screen"
              className="object-cover w-full h-auto max-w-[553px]"
            />
          </div>
        </div>
      </Hero>

      <section className="my-[100px]">
        <div className="flex md:flex-row flex-col md:items-center md:justify-between md:px-[150px] mx-5">
          <div>
            <Image
              src={"/assets/ai.svg"}
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
            <ul className="space-y-4 md:w-[527px]">
              <li className="flex items-start gap-2 bg-[#E5E7FF] p-2.5 rounded-lg">
                {" "}
                <Image
                  src={"/assets/ai_chat.svg"}
                  width={20}
                  height={20}
                  alt="Pointer"
                />{" "}
                <p className="font-medium text-base">
                  AI Chat Support
                  <p className="font-normal">
                    Interactive AI chat that answers questions on system usage,
                    farm practices, and common challenges — directly within the
                    platform.
                  </p>
                </p>
              </li>
              <li className="flex items-start gap-2 bg-[#E5E7FF] p-2.5 rounded-lg">
                {" "}
                <Image
                  src={"/assets/ai_grad.svg"}
                  width={20}
                  height={20}
                  alt="Pointer"
                />{" "}
                <p className="font-medium text-base">
                  Built-In Learning Support
                  <p className="font-normal">
                    Provides contextual tips and explanations within modules to
                    help users understand features without external assistance.
                  </p>
                </p>
              </li>
              <li className="flex items-start gap-2 bg-[#E5E7FF] p-2.5 rounded-lg">
                {" "}
                <Image
                  src={"/assets/ai_monitor.svg"}
                  width={20}
                  height={20}
                  alt="Pointer"
                />{" "}
                <p className="font-medium text-base">
                  User Experience Support
                  <p className="font-normal">
                    Helps new users navigate the system faster through guided
                    prompts and smart suggestions during data entry.
                  </p>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
