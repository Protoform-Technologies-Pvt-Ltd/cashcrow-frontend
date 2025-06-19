import { IconTrendingUp } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ArrowUp,
    Circle,
    Leaf,
    Trash2,
    TrendingUp,
    BarChart3,
} from "lucide-react"

export default function HeaderCards() {
    return (
        <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            <Card className="@container/card gap-4 relative bg-gradient-to-t from-green-50 to-white dark:from-green-950 dark:to-gray-900 border border-green-100 dark:border-green-900 shadow-md">
                <CardHeader>
                    <CardDescription className="text-green-700 dark:text-green-300">
                        Total Waste Collected
                    </CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl text-green-900 dark:text-green-100">
                        4,328 Kg
                    </CardTitle>
                    <CardAction>
                        <Badge className="rounded-full bg-cashcrow-bg border-green-500 text-green-700 dark:border-green-400 dark:text-green-300">
                            <IconTrendingUp className="text-green-600 dark:text-green-400" />
                            +12.5%
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="text-sm">
                    <div className="line-clamp-1 flex gap-2 text-green-800 dark:text-green-400 items-center">
                        <ArrowUp className="size-4" /> 230 Kg from last month
                    </div>
                </CardFooter>
            </Card>

            <Card className="@container/card gap-4 relative bg-gradient-to-t from-green-50 to-white dark:from-green-950 dark:to-gray-900 border border-green-100 dark:border-green-900 shadow-md">
                <CardHeader>
                    <CardDescription className="text-green-700 dark:text-green-300">
                        Recycling Rate
                    </CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl text-green-900 dark:text-green-100">
                        68.7%
                    </CardTitle>
                    <CardAction>
                        <Badge className="rounded-full bg-cashcrow-bg border-green-500 text-green-700 dark:border-green-400 dark:text-green-300">
                            <IconTrendingUp className="text-green-600 dark:text-green-400" />
                            +5.2%
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="text-sm">
                    <div className="line-clamp-1 flex gap-2 text-green-800 dark:text-green-400 items-center">
                        <ArrowUp className="size-4" /> 3.4% from last month
                    </div>
                </CardFooter>
            </Card>

            <Card className="@container/card gap-4 relative bg-gradient-to-t from-green-50 to-white dark:from-green-950 dark:to-gray-900 border border-green-100 dark:border-green-900 shadow-md">
                <CardHeader>
                    <CardDescription className="text-green-700 dark:text-green-300">
                        CO<sub>2</sub> Emissions Saved
                    </CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl text-green-900 dark:text-green-100">
                        1,245 Kg
                    </CardTitle>
                    <CardAction>
                        <Badge className="rounded-full bg-cashcrow-bg border-green-500 text-green-700 dark:border-green-400 dark:text-green-300">
                            <IconTrendingUp className="text-green-600 dark:text-green-400" />
                            +8.3%
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="text-sm">
                    <div className="line-clamp-1 flex gap-2 text-green-800 dark:text-green-400 items-center">
                        <ArrowUp className="size-4" /> 95 Kg from last month
                    </div>
                </CardFooter>
            </Card>

            <Card className="@container/card gap-4 relative bg-gradient-to-t from-green-50 to-white dark:from-green-950 dark:to-gray-900 border border-green-100 dark:border-green-900 shadow-md">
                <CardHeader>
                    <CardDescription className="text-green-700 dark:text-green-300">
                        Growth Rate
                    </CardDescription>
                    <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl text-green-900 dark:text-green-100">
                        42
                    </CardTitle>
                    <CardAction>
                        <Badge className="bg-cashcrow-bg rounded-full border-green-500 text-green-700 dark:border-green-400 dark:text-green-300">
                            +2 new
                        </Badge>
                    </CardAction>
                </CardHeader>
                <CardFooter className="text-sm">
                    <div className="line-clamp-1 flex gap-2 text-green-800 dark:text-green-400 items-center">
                        <Circle className="size-4" /> 38 Bins online
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}
