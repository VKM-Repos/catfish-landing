"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="px-2">
      <div className="bg-primary-500 text-white rounded-t-4xl px-10 md:px-5">
        <div className="flex md:flex-row flex-col py-16 md:w-[85%] mx-auto max-w-[1200px] justify-between">
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
                <div className="group-marquee aria-hidden:hidden">
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
          <div className="flex mr-10 gap-4 justify-between">
            <div className="flex flex-col">
              <h2 className="font-bold">Quick links</h2>
              <ul className="text-sm space-y-2 mt-3">
                <li className="hover:underline">
                  <Link
                    href="/"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    Home
                  </Link>
                </li>
                <li className="hover:underline">
                  <Link href="/features">Features</Link>
                </li>
                <li className="hover:underline">
                  <Link href="/clusters">Clusters</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold">Support</h2>
              <ul className="text-sm space-y-2 mt-3">
                <li className="hover:underline">
                  <Link href="/support">FAQs</Link>
                </li>
                <li className="hover:underline">
                  <Link href="mailto:adms@viableknowledgemasters.com">
                    Send a mail
                  </Link>
                </li>
                <li className="hover:underline">
                  <Link
                    href="https://forms.gle/vtjPMuaKfXntfsqu6"
                    target="_blank"
                  >
                    Submit a report
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-0.5 border-primary-800" />
        <div className="flex md:flex-row flex-col md:justify-center md:gap-20 md:items-center md:px-[200px]">
          <p>©{date.getFullYear()} Aquadata. All rights reserved.</p>
          <div className="flex gap-5 py-5">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:underline">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
