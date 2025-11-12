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
      <section className="w-full bg-white py-10 overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 relative">
          {/* Dotted lines - you'd need a more complex solution for these, possibly SVG or absolute positioned divs with border-style: dotted */}
          {/* For now, this is a placeholder idea */}
          <div className="absolute inset-0 hidden md:block z-0 opacity-20">
            {/* Example of a connecting line (simplified) */}
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-dotted border-gray-400 rounded-full animate-spin-slow"></div>
          </div>


          {/* LEFT IMAGES */}
          <div className="hidden md:flex flex-col items-center justify-center gap-8 relative z-10">
            {/* Your Cause */}
            <div className="relative rounded-full bg-green-100 border-2 border-green-200 shadow-md w-[110px] h-[110px] flex items-center justify-center animate-float -translate-y-4">
              <Image
                src="https://images.unsplash.com/photo-1599052994917-094119d80d21?auto=format&fit=crop&q=60&w=400" // Image of a family/child for 'Your Cause'
                alt="Your cause"
                width={90}
                height={90}
                className="rounded-full object-cover w-[90px] h-[90px]"
              />
              <span className="absolute -bottom-4 text-xs bg-white px-3 py-1 rounded-full shadow-sm text-gray-700">Your Cause</span>
            </div>

            {/* Medical */}
            <div className="relative rounded-full bg-green-100 border-2 border-green-200 shadow-md w-[120px] h-[120px] flex items-center justify-center animate-float-delayed translate-y-4">
              <Image
                src="https://images.unsplash.com/photo-1532938911079-cdfd0ed53f06?auto=format&fit=crop&q=60&w=400" // Medical professional or patient
                alt="Medical"
                width={100}
                height={100}
                className="rounded-full object-cover w-[100px] h-[100px]"
              />
              <span className="absolute -bottom-4 text-xs bg-white px-3 py-1 rounded-full shadow-sm text-gray-700">Medical</span>
            </div>

            {/* Emergency */}
            <div className="relative rounded-full bg-green-100 border-2 border-green-200 shadow-md w-[100px] h-[100px] flex items-center justify-center animate-float -translate-y-2">
              <Image
                src="https://images.unsplash.com/photo-1543874017-f50f75723cf7?auto=format&fit=crop&q=60&w=400" // Image related to emergency/disaster
                alt="Emergency"
                width={80}
                height={80}
                className="rounded-full object-cover w-[80px] h-[80px]"
              />
              <span className="absolute -bottom-4 text-xs bg-white px-3 py-1 rounded-full shadow-sm text-gray-700">Emergency</span>
            </div>
          </div>

          {/* CENTER TEXT */}
          <div className="flex flex-col items-center text-center max-w-2xl px-4 z-10">
            <p className="text-sm text-gray-500 mb-3">#1 crowdfunding platform</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Successful fundraisers <br className="hidden sm:block" /> start here.
            </h1>
            <Link href="/">
              <Button className="text-white bg-green-700 hover:bg-green-800 font-semibold py-3 px-8 rounded-full shadow-lg">
                Start a Fundraiser
              </Button>
            </Link>
          </div>

          {/* RIGHT IMAGES */}
          <div className="hidden md:flex flex-col items-center justify-center gap-8 relative z-10">
            {/* Education */}
            <div className="relative rounded-full bg-green-100 border-2 border-green-200 shadow-md w-[120px] h-[120px] flex items-center justify-center animate-float translate-y-4">
              <Image
                src="https://images.unsplash.com/photo-1546410531-bb4439c36211?auto=format&fit=crop&q=80&w=870" // Image related to education
                alt="Education"
                width={100}
                height={100}
                className="rounded-full object-cover w-[100px] h-[100px]"
              />
              <span className="absolute -bottom-4 text-xs bg-white px-3 py-1 rounded-full shadow-sm text-gray-700">Education</span>
            </div>

            {/* Business */}
            <div className="relative rounded-full bg-green-100 border-2 border-green-200 shadow-md w-[110px] h-[110px] flex items-center justify-center animate-float-delayed -translate-y-4">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dd3039d7?auto=format&fit=crop&q=60&w=400" // Image related to business
                alt="Business"
                width={90}
                height={90}
                className="rounded-full object-cover w-[90px] h-[90px]"
              />
              <span className="absolute -bottom-4 text-xs bg-white px-3 py-1 rounded-full shadow-sm text-gray-700">Business</span>
            </div>

            {/* Animals */}
            <div className="relative rounded-full bg-green-100 border-2 border-green-200 shadow-md w-[100px] h-[100px] flex items-center justify-center animate-float translate-y-2">
              <Image
                src="https://images.unsplash.com/photo-1543466835-09a769850125?auto=format&fit=crop&q=60&w=400" // Image of animals
                alt="Animals"
                width={80}
                height={80}
                className="rounded-full object-cover w-[80px] h-[80px]"
              />
              <span className="absolute -bottom-4 text-xs bg-white px-3 py-1 rounded-full shadow-sm text-gray-700">Animal</span>
            </div>
          </div>
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
