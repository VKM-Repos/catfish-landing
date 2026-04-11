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
					src="/assets/contract.svg"
					width={231}
					height={300}
					alt="Privacy shield"
					className="absolute right-[300px] top-1/2 -translate-y-1/2 hidden md:block w-[350px]"
				/>

				{/* Text */}
				<div className="relative z-10 px-5 md:px-[150px] w-full">
					<h1 className="text-[40px] md:text-[56px]  font-bold text-neutral-800 mb-4 md:mb-5 leading-tight">
						TERMS & CONDITIONS
					</h1>
					<p className="text-sm md:text-base text-neutral-600 leading-relaxed md:w-[480px]">
						By using the ADMS platform, you agree to the following terms
						governing access, data usage, and responsibilities.
					</p>
				</div>
			</div>

			{/* terms and condition content */}
			<section className="px-5 md:px-[150px] md:max-w-[800px]">
				<div className="space-y-8 md:space-y-10 text-neutral-700">
					{/* 1 */}
					<div className="space-y-2 md:space-y-3">
						<h2 className="text-lg md:text-xl font-bold text-neutral-800">
							1. Use of the Platform
						</h2>
						<p className="text-sm md:text-base leading-relaxed">
							ADMS is designed to support aquaculture data management. Users are
							expected to use the platform responsibly and for its intended
							purpose.
						</p>
					</div>

					{/* 2 */}
					<div className="space-y-2 md:space-y-3">
						<h2 className="text-lg md:text-xl font-bold text-neutral-800">
							2. User Responsibilities
						</h2>
						<p className="text-sm md:text-base leading-relaxed">
							Users agree to:
						</p>
						<ul className="space-y-1 text-sm md:text-base leading-relaxed ml-1">
							<li className="flex items-start gap-2">
								<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
								Provide accurate and complete information
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
								Use the platform only for legitimate farm and cluster activities
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
								Avoid any misuse, manipulation, or falsification of data
							</li>
						</ul>
					</div>

					{/* 3 */}
					<div className="space-y-2 md:space-y-3">
						<h2 className="text-lg md:text-xl font-bold text-neutral-800">
							3. Data Ownership &amp; Access
						</h2>
						<ul className="space-y-1 text-sm md:text-base leading-relaxed ml-1">
							<li className="flex items-start gap-2">
								<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
								Data entered into ADMS remains associated with the respective
								farm or cluster.
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-neutral-700 shrink-0" />
								Access to this data is limited to authorized users and project
								partners only.
							</li>
						</ul>
					</div>

					{/* 4 */}
					<div className="space-y-2 md:space-y-3">
						<h2 className="text-lg md:text-xl font-bold text-neutral-800">
							4. Data Privacy &amp; Protection
						</h2>
						<p className="text-sm md:text-base leading-relaxed">
							User data is handled securely and is not abused or misused.
						</p>
						<p className="text-sm md:text-base leading-relaxed">
							Data is shared strictly with FAO and relevant project partners for
							operational and analytical purposes.
						</p>
						<p className="text-sm md:text-base leading-relaxed">
							ADMS does not share user data with government bodies or
							unauthorized entities.
						</p>
					</div>

					{/* 5 */}
					<div className="space-y-2 md:space-y-3">
						<h2 className="text-lg md:text-xl font-bold text-neutral-800">
							5. System Availability
						</h2>
						<p className="text-sm md:text-base leading-relaxed">
							While ADMS aims to provide reliable access, occasional downtime
							may occur due to maintenance or technical issues.
						</p>
					</div>

					{/* 6 */}
					<div className="space-y-2 md:space-y-3">
						<h2 className="text-lg md:text-xl font-bold text-neutral-800">
							6. Limitation of Liability
						</h2>
						<p className="text-sm md:text-base leading-relaxed">
							ADMS is a support tool for data management. Users remain
							responsible for decisions made based on the data provided.
						</p>
					</div>

					{/* 7 */}
					<div className="space-y-2 md:space-y-3">
						<h2 className="text-lg md:text-xl font-bold text-neutral-800">
							7. Updates to Terms
						</h2>
						<p className="text-sm md:text-base leading-relaxed">
							These terms may be updated as the system evolves. Continued use of
							ADMS indicates acceptance of any changes.
						</p>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="px-5 md:px-[150px] flex md:flex-row flex-col md:items-start md:justify-center mt-10 md:mt-[60px] gap-8 mb-[100px]">
				<div className="md:w-[40%] h-fit md:sticky md:top-20 space-y-6 md:space-y-10 shrink-0">
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
