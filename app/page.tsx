import Image from "next/image";
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
      <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-background.jpg"
            alt="Community helping each other"
            fill
            style={{ objectFit: "cover" }}
            priority
            className="brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        </div>

        <div className="container relative z-10 text-white text-center md:text-left md:max-w-3xl"> {/* Simplified layout for just the text */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">
            Your Compassion. Their Future.
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-lg mx-auto md:mx-0">
            Support causes you care about, from emergency relief to personal dreams.
            Every donation makes a difference.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link href="/start">
              <Button size="lg" className="bg-gofundmeBlue hover:bg-gofundmeBlue/90 text-white font-semibold py-3 px-8 rounded-full shadow-lg">
                Start a Fundraiser
              </Button>
            </Link>
            <Link href="/explore">
              <Button size="lg" variant="secondary" className="bg-white text-gofundmeBlue hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg">
                Explore Campaigns
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="container py-12 md:py-16 lg:py-20">
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
        <div className="container text-center">
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
