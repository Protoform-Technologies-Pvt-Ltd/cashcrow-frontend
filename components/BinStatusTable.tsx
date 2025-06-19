"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const bins = [
    {
        location: "Admin Building",
        type: "Mixed Recycling",
        fill: 25,
        status: "Normal",
        lastEmptied: "2 days ago",
    },
    {
        location: "Science Hall",
        type: "Paper",
        fill: 78,
        status: "Warning",
        lastEmptied: "5 days ago",
    },
    {
        location: "Cafeteria",
        type: "Compost",
        fill: 92,
        status: "Critical",
        lastEmptied: "1 week ago",
    },
    {
        location: "Library",
        type: "Paper",
        fill: 45,
        status: "Normal",
        lastEmptied: "3 days ago",
    },
];

function getStatusBadge(status: string) {
    switch (status) {
        case "Normal":
            return (
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300">
                    Normal
                </Badge>
            );
        case "Warning":
            return (
                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                    Warning
                </Badge>
            );
        case "Critical":
            return (
                <Badge className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">
                    Critical
                </Badge>
            );
        default:
            return null;
    }
}

export default function BinStatusTable() {
    return (
        <div className="p-6 rounded-xl border bg-white dark:bg-card shadow-md flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-gray-800 dark:text-gray-100">
                    Bin Status Overview
                </span>
                <Link
                    href="/bins"
                    className="flex items-center gap-1 group text-xs md:text-sm bg-cashcrow-bg py-1 px-3 rounded-full text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-all"
                >
                    View All Bins{" "}
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                        <ChevronRight className="w-4 h-4" />
                    </span>
                </Link>
            </div>

            <Table className="text-sm">
                <TableHeader>
                    <TableRow>
                        <TableHead>Location</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Fill Level</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Emptied</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {bins.map((bin, i) => (
                        <TableRow key={i}>
                            <TableCell className="font-medium text-gray-800 dark:text-gray-100">{bin.location}</TableCell>
                            <TableCell className="text-gray-700 dark:text-gray-200">{bin.type}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <div className="w-32 h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                                        <div
                                            className={cn(
                                                "absolute h-2 top-0 left-0 rounded-full transition-all duration-300",
                                                bin.fill < 50
                                                    ? "bg-green-500"
                                                    : bin.fill < 90
                                                        ? "bg-yellow-500"
                                                        : "bg-red-500"
                                            )}
                                            style={{ width: `${bin.fill}%` }}
                                        />
                                    </div>
                                    <span className="min-w-[30px] text-gray-600 dark:text-gray-300">{bin.fill}%</span>
                                </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(bin.status)}</TableCell>
                            <TableCell className="text-gray-600 dark:text-gray-400">{bin.lastEmptied}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
