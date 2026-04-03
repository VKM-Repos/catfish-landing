import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-2">
      <div className="bg-primary-500 text-white rounded-t-4xl px-5">
        <div className="flex md:flex-row flex-col md:justify-between py-16 md:px-[200px]">
          <div className="space-y-5 mb-[100px] md:mb-0">
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
            <Image
              src="/assets/youtube.svg"
              width={36}
              height={31}
              alt="ADMS logo"
            />
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col">
              <h2 className="font-bold">Support</h2>
              <ul className="text-sm space-y-2 mt-3">
                <li>FAQs</li>
                <li>Help center</li>
                <li>Talk to support</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Support</h2>
              <ul className="text-sm space-y-2 mt-3">
                <li>FAQs</li>
                <li>Help center</li>
                <li>Talk to support</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Support</h2>
              <ul className="text-sm space-y-2 mt-3">
                <li>FAQs</li>
                <li>Help center</li>
                <li>Talk to support</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-0.5 border-primary-800" />
        <div className="flex md:flex-row flex-col md:justify-between md:items-center md:px-[200px]">
          <p>©2026 Aquadata. All rights reserved.</p>
          <div className="flex gap-5 py-5">
            <p>Privacy Policy </p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
