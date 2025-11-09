import React from "react";

export default function Hero({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-[780px] shrink-0 rounded-b-4xl bg-[linear-gradient(181deg,#FFF_8.49%,#F1F6F8_77.17%,#4083A2_249.31%,#D0E0E8_249.31%)]">
      {children}
    </div>
  );
}
