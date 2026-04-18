import React from "react";

const MarqueeAnimation = () => {
  return (
    <div className="w-full pt-8 md:pt-12 overflow-x-auto no-scrollbar flex">
      <div className="relative w-full flex">
        <div className="group-marquee">
          <img
            src={"/assets/acp.svg"}
            className="inline-block flex-none basis-30 w-10 h-10"
            alt="ACP"
          />
          <img
            src={"/assets/fao.svg"}
            className="inline-block flex-none basis-30 w-10 h-10"
            alt="FAO"
          />
          <img
            src={"/assets/eu.svg"}
            className="inline-block flex-none basis-30 w-10 h-10"
            alt="EU"
          />
          <img
            src={"/assets/german.svg"}
            className="inline-block flex-none basis-30 w-10 h-10"
            alt="German"
          />
        </div>
        <div className="group-marquee aria-hidden:hidden">
          <img
            src={"/assets/acp.svg"}
            className="inline-block flex-none basis-30 w-10 h-10"
            alt="ACP"
          />
          <img
            src={"/assets/fao.svg"}
            className="inline-block flex-none basis-30 w-10 h-10"
            alt="FAO"
          />
          <img
            src={"/assets/eu.svg"}
            className="inline-block flex-none basis-30 w-10 h-10"
            alt="EU"
          />
          <img
            src={"/assets/german.svg"}
            className="inline-block flex-none basis-30 w-10 h-10"
            alt="German"
          />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-36 bg-linear-to-r from-white/30 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-36 bg-linear-to-l from-white/30 to-transparent pointer-events-none z-10" />
      </div>
    </div>
  );
};

export default MarqueeAnimation;
