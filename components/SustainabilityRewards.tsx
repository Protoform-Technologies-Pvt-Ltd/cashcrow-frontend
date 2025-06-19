"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Crown, ChevronRight, Recycle, Building, TreePine } from "lucide-react"
import Link from "next/link"

const rewards = [
  {
    title: "Waste Reduction Master",
    description: "Reduced waste by 20% in a single month",
    progress: 100,
    icon: <Crown className="text-green-600 w-5 h-5" />,
    achieved: true,
  },
  {
    title: "Recycling Champion",
    description: "Achieved 75% recycling rate for 3 consecutive months",
    progress: 85,
    icon: <Recycle className="text-green-500 w-5 h-5" />,
    achieved: false,
  },
  {
    title: "Carbon Footprint Reducer",
    description: "Saved 5000kg of CO₂ emissions through recycling",
    progress: 42,
    icon: <TreePine className="text-gray-400 w-5 h-5" />,
    achieved: false,
  },
  {
    title: "Sustainable Campus",
    description: "Deploy smart bins across all campus buildings",
    progress: 65,
    icon: <Building className="text-green-500 w-5 h-5" />,
    achieved: false,
  },
]

export default function SustainabilityRewards() {
  return (
    <Card className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <CardTitle className="text-base">Sustainability Rewards</CardTitle>
        <Link
          href="/achievements"
          className="flex items-center gap-1 group text-xs md:text-sm bg-cashcrow-bg py-1 px-3 rounded-full text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-all"
        >
          View All Achievements{" "}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            <ChevronRight className="w-4 h-4" />
          </span>
        </Link>
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {rewards.map((reward, i) => (
          <Card key={i} className="bg-muted/10 dark:bg-background/50 border p-4 gap-1">
            <CardHeader className="p-0 flex flex-col items-center gap-2">
              <div className="p-5 rounded-full bg-muted">{reward.icon}</div>
              <CardTitle className="text-sm font-medium">{reward.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-2 flex flex-col justify-center items-center">
              <CardDescription className="text-xs">{reward.description}</CardDescription>

              {reward.achieved ? (
                <span className="w-fit text-xs text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-900 px-2 py-0.5 rounded-full font-medium mt-1">
                  Achieved
                </span>
              ) : (
                <div className="space-y-1 w-9/10 text-center">
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${reward.progress < 50
                          ? "bg-red-500"
                          : reward.progress < 80
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                      style={{ width: `${reward.progress}%` }}
                    />
                  </div>
                  <p className="text-[11px] text-muted-foreground">
                    {reward.progress}% complete
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
  )
}
