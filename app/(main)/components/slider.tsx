"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = ((clientX - rect.left) / rect.width) * 100;
    x = Math.max(0, Math.min(100, x));
    setPosition(x);
  };

  return (
    <div className="md:w-[50.7%] w-full max-w-5xl mx-auto md:p-6 p-3">
      <div
        ref={containerRef}
        className="relative h-[420px] rounded-2xl overflow-hidden select-none bg-slate-400"
        onMouseMove={(e) => dragging && handleMove(e.clientX)}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={() => setDragging(false)}
      >
        {/* AFTER IMAGE */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src="/assets/after.svg"
            alt="After"
            fill
            className="object-contain"
          />
        </div>

        {/* BEFORE IMAGE */}
        <div
          className="absolute inset-0 overflow-hidden border-0 border-r-4 border-[#F3F3F3]"
          style={{ width: `${position}%` }}
        >
          <div
            className="absolute inset-0 pointer-events-none h-full"
            style={{
              width: `${(100 / position) * 100}%`,
              maxWidth: "none",
            }}
          >
            <Image
              src="/assets/before.jpg"
              alt="Before"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* SLIDER HANDLE */}
        <div
          className="absolute top-0 bottom-0 z-20 flex items-center"
          style={{ left: `${position}%` }}
        >
          <div
            onMouseDown={() => setDragging(true)}
            onTouchStart={() => setDragging(true)}
            className="-ml-9 w-[70px] h-[30px] rounded-2xl bg-black shadow-lg flex items-center justify-center cursor-ew-resize"
          >
            <div className="flex gap-4">
              <svg
                width="24"
                height="24"
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
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" rx="12" fill="#005983" />
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="10"
                  fill="#005983"
                />
                <path
                  d="M9.5 17L14.5 12L9.5 7"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* BEFORE LABEL */}
        <span className="absolute top-4 left-4 bg-primary-400 text-white text-sm px-4 py-1 rounded-full z-30">
          Before
        </span>

        {/* AFTER LABEL */}
        <span className="absolute top-4 right-4 bg-black text-white text-sm px-4 py-1 rounded-full z-30">
          After
        </span>
      </div>
    </div>
  );
}
