import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="pt-10 font-palanquin">
      <div className=" flex md:justify-between justify-center items-center border border-neutral-200 p-3 rounded-full">
        <div className="md:flex items-center hidden">
          <Image
            src="/assets/logo.svg"
            width={36}
            height={31}
            alt="ADMS logo"
          />
          <h1 className="ml-2 text-primary-500 text-3xl font-bold">ADMS</h1>
        </div>
        <ul className="flex justify-center gap-5 bg-neutral-100 py-3 px-7 rounded-full">
          <li></li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/features">Features</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
        </ul>
        <Button className="bg-primary-800 text-white text-base font-normal rounded-full py-6 hidden md:flex items-center justify-center gap-2">
          Get App
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M0.75 12.75L3.25 10.25M12.75 0.75H3.75M12.75 0.75V9.75M12.75 0.75L6.25 7.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </nav>
  );
}
