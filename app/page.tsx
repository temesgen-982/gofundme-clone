import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Sparkles, Share2, CircleDollarSign } from "lucide-react";

import { mockCampaigns, Campaign } from "@/lib/data";
import { CampaignCard } from "@/components/campaign-card";

export default function HomePage() {
  const featuredCampaigns = mockCampaigns.slice(0, 6); // Display first 6 as featured

  return (
    <>
      <section className="w-full py-16 md:py-24 lg:py-32 bg-white text-center md:text-left">
        <div className="container mx-auto flex-col gap-6 justify-center md:max-w-3xl">
          <p className="text-center">
            #1 crowdfunding platform
          </p>
          <h1 className="text-4xl text-center sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 mb-4">
            Successful fund raisers start here.
          </h1>
          <div className="flex justify-center space-x-4">
            <Link href="/start">
              <Button
                size="lg"
                className="text-white font-semibold py-3 px-8 rounded-full shadow-lg"
              >
                Start a Fundraiser
              </Button>
            </Link>
          </div>
        </div>
      </section>


      {/* Campaigns Section */}
      <section className="container mx-auto py-12 md:py-16 lg:py-20">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Campaigns</h2>
          <Link href="/explore-all">
            <Button variant="outline" className="text-gofundmeBlue border-gofundmeBlue hover:bg-gofundmeBlue hover:text-white transition-colors">
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
      <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
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
              <Sparkles className="h-12 w-12 text-gofundmeBlue mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Start a Fundraiser</h3>
              <p className="text-gray-600">
                Set up your campaign in minutes, share your story, and set a fundraising goal. It's free and easy!
              </p>
            </div>

            {/* Step 2: Share with Your Network */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <Share2 className="h-12 w-12 text-gofundmeBlue mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Share with Your Network</h3>
              <p className="text-gray-600">
                Reach more donors by sharing your campaign on social media, email, and text.
              </p>
            </div>

            {/* Step 3: Receive Donations */}
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md border border-gray-100">
              <CircleDollarSign className="h-12 w-12 text-gofundmeBlue mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Receive Donations</h3>
              <p className="text-gray-600">
                All donations go directly to your cause, with secure and timely transfers.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/how-it-works">
              <Button size="lg" variant="outline" className="text-gofundmeBlue border-gofundmeBlue hover:bg-gofundmeBlue hover:text-white transition-colors">
                Learn More About How it Works
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
