"use client";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { useState } from "react";

const tabs = [
  {
    label: "Getting Started with ADMS",
    overview:
      "This guide helps you access the ADMS platform and begin using it for your farm or cluster activities.",
    whenToUse: [
      "First-time users",
      "New farmers or cluster members",
      "When setting up your account",
    ],
    steps: [
      "Open the ADMS web platform or mobile app",
      "Enter your login credentials (username and password)",
      "Click Login",
      "Once logged in, you will be directed to your dashboard",
      "Review your assigned cluster and available features",
    ],
    tips: [
      "Ensure your login details are correct",
      "Contact your cluster manager if you cannot access your account",
    ],
  },
  {
    label: "Farm & Pond Setup",
    overview:
      "Set up your farm and ponds to begin recording production activities.",
    whenToUse: ["When onboarding a new farm", "When adding new ponds"],
    steps: [
      "Navigate to Farm Setup",
      "Click Add Farm (if not already created)",
      "Enter farm details and save",
      "Go to Ponds Section",
      "Click Add Pond",
      "Fill in pond details (name, size, type)",
      "Save your entry",
    ],
    tips: [
      "Ensure pond names are clear and consistent",
      "Double-check details before saving",
    ],
  },
  {
    label: "Daily Farm Reporting",
    overview:
      "Record daily farm activities to maintain accurate production data.",
    whenToUse: [
      "Every day after farm activities",
      "When updating feeding, water quality, or observations",
    ],
    steps: [
      "Go to Daily Reports",
      "Select the activity type (feeding, water quality, etc.)",
      "Choose the pond",
      "Enter required data fields",
      "Add any observations if necessary",
      "Click Save Record",
    ],
    tips: ["Record data daily for accuracy", "Ensure correct pond selection"],
  },
  {
    label: "Feeding Management",
    overview: "Track feeding activities and monitor feed usage across ponds.",
    whenToUse: ["During daily feeding", "When recording feed consumption"],
    steps: [
      "Go to Daily Reports → Feeding",
      "Select the pond",
      "Enter feed type and quantity",
      "Record feeding time",
      "Add remarks if needed",
      "Save the record",
    ],
    tips: [
      "Use consistent units for feed",
      "Monitor feeding patterns over time",
    ],
  },
  {
    label: "Water Quality Monitoring",
    overview:
      "Monitor water conditions to ensure a healthy environment for fish.",
    whenToUse: ["Daily or as scheduled", "When checking pond conditions"],
    steps: [
      "Navigate to Daily Reports → Water Quality",
      "Select pond",
      "Enter values (temperature, pH, DO, etc.)",
      "Add observations if needed",
      "Save the record",
    ],
    tips: ["Record readings at the same time daily", "Use calibrated tools"],
  },
  {
    label: "Sampling & Growth Tracking",
    overview: "Record sampling data to monitor fish growth and performance.",
    whenToUse: ["During scheduled sampling", "Before harvest planning"],
    steps: [
      "Go to Daily Reports → Sampling",
      "Select pond and date",
      "Enter average weight",
      "Enter number of fish sampled",
      "Add remarks",
      "Save record",
    ],
    tips: ["Use a representative sample", "Keep measurements consistent"],
  },
  {
    label: "Mobile App Usage",
    overview: "Use the ADMS mobile app for field data collection.",
    whenToUse: ["While on the farm", "When offline"],
    steps: [
      "Open the ADMS mobile app",
      "Log in",
      "Select activity to record",
      "Enter data",
      "Save and sync when online",
    ],
    tips: ["Sync regularly", "Ensure correct entries before submission"],
  },
];

export default function HelpCenter() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].label);
  return (
    <div className="w-full h-[602px] shrink-0 rounded-b-4xl bg-[linear-gradient(181deg,#FFF_8.49%,#F1F6F8_77.17%,#4083A2_249.31%,#D0E0E8_249.31%)] mb-130">
      <div className="flex flex-col py-20 items-center text-center bg-[url(/assets/support_hero_bg.svg)] bg-center bg-cover bg-no-repeat h-[580px] w-full mx-auto rounded-b-3xl md:px-5">
        <h1 className="font-bold md:text-5xl text-4xl mb-4">User Guide</h1>
        <p className="max-w-prose">
          Get the Support You Need, When You Need It
        </p>

        <Card className="flex rounded-4xl min-h-[800px] md:min-h-[700px] h-auto md:w-[80%] lg:w-[70%] xl:w-[60%] bg-white mt-40 md:p-10 py-4 mx-4 border-none shadow-lg">
          <Tabs
            className="w-full"
            defaultValue={tabs[0].label}
            value={selectedTab}
            onValueChange={(value) => setSelectedTab(value)}
          >
            <div className="grid grid-cols-3 w-full h-full">
              <div className="border-r-neutral-200 border-r flex-col gap-5 hidden lg:flex">
                <h1 className="self-start ml-2 md:ml-0">Topics</h1>
                <TabsList className="h-full items-start justify-start">
                  <div className="flex-col gap-5 items-start justify-start flex">
                    {tabs.map((tab) => {
                      return (
                        <div className="relative">
                          <TabsTrigger
                            value={tab.label}
                            className="w-full text-neutral-400 md:text-[12px] text-[9px] px-1 bg-transparent shadow-none rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary-600 data-[state=active]:font-bold group cursor-pointer"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                            {tab.label}
                          </TabsTrigger>
                        </div>
                      );
                    })}
                  </div>
                </TabsList>
              </div>

              <div className="col-span-3 lg:col-span-2 flex flex-col p-6 md:p-0">
                <div className="mb-4 lg:hidden w-[70%]">
                  <Select
                    value={selectedTab}
                    onValueChange={(value) => {
                      setSelectedTab(value);
                    }}
                  >
                    <SelectTrigger className="w-full border-r-0 border-t-0 border-l-0 rounded-none shadow-none border-b-2 border-primary-600">
                      <div className="flex items-center justify-center gap-3 text-primary-600 data-[state=active]:border-none">
                        <SelectValue placeholder="Select a view" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="z-2000 bg-white">
                      {tabs.map((tab) => (
                        <SelectItem
                          key={tab.label}
                          value={tab.label}
                          className="p-2 hover:bg-primary-100"
                        >
                          {tab.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {tabs.map((tab) => (
                  <TabsContent
                    key={tab.label}
                    value={tab.label}
                    className="p-5 px-2 py-2 text-left flex flex-col md:gap-4"
                  >
                    <h1 className="text-xl font-bold">Overview</h1>
                    <h2 className="text-neutral-600 text-[13px]">
                      {tab.overview}
                    </h2>
                    <div className="flex flex-col gap-2 mt-2">
                      <h3 className="">When to Use</h3>
                      <ul className="list-disc list-inside marker:text-[10px]">
                        {tab.whenToUse.map((item) => (
                          <li
                            key={item}
                            className="text-[13px] text-neutral-600"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <h3>Steps</h3>
                      <ul className="list-disc list-inside marker:text-[10px]">
                        {tab.steps.map((item) => (
                          <li
                            key={item}
                            className="text-[13px] text-neutral-600"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-2 mt-2">
                      <h3>Tips</h3>
                      <ul className="list-disc list-inside marker:text-[10px]">
                        {tab.tips.map((item) => (
                          <li
                            key={item}
                            className="text-[13px] text-neutral-600"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                ))}
                <div className="flex flex-col text-left p-4">
                  <h2 className="font-bold text-lg">
                    Want a full Copy of this guide?
                  </h2>
                  <p className="text-xs text-neutral-600">
                    Send a mail to{" "}
                    <Link
                      href="mailto:adms@viableknowlwdgemasters.com"
                      className="underline"
                    >
                      adms@viableknowlwdgemasters.com
                    </Link>{" "}
                    to request it.
                  </p>
                </div>
              </div>
            </div>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
