import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Camera, MapPin, Pencil, Phone, User } from 'lucide-react';
import SustainabilityRewards from '@/components/SustainabilityRewards';
import Rewards from '@/components/Rewards';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Profile() {
  return (
    <div className="space-y-6 px-8 mt-6 mb-18">
      {/* Heading */}
      {/* <div>
        <h1 className="text-2xl font-black text-black dark:text-white">Profile</h1>
        <p className="text-sm text-muted-foreground">Manage your account and track your sustainability journey</p>
      </div> */}

      <Card className="flex flex-col md:flex-row items-start justify-between p-6 w-full shadow-sm rounded-xl bg-gradient-to-br from-green-50 to-white dark:from-green-950 dark:to-gray-900 border-green-100 dark:border-green-900 transition-all duration-300">
        <div className='flex flex-col md:flex-row items-center justify-between w-full space-y-4 md:space-y-0 md:space-x-6'>
          {/* Left: Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-20 h-20 rounded-full border-4 border-green-200 dark:border-green-800 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-lg font-semibold flex items-center justify-center ">
              JD
            </div>
          </div>

          {/* Middle: Info */}
          <div className="flex flex-col text-center md:text-left space-y-1 flex-grow">
            <div className="text-2xl font-bold text-green-900 dark:text-green-100">John Doe</div>
            <div className="text-sm text-green-700 dark:text-green-300">john.doe@example.com</div>

            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Badge and edit */}
        <div className="flex flex-col md:flex-row items-center justify-end w-full space-y-4 md:space-y-0 md:space-x-6">
          <Badge className="rounded-full bg-cashcrow-bg border-green-500 text-green-700 dark:border-green-400 dark:text-green-300">
            Gold Member
          </Badge>
          
          {/* Dialog trigger */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="cursor-pointer border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 hover:bg-green-50 dark:hover:bg-green-950">
                <Pencil className="h-4 w-4" />
                <span>Edit Profile</span>
              </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-white to-white dark:from-green-950 dark:to-gray-900 border-green-100 dark:border-green-900 transition-colors duration-300">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" defaultValue="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" defaultValue="San Francisco, CA" />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </Card>

      <Rewards />
      <SustainabilityRewards />
    </div>
  )
}
