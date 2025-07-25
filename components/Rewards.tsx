"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift } from "lucide-react"
import Link from "next/link"

const rewardsOverview = [
  {
    count: "1,250",
    label: "Total Points",
    growth: "+75 this month",
  },
  {
    count: "5",
    label: "Rewards Redeemed",
    growth: "+2 this month",
  },
  {
    count: "8",
    label: "Badges Earned",
    growth: "+1 this month",
  },
]

export default function Rewards() {
  return (
    <Card className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <CardTitle className="text-base">Rewards Overview</CardTitle>
        <Link
          href="/rewards"
          className="flex items-center gap-2 group text-xs md:text-sm bg-cashcrow-bg py-1.5 px-3 rounded-full text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-all"
        >
          <Gift className="w-5 h-5 shake-on-hover" />
          Redeem Rewards
        </Link>
      </div>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {rewardsOverview.map((reward, i) => (
          <Card key={i} className="bg-muted/10 dark:bg-background/50 border p-4 gap-1">
            <CardHeader className="p-0 flex flex-col items-center gap-2">
              <CardTitle className="text-3xl font-semibold text-green-900 dark:text-green-100">{reward.count}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 space-y-1 flex flex-col justify-center items-center">
              <div className="text-sm text-muted-foreground mt-1">{reward.label}</div>
              <div className="text-xs text-green-800 dark:text-green-400 mt-2">↑ {reward.growth}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
  )
}
