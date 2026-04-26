import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon, MapPin } from "lucide-react";
import Link from "next/link";

const CarouselData = [
  {
    title: "Waziri Cluster",
    content:
      "The Waziri Cluster is a vibrant community of catfish farmers working together to modernise aquaculture in the North-East. With strong local coordination and a commitment to data-driven farming, Waziri is actively embracing digital tools to improve record-keeping, boost yields, and secure better market outcomes for its member",
    img: "/assets/clusterImg.png",
    location: "Gombe",
    clusterLink: "https://waziri.aquadata.com.ng/",
  },
  {
    title: "Kumbotso Cluster",
    content:
      "Situated in the heart of Kano State, the Kumbotso Cluster is one of the largest organised catfish farming communities in Northern Nigeria. Home to a dense network of pond farmers, Kumbotso is leveraging digital farm management to bring consistency, transparency, and commercial growth to a community that has practised aquaculture for generations.",
    img: "/assets/kumbotso_cluster.png",
    location: "Kano",
    clusterLink: "https://kumbotso.aquadata.com.ng/",
  },
  {
    title: "Ajegunle Cluster",
    content:
      "The Ajegunle Cluster in Kwara State brings together catfish farmers across one of Nigeria's most productive inland aquaculture zones. Known for its strong community ties and organised farming practices, Ajegunle is building on its agricultural heritage by adopting smart data systems to improve farm management and long-term sustainability.",
    img: "/assets/ajegunle_cluster.png",
    location: "Kwara",
    clusterLink: "https://ajegunle.aquadata.com.ng/",
  },
  {
    title: "Eriwe Cluster",
    content:
      "The Eriwe Cluster is home to some of the largest and most established catfish farms in Sub-Saharan Africa. With deep roots in commercial aquaculture, Eriwe is now pioneering the use of digital tools to bring precision, accountability, and scale to an industry it has long helped define.",
    img: "/assets/eriwe_cluster.png",
    location: "Ogun",
    clusterLink: "https://eriwe.aquadata.com.ng/",
  },
  {
    title: "Camp 74 Cluster",
    content:
      "the Camp 74 Cluster operates in one of Nigeria's richest aquatic environments. Its farmers have long relied on the region's waterways for catfish production, and are now channelling that hands-on expertise into a digital-first future — using ADMS to track every pond, batch, and harvest with greater precision and confidence.",
    img: "/assets/camp_74_cluster.png",
    location: "Kwara",
    clusterLink: "https://camp74.aquadata.com.ng/",
  },
];

export default function Clusters() {
  return (
    <div className=" w-full max-w-[1600px] mx-auto">
      <div className="w-full rounded-b-3xl flex flex-col items-center justify-center gap-10 p-6 pb-10 bg-[linear-gradient(180.87deg,#FFFFFF_8.49%,#F1F6F8_77.17%,#4083A2_249.31%,#D0E0E8_249.31%)] relative">
        <img
          src={"/assets/cluster_bg_1.svg"}
          className="h-auto absolute md:top-10 md:left-30 left-0 top-5"
        />
        <img
          src={"/assets/cluster_bg_2.svg"}
          className="h-auto absolute bottom-1/2 right-20 hidden md:block"
        />
        <h1 className="max-w-prose text-4xl md:text-6xl font-bold text-center mt-24 text-neutral-700">
          Our Aquaculture Clusters
        </h1>
        <p className="max-w-prose text-center text-neutral-600 text-lg">
          ADMS active clusters across Nigeria are participating in the ADMS
          adoption programme. Select a cluster to learn more and access its
          dedicated portal.
        </p>
        <div className="border-4 rounded-3xl border-white md:w-[50%] w-[80%] py-10 flex md:gap-4 gap-8 mt-auto justify-around flex-col md:flex-row">
          <div className="flex flex-col">
            <span className="text-4xl font-bold self-center">5</span>
            <span className="text-lg text-center">Active Clusters</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold self-center">5</span>
            <span className="text-lg text-center">States</span>
          </div>
          <div className="flex flex-col">
            <span className="text-4xl font-bold self-center">221+</span>
            <span className="text-lg text-center">Farmers Onboarded</span>
          </div>
        </div>
      </div>

      {/* Featured Cluster */}
      <div className="mt-20 md:mt-30 bg-[radial-gradient(26.11%_37.23%_at_27.63%_41.06%,#FFFFFF_31.58%,_rgba(255, 255, 255, 0)_99.91%)]">
        <div className="flex flex-col items-center gap-4">
          <h2 className="font-bold text-4xl">Featured Clusters</h2>
          <p className="max-w-prose text-center text-neutral-600">
            A selection of clusters actively using ADMS to manage operations,
            record data, and monitor performance.
          </p>
          <Carousel className="w-full px-10">
            <div className="flex flex-col">
              <CarouselContent className=" flex gap-4 w-full">
                {CarouselData.map((item, key) => (
                  <CarouselItem
                    className=" md:basis-1/3 md:aspect-5/4 aspect-square border-none border-2 ml-4 rounded-2xl relative md:pl-0 max-w-[404px]"
                    key={key}
                  >
                    <img
                      className="object-cover md:aspect-5/4 aspect-square w-full rounded-2xl"
                      src={item.img}
                    />
                    <Collapsible className="group rounded-xl data-open:bg-muted self-end absolute bg-white w-[90%] md:w-[80%] lg:w-[90%] p-4 text-neutral-600 -translate-x-1/2 left-[52%] md:left-1/2 md:bottom-4 bottom-6 ">
                      <CollapsibleTrigger className="flex justify-between w-full flex-col items-center">
                        <div className="w-full flex justify-between items-center">
                          <p className="md:text-sm lg:text-[24px]">
                            {item.title}
                          </p>
                          <ChevronDownIcon className="ml-auto transition-transform duration-400 group-data-[state=open]:rotate-180" />
                        </div>
                        <div className="w-full flex gap-2 items-center">
                          <MapPin size={16} />
                          <p className="md:text-sm lg:text-[16px]">
                            {item.location}
                          </p>
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="flex flex-col items-start gap-2 pt-1 px-2 md:px-0 md:pl-2 lg:px-2 md:text-sm group-data-[state=open]:transition-transform duration-400 justify-between py-4 md:py-0">
                        <p className=" md:text-[10px] text-[12px] lg:text-sm lg:leading-normal md:leading-3.5">
                          {item.content}
                        </p>
                        <Link
                          href={item.clusterLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto md:mt-0 flex items-center underline text-primary-600 md:text-sm lg:text-lg"
                        >
                          Access Cluster
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 18L8.5 15.5M18 6H9M18 6V15M18 6L11.5 12.5"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </Link>
                      </CollapsibleContent>
                    </Collapsible>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex gap-4 mt-6 ml-4">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      {/* Send An Email */}
      <div className="my-20 md:my-30 flex flex-col items-center gap-4 py-20 bg-[linear-gradient(90deg,#FFFFFF_0%,#8CC4FE_100%)]">
        <h3 className="font-bold text-2xl text-center">
          Not sure which cluster you belong to?
        </h3>
        <p className="max-w-prose text-center px-4">
          Contact your local extension officer or reach out to the ADMS support
          team. Your cluster manager can provide your login credentials and
          portal link.
        </p>
        <Button className="bg-primary-500 rounded-full text-sm py-2 text-white">
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
      </div>
    </div>
  );
}
