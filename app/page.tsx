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
          <div className="absolute inset-0 hidden md:block z-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-dotted border-gray-400 rounded-full animate-spin-slow"></div>
          </div>


          {/* LEFT IMAGES */}
          <div className="hidden md:flex flex-col items-center justify-center gap-8 relative z-10">
            {/* Your Cause */}
            <div className="relative rounded-full bg-green-100 border-2 border-green-200 shadow-md w-[110px] h-[110px] flex items-center justify-center animate-float -translate-y-4 translate-x-20">
              <Image
                src="https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Your cause"
                width={90}
                height={90}
                className="rounded-full object-cover w-[90px] h-[90px]"
              />
              <span className="absolute bottom-8 -left-8 text-xs bg-white px-3 py-1 rounded-full shadow-sm text-gray-700">Your Cause</span>
            </div>

            {/* Medical */}
            <div className="relative rounded-full bg-green-100 border-2 border-green-200 shadow-md w-[120px] h-[120px] flex items-center justify-center animate-float-delayed -translate-y-1 -translate-x-10">
              <Image
                src="https://images.unsplash.com/photo-1585421514738-01798e348b17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Medical"
                width={100}
                height={100}
                className="rounded-full object-cover w-[100px] h-[100px]"
              />
              <span className="absolute -right-7 text-xs bg-white px-3 py-1 rounded-full shadow-sm text-gray-700">Medical</span>
            </div>

            {/* Emergency */}
            <div className="relative rounded-full bg-green-100 border-2 border-green-200 shadow-md w-[100px] h-[100px] flex items-center justify-center animate-float -translate-y-2 translate-x-10">
              <Image
                src="https://images.unsplash.com/photo-1635247187021-ad5ab658bc5e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW1lcmdlbmN5fGVufDB8fDB8fHww"
                alt="Emergency"
                width={80}
                height={80}
                className="rounded-full object-cover w-[80px] h-[80px]"
              />
              <span className="absolute bottom-8 -left-8 text-xs bg-white px-3 py-1 rounded-full shadow-sm text-gray-700">Emergency</span>
            </div>
          </div>

          {/* CENTER TEXT */}
          <div className="flex flex-col items-center text-center max-w-2xl px-4 z-10">
            <p className="text-sm text-gray-500 mb-3">#1 crowdfunding platform</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Successful fundraisers <br className="hidden sm:block" /> start here.
            </h1>
            <Link href="/">
              <Button className="text-light bg-dark font-semibold py-3 px-8 rounded-full shadow-lg">
                Start a Fundraiser
              </Button>
            </Link>
          </div>

          {/* RIGHT IMAGES */}
          <div className="hidden md:flex flex-col items-center justify-center gap-8 relative z-10">
            {/* Education */}
            <div className="relative rounded-full bg-green-100 border-2 border-green-200 shadow-md w-[120px] h-[120px] flex items-center justify-center animate-float translate-y-4 -translate-x-20">
              <Image
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8fDB8fHww"
                alt="Education"
                width={100}
                height={100}
                className="rounded-full object-cover w-[100px] h-[100px]"
              />
              <span className="absolute -left-8 text-xs bg-white px-3 py-1 rounded-full shadow-sm text-gray-700">Education</span>
            </div>

            {/* Business */}
            <div className="relative rounded-full bg-green-100 border-2 border-green-200 shadow-md w-[110px] h-[110px] flex items-center justify-center animate-float-delayed translate-y-1 translate-x-10">
              <Image
                src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D"
                alt="Business"
                width={90}
                height={90}
                className="rounded-full object-cover w-[90px] h-[90px]"
              />
              <span className="absolute bottom-3 -right-6 text-xs bg-white px-3 py-1 rounded-full shadow-sm text-gray-700">Business</span>
            </div>

            {/* Animals */}
            <div className="relative rounded-full bg-green-100 border-2 border-green-200 shadow-md w-[100px] h-[100px] flex items-center justify-center animate-float translate-y-2 -translate-x-20">
              <Image
                src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww"
                alt="Animals"
                width={80}
                height={80}
                className="rounded-full object-cover w-[80px] h-[80px]"
              />
              <span className="absolute -left-7 text-xs bg-white px-3 py-1 rounded-full shadow-sm text-gray-700">Animal</span>
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
