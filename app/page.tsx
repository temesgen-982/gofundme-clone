import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sparkles, Share2, CircleDollarSign } from "lucide-react";

import { mockCampaigns } from "@/lib/data";
import { CampaignCard } from "@/components/campaign-card";

export default function HomePage() {
  const featuredCampaigns = mockCampaigns.slice(0, 6); // Display first 6 as featured

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
      <section className="py-10 bg-gray-50"> {/* Added a light background for this section */}
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fundraising on FundSphere is easy, powerful, and trusted.
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            GoFundMe empowers people to help others. We combine technology, trust, and compassion to make fundraising simple and impactful.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1: Start a Fundraiser */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965da9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Start a Fundraiser"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Start a Fundraiser</h3>
              <p className="text-gray-600">
                Set up your campaign in minutes, share your story, and set a fundraising goal. It's free and easy!
              </p>
            </div>

            {/* Step 2: Share with Your Network */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1497911674483-fe3917454232?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Share with Your Network"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Share with Your Network</h3>
              <p className="text-gray-600">
                Reach more donors by sharing your campaign on social media, email, and text.
              </p>
            </div>

            {/* Step 3: Receive Donations */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <div className="mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1593113616828-6f22bce35d7b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Receive Donations"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Receive Donations</h3>
              <p className="text-gray-600">
                All donations go directly to your cause, with secure and timely transfers.
              </p>
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
