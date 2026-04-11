"use client";
import FAQSection from "@/components/shared/faq";
import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BeforeAfterSlider from "./components/slider";
import FeatureTabs from "./components/feature-tabs";
import { FarmSlider } from "@/components/shared/farm-slider";
import { FadeInSection } from "@/components/ui/FadeInSection";
import { useRouter } from "next/navigation";
import PlayStoreButton from "@/components/ui/PlayStoreButton";
import ManageFarmSection from "./components/ManageFarmSection";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <FadeInSection>
        <Hero>
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-center md:min-h-[calc(100vh-80px)] md:py-20 pt-12 overflow-hidden">
            <Image
              src="/assets/water_vector.svg"
              className="absolute top-0 w-[1445px] h-[500px] hidden md:block"
              alt=""
              width={1445}
              height={500}
              priority
            />
            <Image
              src="/assets/water_vector.svg"
              className="absolute bottom-0 w-[1445px] h-[500px] hidden md:block"
              alt=""
              width={1445}
              height={500}
              priority
            />
            <div className="relative md:w-[45%] lg:w-[40%] flex flex-col gap-5 md:ml-20 lg:ml-32 px-5 mt-10 md:mt-0">
              <h2 className="md:text-5xl lg:text-6xl text-4xl text-primary-700 font-bold md:w-full lg:w-[579px] w-[355px] md:leading-tight lg:leading-16">
                Empowering Aqua-culture Through Smart Data Innovation
              </h2>
              <p className="md:w-full lg:w-[516px] w-[355px]">
                ADMS bridges innovation and sustainability empowering clusters,
                farmers, and development partners with real-time data that
                drives informed decisions and long-term impact.
              </p>
              <Button
                className="bg-primary-500 text-white w-fit px-5 py-7 rounded-full mt-4"
                onClick={() => router.push("/features")}
              >
                Learn More{" "}
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
              <div className="w-full pt-8 md:pt-12 overflow-x-auto no-scrollbar flex">
                <div className="relative w-full flex">
                  <div className="group-marquee">
                    <img
                      src={"/assets/acp.svg"}
                      className="inline-block flex-none basis-30 w-10 h-10"
                      alt="ACP"
                    />
                    <img
                      src={"/assets/fao.svg"}
                      className="inline-block flex-none basis-30 w-10 h-10"
                      alt="FAO"
                    />
                    <img
                      src={"/assets/eu.svg"}
                      className="inline-block flex-none basis-30 w-10 h-10"
                      alt="EU"
                    />
                    <img
                      src={"/assets/german.svg"}
                      className="inline-block flex-none basis-30 w-10 h-10"
                      alt="German"
                    />
                  </div>
                  <div className="group-marquee aria-hidden:hidden">
                    <img
                      src={"/assets/acp.svg"}
                      className="inline-block flex-none basis-30 w-10 h-10"
                      alt="ACP"
                    />
                    <img
                      src={"/assets/fao.svg"}
                      className="inline-block flex-none basis-30 w-10 h-10"
                      alt="FAO"
                    />
                    <img
                      src={"/assets/eu.svg"}
                      className="inline-block flex-none basis-30 w-10 h-10"
                      alt="EU"
                    />
                    <img
                      src={"/assets/german.svg"}
                      className="inline-block flex-none basis-30 w-10 h-10"
                      alt="German"
                    />
                  </div>
                  <div className="absolute left-0 top-0 bottom-0 w-36 bg-gradient-to-r from-white/30 to-transparent pointer-events-none z-10" />
                  <div className="absolute right-0 top-0 bottom-0 w-36 bg-gradient-to-l from-white/30 to-transparent pointer-events-none z-10" />
                </div>
              </div>
            </div>
            <div className="md:w-[55%] lg:w-[60%] flex flex-col items-center mt-10 md:mt-0">
              <Image
                src={"/assets/catfish_dash.svg"}
                width={1000}
                height={400}
                priority
                quality={100}
                alt="Dashboard screen"
                className="object-cover z-10 w-full max-w-[1000px] h-auto"
              />
            </div>
          </div>
        </Hero>
      </FadeInSection>

      <FadeInSection>
        <section className="md:px-[150px] px-5 flex flex-col justify-center items-center mt-10 w-full">
          <h2 className="text-[28px] md:text-[40px] font-bold md:w-[700px] w-full text-center px-4">
            One platform. Smarter farms. Stronger outcomes.
          </h2>
          <div className="w-full flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10 mt-10 mx-auto">
            <div className="flex-1 flex flex-col gap-5 md:gap-6 p-6 md:p-10 justify-start items-start border-5 border-[#E8EEF2] rounded-[32px]">
              <div className="w-full relative aspect-[4/3] xl:aspect-[5/4] rounded-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src={"/assets/linechart.svg"}
                  fill
                  alt="Line chart sample"
                  className="object-contain"
                  priority
                />
              </div>

              <Button className="bg-[#00668F] border-none hover:bg-[#00567A] ring-4 ring-[#00668F]/30 rounded-full text-white text-sm md:text-base font-semibold px-6 py-2 h-auto mt-2 shadow-sm">
                Sustainable
              </Button>
              <p className="text-left text-[15px] md:text-[16px] text-gray-900 leading-[1.6] w-full">
                Turning data into action. Simplifies daily operations, improves
                record accuracy, and helps farmers make decisions that sustain
                productivity.
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-5 md:gap-6 p-6 md:p-10 justify-start items-start border-5 border-[#E8EEF2] rounded-4xl">
              <div className="w-full relative aspect-[4/3] xl:aspect-[5/4] rounded-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src={"/assets/feat.svg"}
                  fill
                  alt="Main Features"
                  className="object-contain"
                  priority
                />
              </div>

              <Button className="bg-[#00668F] border-none hover:bg-[#00567A] ring-4 ring-[#00668F]/30 rounded-full text-white text-sm md:text-base font-semibold px-6 py-2 h-auto mt-2 shadow-sm">
                Connected
              </Button>
              <p className="text-left text-[15px] md:text-[16px] text-gray-900 leading-[1.6] w-full">
                Linking farmers, clusters, and institutions through live data
                and shared insights. Everyone stays aligned, informed, and able
                to act faster.
              </p>
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="md:px-[150px] px-5 mt-10 w-full">
          <div className="md:wrapper flex md:flex-row flex-col w-full border-5 border-[#E8EEF2] rounded-[17px] mt-10">
            <BeforeAfterSlider />
            <div className="md:w-[50%] flex flex-col md:items-center md:justify-center p-3">
              <div className="md:text-center space-y-5">
                <Button className="bg-primary-500 border-5 border-primary-300 rounded-full text-white">
                  Smarter change
                </Button>
                <p>
                  A platform that ensures every pond, record, and transaction is
                  transparent and traceable laying the foundation for smarter
                  growth and accountability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="md:bg-[url(/assets/rectangle.svg)] bg-[url(/assets/mobile_rectangle.svg)] bg-no-repeat bg-cover md:h-[1480px] h-[1048px] flex flex-col items-center justify-center mt-12">
          <div className="flex flex-col gap-4 justify-center items-center mx-auto md:w-[695px] w-[353px] md:-mt-[200px]">
            <h2 className="font-bold text-[40px] text-center">
              Key Features of ADMS
            </h2>
            <p className="text-center">
              ADMS brings everything aquaculture communities need into one
              connected system from field data collection to production
              tracking, financial insights, and real-time reporting.
            </p>
            <Button
              className="bg-primary-500 text-white rounded-full py-7 px-5"
              onClick={() => router.push("/features")}
            >
              Discover all features{" "}
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </div>
          <FeatureTabs />
        </section>
      </FadeInSection>
      <FadeInSection>
        <section className="px-5">
          <div className="flex justify-center mt-[100px]">
            <ManageFarmSection />
            <div className="md:hidden">
              <FarmSlider />
            </div>
          </div>
          <div className=" md:px-[150px] flex md:flex-row flex-col md:justify-between md:items-center mt-14">
            <div className="space-y-8">
              <h2 className="font-bold md:text-[42px] text-[40px] md:w-[450px] w-[350px]">
                The Aquadata Mobile App Coming Soon
              </h2>
              <p className="md:w-[518px] w-[353px]">
                Smart aquaculture management, right from your phone. The ADMS
                mobile app will make it easy for farmers and clusters to record
                data, track performance, and stay connected — anytime, anywhere.
              </p>
              <ul className="space-y-5 w-[344px]">
                <li className="flex items-center gap-3">
                  <Image
                    src={"/assets/drop.svg"}
                    width={9}
                    height={15}
                    alt="Pointer"
                    priority
                  />
                  Simple, intuitive interface built for everyday use
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src={"/assets/drop.svg"}
                    width={9}
                    height={15}
                    alt="Pointer"
                    priority
                  />{" "}
                  Real-time data sync with your cluster
                </li>
                <li className="flex items-center gap-3">
                  <Image
                    src={"/assets/drop.svg"}
                    width={9}
                    height={15}
                    alt="Pointer"
                    priority
                  />{" "}
                  Works seamlessly even in low-connectivity areas
                </li>
              </ul>
              <div className="flex items-center gap-5">
                <PlayStoreButton
                  link="/coming-soon"
                  image="/assets/google_play_icon.svg"
                  text="Play Store"
                />
                <PlayStoreButton
                  link="/coming-soon"
                  image="/assets/apple_play_icon.svg"
                  text="App Store"
                />
              </div>
            </div>
            <div className="my-[50px]">
              <Image
                src={"/assets/mobile_app.svg"}
                width={518}
                height={650}
                alt="Mobile app sample"
                className="md:w-[518px] md:h-[650px] w-[363px]"
                priority
              />
            </div>
          </div>
        </section>
      </FadeInSection>
      <FadeInSection>
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
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Button>
            </div>
          </div>
          <div className="md:w-[60%] shrink-0">
            <FAQSection />
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
