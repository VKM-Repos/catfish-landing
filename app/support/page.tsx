"use client";
import FAQSection from "@/components/shared/faq";
import { Button } from "@/components/ui/button";
import { SupportCarousel } from "./components/support-carousel";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface SupportNavCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function Support() {
  const router = useRouter();

  const SupportCard = ({
    thumbnail,
    title,
    description,
    link,
  }: {
    thumbnail?: string;
    title: string;
    description: string;
    link: string;
  }) => (
    <Link
      href={link}
      target="_blank"
      className="flex flex-col items-start text-left h-[390px] border-3 border-neutral-200 rounded-2xl bg-[#F8F6F1] overflow-hidden relative group"
    >
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center" />
      <img
        src={"/assets/play-button.svg"}
        width={100}
        height={100}
        alt=""
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-80"
      />
      <img src={thumbnail} className=" w-full h-3/4" />
      <div className="gap-2 flex flex-col bg-[#EBEBEB] px-5 rounded-xl pt-4 h-full">
        <h2 className="font-bold line-clamp-2">{title}</h2>
        <p className="line-clamp-3">{description}</p>
      </div>
    </Link>
  );

  const SupportNavCard = ({
    icon,
    title,
    description,
    href,
  }: SupportNavCardProps) => {
    return (
      <Link
        href={href}
        className="group flex flex-col items-start text-left w-[400px] h-80 p-5 overflow-hidden border-3 border-neutral-200 rounded-2xl bg-white transition-all duration-300 ease-in-out hover:scale-105"
      >
        <div className="mb-4 transition-transform duration-300 group-hover:-translate-y-1">
          <img src={icon} width={100} height={100} alt={title} />
        </div>
        <h2 className="font-bold text-[32px] text-neutral-700 transition-colors group-hover:text-primary-600">
          {title}
        </h2>
        <p className="text-[16px] text-neutral-600 mt-2">{description}</p>
      </Link>
    );
  };
  return (
    <div className="flex flex-col gap-20 md:gap-0">
      <div className="w-full h-[602px] shrink-0 rounded-b-4xl bg-[linear-gradient(181deg,#FFF_8.49%,#F1F6F8_77.17%,#4083A2_249.31%,#D0E0E8_249.31%)]">
        <div className="flex flex-col justify-center items-center text-center bg-[url(/assets/support_hero_bg.svg)] bg-center bg-cover bg-no-repeat h-[580px] w-full mx-auto rounded-b-3xl px-5">
          <div className="space-y-10 md:mb-[150px] mt-[50px] px-">
            <div className="space-y-3">
              <h2 className="md:text-[61px] text-[40px] font-bold text-neutral-700">
                Support Center
              </h2>
              <p className="text-base text-neutral-600">
                Get the Support You Need, When You Need It
              </p>
            </div>
            <p className="text-base text-neutral-600 md:w-[700px] w-full">
              Whether you’re setting up your first pond, managing your cluster,
              or exploring new features — ADMS Support is your go-to space for
              guidance, tutorials, and updates.
            </p>
          </div>
          <div className="md:flex items-center  gap-10 hidden absolute top-150 w-full justify-center px-2">
            <SupportNavCard
              href="/support/help-center"
              icon="/assets/started.svg"
              title="Getting started guide"
              description="Everything you need to know to set up your ADMS account, create ponds, and start recording data."
            />

            <SupportNavCard
              href="/support/faqs"
              icon="/assets/faq.svg"
              title="FAQs"
              description="Frequently asked questions and answers to every how to use and get the best of using ADMS."
            />

            <SupportNavCard
              href="/support/contact"
              icon="/assets/contact.svg"
              title="Contact & Helpdesk"
              description="Everything you need to know to set up your ADMS account, create ponds, and start recording data."
            />
          </div>
          <SupportCarousel />
        </div>
      </div>

      <section className="md:mt-[300px] mt-[100px] text-center">
        <div className="flex flex-col items-center gap-4 md:w-[719px] mx-auto text-center px-5">
          <h2 className="font-bold text-[32px]">
            Watch & Learn with ADMS Tutorials
          </h2>
          <p className="md:text-lg text-base ">
            Explore our growing library of walkthroughs and “how-to” videos on
            the official ADMS YouTube channel.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center md:justify-center gap-8 md:gap-4 mt-10 px-8 md:px-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-4">
            <SupportCard
              title={"ADMS Tutorial: How to Log In and Access Your Dashboard"}
              description={
                "This video provides a step-by-step guide on how to log in to the AquaData Management System (ADMS). It walks users through accessing the platform, entering login details, and successfully reaching the dashboard."
              }
              thumbnail="/assets/youtubeThumbnail1.png"
              link={`https://youtu.be/d5ldDtrNygw`}
            />
            <SupportCard
              title={"GETTING STARTED ON ADMS"}
              description={`In this video, you'll learn how to:
              ✅ Register a pond (name, type, size, water source, and GPS location)✅ Add a fish batch to your pond (stocking date, quantity, and initial weight)✅ Register your feed types (brand, pellet size, and cost per kg)`}
              thumbnail="/assets/youtubeThumbnail2.png"
              link={`https://youtu.be/YAymxA5TWyE`}
            />
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-4 ">
            <SupportCard
              title={"Getting started on ADMS: Add Fish to Pond"}
              description={`In this video, you'll learn how to add a fish batch to your pond on ADMS (Aqua Data Management System).
              ✅ Create a batch name (your unique tag ID for tracking fish growth)
              ✅ Select the pond you want to stock
              ✅ Enter the quantity of fish supplied
              ✅ Choose the fish size
              ✅ Record the initial average body weight (in grams or kilograms)
              ✅ Add your fish supplier details
              ✅ Input the cost per unit (and let the system calculate your total cost automatically)
              `}
              thumbnail="/assets/youtubeThumbnail3.png"
              link={`https://youtu.be/-1NQcoH1W4k?si=phsaNzMwxSyF16_b`}
            />
            <SupportCard
              title={"Getting started on ADMS: Register Your Feeds"}
              description={`In this video, you'll learn how to register your feed types on ADMS (Aqua Data Management System), the third and final step in the onboarding process.
              ✅ Select your feed type from a comprehensive list of known feeds on the system
              ✅ Choose your pellet size
              ✅ Enter the quantity of feed currently in stock
              ✅ Record the date of purchase
              ✅ Input the total amount spent (and let the system automatically calculate your cost per kg)
              Once all three onboarding steps are complete — registering your pond, adding fish, and registering your feed, you'll be taken straight to your dashboard where the real work begins!`}
              thumbnail="/assets/youtubeThumbnail4.png"
              link={`https://youtu.be/_20qlcPf9N8?si=Hp8lLiyQleAewkv5`}
            />
          </div>
        </div>
        <Link
          href="https://youtube.com/@viableknowledgemasters9397?si=m-W_ljK3o34Jp_nb"
          target="_blank"
        >
          <Button className="bg-primary-500 text-white w-fit px-5 py-7 rounded-full mt-6 cursor-pointer">
            View All on YouTube{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 18L8.5 15.5M18 6H9M18 6V15M18 6L11.5 12.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </Link>
      </section>
      <section className="md:px-[150px] flex md:flex-row flex-col md:items-start md:justify-center md:mt-[100px] px-5 gap-8">
        <div className="md:w-[40%] h-fit md:top-20 space-y-10 shrink-0">
          <div>
            <h2 className="font-bold text-4xl">You have got questions? </h2>
            <h2 className="font-bold text-4xl">We’ve got answers</h2>
          </div>
          <p>Quick answers to help you understand how ADMS works.</p>
          <div className="bg-primary-400 w-[296px] p-5 rounded-xl text-white space-y-2">
            <h4 className="text-[18px] font-bold">Still have questions?</h4>
            <p className="text-sm">Send a detailed email and we’ll help.</p>
            <Button
              className="bg-primary-500 rounded-full text-sm py-2"
              onClick={() => router.push("/support")}
            >
              Support
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="md:w-[60%] shrink-0">
          <FAQSection />
        </div>
      </section>
    </div>
  );
}
