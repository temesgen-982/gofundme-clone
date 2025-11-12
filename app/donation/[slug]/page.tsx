import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { mockCampaigns, getCampaignBySlug } from "@/lib/data";

// Dynamic paths to be generated at build time.
export async function generateStaticParams() {
  const params = mockCampaigns.map((campaign) => ({
    slug: campaign.slug,
  }));

  return params;
}

type DonationDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function DonationDetailPage({ params }: DonationDetailPageProps) {

  const { slug } = await params;

  const campaign = getCampaignBySlug(slug);

  if (!campaign) {
    notFound();
  }

  // Calculate progress percentage
  const progress = Math.min((campaign.currentAmount / campaign.goalAmount) * 100, 100);

  return (
    <div className="container mx-auto py-8 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Campaign Details (Left/Main Column) */}
        <div className="lg:col-span-2">
          {/* Campaign Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-md mb-6">
            <Image
              src={campaign.imageUrl}
              alt={campaign.title}
              fill
              style={{ objectFit: "cover" }}
              className="object-center"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </div>

          {/* Title & Description */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            {campaign.title}
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            {campaign.description}
          </p>

          {/* Organizer Info (Optional, can be a small card or section) */}
          <div className="flex items-center space-x-3 mb-8 p-4 bg-gray-50 rounded-lg border">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={campaign.organizer.avatarUrl}
                alt={campaign.organizer.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <p className="text-sm text-gray-600">Organized by</p>
              <Link href={campaign.organizer.profileUrl} className="font-semibold text-gofundmeBlue hover:underline">
                {campaign.organizer.name}
              </Link>
            </div>
          </div>
        </div>

        {/* Donation Sidebar (Right Column) */}
        <div className="lg:col-span-1">
          <Card className="shadow-lg sticky top-24"> {/* Sticky makes it stay when scrolling */}
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                ${campaign.currentAmount.toLocaleString()} raised
              </CardTitle>
              <CardDescription className="text-gray-600">
                of ${campaign.goalAmount.toLocaleString()} goal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={progress} className="h-3 mb-2 bg-gray-200 [&::-webkit-progress-value]:bg-gofundmeBlue" />
              <p className="text-sm text-gray-600 text-right">{progress.toFixed(0)}% complete</p>
              <p className="text-md text-gray-700 mt-4">{campaign.backers} donations</p>

              <div className="mt-6 space-y-4">
                <Input type="number" placeholder="Enter amount (e.g., 50)" className="h-12 text-lg" />
                <Button className="w-full h-12 text-lg bg-dark hover:bg-dark/80 text-light rounded-full">
                  Donate
                </Button>
                <Button className="w-full h-12 text-lg bg-light hover:bg-light/80 text-dark rounded-full">
                  Share
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <p className="text-xs text-gray-500 text-center w-full">
                Your donation is secure and goes directly to the organizer.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Supporter Comments Section */}
      <div className="mt-12 lg:mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Supporters ({campaign.comments.length})</h2>
        <div className="space-y-6">
          {campaign.comments.length === 0 ? (
            <p className="text-gray-600">Be the first to donate and leave a message!</p>
          ) : (
            campaign.comments.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm border">
                <div className="relative w-10 h-10 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src={comment.authorAvatarUrl}
                    alt={comment.author}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-semibold text-gray-800">{comment.author}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(comment.timestamp).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  {comment.amount && (
                    <p className="text-sm font-medium text-gofundmeBlue mb-2">
                      Donated ${comment.amount.toLocaleString()}
                    </p>
                  )}
                  <p className="text-gray-700">{comment.message}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
