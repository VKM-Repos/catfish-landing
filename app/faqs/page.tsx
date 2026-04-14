import FAQSection from "@/components/shared/faq";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Faq() {
  return (
    <div className="mt-20">
      <div className="flex justify-center flex-col">
        <h2 className=" text-2xl md:text-4xl font-bold mb-6 text-gray-800 self-center">
          Frequently Asked Questions
        </h2>
        <p className="text-neutral-600 mb-10 self-center">
          Answers to most asked questions
        </p>
      </div>
      <FAQSection />
      <div className="self-center mt-10 flex flex-col items-center gap-5 mb-20">
        <h2 className="font-bold md:text-4xl text-2xl">
          You have got questions?
        </h2>
        <p>Send a detailed email and we’ll help.</p>
        <Link href="mailto:adms@viableknowledgemasters.com">
          <Button className="bg-primary-500 text-white rounded-full">
            Send mail
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
        </Link>
      </div>
    </div>
  );
}
