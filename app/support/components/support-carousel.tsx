"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function SupportCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs mt-16 md:hidden"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                <Image
                  src={"/assets/started.svg"}
                  width={100}
                  height={100}
                  alt=""
                />
                <h2 className="font-bold text-[25px]">Getting started guide</h2>
                <p className="text-sm">
                  Everything you need to know to set up your ADMS account,
                  create ponds, and start recording data.
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                <Image
                  src={"/assets/faq.svg"}
                  width={100}
                  height={100}
                  alt=""
                />
                <h2 className="font-bold text-[25px]">FAQs</h2>
                <p className="text-sm">
                  Frequently asked questions and answers to every how to use and
                  get the best of using ADMS.
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                <Image
                  src={"/assets/contact.svg"}
                  width={100}
                  height={100}
                  alt=""
                />
                <h2 className="font-bold text-[25px]">Contact & Helpdesk</h2>
                <p className="text-sm">
                  Everything you need to know to set up your ADMS account,
                  create ponds, and start recording data.
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
