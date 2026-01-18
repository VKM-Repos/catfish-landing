"use client";
import Image from "next/image";
import { useState } from "react";

const TABS = [
  {
    id: "realtime",
    title: "Real-Time Data Collection",
    description:
      "Capture essential data from the field using mobile devices. Update production, feeding, and harvest records instantly even in low-connectivity areas.",
  },
  {
    id: "production",
    title: "Production Cycle Tracking",
    description:
      "Monitor fish growth, feed usage, and cycle performance over time. Access insights that help improve yields and reduce waste.",
  },
  {
    id: "financial",
    title: "Financial Monitoring",
    description:
      "Record feed costs, input expenses, and sales revenue in real-time. View profit summaries and make data-driven financial decisions.",
  },
  {
    id: "reporting",
    title: "Reporting & Analytics",
    description:
      "Generate automated reports for farmers, clusters, and stakeholders. Track trends, performance, and impact through clear visual dashboards.",
  },
];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="md:wrapper mx-auto py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center justify-center">
        <div className="relative w-full">
          <Image
            src={"/assets/key_feat.svg"}
            width={780}
            height={443}
            alt="Features illustration"
            className="md:w-[780px] w-[450px] object-cover"
          />
        </div>

        <div className="hidden md:block relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200" />

          <div
            className="absolute left-0 w-0.5 bg-primary-500 transition-all duration-300"
            style={{
              top: `${activeTab * 130}px`,
              height: "96px",
            }}
          />

          <div className="space-y-10 w-[570px]">
            {TABS.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className="text-left w-full group"
              >
                <h3 className="text-xl font-semibold transition-colors text-black">
                  {tab.title}
                </h3>

                <p
                  className={`mt-3 text-base leading-relaxed transition-colors text-black`}
                >
                  {tab.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
