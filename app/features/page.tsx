"use client";
import FAQSection from "@/components/shared/faq";
import Hero from "@/components/shared/hero";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/FadeInSection";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Features() {
	const router = useRouter();

	return (
		<>
			{/* Hero Section */}
			<FadeInSection>
				<Hero>
					<div className="relative h-full w-full flex md:flex-row flex-col md:items-center md:justify-between overflow-hidden max-w-[1440px] mx-auto px-5 md:px-[150px]">
						<Image
							src="/assets/water_vector.svg"
							className="absolute top-0 right-0 w-[1445px] h-[500px] hidden md:block pointer-events-none"
							alt=""
							width={1445}
							height={500}
							priority
						/>
						<Image
							src="/assets/water_vector.svg"
							className="absolute bottom-0 right-0 w-[1445px] h-[500px] hidden md:block pointer-events-none"
							alt=""
							width={1445}
							height={500}
							priority
						/>
						<div className="relative md:w-[45%] flex flex-col gap-4 mt-16 md:mt-0 z-10">
							<h2 className="md:text-5xl lg:text-[56px] text-3xl text-neutral-800 font-bold md:leading-[1.15]">
								Built to Simplify, Connect, and Grow Aquaculture
							</h2>
							<p className="text-sm md:text-base text-neutral-600 md:max-w-[480px]">
								ADMS brings together every part of aquaculture management data
								recording, cluster coordination, and analytics into one seamless
								digital platform that works for farmers, managers, and
								policymakers alike.
							</p>
						</div>
						<div className="relative z-10 md:w-[52%] flex justify-end mt-8 md:mt-0 shrink-0">
							<Image
								src={"/assets/feature_hero.svg"}
								width={553}
								height={541}
								priority
								quality={100}
								alt="Dashboard screen"
								className="object-contain w-full h-auto max-w-[553px]"
							/>
						</div>
					</div>
				</Hero>
			</FadeInSection>

			{/* All feature sections in one consistent max-width container */}
			<div className="max-w-[1440px] mx-auto w-full px-5 md:px-[150px]">
				{/* AI Insights Section */}
				<FadeInSection>
					<section className="py-16 md:py-[100px]">
						<div className="flex md:flex-row flex-col md:items-center md:justify-between gap-8 md:gap-12">
							<div className="md:w-[55%] shrink-0">
								<Image
									src={"/assets/ai.svg"}
									width={495}
									height={480}
									alt="AI Insight illustration"
									className="object-cover w-full h-auto"
								/>
							</div>
							<div className="md:w-[45%] space-y-6">
								<div>
									<h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-3">
										AI insights
									</h2>
									<p className="text-base md:text-lg text-neutral-700">
										Tools that help farmers focus more on farming and less on
										paperwork.
									</p>
								</div>
								<ul className="space-y-4">
									<li className="flex items-start gap-3 bg-[#E5E7FF] p-4 rounded-lg">
										<Image
											src={"/assets/ai_chat.svg"}
											width={24}
											height={24}
											alt="AI Chat Support icon"
											className="shrink-0 mt-1"
										/>
										<div>
											<p className="font-semibold text-neutral-800 text-sm">
												AI Chat Support
											</p>
											<p className="font-normal text-neutral-700 text-sm mt-1">
												Interactive AI chat that answers questions on system
												usage, farm practices, and common challenges — directly
												within the platform.
											</p>
										</div>
									</li>
									<li className="flex items-start gap-3 bg-[#E5E7FF] p-4 rounded-lg">
										<Image
											src={"/assets/ai_grad.svg"}
											width={24}
											height={24}
											alt="Built-In Learning Support icon"
											className="shrink-0 mt-1"
										/>
										<div>
											<p className="font-semibold text-neutral-800 text-base">
												Built-In Learning Support
											</p>
											<p className="font-normal text-neutral-700 text-sm md:text-base mt-1">
												Provides contextual tips and explanations within modules
												to help users understand features without external
												assistance.
											</p>
										</div>
									</li>
									<li className="flex items-start gap-3 bg-[#E5E7FF] p-4 rounded-lg">
										<Image
											src={"/assets/ai_monitor.svg"}
											width={24}
											height={24}
											alt="User Experience Support icon"
											className="shrink-0 mt-1"
										/>
										<div>
											<p className="font-semibold text-neutral-800 text-base">
												User Experience Support
											</p>
											<p className="font-normal text-neutral-700 text-sm md:text-base mt-1">
												Helps new users navigate the system faster through
												guided prompts and smart suggestions during data entry.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</FadeInSection>

				{/* Real-Time Data Collection */}
				<FadeInSection>
					<section className="py-16 md:py-20">
						<div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16">
							<div className="md:w-[48%] space-y-5 mb-8 md:mb-0">
								<h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
									Real-Time Data Collection
								</h2>
								<div className="space-y-4">
									<p className="text-base md:text-lg text-neutral-700 leading-relaxed">
										Capture and record farm data directly from the field using
										the ADMS mobile or web platform. Whether it&apos;s feeding,
										stocking, sampling, or harvest activities, all records are
										entered instantly and stored in a centralized database.
									</p>
									<p className="text-base md:text-lg text-neutral-700 leading-relaxed">
										ADMS is designed to work in low-connectivity environments,
										allowing users to input data offline and sync automatically
										once internet access is available. This ensures no data is
										lost and reporting remains consistent and up to date.
									</p>
								</div>
							</div>
							<div className="md:w-[52%] flex justify-end shrink-0">
								<Image
									src="/assets/tab_1.svg"
									width={500}
									height={400}
									alt="Real-Time Data Collection interface"
									className="object-cover w-full h-auto max-w-[500px]"
								/>
							</div>
						</div>
					</section>
				</FadeInSection>

				{/* Production Cycle Tracking */}
				<FadeInSection>
					<section className="py-16 md:py-20">
						<div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16">
							<div className="md:w-[52%] flex justify-start shrink-0 mb-8 md:mb-0">
								<Image
									src="/assets/tab_2.svg"
									width={500}
									height={400}
									alt="Production Cycle Tracking illustration"
									className="object-cover w-full h-auto max-w-[500px]"
								/>
							</div>
							<div className="md:w-[48%] space-y-5">
								<h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
									Production Cycle Tracking
								</h2>
								<div className="space-y-4">
									<p className="text-base md:text-lg text-neutral-700 leading-relaxed">
										Monitor fish growth, feed usage, and cycle performance over
										time. Access insights that help improve yields and reduce
										waste.
									</p>
									<p className="text-base md:text-lg text-neutral-700 leading-relaxed">
										By tracking key metrics across cycles, users can identify
										trends, compare performance, and make informed adjustments
										to improve yields, optimize feeding strategies, and reduce
										losses.
									</p>
								</div>
							</div>
						</div>
					</section>
				</FadeInSection>

				{/* Financial Monitoring */}
				<FadeInSection>
					<section className="py-16 md:py-20">
						<div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16">
							<div className="md:w-[48%] space-y-5 mb-8 md:mb-0">
								<h2 className="text-3xl md:text-4xl font-bold text-neutral-800">
									Financial Monitoring
								</h2>
								<div className="space-y-4">
									<p className="text-base md:text-lg text-neutral-700 leading-relaxed">
										Track all financial activities related to farm operations in
										one place. ADMS compiles cost data from various inputs such
										as stocking, feeding, and other operational expenses,
										alongside revenue from harvests.
									</p>
									<p className="text-base md:text-lg text-neutral-700 leading-relaxed">
										This provides a clear view of profitability per pond or
										cycle, helping users understand where resources are being
										spent and how to improve financial efficiency through better
										planning and cost control.
									</p>
								</div>
							</div>
							<div className="md:w-[52%] flex justify-end shrink-0">
								<Image
									src="/assets/tab_3.svg"
									width={500}
									height={400}
									alt="Financial Monitoring dashboard"
									className="object-cover w-full h-auto max-w-[500px]"
								/>
							</div>
						</div>
					</section>
				</FadeInSection>

				{/* Reporting & Analytics */}
				<FadeInSection>
					<section className="py-16 md:py-20">
						<div className="flex flex-col md:flex-row md:items-center md:gap-12 lg:gap-16">
							<div className="md:w-[52%] flex justify-start shrink-0 mb-8 md:mb-0">
								<Image
									src="/assets/tab_4.svg"
									width={500}
									height={400}
									alt="Reporting & Analytics dashboard"
									className="object-cover w-full h-auto max-w-[500px]"
								/>
							</div>
							<div className="md:w-[48%] space-y-5">
								<h2 className="text-3xl md:text-4xl font-bold text-neutral-800 flex items-center gap-3">
									<span>📊</span> Reporting & Analytics
								</h2>
								<div className="space-y-4">
									<p className="text-base md:text-lg text-neutral-700 leading-relaxed">
										ADMS transforms everyday data into meaningful insights
										through automated reports and visual dashboards. Users can
										generate reports at farm, cluster, or system level —
										covering production, growth trends, financial performance,
										and more.
									</p>
									<p className="text-base md:text-lg text-neutral-700 leading-relaxed">
										These insights support data-driven decision-making, making
										it easier to track progress, measure impact, and report
										outcomes to stakeholders and partners.
									</p>
								</div>
							</div>
						</div>
					</section>
				</FadeInSection>

				{/* FAQ Section */}
				<FadeInSection>
					<section className="flex md:flex-row flex-col md:items-start md:justify-center mt-10 md:mt-[60px] gap-8 mb-[100px]">
						<div className="md:w-[40%] h-fit md:sticky md:top-20 space-y-6 md:space-y-10 shrink-0">
							<div>
								<h2 className="font-bold text-3xl md:text-4xl">
									You have got questions?
								</h2>
								<h2 className="font-bold text-3xl md:text-4xl">
									We&apos;ve got answers
								</h2>
							</div>
							<p className="text-sm md:text-base text-neutral-700">
								Quick answers to help you understand how ADMS works.
							</p>
							<div className="bg-primary-400 w-full max-w-[296px] p-5 rounded-xl text-white space-y-2">
								<h4 className="text-[18px] font-bold">Still have questions?</h4>
								<p className="text-sm">
									Send a detailed email and we&apos;ll help.
								</p>
								<Button
									className="bg-neutral-800 rounded-full text-sm py-2"
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
				</FadeInSection>
			</div>
		</>
	);
}
