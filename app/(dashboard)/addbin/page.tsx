'use client'
import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Loader, MapPin, QrCode, RefreshCcw, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// dynamically import to avoid SSR
const QRScanner = dynamic(() => import("react-qr-barcode-scanner"), { ssr: false })

export default function AddBin() {
  const [qrData, setQrData] = useState<string | null>(null)
  const [location, setLocation] = useState<{ lat: number, lng: number } | null>(null)
  const [gettingLocation, setGettingLocation] = useState(true)
  const [binName, setBinName] = useState("")
  const [wasteType, setWasteType] = useState("General")

  useEffect(() => {
    getLocation()
  }, [])

  const getLocation = () => {
    setGettingLocation(true)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude })
        setGettingLocation(false)
      },
      () => setGettingLocation(false),
      { enableHighAccuracy: true }
    )
  }

  const reset = () => {
    setQrData(null)
    setBinName("")
    setWasteType("General")
    getLocation()
  }

  const today = new Date().toISOString().split('T')[0]

  return (
    <div className="space-y-6 px-8 mt-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-black text-black dark:text-white">Register New Bin</h1>
        <p className="text-sm text-muted-foreground">Scan your bin’s QR code, capture its location and add details to register it into the system.</p>
      </div>

      {/* QR SCANNER */}
      {!qrData && (
        <div className="bg-white dark:bg-card rounded-xl shadow-lg border border-gray-100 dark:border-zinc-700 p-4 space-y-4 transition-all duration-300">
          <div className="relative w-full h-80 md:h-full aspect-video overflow-hidden rounded-md border border-gray-200 dark:border-zinc-700">
            <QRScanner
              onUpdate={(err, result) => {
                if (result) setQrData(result.text)
              }}
              constraints={{ facingMode: "environment" }}
              style={{ width: "100%", height: "100%" }}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white">
              <QrCode className="h-12 w-12 animate-pulse" />
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-md border bg-emerald-100 hover:bg-emerald-200 text-emerald-700 dark:bg-emerald-900 dark:hover:bg-emerald-800 dark:text-emerald-300 transition">
            {gettingLocation ? (
              <>
                <Loader className="h-5 w-5 animate-spin" />
                <span>Getting your GPS location...</span>
              </>
            ) : location ? (
              <>
                <MapPin className="h-5 w-5" />
                <span>Lat: {location.lat.toFixed(5)}, Lng: {location.lng.toFixed(5)}</span>
              </>
            ) : (
              <>
                <MapPin className="h-5 w-5" />
                <span>Could not get location</span>
              </>
            )}
          </div>
        </div>
      )}

      {/* FORM */}
      {qrData && location && (
        <div className="bg-white dark:bg-card rounded-xl shadow-lg border border-gray-100 dark:border-zinc-700 p-6 space-y-4 transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Bin ID</label>
              <Input value={qrData} readOnly className="cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Location (GPS)</label>
              <Input value={`Lat: ${location.lat.toFixed(5)}, Lng: ${location.lng.toFixed(5)}`} readOnly className="cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Bin Name</label>
              <Input
                value={binName}
                onChange={(e) => setBinName(e.target.value)}
                placeholder="e.g. Main Hall Bin"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Status</label>
              <Input value="Active" readOnly className="cursor-not-allowed" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Activation Date</label>
              <Input value={today} readOnly className="cursor-not-allowed" />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              className="flex-1 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => alert(`Registered Bin ${qrData} as "${binName}" for ${wasteType}`)}
              disabled={!binName}
            >
              Register Bin
            </Button>
            <Button
              variant="outline"
              onClick={reset}
              className="flex items-center gap-2 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-950 transition-all"
            >
              <RefreshCcw className="h-4 w-4" />
              Reset
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
