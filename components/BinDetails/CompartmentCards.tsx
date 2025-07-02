
import { Thermometer, Weight, Truck, FlaskConical, Package, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CompartmentCards() {
    const compartmentData = [
        {
            name: 'Paper',
            fillLevel: 68,
            weight: 45,
            maxWeight: 50,
            temperature: 12,
            status: 'warning',
            icon: <FileText className="w-8 h-8 text-white" />,
        },
        {
            name: 'Plastic',
            fillLevel: 82,
            weight: 41,
            maxWeight: 50,
            temperature: 13,
            status: 'critical',
            icon: <FlaskConical className="w-8 h-8 text-white" />,
        },
        {
            name: 'Other',
            fillLevel: 45,
            weight: 22,
            maxWeight: 50,
            temperature: 14,
            status: 'normal',
            icon: <Package className="w-8 h-8 text-white" />,
        }

    ]

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'critical':
                return <Badge className="rounded-full bg-red-100 border border-red-400 text-red-700 dark:bg-red-900 dark:text-red-300">Critical</Badge>
            case 'warning':
                return <Badge className="rounded-full bg-yellow-100 border border-yellow-400 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">Warning</Badge>
            default:
                return <Badge className="rounded-full bg-green-100 border border-green-400 text-green-700 dark:bg-green-900 dark:text-green-300">Normal</Badge>
        }
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6 mb-15 md:mb-8">
            {/* Next Pickup */}
            <Card className="py-0 bg-gradient-to-t from-green-50 to-white dark:from-green-950 dark:to-gray-900 border border-green-100 dark:border-green-900 shadow-md">
                <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600">
                                <Truck className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">Next Pickup</h3>
                                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">Tomorrow</p>
                            </div>
                        </div>
                        <Badge className="rounded-full bg-cashcrow-bg border-green-500 text-green-700 dark:border-green-400 dark:text-green-300">Scheduled</Badge>
                    </div>
                    <div className="text-sm space-y-1 text-muted-foreground dark:text-gray-300">
                        <p>June 16, 2023</p>
                        <p>8:30 AM – 10:00 AM</p>
                        <p className="pt-2 text-xs text-gray-500 dark:text-gray-400">Route: Downtown #42</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Driver: Mike Johnson</p>
                    </div>
                </CardContent>
            </Card>

            {/* Compartments */}
            {compartmentData.map((comp, i) => (
                <Card key={i} className="py-0 bg-gradient-to-t from-green-50 to-white dark:from-green-950 dark:to-gray-900 border border-green-100 dark:border-green-900 shadow-md">
                    <CardContent className="p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex gap-3 items-center">
                                <div className="p-2 rounded-xl bg-gradient-to-br from-green-500 to-green-600 dark:from-green-700 dark:to-green-800">
                                    {comp.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">{comp.name}</h3>
                            </div>
                            {getStatusBadge(comp.status)}
                        </div>
                        <div>
                            <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
                                <span>Fill Level</span>
                                <span>{comp.fillLevel}%</span>
                            </div>
                            <div className="w-full bg-gray-200/80 dark:bg-white/20 rounded-full h-2 mt-1">
                                <div className="h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 dark:from-green-600 dark:to-green-700" style={{ width: `${comp.fillLevel}%` }}></div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-2 text-sm">
                            <div className="bg-slate-100/50 dark:bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                                <div className="flex items-center space-x-2 text-green-700 dark:text-gray-300 mb-1">
                                    <Weight className="w-4 h-4" />
                                    <span>Weight</span>
                                </div>
                                <p className="text-green-900 dark:text-green-100 font-bold">{comp.weight} kg</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Max: {comp.maxWeight} kg</p>
                            </div>
                            <div className="bg-slate-200/50 dark:bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                                <div className="flex items-center space-x-2 text-green-700 dark:text-gray-300 mb-1">
                                    <Thermometer className="w-4 h-4" />
                                    <span>Rate</span>
                                </div>
                                <p className="text-green-900 dark:text-green-100 font-bold">{comp.temperature}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Normal</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}