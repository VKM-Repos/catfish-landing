"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

export function FarmSlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <div className=" w-[336px] h-[450px] bg-primary-800 rounded-2xl overflow-hidden relative">
        <Image
          src={"/assets/water_mark.svg"}
          width={200}
          height={615}
          alt="Manage Farm section"
          className="w-[1232px] max-auto absolute opacity-50"
        />
        <div className="z-[2000] w-[300px] mx-auto mt-5">
          <h2 className="text-white text-[35px] font-bold text-center px-2 relative">
            Manage Your Farm, Anytime, Anywhere
          </h2>
        </div>
        <div className="flex gap-4 justify-center absolute top-50 left-30 z-30">
          {/* Prev */}
          <button onClick={() => api?.scrollPrev()}>
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#005983" />
              <rect
                width="20"
                height="20"
                rx="10"
                transform="matrix(-1 0 0 1 22 2)"
                fill="#005983"
              />
              <path
                d="M14.5 17L9.5 12L14.5 7"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Next */}
          <button onClick={() => api?.scrollNext()}>
            <svg
              width="35"
              height="35"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="12" fill="#005983" />
              <rect x="2" y="2" width="20" height="20" rx="10" fill="#005983" />
              <path
                d="M9.5 17L14.5 12L9.5 7"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mx-auto max-w-xs -mt-[215px]">
        <Carousel setApi={setApi} className="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem>
              <Image
                src={"/assets/slide_1.svg"}
                width={300}
                height={615}
                alt="Manage Farm section"
                className="w-[1232px] max-auto"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={"/assets/slide_2.svg"}
                width={300}
                height={615}
                alt="Manage Farm section"
                className="w-[1232px] max-auto"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={"/assets/slide_3.svg"}
                width={300}
                height={615}
                alt="Manage Farm section"
                className="w-[1232px] max-auto"
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
