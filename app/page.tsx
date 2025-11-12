import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { mockCampaigns } from "@/lib/data";
import { CampaignCard } from "@/components/campaign-card";

import HowItWorks from "@/components/how-it-works";

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
      <HowItWorks />
    </>
  );
}
