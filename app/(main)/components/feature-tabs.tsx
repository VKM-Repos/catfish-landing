"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const TABS = [
  {
    id: "realtime",
    title: "Real-Time Data Collection",
    description:
      "Capture essential data from the field using mobile devices. Update production, feeding, and harvest records instantly even in low-connectivity areas.",
    image: "/assets/tab_1.svg",
  },
  {
    id: "production",
    title: "Production Cycle Tracking",
    description:
      "Monitor fish growth, feed usage, and cycle performance over time. Access insights that help improve yields and reduce waste.",
    image: "/assets/tab_2.svg",
  },
  {
    id: "financial",
    title: "Financial Monitoring",
    description:
      "Record feed costs, input expenses, and sales revenue in real-time. View profit summaries and make data-driven financial decisions.",
    image: "/assets/tab_3.svg",
  },
  {
    id: "reporting",
    title: "Reporting & Analytics",
    description:
      "Generate automated reports for farmers, clusters, and stakeholders. Track trends, performance, and impact through clear visual dashboards.",
    image: "/assets/tab_4.svg",
  },
];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TABS.length);
    }, 5000); // changes every 5 seconds

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="md:wrapper mx-auto py-16">
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative w-full transition-opacity duration-300">
          <Image
            src={TABS[activeTab].image}
            width={780}
            height={443}
            alt={TABS[activeTab].title}
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
