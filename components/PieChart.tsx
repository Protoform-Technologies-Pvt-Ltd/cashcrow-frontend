"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart as RechartsPieChart } from "recharts"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

const chartData = [
  { waste: "paper", visitors: 275, fill: "var(--color-paper)" },
  { waste: "plastic", visitors: 200, fill: "var(--color-plastic)" },
  { waste: "other", visitors: 287, fill: "var(--color-other)" },
]

const chartConfig = {
  paper: {
    label: "Paper",
    color: "var(--chart-2)",
  },
  plastic: {
    label: "Plastic",
    color: "var(--chart-1 )",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export default function PieChart() {
  const totalVisitors = chartData.reduce((acc, curr) => acc + curr.visitors, 0)

  return (
    <Card className="flex flex-col gap-0.5">
      <CardHeader className="items-center pb-0">
        <CardTitle>Waste Compostion</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RechartsPieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="waste"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Wastes
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
            <ChartLegend content={<ChartLegendContent />} />
          </RechartsPieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
