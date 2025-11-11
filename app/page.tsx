import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { mockCampaigns, Campaign } from "@/lib/data";

export default function HomePage() {
  // Get the first 3 campaigns to display as trending
  const trendingCampaignsToShow = mockCampaigns.slice(0, 3);

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background Image/Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Community helping each other"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
      </div>

      <div className="container relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-center">
        {/* Main Hero Text Content */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 text-white text-center md:text-left">
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

        {/* Trending Campaigns Card (Right side on desktop, below on mobile) */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 flex justify-center md:justify-end">
          <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-xl p-4 md:p-6">
            <CardHeader className="p-0 pb-4">
              <CardTitle className="text-2xl font-bold text-gray-800">Trending Campaigns</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-4">
              {trendingCampaignsToShow.map((campaign) => {
                const progress = Math.min((campaign.currentAmount / campaign.goalAmount) * 100, 100);
                return (
                  // Use campaign.slug for the href
                  <Link key={campaign.id} href={`/donation/${campaign.slug}`} className="block hover:bg-gray-50 p-2 rounded-lg transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                        <Image
                          src={campaign.imageUrl} // Use imageUrl from mock data
                          alt={campaign.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          style={{ objectFit: "cover" }}
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 line-clamp-1">{campaign.title}</h4>
                        <p className="text-sm text-gray-600">
                          ${campaign.currentAmount.toLocaleString()} of ${campaign.goalAmount.toLocaleString()}
                        </p>
                        <Progress value={progress} className="h-2 mt-1 [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-gofundmeBlue" />
                      </div>
                    </div>
                  </Link>
                );
              })}
              <div className="text-center mt-6">
                <Link href="/explore-all">
                  <Button variant="outline" className="text-gofundmeBlue border-gofundmeBlue hover:bg-gofundmeBlue hover:text-white transition-colors">
                    Explore All
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
