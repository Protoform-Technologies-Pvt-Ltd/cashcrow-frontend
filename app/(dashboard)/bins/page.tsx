'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Calendar, Battery, Layers, Weight, Eye, Trash2, RefreshCcw, Plus, ChevronDown, Check, Search, LayoutGrid, Table as TableIcon, CheckCircle, AlertTriangle } from 'lucide-react'

import { useBinStore } from '@/app/store/useBinStore'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const initialData = [
    { id: 'BIN-001', location: 'Mumbai, IN', fillLevel: 70, weight: 8.5, battery: 85, lastCollected: '2025-06-28', activated: '2024-01-15', status: 'Active' },
    { id: 'BIN-002', location: 'New Delhi, IN', fillLevel: 45, weight: 5.2, battery: 92, lastCollected: '2025-06-29', activated: '2024-02-10', status: 'Active' },
    { id: 'BIN-003', location: 'Bengaluru, IN', fillLevel: 85, weight: 12.8, battery: 77, lastCollected: '2025-06-27', activated: '2024-03-05', status: 'Maintenance' },
    { id: 'BIN-004', location: 'Chennai, IN', fillLevel: 30, weight: 4.0, battery: 65, lastCollected: '2025-06-25', activated: '2024-01-25', status: 'Active' },
    { id: 'BIN-005', location: 'Kolkata, IN', fillLevel: 60, weight: 9.5, battery: 88, lastCollected: '2025-06-28', activated: '2024-02-18', status: 'Active' },
    { id: 'BIN-006', location: 'Pune, IN', fillLevel: 25, weight: 3.7, battery: 80, lastCollected: '2025-06-29', activated: '2024-04-02', status: 'Offline' },
]

const statuses = [
    { name: 'Active', color: 'bg-green-500' },
    { name: 'Maintenance', color: 'bg-amber-500' },
    { name: 'Offline', color: 'bg-red-500' },
]

export default function MyBins() {
    const router = useRouter()
    const setSelectedBin = useBinStore((state) => state.setSelectedBin)
    const [binData, setBinData] = useState<Bin[]>(initialData)
    const [layout, setLayout] = useState('table')
    const [selectedStatuses, setSelectedStatuses] = useState(statuses.map(s => s.name))
    const [searchQuery, setSearchQuery] = useState('')
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)
    const [binToDelete, setBinToDelete] = useState<Bin | null>(null)

    const toggleStatus = (status: string) => {
        setSelectedStatuses(prev =>
            prev.includes(status)
                ? prev.filter(s => s !== status)
                : [...prev, status]
        )
    }

    interface Bin {
        id: string;
        location: string;
        fillLevel: number;
        weight: number;
        battery: number;
        lastCollected: string;
        activated: string;
        status: string;
    }

    interface SelectedBin {
        binId: string;
        location: string;
    }

    const handleViewDetails = (binId: string, location: string): void => {
        setSelectedBin({ binId, location } as SelectedBin)
        router.push(`/bins/${binId.toLowerCase()}`)
    }

    const confirmDelete = (bin: Bin) => {
        setBinToDelete(bin)
        setShowDeleteDialog(true)
    }

    const handleConfirmDelete = () => {
        if (!binToDelete) return;
        setBinData(prev => prev.filter(b => b.id !== binToDelete.id))
        setShowDeleteDialog(false)
    }

    const refreshData = () => {
        const updated = binData.map(bin => ({
            ...bin,
            fillLevel: parseFloat(Math.min(100, Math.max(0, bin.fillLevel + (Math.random() * 20 - 10))).toFixed(2)),
            weight: parseFloat((bin.weight + (Math.random() * 2 - 1)).toFixed(2)),
            battery: parseFloat(Math.min(100, Math.max(0, bin.battery - Math.random() * 5)).toFixed(2)),
        }))
        setBinData(updated)
    }

    const getStatusBadge = (status: string) => {
        const variants = {
            Active: 'bg-cashcrow-bg border-green-500 text-green-700 dark:border-green-400 dark:text-green-300',
            Maintenance: 'bg-yellow-100 border border-yellow-400 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
            Offline: 'bg-red-50 border border-red-400 text-red-700 dark:bg-red-900 dark:text-red-300',
        }
        const icons = {
            Active: <CheckCircle className="h-4 w-4 text-emerald-600" />,
            Maintenance: <AlertTriangle className="h-4 w-4 text-amber-600" />,
            Offline: <AlertTriangle className="h-4 w-4 text-red-600" />,
        }
        return (
            <Badge className={`${variants[status]} border rounded-full font-medium px-3 py-1`}>
                <div className="flex items-center space-x-1.5">
                    {icons[status]}
                    <span>{status}</span>
                </div>
            </Badge>
        )
    }

    const filteredBins = binData.filter(bin => {
        const matchesSearch = bin.id.toLowerCase().includes(searchQuery.toLowerCase()) || bin.location.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(bin.status)
        return matchesSearch && matchesStatus
    })

    return (
        <div className="space-y-8 px-8 mt-6 mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black text-black dark:text-white">My Bins</h1>
                    <p className="text-sm text-muted-foreground">Monitor, track, and optimize your smart waste bins.</p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <Button
                        onClick={refreshData}
                        className="cursor-pointer group flex items-center gap-2 text-sm bg-gradient-to-br from-green-50 to-white dark:from-green-950 dark:to-gray-900 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-4 py-2 rounded-md transition-all duration-300"
                    >
                        <RefreshCcw className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
                        Refresh Stats
                    </Button>
                    <Link
                        href="/addbin"
                        className="flex items-center gap-2 text-sm bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md shadow transition"
                    >
                        <Plus className="h-4 w-4" /> Add New Bin
                    </Link>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between mb-4">
                <div className="relative w-full max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by ID or Location"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-1.5 rounded-md bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500/80 hover:border-gray-400 hover:dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-emerald-700 focus:border-transparent transition duration-200"
                    />
                </div>

                <div className='flex gap-5 items-center'>
                    <div className="flex space-x-2 border rounded-md p-1 bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700">
                        <button
                            onClick={() => setLayout('cards')}
                            title="Card View"
                            className={`cursor-pointer p-2 rounded-md transition hover:bg-emerald-100 dark:hover:bg-emerald-900 ${layout === 'cards' ? 'bg-emerald-200 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300' : 'text-gray-600 dark:text-gray-300'}`}
                        >
                            <LayoutGrid className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => setLayout('table')}
                            title="Table View"
                            className={`cursor-pointer p-2 rounded-md transition hover:bg-emerald-100 dark:hover:bg-emerald-900 ${layout === 'table' ? 'bg-emerald-200 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300' : 'text-gray-600 dark:text-gray-300'}`}
                        >
                            <TableIcon className="h-4 w-4" />
                        </button>
                    </div>

                    <DropdownMenu modal={false}>
                        <DropdownMenuTrigger className='relative flex items-center px-3 py-2 md:py-1.5 w-40 md:max-w-[180px] cursor-pointer rounded-md bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 hover:bg-zinc-50 hover:dark:bg-zinc-800'>
                            <span className="flex items-center space-x-2">
                                <div className="flex -space-x-1">
                                    {statuses.map((s, i) => (
                                        <div key={i} className={`w-3 h-3 rounded-full ${s.color} border-2 border-white dark:border-zinc-900`}></div>
                                    ))}
                                </div>
                                <span className='text-sm'>Status ({selectedStatuses.length}/{statuses.length})</span>
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <ChevronDown className="h-4 w-4" />
                            </span>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent sideOffset={10} className="mr-4 w-[11rem] md:w-[180px] p-1 rounded-md border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-lg">
                            {statuses.map((status, idx) => (
                                <DropdownMenuItem
                                    key={idx}
                                    onClick={() => toggleStatus(status.name)}
                                    className={`relative flex items-center pl-10 pr-4 py-2 rounded-md cursor-pointertext-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 transition`}
                                >
                                    <span className={`absolute left-3 w-3 h-3 rounded-full ${status.color}`}></span>
                                    <span className={`${selectedStatuses.includes(status.name) ? 'font-medium' : 'font-normal'} block truncate`}>
                                        {status.name}
                                    </span>
                                    {selectedStatuses.includes(status.name) && (
                                        <span className="absolute inset-y-0 right-3 flex items-center text-emerald-500">
                                            <Check className="h-4 w-4" />
                                        </span>
                                    )}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            {layout === 'cards' ? (
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {filteredBins.map((bin, idx) => (
                            <motion.div key={bin.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * idx }}>
                                <Card className="h-full bg-white dark:bg-card border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <CardContent>
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">{bin.id}</h3>
                                                <div className="flex items-center space-x-1 text-slate-600 dark:text-slate-300">
                                                    <MapPin className="h-3 w-3" /><span className="text-sm">{bin.location}</span>
                                                </div>
                                            </div>
                                            {getStatusBadge(bin.status)}
                                        </div>
                                        <div className="mb-5">
                                            <div className="flex items-center justify-between mb-2 text-sm text-slate-700 dark:text-slate-300">
                                                <span>Fill Level</span>
                                                <span className="font-bold">{Math.round(bin.fillLevel)}%</span>
                                            </div>
                                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${Math.round(bin.fillLevel)}%` }}
                                                    transition={{ duration: 1 }}
                                                    className={`h-full ${bin.fillLevel < 50 ? "bg-green-500" : bin.fillLevel < 90 ? "bg-yellow-500" : "bg-red-500"} rounded-full`}
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-700 dark:text-slate-300">
                                            <div className="flex items-center space-x-2">
                                                <Weight className="h-4 w-4 text-yellow-600" />
                                                <span><span className="font-bold">Weight:</span> {bin.weight} kg</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Battery className="h-4 w-4 text-green-600" />
                                                <span><span className="font-bold">Battery:</span> {bin.battery}%</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Calendar className="h-4 w-4" />
                                                <span><span className="font-bold">Last Emptied:</span> {new Date(bin.lastCollected).toLocaleDateString()}</span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Layers className="h-4 w-4 text-blue-600" />
                                                <span><span className="font-bold">Activated:</span> {new Date(bin.activated).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-2 justify-end">
                                            <Button onClick={() => handleViewDetails(bin.id, bin.location)} className="cursor-pointer flex-1 bg-emerald-600 hover:bg-emerald-700 text-white">
                                                <Eye className="h-4 w-4 mr-1" /> View
                                            </Button>
                                            <Button onClick={() => confirmDelete(bin)} variant="outline" className="cursor-pointer bg-red-100 border border-red-400 text-red-700 dark:border-red-300/50 dark:bg-red-900 dark:text-red-300 hover:bg-red-200 hover:border-red-500 hover:text-red-800 hover:dark:bg-red-800 hover:dark:border-red-500 hover:dark:text-red-50 transition-colors">
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ) : (
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="px-6 py-3 rounded-xl border bg-white dark:bg-card shadow-md flex flex-col gap-2">
                    <span className="text-base font-semibold text-gray-800 dark:text-gray-100 mt-2">
                        Bin Overview
                    </span>
                    <Table className="text-sm">
                        <TableHeader>
                            <TableRow>
                                <TableHead className='pl-8'>ID</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Fill Level</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Weight</TableHead>
                                <TableHead>Battery</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredBins.map((bin, idx) => (
                                <motion.tr
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    className="border-b border-gray-200 dark:border-zinc-700"
                                >
                                    <TableCell className='w-50 pl-8'>{bin.id}</TableCell>
                                    <TableCell className='w-50'>{bin.location}</TableCell>
                                    <TableCell >
                                        <div className="flex items-center gap-2">
                                            <div className="w-28 h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${bin.fillLevel}%` }}
                                                    transition={{ duration: 1 }}
                                                    className={`absolute h-2 top-0 left-0 rounded-full ${bin.fillLevel < 50 ? "bg-green-500" :
                                                        bin.fillLevel < 90 ? "bg-yellow-500" :
                                                            "bg-red-500"
                                                        }`}
                                                />
                                            </div>
                                            <span>{bin.fillLevel}%</span>
                                        </div>
                                    </TableCell>
                                    <TableCell >{getStatusBadge(bin.status)}</TableCell>
                                    <TableCell className='w-50'>{bin.weight} kg</TableCell>
                                    <TableCell className='w-50'>{bin.battery}%</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-5 justify-around">
                                            <button onClick={() => handleViewDetails(bin.id, bin.location)} className="cursor-pointer px-3 flex items-center gap-2 rounded-full p-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 dark:bg-emerald-900 dark:hover:bg-emerald-800 dark:text-emerald-300 transition">
                                                <Eye className="h-4 w-4" /> View
                                            </button>
                                            <button onClick={() => confirmDelete(bin)} className="cursor-pointer flex items-center px-3 gap-2 rounded-full p-2 bg-red-100 hover:bg-red-200 text-red-700 dark:bg-red-900 dark:hover:bg-red-800 dark:text-red-300 transition">
                                                <Trash2 className="h-4 w-4" /> Delete
                                            </button>
                                        </div>
                                    </TableCell>
                                </motion.tr>
                            ))}
                        </TableBody>
                    </Table>
                </motion.div>
            )}

            {showDeleteDialog && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
                    <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg w-full max-w-sm p-6 border border-gray-200 dark:border-zinc-700">
                        <h2 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">Confirm Delete</h2>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                            Are you sure you want to remove <span className="font-bold">{binToDelete?.id}</span>?
                        </p>
                        <div className="flex justify-end gap-3">
                            <button onClick={() => setShowDeleteDialog(false)} className="cursor-pointer px-4 py-2 rounded-md border border-gray-300 dark:border-zinc-600 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition">Cancel</button>
                            <button onClick={handleConfirmDelete} className="cursor-pointer px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white transition">Yes</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
