import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FAQSection() {
  return (
    <section className="max-w-2xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold text-gray-800">
            <span className="flex items-center gap-3">
              <Image
                src={"/assets/drop.svg"}
                width={9}
                height={15}
                alt="Pointer"
              />{" "}
              What is ADMS?
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed">
            ADMS is an Agricultural Data Management System designed to help
            farmers and clusters manage farm operations efficiently.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold text-gray-800">
            <span className="flex items-center gap-3">
              <Image
                src={"/assets/drop.svg"}
                width={9}
                height={15}
                alt="Pointer"
              />{" "}
              How can I register my farm or cluster on ADMS?
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed">
            Clusters and farmers can reach out to the support team through the
            support button below to get more information on how they can be
            onboarded.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold text-gray-800">
            <span className="flex items-center gap-3">
              <Image
                src={"/assets/drop.svg"}
                width={9}
                height={15}
                alt="Pointer"
              />{" "}
              Is the mobile app available?
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed">
            Yes, the ADMS mobile app will soon be available for both Android and
            iOS platforms.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-semibold text-gray-800">
            <span className="flex items-center gap-3">
              <Image
                src={"/assets/drop.svg"}
                width={9}
                height={15}
                alt="Pointer"
              />{" "}
              How does ADMS improve farm management?
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed">
            ADMS helps farmers track inputs, monitor yields, and optimize
            resource use with data-driven insights for better farm management.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-semibold text-gray-800">
            <span className="flex items-center gap-3">
              <Image
                src={"/assets/drop.svg"}
                width={9}
                height={15}
                alt="Pointer"
              />{" "}
              Who can use ADMS?
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-gray-600 leading-relaxed">
            ADMS is designed for farmers, cooperatives, agribusinesses, and
            organizations involved in agricultural value chains.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
