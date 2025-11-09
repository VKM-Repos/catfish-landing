import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero>
        <div className="flex items-center justify-center pt-12 h-[780px]">
          <div className="w-[40%] flex flex-col gap-3.5 ml-38">
            <h2 className="text-6xl text-primary-700 font-bold w-[579px] leading-16">
              Empowering Aqua-culture Through Smart Data Innovation
            </h2>
            <p className="w-[516px]">
              ADMS bridges innovation and sustainability empowering clusters,
              farmers, and development partners with real-time data that drives
              informed decisions and long-term impact.
            </p>
            <Button className="bg-primary-500 text-white w-fit px-5 py-7 rounded-full mt-[24px]">
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
            <div className="relative">
              <div className="absolute flex items-center gap-[33px] mt-10 w-[475px]">
                <img src={"/assets/acp.svg"} />
                <img src={"/assets/fao.svg"} />
                <img src={"/assets/eu.svg"} />
                <img src={"/assets/german.svg"} />
              </div>
            </div>
          </div>
          <div className="w-[60%] flex flex-col pb-10">
            <Image
              src={"/assets/catfish_dash.svg"}
              width={1000}
              height={400}
              alt="Dashboard screen"
              className="object-cover"
            />
          </div>
        </div>
      </Hero>

      <section className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-[42px] font-bold w-[700px] text-center">
          One platform. Smarter farms. Stronger outcomes.
        </h2>
        <div className="flex gap-10 justify-center items-center px-60 mt-7">
          <div className="max-w-[356px] max-h-[457px] flex flex-col gap-5 px-5 py-7 justify-center items-start border-6 border-primary-200 rounded-[17px] overflow-x-hidden">
            <Image
              src={"/assets/donut.svg"}
              width={295}
              height={202}
              alt="Donut chart sample"
              className="w-[295px] max-h-[202px]"
            />
            <Button className="bg-primary-500 border-5 border-primary-300 rounded-full text-white">
              Sustainable
            </Button>
            <p className="text-left text-[16px] leading-[150%] mb-2">
              Our platform leverages cutting-edge technology to provide farmers
              with the tools they need to succeed in a rapidly changing
              environment.
            </p>
          </div>
          <div className="w-[356px] h-[457px] flex flex-col gap-5 px-5 py-7 justify-center items-start border-6 border-primary-200 rounded-[17px] overflow-x-hidden">
            <Image
              src={"/assets/feat.svg"}
              width={295}
              height={300}
              alt="Main Features"
              className="w-[295px] max-h-[202px]"
            />
            <Button className="bg-primary-500 border-5 border-primary-300 rounded-full text-white">
              Connected
            </Button>
            <p className="text-left text-[16px] leading-[150%] mb-2">
              Linking farmers, clusters, and institutions through live data and
              shared insights. Everyone stays aligned, informed, and able to act
              faster.
            </p>
          </div>
          <div className="w-[356px] h-[457px] flex flex-col gap-5 px-5 py-7 justify-center items-start border-6 border-primary-200 rounded-[17px] overflow-x-hidden">
            <Image
              src={"/assets/record.svg"}
              width={400}
              height={500}
              alt="Donut chart sample"
            />
            <Button className="bg-primary-500 border-5 border-primary-300 rounded-full text-white">
              Smarter
            </Button>
            <p className="text-left text-[16px] leading-[150%] mb-2">
              A platform that ensures every pond, record, and transaction is
              transparent and traceable laying the foundation for smarter growth
              and accountability.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[url(/assets/rectangle.svg)] w-full mx-auto bg-cover bg-no-repeat bg-origin-content mt-[100px]">
        <div className="flex flex-col gap-4 justify-center items-center mx-auto w-[695px] pt-[200px]">
          <h2 className="font-bold text-[42px]">Key Features of ADMS</h2>
          <p className="text-center">
            ADMS brings everything aquaculture communities need into one
            connected system from field data collection to production tracking,
            financial insights, and real-time reporting.
          </p>
          <Button className="bg-primary-500 text-white rounded-full py-7 px-5">
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
        <div className="flex justify-center gap-5 px-[300px] mt-[100px]">
          <Image
            src={"/assets/key_feat.svg"}
            width={544}
            height={443}
            alt="Features illustration"
            className="w-[544] object-cover"
          />
          <div className="bg-neutral-300 w-2"></div>
          <div className="w-full space-y-5 flex flex-col justify-center">
            <div>
              <h2 className="font-bold text-2xl">Real-Time Data Collection</h2>
              <p className="text-neutral-600 text-sm">
                Capture essential data from the field using mobile devices.
                Update production, feeding, and harvest records instantly even
                in low-connectivity areas.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl">Real-Time Data Collection</h2>
              <p className="text-neutral-600 text-sm">
                Capture essential data from the field using mobile devices.
                Update production, feeding, and harvest records instantly even
                in low-connectivity areas.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl">Real-Time Data Collection</h2>
              <p className="text-neutral-600 text-sm">
                Capture essential data from the field using mobile devices.
                Update production, feeding, and harvest records instantly even
                in low-connectivity areas.
              </p>
            </div>

            <div>
              <h2 className="font-bold text-2xl">Real-Time Data Collection</h2>
              <p className="text-neutral-600 text-sm">
                Capture essential data from the field using mobile devices.
                Update production, feeding, and harvest records instantly even
                in low-connectivity areas.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-[100px]">
          <Image
            src={"/assets/manage_farm_section.svg"}
            width={1232}
            height={615}
            alt="Manage Farm section"
            className="w-[1232px] max-auto"
          />
        </div>
        <div className="flex px-[300px]">
          <div>
            <h2>The Aquadata Mobile App Coming Soon</h2>
            <p>
              Smart aquaculture management, right from your phone. The ADMS
              mobile app will make it easy for farmers and clusters to record
              data, track performance, and stay connected — anytime, anywhere.
            </p>
            <ul className="">
              <li>Simple, intuitive interface built for everyday use</li>
              <li>Real-time data sync with your cluster</li>
              <li>Works seamlessly even in low-connectivity areas</li>
            </ul>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}
