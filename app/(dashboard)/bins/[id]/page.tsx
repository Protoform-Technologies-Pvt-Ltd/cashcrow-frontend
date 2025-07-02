"use client"

import { MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"
import { useParams } from 'next/navigation';
import { useBinStore } from '@/app/store/useBinStore';

import CompartmentCards from "@/components/BinDetails/CompartmentCards"
import RecentActivity from "@/components/RecentActivity"

export default function BinDetails() {
    const { id } = useParams();
    const selectedBin = useBinStore((state) => state.selectedBin);

    return (
        <div className="space-y-6 px-8 mt-5">
            {/* Heading */} 
            <div>
                <h1 className="text-2xl font-black text-green-900 dark:text-green-100">Bin {id?.toString().replace("bin-", "")}</h1>
                <p className="text-sm text-muted-foreground">Location: {selectedBin?.location ?? "Unknown (try navigating from My Bins)"}</p>
            </div>
            <CompartmentCards />

            {/* Bottom Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-15 md:mb-0">
                {/* Bin Details */}
                <Card className="bg-white dark:bg-card border shadow-md">
                    <CardHeader>
                        <CardTitle className="text-base font-semibold text-gray-800 dark:text-gray-100">Bin Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {[
                            ['Bin ID', id?.toString().replace("bin-", "")],
                            ['Compartments', 'Paper, Plastic, Other'],
                            ['Total Capacity', '150 kg / 720 L'],
                            ['Last Emptied', 'June 12, 2023'],
                            ['Collection Frequency', 'Twice Weekly']
                        ].map(([label, value]) => (
                            <div key={label} className="flex justify-between text-sm py-1 border-b border-gray-100 dark:border-gray-800">
                                <span className="text-gray-600 dark:text-gray-400">{label}</span>
                                <span className="text-gray-950 dark:text-gray-100">{value}</span>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Location */}
                <Card className="bg-white dark:bg-card border shadow-md">
                    <CardHeader>
                        <CardTitle className="text-base font-semibold text-gray-800 dark:text-gray-100">Location</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        {[
                            ['Address', selectedBin?.location ?? "Unknown (try navigating from My Bins)"],
                            ['GPS', '40.7136° N, 74.0060° W'],
                            ['Zone', 'Commercial District'],
                            ['Route', 'Route #42 – Downtown']
                        ].map(([label, value]) => (
                            <div key={label} className="flex justify-between text-sm py-1 border-b border-gray-100 dark:border-gray-800">
                                <span className="text-gray-600 dark:text-gray-400">{label}</span>
                                <span className="text-gray-950 dark:text-gray-100">{value}</span>
                            </div>
                        ))}
                        <div className="mt-4 h-32 bg-cashcrow-bg rounded-xl flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-green-600" />
                            <span className="ml-2 text-green-800 dark:text-green-300 text-sm font-medium">Interactive Map</span>
                        </div>
                    </CardContent>
                </Card>

                <RecentActivity />
            </div>
        </div>
    )
}
