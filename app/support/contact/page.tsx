import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const ContactCards = ({
  icon,
  title,
  description,
  href,
  buttonText,
  subTitle,
}: {
  icon: string;
  title: string;
  description: string;
  href: string;
  buttonText?: string;
  subTitle?: string;
}) => (
  <Card className="flex flex-col items-start text-left flex-1 p-5 overflow-hidden border-3 border-neutral-200 rounded-2xl bg-white lg:gap-5 gap-3 w-full">
    <img src={icon} />
    <div className="flex flex-col gap-2 h-20">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-xs lg:text-sm h-full">{subTitle}</p>
    </div>
    <Link href={href} target="_blank">
      <Button className="rounded-full bg-primary-800 text-white cursor-pointer">
        {buttonText}{" "}
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
    <div className="h-5">
      <p className="text-xs lg:text-sm text-neutral-600 h-full">
        {description}
      </p>
    </div>
  </Card>
);

export default function Contact() {
  return (
    <div className="w-full h-[400px] shrink-0 rounded-b-4xl bg-[linear-gradient(181deg,#FFF_8.49%,#F1F6F8_77.17%,#4083A2_249.31%,#D0E0E8_249.31%)] md:mb-80 mb-150">
      <div className="flex flex-col gap-5 items-center py-20 text-center h-[580px] w-full mx-auto rounded-b-3xl px-5">
        <h1 className="font-bold md:text-5xl text-4xl">We're Here to Help</h1>
        <p className="max-w-prose">
          If you’re experiencing issues or need assistance using ADMS, our
          support team is available to help you. Choose an option below to get
          the support you need.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20 absolute top-90 md:top-85 w-full justify-center px-2 lg:px-10">
          <ContactCards
            href="mailto:adms@viableknowledgemasters.com"
            icon="/assets/contact.svg"
            title="Send Us a  Message"
            subTitle="For general inquiries, questions, or support requests, you can reach out to our team directly via email. We’ll get back to you as soon as possible."
            buttonText="Send Mail"
            description="Best for general questions, account issues, or guidance on using ADMS."
          />
          <ContactCards
            href="https://forms.gle/vtjPMuaKfXntfsqu6"
            icon="/assets/started.svg"
            title="Getting started guide"
            subTitle="Everything you need to know to set up your ADMS account, create ponds, and start recording data."
            buttonText="Report an issue"
            description="Best for bugs, errors, or unexpected system behavior."
          />
        </div>
      </div>
    </div>
  );
}
