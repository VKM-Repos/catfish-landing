import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-2">
      <div className="bg-primary-500 text-white rounded-t-4xl px-5">
        <div className="flex md:flex-row flex-col md:justify-between py-16 md:px-[200px] max-w-[1500px] mx-auto">
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
            <div className="space-y-1">
              <p>Aquadata Management System.</p>
              <p>Empowering aquaculture through smart data.</p>
            </div>
            <div className="flex items-center gap-4">
              <Image src="/assets/acp.svg" width={36} height={36} alt="ACP" />
              <Image src="/assets/fao.svg" width={36} height={36} alt="FAO" />
              <Image src="/assets/eu.svg" width={36} height={36} alt="EU" />
              <Image
                src="/assets/german.svg"
                width={36}
                height={36}
                alt="German"
              />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col">
              <h2 className="font-bold">Quick Links</h2>
              <ul className="text-sm space-y-2 mt-3">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:underline">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/clusters" className="hover:underline">
                    Clusters
                  </Link>
                </li>
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
                <li>FAQS</li>
                <li>Send a mail</li>
                <li>Submit a report</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-0.5 border-primary-800" />
        <div className="flex md:flex-row flex-col md:justify-between md:items-center md:px-[200px] max-w-[1500px] mx-auto">
          <p>©2025 Aquadata. All rights reserved.</p>
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
