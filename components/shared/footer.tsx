import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-2">
      <div className="bg-primary-500 text-white rounded-t-4xl px-10 md:px-5">
        <div className="flex md:flex-row flex-col md:justify-between py-16 md:w-[85%] mx-auto">
          <div className="space-y-5 md:mb-0">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/logo.svg"
                width={36}
                height={31}
                alt="ADMS logo"
              />
              <h1 className="text-3xl font-bold">ADMS</h1>
            </div>
            <p>Aquadata Management System. </p>
            <a
              href="https://youtube.com/@viableknowledgemasters9397?si=m-W_ljK3o34Jp_nb"
              target="_blank"
            >
              <Image
                src="/assets/youtube.svg"
                width={36}
                height={31}
                alt="ADMS logo"
              />
            </a>
            <div className="md:w-[400px] w-full pt-8 md:pt-12 overflow-x-auto no-scrollbar flex mb-4">
              <div className="relative w-full flex">
                <div className="group-marquee">
                  <img
                    src={"/assets/acp.svg"}
                    className="inline-block flex-none basis-20 w-10 h-10"
                    alt="ACP"
                  />
                  <img
                    src={"/assets/fao.svg"}
                    className="inline-block flex-none basis-20 w-10 h-10"
                    alt="FAO"
                  />
                  <img
                    src={"/assets/eu.svg"}
                    className="inline-block flex-none basis-20 w-10 h-10"
                    alt="EU"
                  />
                  <img
                    src={"/assets/german.svg"}
                    className="inline-block flex-none basis-20 w-10 h-10"
                    alt="German"
                  />
                </div>
                <div className="group-marquee">
                  <img
                    src={"/assets/acp.svg"}
                    className="inline-block flex-none basis-20 w-10 h-10"
                    alt="ACP"
                  />
                  <img
                    src={"/assets/fao.svg"}
                    className="inline-block flex-none basis-20 w-10 h-10"
                    alt="FAO"
                  />
                  <img
                    src={"/assets/eu.svg"}
                    className="inline-block flex-none basis-20 w-10 h-10"
                    alt="EU"
                  />
                  <img
                    src={"/assets/german.svg"}
                    className="inline-block flex-none basis-20 w-10 h-10"
                    alt="German"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex mr-10">
            <div className="flex flex-col">
              <h2 className="font-bold">Support</h2>
              <ul className="text-sm space-y-2 mt-3">
                <li className="hover:underline">
                  <Link href="/support">FAQs</Link>
                </li>
                <li className="hover:underline">
                  <Link href="mailto:adms@viableknowledgemasters.com">
                    Help center
                  </Link>
                </li>
                <li className="hover:underline">
                  <Link
                    href="https://forms.gle/vtjPMuaKfXntfsqu6"
                    target="_blank"
                  >
                    Talk to support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-0.5 border-primary-800" />
        <div className="flex md:flex-row flex-col md:justify-between md:items-center md:px-[200px]">
          <p>©2026 Aquadata. All rights reserved.</p>
          <div className="flex gap-5 py-5">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <p>Terms &amp; Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
