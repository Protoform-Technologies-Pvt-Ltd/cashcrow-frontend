"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

const chartData = [
  { date: "2024-04-01", paper: 122, plastic: 80, other: 50 },
  { date: "2024-04-02", paper: 97, plastic: 60, other: 30 },
  { date: "2024-04-03", paper: 167, plastic: 70, other: 40 },
  { date: "2024-04-04", paper: 142, plastic: 90, other: 60 },
  { date: "2024-04-05", paper: 173, plastic: 100, other: 50 },
  { date: "2024-04-06", paper: 201, plastic: 110, other: 60 },
  { date: "2024-04-07", paper: 145, plastic: 80, other: 40 },
  { date: "2024-04-08", paper: 209, plastic: 120, other: 70 },
  { date: "2024-04-09", paper: 159, plastic: 60, other: 30 },
  { date: "2024-04-10", paper: 161, plastic: 80, other: 50 },
  { date: "2024-04-11", paper: 227, plastic: 100, other: 80 },
  { date: "2024-04-12", paper: 192, plastic: 90, other: 60 },
  { date: "2024-04-13", paper: 242, plastic: 110, other: 80 },
  { date: "2024-04-14", paper: 137, plastic: 70, other: 50 },
  { date: "2024-04-15", paper: 120, plastic: 60, other: 40 },
  { date: "2024-04-16", paper: 138, plastic: 80, other: 50 },
  { date: "2024-04-17", paper: 246, plastic: 130, other: 90 },
  { date: "2024-04-18", paper: 264, plastic: 120, other: 80 },
  { date: "2024-04-19", paper: 243, plastic: 100, other: 70 },
  { date: "2024-04-20", paper: 189, plastic: 90, other: 60 },
  { date: "2024-04-21", paper: 137, plastic: 70, other: 50 },
  { date: "2024-04-22", paper: 148, plastic: 80, other: 55 },
  { date: "2024-04-23", paper: 175, plastic: 95, other: 65 },
  { date: "2024-04-24", paper: 193, plastic: 110, other: 70 },
  { date: "2024-04-25", paper: 207, plastic: 115, other: 72 },
  { date: "2024-04-26", paper: 222, plastic: 120, other: 75 },
  { date: "2024-04-27", paper: 198, plastic: 105, other: 68 },
  { date: "2024-04-28", paper: 183, plastic: 100, other: 63 },
  { date: "2024-04-29", paper: 174, plastic: 95, other: 60 },
  { date: "2024-04-30", paper: 189, plastic: 105, other: 66 },
  { date: "2024-05-01", paper: 204, plastic: 110, other: 70 },
  { date: "2024-05-02", paper: 217, plastic: 120, other: 75 },
  { date: "2024-05-03", paper: 230, plastic: 125, other: 80 },
  { date: "2024-05-04", paper: 242, plastic: 130, other: 82 },
  { date: "2024-05-05", paper: 231, plastic: 125, other: 78 },
  { date: "2024-05-06", paper: 218, plastic: 118, other: 72 },
  { date: "2024-05-07", paper: 205, plastic: 110, other: 68 },
  { date: "2024-05-08", paper: 193, plastic: 105, other: 65 },
  { date: "2024-05-09", paper: 185, plastic: 100, other: 62 },
  { date: "2024-05-10", paper: 198, plastic: 108, other: 67 },
  { date: "2024-05-11", paper: 211, plastic: 115, other: 70 },
  { date: "2024-05-12", paper: 223, plastic: 120, other: 74 },
  { date: "2024-05-13", paper: 236, plastic: 128, other: 79 },
  { date: "2024-05-14", paper: 249, plastic: 135, other: 82 },
  { date: "2024-05-15", paper: 235, plastic: 130, other: 78 },
  { date: "2024-05-16", paper: 220, plastic: 120, other: 74 },
  { date: "2024-05-17", paper: 205, plastic: 112, other: 70 },
  { date: "2024-05-18", paper: 192, plastic: 105, other: 65 },
  { date: "2024-05-19", paper: 178, plastic: 95, other: 60 },
  { date: "2024-05-20", paper: 166, plastic: 88, other: 56 },
  { date: "2024-05-21", paper: 179, plastic: 92, other: 58 },
  { date: "2024-05-22", paper: 190, plastic: 98, other: 61 },
  { date: "2024-05-23", paper: 202, plastic: 105, other: 66 },
  { date: "2024-05-24", paper: 213, plastic: 110, other: 70 },
  { date: "2024-05-25", paper: 225, plastic: 118, other: 75 },
  { date: "2024-05-26", paper: 238, plastic: 125, other: 80 },
  { date: "2024-05-27", paper: 251, plastic: 130, other: 84 },
  { date: "2024-05-28", paper: 263, plastic: 138, other: 88 },
  { date: "2024-05-29", paper: 275, plastic: 145, other: 92 },
  { date: "2024-05-30", paper: 258, plastic: 135, other: 86 },
  { date: "2024-05-31", paper: 242, plastic: 128, other: 80 },
  { date: "2024-06-01", paper: 226, plastic: 120, other: 75 },
  { date: "2024-06-02", paper: 210, plastic: 110, other: 70 },
  { date: "2024-06-03", paper: 195, plastic: 100, other: 66 },
  { date: "2024-06-04", paper: 180, plastic: 95, other: 62 },
  { date: "2024-06-05", paper: 194, plastic: 102, other: 65 },
  { date: "2024-06-06", paper: 208, plastic: 110, other: 70 },
  { date: "2024-06-07", paper: 222, plastic: 118, other: 75 },
  { date: "2024-06-08", paper: 235, plastic: 125, other: 80 },
  { date: "2024-06-09", paper: 249, plastic: 132, other: 85 },
  { date: "2024-06-10", paper: 263, plastic: 140, other: 90 },
  { date: "2024-06-11", paper: 276, plastic: 148, other: 95 },
  { date: "2024-06-12", paper: 260, plastic: 138, other: 89 },
  { date: "2024-06-13", paper: 244, plastic: 128, other: 83 },
  { date: "2024-06-14", paper: 229, plastic: 118, other: 78 },
  { date: "2024-06-15", paper: 213, plastic: 110, other: 72 },
  { date: "2024-06-16", paper: 198, plastic: 100, other: 68 },
  { date: "2024-06-17", paper: 184, plastic: 92, other: 63 },
  { date: "2024-06-18", paper: 200, plastic: 100, other: 68 },
  { date: "2024-06-19", paper: 215, plastic: 108, other: 72 },
  { date: "2024-06-20", paper: 231, plastic: 118, other: 77 },
  { date: "2024-06-21", paper: 246, plastic: 128, other: 82 },
  { date: "2024-06-22", paper: 262, plastic: 135, other: 88 },
  { date: "2024-06-23", paper: 278, plastic: 145, other: 93 },
  { date: "2024-06-24", paper: 263, plastic: 136, other: 88 },
  { date: "2024-06-25", paper: 247, plastic: 128, other: 82 },
  { date: "2024-06-26", paper: 232, plastic: 118, other: 77 },
  { date: "2024-06-27", paper: 218, plastic: 110, other: 72 },
  { date: "2024-06-28", paper: 204, plastic: 102, other: 67 },
  { date: "2024-06-29", paper: 189, plastic: 95, other: 62 },
  { date: "2024-06-30", paper: 175, plastic: 88, other: 58 },
]


export default function AppAreaChart() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("90d")

  React.useEffect(() => {
    if (isMobile) setTimeRange("7d")
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") daysToSubtract = 30
    else if (timeRange === "7d") daysToSubtract = 7
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardTitle>Waste Disposed Over Time</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">Last 3 months</SelectItem>
              <SelectItem value="30d" className="rounded-lg">Last 30 days</SelectItem>
              <SelectItem value="7d" className="rounded-lg">Last 7 days</SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          className="aspect-auto h-[250px] w-full"
          config={{
            xKey: { label: "Date" },
            paper: { color: "#22c55e" },
            plastic: { color: "#3b82f6" },
            other: { color: "#fbbf24" },
            // Add any other required config properties here
          }}
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillPaper" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillPlastic" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillOther" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
              }
            />
            <YAxis tickLine={false} axisLine={false} tickMargin={28} minTickGap={2} />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", { month: "short", day: "numeric" })
                  }
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="other"
              type="natural"
              fill="url(#fillOther)"
              stroke="#fbbf24"
              stackId="a"
            />
            <Area
              dataKey="plastic"
              type="natural"
              fill="url(#fillPlastic)"
              stroke="#3b82f6"
              stackId="a"
            />
            <Area
              dataKey="paper"
              type="natural"
              fill="url(#fillPaper)"
              stroke="#22c55e"
              stackId="a"
            />

          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
