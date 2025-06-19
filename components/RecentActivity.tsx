"use client"

import {
    Trash2,
    TriangleAlert,
    CheckCircle2,
    PlusCircle,
    ChevronRight,
} from "lucide-react"
import Link from "next/link"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const activities = [
    {
        icon: <Trash2 className="w-5 h-5 text-blue-500" />,
        title: "Cafeteria Compost Bin Emptied",
        description: "Bin was at 98% capacity. 28.5kg of compost collected.",
        time: "2 hours ago",
    },
    {
        icon: <TriangleAlert className="w-5 h-5 text-yellow-500" />,
        title: "Science Hall Paper Bin Warning",
        description: "Bin is at 78% capacity. Scheduled for collection tomorrow.",
        time: "5 hours ago",
    },
    {
        icon: <CheckCircle2 className="w-5 h-5 text-green-500" />,
        title: "Recycling Goal Achieved",
        description: "Monthly recycling goal of 65% was achieved. Current rate: 68.7%.",
        time: "Yesterday",
    },
    {
        icon: <PlusCircle className="w-5 h-5 text-emerald-500" />,
        title: "New Smart Bins Installed",
        description: "2 new smart bins were installed at the Student Center.",
        time: "2 days ago",
    },
]

export default function RecentActivity() {
    return (
        <Card className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <CardTitle className="text-base">Recent Activity</CardTitle>
                <Link
                    href="/activity"
                    className="flex items-center gap-1 group text-xs md:text-sm bg-cashcrow-bg py-1 px-3 rounded-full text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-all"
                >
                    View All Activity{" "}
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                        <ChevronRight className="w-4 h-4" />
                    </span>
                </Link>
            </div>

            {/* Activity Feed */}
            <CardContent className="p-0 space-y-4">
                {activities.map((activity, i) => (
                    <div key={i} className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-full bg-muted">{activity.icon}</div>
                            <div className="flex flex-col">
                                <p className="text-sm font-medium text-foreground">{activity.title}</p>
                                <p className="text-xs text-muted-foreground">{activity.description}</p>
                            </div>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">
                            {activity.time}
                        </span>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
