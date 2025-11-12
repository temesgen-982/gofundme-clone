"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { mockCampaigns } from "@/lib/data";
import { CampaignCard } from "@/components/campaign-card";

export default function HomePage() {
  const featuredCampaigns = mockCampaigns.slice(0, 6); // Display first 6 as featured
  const [activeStep, setActiveStep] = useState(0); // State to manage the active step for the image

  const stepsData = [
    {
      title: "Use our tools to create your fundraiser",
      description: "You'll be guided by prompts to add fundraiser details and set your goal. Make updates anytime.",
      image: "https://images.unsplash.com/vector-1760083742244-fbac4356520a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
      linkText: "Get tips for starting your fundraiser.",
      linkHref: "/"
    },
    {
      title: "Reach donors by sharing",
      description: "Share your fundraiser link and use the resources in your dashboard to gain momentum.",
      image: "https://images.unsplash.com/vector-1743883866466-ae5c5446a36a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
      linkText: null // No specific link for this step in the example
    },
    {
      title: "Securely receive funds",
      description: "Add your bank information, or invite your fundraiser beneficiary to add theirs, and start receiving funds.",
      image: "https://images.unsplash.com/vector-1760080403959-8138486d14af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
      linkText: null // No specific link for this step in the example
    },
  ];
  return (
    <>
      <section className="w-full py-16 md:py-20 bg-white text-center md:text-left relative overflow-hidden">
        <div className="container mx-auto flex flex-col gap-4 justify-center md:max-w-xl relative z-10">
          <p className="text-center">
            #1 crowdfunding platform
          </p>
          <h1 className="mx-auto max-w-3xl text-balance text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.2] tracking-tight text-gray-900 mb-6">
            Successful fundraisers start here.
          </h1>
          <div className="flex justify-center space-x-4">
            <Link href="/">
              <Button
                size="lg"
                className="text-light bg-dark font-semibold py-3 px-8 rounded-full shadow-lg"
              >
                Start a Fundraiser
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating circle images */}
        <div className="absolute inset-0 z-0">
          {/* Top-left */}
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400"
            alt="Fundraiser 1"
            width={80}
            height={80}
            className="hidden md:block rounded-full min-w-2.5 min-h-2.5 border border-gray-800 absolute top-18 left-10 animate-float"
          />
          {/* Top-right */}
          <Image
            src="https://images.unsplash.com/photo-1579208575657-c595a05383b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
            alt="Fundraiser 2"
            width={90}
            height={90}
            className="hidden md:block rounded-full absolute top-14 right-10 animate-float-slow"
          />
          {/* Bottom-left */}
          <Image
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVscHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=400"
            alt="Fundraiser 3"
            width={90}
            height={90}
            className="hidden md:block rounded-full absolute bottom-12 left-32 animate-float-delayed"
          />
          {/* Bottom-right */}
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400"
            alt="Fundraiser 4"
            width={70}
            height={70}
            className="hidden md:block rounded-full absolute bottom-12 right-32 animate-float"
          />
        </div>
      </section>


      {/* Campaigns Section */}
      <section className="container mx-auto py-12 md:py-16 lg:py-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Campaigns</h2>
          <Link href="/">
            <Button variant="outline" className="border border-dark text-dark hover:bg-gray-100 transition-colors">
              View All
            </Button>
          </Link>
        </div>

        {/* Campaign Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))}
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fundraising on FundSphere is easy, powerful, and trusted.
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            GoFundMe empowers people to help others. We combine technology, trust, and compassion to make fundraising simple and impactful.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-5xl mx-auto">
            {/* Left Column: Image */}
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full h-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden aspect-video relative flex items-center justify-center">
                <Image
                  src={stepsData[activeStep].image}
                  alt={stepsData[activeStep].title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-opacity duration-500"
                />
                {/* play/pause button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 text-white text-5xl opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  {/* <PlayCircle size={60} /> */}
                </div>
              </div>
            </div>

            {/* Right Column: Steps */}
            <div className="md:w-1/2 flex flex-col items-start text-left space-y-8">
              {stepsData.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 w-full"
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white
                                  ${activeStep === index ? 'bg-dark' : 'bg-gray-400'}`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-1 ${activeStep === index ? 'text-gray-900' : 'text-gray-700'}`}>
                      {step.title}
                    </h3>
                    <p className={`text-gray-600 ${activeStep === index ? 'block' : 'hidden md:block'}`}>
                      {step.description}
                    </p>
                    {step.linkText && (
                      <Link href={step.linkHref} className="text-gofundmeBlue text-sm hover:underline mt-1 block">
                        {step.linkText}
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Link href="/">
              <Button size="lg" variant="outline" className="hover:border hover:border-black transition-colors">
                Learn More About How it Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
