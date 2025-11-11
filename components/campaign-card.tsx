import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Campaign } from "@/lib/data";

type CampaignCardProps = {
  campaign: Campaign;
};

export function CampaignCard({ campaign }: CampaignCardProps) {
  const progress = Math.min((campaign.currentAmount / campaign.goalAmount) * 100, 100);

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <Link href={`/donation/${campaign.slug}`} className="block">
        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
          <Image
            src={campaign.imageUrl}
            alt={campaign.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4 flex flex-col flex-grow">
        <Link href={`/donation/${campaign.slug}`} className="block hover:underline">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
            {campaign.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
          {campaign.description.substring(0, 100)}... {/* Shorten description for card */}
        </p>

        <div className="mt-auto"> {/* Pushes progress to bottom */}
          <div className="flex justify-between items-center text-sm text-gray-700 mb-1">
            <span className="font-bold">${campaign.currentAmount.toLocaleString()}</span>
            <span>of ${campaign.goalAmount.toLocaleString()}</span>
          </div>
          <Progress value={progress} className="h-2 bg-gray-200 [&::-webkit-progress-value]:bg-gofundmeBlue" />
          <p className="text-xs text-gray-500 mt-1">{campaign.backers} donations</p>
        </div>
      </CardContent>
    </Card>
  );
}
