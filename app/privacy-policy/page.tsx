import FAQSection from "@/components/shared/faq";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PrivacyPolicy() {
	return (
		<div className="relative max-w-[1500px] mx-auto">
			{/* Decorative cubes — desktop only, positioned relative to page */}
			<Image
				src="/assets/cube.svg"
				width={110}
				height={110}
				alt=""
				className="absolute -top-20 left-[120px] opacity-70 hidden md:block pointer-events-none z-20"
			/>
			<Image
				src="/assets/cube.svg"
				width={55}
				height={55}
				alt=""
				className="absolute top-2.5 right-40 opacity-60 hidden md:block pointer-events-none z-20"
			/>
			<Image
				src="/assets/cube.svg"
				width={47}
				height={51}
				alt=""
				className="absolute top-[370px] left-[130px] opacity-60 hidden md:block pointer-events-none z-20"
			/>
			<Image
				src="/assets/cube.svg"
				width={120}
				height={120}
				alt=""
				className="absolute top-[460px] right-40 opacity-60 hidden md:block pointer-events-none z-20"
			/>

			{/* Hero */}
			<div className="relative w-full flex items-center py-16 md:py-0 md:h-[520px]">
				{/* Shield — desktop only */}
				<Image
					src="/assets/shield_keyhole.svg"
					width={231}
					height={300}
					alt="Privacy shield"
					className="absolute right-[200px] top-1/2 -translate-y-1/2 hidden md:block"
				/>

				{/* Text */}
				<div className="relative z-10 px-5 md:px-[150px] w-full md:max-w-[680px]">
					<h1 className="text-[40px] md:text-[56px] font-bold text-neutral-800 mb-4 md:mb-5 leading-tight">
						Privacy Policy
					</h1>
					<p className="text-sm md:text-base text-neutral-600 leading-relaxed md:w-[480px]">
						The Aquadata Management System (ADMS) is committed to protecting the
						privacy and security of all users. This policy explains how data is
						collected, used, and protected within the platform.
					</p>
				</div>
			</div>

			{/* Policy content */}
			<section className="px-5 md:px-[150px] py-10 md:py-16 md:max-w-[800px]">
				<div className="space-y-8 md:space-y-10 text-neutral-700">
					{/* 1 */}
					<div className="space-y-2 md:space-y-3">
						<h2 className="text-lg md:text-xl font-bold text-neutral-800">
							1. Information We Collect
						</h2>
						<p className="text-sm md:text-base leading-relaxed">
							ADMS collects information necessary for aquaculture management,
							including: User details (name, phone number, role)
						</p>
						<ul className="space-y-1 text-sm md:text-base leading-relaxed ml-1">
							<li className="flex items-start gap-2">
								<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
								Farm and pond information
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
								Production data (feeding, sampling, harvest, etc.)
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
								Financial and operational records
							</li>
						</ul>
					</div>

					{/* 2 */}
					<div className="space-y-2 md:space-y-3">
						<h2 className="text-lg md:text-xl font-bold text-neutral-800">
							2. How We Collect Data
						</h2>
						<p className="text-sm md:text-base leading-relaxed">
							Data is collected through:
						</p>
						<ul className="space-y-1 text-sm md:text-base leading-relaxed ml-1">
							<li className="flex items-start gap-2">
								<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
								The ADMS web platform
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
								The ADMS mobile application
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
								Inputs provided by farmers, cluster managers, and field
								facilitators
							</li>
						</ul>
					</div>

					{/* 3 */}
					<div className="space-y-2 md:space-y-3">
						<h2 className="text-lg md:text-xl font-bold text-neutral-800">
							3. How We Use Information
						</h2>
						<p className="text-sm md:text-base leading-relaxed">
							The data collected is used to:
						</p>
						<ul className="space-y-1 text-sm md:text-base leading-relaxed ml-1">
							<li className="flex items-start gap-2">
								<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
								Track farm and cluster performance
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
								Generate reports and analytics
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
								Support decision-making and planning
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
								Improve aquaculture productivity and sustainability
							</li>
						</ul>
					</div>

					{/* 4 */}
					<div className="space-y-2 md:space-y-3">
						<h2 className="text-lg md:text-xl font-bold text-neutral-800">
							4. Data Access &amp; Sharing
						</h2>
						<p className="text-sm md:text-base leading-relaxed">
							Access to data is restricted to authorized personnel only,
							including designated administrators and project partners.
						</p>
						<p className="text-sm md:text-base leading-relaxed">
							Data is shared only with FAO and approved project partners for
							program implementation and analysis.
						</p>
						<p className="text-sm md:text-base leading-relaxed">
							ADMS does not share user data with government bodies or
							unauthorized third parties.
						</p>
					</div>

					{/* 5 */}
					<div className="space-y-2 md:space-y-3">
						<h2 className="text-lg md:text-xl font-bold text-neutral-800">
							5. Data Protection
						</h2>
						<p className="text-sm md:text-base leading-relaxed">
							We implement appropriate technical and organizational measures to
							protect user data from unauthorized access, loss, or misuse.
						</p>
					</div>

					{/* 6 */}
					<div className="space-y-2 md:space-y-3">
						<h2 className="text-lg md:text-xl font-bold text-neutral-800">
							6. User Responsibility
						</h2>
						<p className="text-sm md:text-base leading-relaxed">
							Users are responsible for ensuring that the data they provide is
							accurate and up to date.
						</p>
						<p className="text-sm md:text-base leading-relaxed">
							For questions or concerns regarding this policy, please contact:
							<br />
							support@adms.ng
							<br />
							(or your preferred email)
						</p>
					</div>

					{/* 7 */}
					<div className="space-y-2 md:space-y-3">
						<h2 className="text-lg md:text-xl font-bold text-neutral-800">
							7. Contact
						</h2>
						<p className="text-sm md:text-base leading-relaxed">
							For questions or concerns regarding this policy, please contact:
							<br />
							support@adms.ng
						</p>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="px-5 md:px-[150px] flex md:flex-row flex-col md:items-start md:justify-center mt-10 md:mt-[60px] gap-8 mb-[100px]">
				<div className="md:w-[40%] h-fit md:sticky md:top-20 space-y-6 md:space-y-10 flex-shrink-0">
					<div>
						<h2 className="font-bold text-3xl md:text-4xl">
							You have got questions?
						</h2>
						<h2 className="font-bold text-3xl md:text-4xl">
							We&apos;ve got answers
						</h2>
					</div>
					<p className="text-sm md:text-base">
						Quick answers to help you understand how ADMS works.
					</p>
					<div className="bg-primary-400 w-full max-w-[296px] p-5 rounded-xl text-white space-y-2">
						<h4 className="text-[18px] font-bold">Still have questions?</h4>
						<p className="text-sm">
							Send a detailed email and we&apos;ll help.
						</p>
						<Button className="bg-neutral-800 rounded-full text-sm py-2">
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
				<div className="md:w-[60%] flex-shrink-0">
					<FAQSection />
				</div>
			</section>
		</div>
	);
}
